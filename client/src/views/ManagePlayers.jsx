import { useEffect, useState } from "react";
import PlayerList from "../components/PlayerList";
import axios from "axios";
import { apiUrl } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import PlayerForm from "../components/PlayerForm";

const ManagePlayers = () => {
	const [players, setPlayers] = useState([]);
	const [manage, setManage] = useState("list");
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(apiUrl)
			.then((res) => {
				setPlayers(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const createPlayer = (newPlayer) => {
		axios
			.post(`${apiUrl}`, newPlayer)
			.then((res) => {
				setManage("list");
				setPlayers([...players, newPlayer]);
				navigate("/players/list");
			})
			.catch((err) => {
				const errorResponse = err.response.data.errors;

				if (errorResponse.position && errorResponse.name) {
					setErrors({
						nameError: errorResponse.name.message,
						positionError: errorResponse.position.message
					});
				} else if (errorResponse.name && !errorResponse.position) {
					setErrors({ nameError: errorResponse.name.message });
				} else if (!errorResponse.name && errorResponse.position) {
					setErrors({ positionError: errorResponse.position.message });
				}
			});
	};

	const deletePlayer = (playerId) => {
		axios
			.delete(`${apiUrl}${playerId}`)
			.then(() => setPlayers(players.filter((player) => player._id != playerId)))
			.catch((err) => console.log(err));
	};

	return (
		<div className="container mt-5">
			<div className="mb-3 d-flex gap-5 align-items-center">
				<Link
					to="/players/list"
					className={`nav-link fs-2 ${manage == "list" && "text-primary text-decoration-underline"}`}
					onClick={() => setManage("list")}>
					List
				</Link>
				<Link
					to="/players/add"
					className={`nav-link fs-2 ${manage == "add" && "text-primary text-decoration-underline"}`}
					onClick={() => setManage("add")}>
					Add Player
				</Link>
			</div>

			{manage == "list" ? (
				<PlayerList players={players} deletePlayer={deletePlayer} setPlayers={setPlayers} />
			) : (
				<PlayerForm setManage={setManage} createPlayer={createPlayer} errors={errors} setErrors={setErrors} />
			)}
		</div>
	);
};

export default ManagePlayers;
