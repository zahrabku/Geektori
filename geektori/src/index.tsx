import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DataProvider } from "./context";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<DataProvider>
	<React.StrictMode>
		<App />
	</React.StrictMode>
	</DataProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
