import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import { ManagePlayerStatus } from "./views/ManagePlayerStatus";
import ManagePlayers from "./views/ManagePlayers";

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/players/list");
	}, []);

	return (
		<div className="">
			<Nav />
			<Routes>
				<Route path="/" />
				<Route path="/players/list" element={<ManagePlayers />} />
				<Route path="/players/add" element={<ManagePlayers />} />
				<Route path="/status/game/:num" element={<ManagePlayerStatus />} />
				<Route path="/status/game/:num" element={<ManagePlayerStatus />} />
				<Route path="/status/game/:num" element={<ManagePlayerStatus />} />
			</Routes>
		</div>
	);
}

export default App;
