import React from 'react';
import { useInput } from "./hooks";

function AddColorForm({ onNewColor = f => f }) {
	const [titleProps, resetTitle] = useInput("");
	const [colorProps, resetColor] = useInput("#000000");
	const submit = event => {
		event.preventDefault();
		onNewColor(titleProps.value, colorProps.value);
		resetTitle();
		resetColor();
	};

	return (
		<form onSubmit={submit}>
			<input {...titleProps} type="text" placeholder='color title...' required />
			<input {...colorProps} type="color" required />
			<button>Add!</button>
		</form>
	);
}

export default AddColorForm;