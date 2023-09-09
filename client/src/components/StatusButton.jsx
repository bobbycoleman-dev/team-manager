import React from "react";

const StatusButton = ({ title, status, handleClick }) => {
	return (
		<button
			className={`btn w-25 ${{ status } == playing ? "btn-success" : "btn-outline-secondary"} `}
			onClick={() => handleClick(id, status)}>
			{title}
		</button>
	);
};

export default StatusButton;
