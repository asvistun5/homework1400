import ReactDOM from "react-dom/client";
import App from "./app/App";

const rootElem = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElem);

root.render(<App/>);