import React from 'react';
import { Form } from '../Form';


export const Active = ({changeTask, deleteTask, onCloseActiveTastForm}) => {
	return (
		<Form 
			sumbitFormAction={changeTask}
			onCloseForm={onCloseActiveTastForm}
			deleteTask={deleteTask}
			hasDeleteButton
		/>
	)
}
