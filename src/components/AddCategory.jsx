import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
	//Cada componente puede tener su propio estado
	const [inputValue, setInputValue] = useState('One punh')

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(inputValue);

		if (inputValue.trim().length <= 1) return;
		// setCategories( categories  => [ inputValue, ...categories ]);
		onNewCategory(inputValue.trim())
		setInputValue('');
	}



	return (
		<form action="" onSubmit={onSubmit}>
			<input
				type="text"
				value={inputValue}
				placeholder='Buscar Gifts'
				// onChange={ (event) => onInputChange(event) }
				onChange={onInputChange} />
		</form>
	)
}
