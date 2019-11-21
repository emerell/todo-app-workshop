import React, { useContext } from 'react';
import { MyContext } from '../../App'

export const Active = () => {
	const { active } = useContext(MyContext);
	return (
		<h1>{active.name}</h1>
	)
}
