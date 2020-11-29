import { useState } from "react";

const Item = ({ content }) => {
	const [isDone, setIsDone] = useState(false);
	const [name, setName] = useState("");
	console.log(name);
	return (
		<li>
			<input
				type="checkbox"
				onChange={() => {
					setIsDone(!isDone);
				}}
			/>
			<input
				type="text"
				onChange={(e) => {
					setName(e.target.value);
				}}
				value={name}
			/>
			<span style={{ textDecoration: isDone ? "line-through" : "none" }}>
				{content}
			</span>
		</li>
	);
};

export default Item;
