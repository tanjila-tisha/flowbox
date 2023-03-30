import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import DisplayPanel from "./components/DisplayPanel";
import { Typography } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Typography variant="h1">Flowbox</Typography>
        <DisplayPanel />
      </div>
    </Provider>
  );
}

export default App;
