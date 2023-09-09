import React, { useState } from "react";

const PlayerForm = (props) => {
	const [name, setName] = useState("");
	const [position, setPosition] = useState("");
	const { errors, setErrors, createPlayer } = props;

	const validateErrors = (e) => {
		if (e.target.id == "name") {
			setName(e.target.value);
		} else if (e.target.id == "position") {
			setPosition(e.target.value);
		}

		if (errors.nameError) {
			if (name.length >= 1) {
				setErrors({ ...errors, nameError: "" });
			}
		}

		if (errors.positionError) {
			if (position.length >= 2) {
				setErrors({ ...errors, positionError: "" });
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let newPlayer;

		if (position) {
			newPlayer = { name, position };
		} else {
			newPlayer = { name };
		}

		createPlayer(newPlayer);
	};

	return (
		<div className="border p-3 shadow rounded w-75">
			<h3>Add Player</h3>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Player Name:
					</label>
					<input
						type="text"
						id="name"
						className="form-control"
						value={name}
						onChange={(e) => validateErrors(e)}
					/>
					{errors.nameError && <p className="text-danger">{errors.nameError}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="position" className="form-label">
						Preferred Position:
					</label>
					<input
						type="text"
						id="position"
						className="form-control"
						value={position}
						onChange={(e) => validateErrors(e)}
					/>
					{errors.positionError && position ? <p className="text-danger">{errors.positionError}</p> : ""}
				</div>
				<div className="text-end">
					{errors.nameError || errors.positionError ? (
						<button className="btn btn-success" disabled>
							Add Player
						</button>
					) : (
						<button className="btn btn-success">Add Player</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default PlayerForm;
