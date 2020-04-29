import { RootState } from "../../store/rootReducer";
import { connect, ConnectedProps } from "react-redux";
import { History } from "history";

const mapState = (state: RootState) => ({});
const mapDispatch = {};
export const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export type Props = PropsFromRedux & {
  history: History;

  style?: {};
  children?: JSX.Element[] | JSX.Element;
};

export interface State {}
