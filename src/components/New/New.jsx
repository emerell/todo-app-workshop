import React from 'react';
import { Form } from '../Form';

export const New = ({addTask, onCloseNewTastForm}) => {
	return (
		<Form 
			sumbitFormAction={addTask}
			onCloseForm={onCloseNewTastForm}
		/>
	)
}
