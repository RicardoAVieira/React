import "../../styles/components/layout/Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";

const Content = (props) => (
	<main className="Content">
		<Routes>
			<Route path="/About" element={<About />} />
			<Route path="/param/:id" element={<Param />} />
			{/* A adição dos : Informan que não se trata de um valor Literal, sim uma variável */}
			<Route path="/" exact element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</main>
);

export default Content;
