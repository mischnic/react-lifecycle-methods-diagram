import React from "react";

import "./DiagramWithLegend.less";

import Diagram from "./Diagram";

export default function DiagramWithLegend({ advanced, reactVersion }) {
	return (
		<main className="DiagramWithLegend">
			<Diagram advanced={advanced} reactVersion={reactVersion} />
		</main>
	);
}
