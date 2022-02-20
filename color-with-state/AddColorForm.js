import React, {useState} from 'react';

function AddColorForm({ onNewColor = f => f }) {
	const [title, setTitle] = useState("");
	const [color, setColor] = useState("#000000");
	const submit = e => {
		e.preventDefault();
		onNewColor(title, color);
		setTitle("");
		setColor("#000000");
	};

	return (
		<form onSubmit={submit}>
			<input onChange={event => setTitle(event.target.value)} type="text" placeholder='color title...' required />
			<input onChange={event => setColor(event.target.value)} type="color" required />
			<button>Add!</button>
		</form>
	);
}

export default AddColorForm;