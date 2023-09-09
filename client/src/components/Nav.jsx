import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
			<div className="container">
				<a className="navbar-brand" href="#">
					Team Manager
				</a>
				<div className="text-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/players/list">
								Manage Players
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="status/game/1">
								Manage Player Status
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
