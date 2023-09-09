import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../constants";
import { Link, useParams } from "react-router-dom";
import GameList from "../components/GameList";

export const ManagePlayerStatus = () => {
	const { num } = useParams();
	const [players, setPlayers] = useState([]);
	const [gameNum, setGameNum] = useState(Number(num));
	const [currentGame, setCurrentGame] = useState("game1");

	useEffect(() => {
		axios
			.get(apiUrl)
			.then((res) => {
				setPlayers(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const updateList = (updatedPlayer) => {
		const newList = players.map((player) => {
			if (player._id === updatedPlayer._id) {
				return updatedPlayer;
			} else {
				return player;
			}
		});
		setPlayers(newList);
	};

	const updatePlayerStatus = (playerId, updatedStatus) => {
		axios
			.patch(`${apiUrl}${playerId}`, updatedStatus)
			.then((res) => updateList(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<div className="container mt-5">
			<h1>Player Status - Game {num}</h1>

			<div className="mb-3 d-flex gap-5 align-items-center justify-content-center">
				<Link
					to="/status/game/1"
					className={`nav-link fs-2 ${currentGame == "game1" && "text-primary text-decoration-underline"}`}
					onClick={() => {
						setGameNum(1);
						setCurrentGame("game1");
					}}>
					Game 1
				</Link>
				<Link
					to="/status/game/2"
					className={`nav-link fs-2 ${currentGame == "game2" && "text-primary text-decoration-underline"}`}
					onClick={() => {
						setGameNum(2);
						setCurrentGame("game2");
					}}>
					Game 2
				</Link>
				<Link
					to="/status/game/3"
					className={`nav-link fs-2 ${currentGame == "game3" && "text-primary text-decoration-underline"}`}
					onClick={() => {
						setGameNum(3);
						setCurrentGame("game3");
					}}>
					Game 3
				</Link>
			</div>

			<GameList players={players} updatePlayerStatus={updatePlayerStatus} currentGame={currentGame} />
		</div>
	);
};
