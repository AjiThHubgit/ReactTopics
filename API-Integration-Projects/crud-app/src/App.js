import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard';
import AddStudent from './component/AddStudent';
import UserList from './component/UserList';

function App() {
	return (
		<BrowserRouter >
			<Routes>
				<Route path="/" element={<DashBoard />} />
				<Route path="/add" element={<AddStudent />} />
				<Route path="/userlist/:id" element={<UserList />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
