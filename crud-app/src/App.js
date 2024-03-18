import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard';
import AddStudent from './component/AddStudent';

function App() {
	return (
		<BrowserRouter >
			<Routes>
				<Route path="/" element={<DashBoard />} />
				<Route path="/add" element={<AddStudent />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
