import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import AddToCard from "./pages/Home/AddToCard";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-cart" element={<AddToCard />} />
        <Route path="*" element={<h1>404 page error</h1>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
