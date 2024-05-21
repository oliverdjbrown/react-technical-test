import { Provider } from "react-redux";
import "./App.css";
import { LayoutContainer } from "./styled-components";
import store from "./redux/store";
import { Home } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Provider store={store}>
      <Navbar />

      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  );
}

export default App;
