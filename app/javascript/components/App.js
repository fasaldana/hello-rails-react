import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import Greeting from "./Greeting";
import { fetchGreeting } from "../redux/Greeting";

store.dispatch(fetchGreeting());

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
