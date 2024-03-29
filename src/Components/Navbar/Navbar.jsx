import React from "react";
import { Menu } from "antd";

import "../../App.css"
import { BuildOutlined, CodeOutlined, ForkOutlined, GithubFilled, HomeOutlined, OrderedListOutlined, RadarChartOutlined, RedoOutlined } from "@ant-design/icons";

function Navbar() {
	return (
		<div>

			<Menu className="Navbar"
				onClick={({ key }) => {
					if (key === "kontakt") {
						window.location.href = "https://github.com";
					}
				}}
				items={[
					{ label: 'Home', key: '/', icon: <HomeOutlined /> },
					{ label: 'Automaten Generieren', key: '/automat', icon: <RedoOutlined /> },
					{ label: 'RISC-V Befehle', key: '/befehl', icon: <CodeOutlined /> },
					{ label: 'Pipeline Konflikte', key: '/pipeline', icon: <OrderedListOutlined /> },
					{ label: 'BDD Generator', key: '/bdd', icon: <ForkOutlined /> },
					{ label: 'AIG Generator', key: '/aig', icon: <BuildOutlined /> },
					{ label: 'SAT Solver', key: '/sat', icon: <RadarChartOutlined /> },
					{ label: 'Kontakt', key: '/kontakt', icon: <GithubFilled />, onClick: () => { window.location.href = "https://github.com" } },
				]}>

			</Menu>
		</div>

	)
}

export default Navbar
