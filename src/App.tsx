import * as React from "react";

export interface AppProps {
    message: string;
};
export interface AppState { };

export class App extends React.Component<AppProps, AppState> {
    render() {
        let {message} = this.props;
        return <h1>{message}</h1>;
    }
}