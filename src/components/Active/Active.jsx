import React from 'react';
import { Form } from '../Form';
import PropTypes from 'prop-types';


export const Active = ({changeTask, deleteTask, onCloseActiveTastForm}) => {
	return (
		<Form 
			sumbitFormAction={changeTask}
			onCloseForm={onCloseActiveTastForm}
			deleteTask={deleteTask}
			hasDeleteButton={true}
		/>
	)
}

Active.propTypes = {
	changeTask: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
	onCloseActiveTastForm: PropTypes.func.isRequired
}