import './App.css';
// import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Components/Auth';
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path="*" element={<h1>404 page error</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
