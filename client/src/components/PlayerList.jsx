import { useState } from "react";

const PlayerList = (props) => {
	const { players, deletePlayer, setPlayers } = props;

	const confirmAction = (playerId, playerName) => {
		if (window.confirm(`Are you sure you want to delete\n${playerName}?`) == true) {
			deletePlayer(playerId);
		}
	};

	return (
		<div className="border rounded p-3 shadow">
			<table className="table align-middle text-center">
				<thead className="table-light">
					<tr>
						<th className="w-50">Player Name</th>
						<th className="w-25">Preferred Position</th>
						<th className="w-25">Actions</th>
					</tr>
				</thead>
				<tbody>
					{players &&
						players.map((player, idx) => {
							return (
								<tr key={idx}>
									<td>{player.name}</td>
									<td>{player.position}</td>
									<td>
										<button
											className="btn btn-danger"
											onClick={() => confirmAction(player._id, player.name)}>
											Delete
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

export default PlayerList;
