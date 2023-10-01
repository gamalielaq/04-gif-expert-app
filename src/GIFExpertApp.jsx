import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GIFExpertApp = () => {

	const [categories, setCategories] = useState(['valorant'])

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	}

	return (
		<>
			<h1>GifExpert App</h1>

			<AddCategory onNewCategory={ category => onAddCategory(category) } />

			{
				categories.map((category) => (
					<GifGrid key={category} category={category} />
				))
			}

		</>
	)
}
