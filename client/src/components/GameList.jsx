import { playStatus } from "../constants";

const GameList = (props) => {
	const { players, updatePlayerStatus, currentGame } = props;
	const { playing, notPlaying, undecided } = playStatus;

	const handleClick = (playerId, newStatus) => {
		const filteredPlayer = players.filter((player) => player._id === playerId);
		const playerObject = filteredPlayer[0];
		const updatedPlayer = { ...playerObject, status: { ...playerObject.status, [currentGame]: newStatus } };

		updatePlayerStatus(playerId, updatedPlayer);
	};

	return (
		<div className="border rounded p-3 shadow">
			<table className="table align-middle text-center">
				<thead className="table-light">
					<tr>
						<th>Player Name</th>
						<th>Play Status</th>
					</tr>
				</thead>
				<tbody>
					{players &&
						players.map((player, idx) => {
							return (
								<tr key={idx}>
									<td>{player.name}</td>
									<td className="d-flex gap-2 justify-content-between">
										<button
											className={`btn w-25 ${
												player.status[currentGame] == playing
													? "btn-success"
													: "btn-outline-secondary"
											} `}
											onClick={() => handleClick(player._id, playing)}>
											Playing
										</button>
										<button
											className={`btn w-25 ${
												player.status[currentGame] == notPlaying
													? "btn-danger"
													: "btn-outline-secondary"
											} `}
											onClick={() => handleClick(player._id, notPlaying)}>
											Not Playing
										</button>
										<button
											className={`btn w-25 ${
												player.status[currentGame] == undecided
													? "btn-warning"
													: "btn-outline-secondary"
											} `}
											onClick={() => handleClick(player._id, undecided)}>
											Undecided
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default GameList;
