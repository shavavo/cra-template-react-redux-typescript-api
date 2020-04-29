import Axios from "axios";
// import { Alert } from "react-native";
import reduxStore from "../../store/rootStore";
import { ENDPOINT, DEFAULT_HEADERS } from "../../resources/constants";

/** Only show one error per ERROR_ALERT_THROTTLE ms */
const ERROR_ALERT_THROTTLE = 1000;
const LOG_API_REQUESTS = true;

const throttle = (limit: number) => {
  var wait = false;
  return (callback: any) => {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
};

const throttler = throttle(ERROR_ALERT_THROTTLE);

const alertError = (message: string) => {
  throttler(() => alert(message));
};

const API = Axios.create({
  baseURL: ENDPOINT,
  headers: DEFAULT_HEADERS,
});

API.interceptors.request.use(
  async (config) => {
    const { url, method } = config;

    if (LOG_API_REQUESTS)
      console.log(`  axios:     ${method!.toUpperCase()} ${url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    const { status, config } = response;
    const { url, method } = config;
    if (LOG_API_REQUESTS)
      console.log(`  axios: ${status} ${method!.toUpperCase()} ${url}`);
    return response;
  },
  (error) => {
    const { response } = error;
    const { status, config, data } = response;
    const { url, method } = config;
    if (LOG_API_REQUESTS) {
      console.log(`  axios: ${status} ${method.toUpperCase()} ${url}`);
      console.log(response.data);
    }

    if (data && data.message) {
      alertError(data.message);
    } else {
      alertError("Please make sure you are connected to the internet.");
    }
    return Promise.reject(error);
  }
);

const listener = () => {
  let token = reduxStore.getState().auth.token;
  if (token) API.defaults.headers["x-access-token"] = token;
};

reduxStore.subscribe(listener);

export default API;
