import React from 'react';
import { Form } from '../Form';
import PropTypes from 'prop-types';

export const New = ({addTask, onCloseNewTastForm}) => {
	return (
		<Form 
			sumbitFormAction={addTask}
			onCloseForm={onCloseNewTastForm}
			hasDeleteButton={false}
		/>
	)
}

New.propTypes = {
	addTask: PropTypes.func.isRequired,
	onCloseNewTastForm: PropTypes.func.isRequired
}