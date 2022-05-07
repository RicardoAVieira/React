import "../../styles/components/layout/Menu.css";
import React from "react";

import { Link } from "react-router-dom";

const Menu = (props) => (
	<div className="Menu">
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/About">Sobre</Link>
				</li>
			</ul>
		</nav>
	</div>
);

export default Menu;
