
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import "../../App.css";




function Befehl() {
	const [outputCommands, setOutputCommands] = useState('');

	//TODO verhalten bei einfuegen von text
	//TODO file input handle

	return (
		<div className="BefehlInputContainer">
			<div className="BefehlInputSection">
				<TextArea placeholder="Input RISC-V Commands"></TextArea>
				<Button icon={<UploadOutlined />} type="primary" onClick={buttonCompileCommands}>Compile RISC-V Commands</Button>
			</div>
			<div className="BefehlFileSection">
				<Upload multiple={false}>
					<Button icon={<UploadOutlined />}>Upload Assembly file (.s)</Button>
				</Upload>
				<Button type="primary">Compile RISC-V file</Button>
			</div>
			<div className="BefehlOutputSection">
				<p>{outputCommands}</p>
			</div>
		</div>
	)
}

export default Befehl;
