import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { 
	StyledField, 
	StyledForm, 
	StyledButton, 
	Line, 
	ButtonsContainer,
	Required
} from './NewStyled';

const NewTaskSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .max(40, 'Name is too long!')
    .required('Name is required!'),
  description: Yup.string()
    .min(10, 'Description is too short!')
    .required('Description is required!'),
});

export const New = ({addTask, onCloseNewTastForm}) => {
	return (
		<div>
			<Formik
				initialValues={{
					name: '',
					description: ''
				}}
				validationSchema={NewTaskSchema}
				onSubmit={(values, errors) => {
          addTask(values.name, values.description)
      	}}
			>
			{
				({ handleSubmit, values, errors, touched, dirty }) => (
					<StyledForm onSubmit={handleSubmit}>
						<StyledField 
							name="name" 
							placeholder="Type task name..." 
							value={values.name}
						/>
						<Line />
						<StyledField 
							component="textarea"
							name="description" 
							placeholder="Type task description..." 
							value={values.description} 
						/>
						<ButtonsContainer>
							<Required>
								{!dirty ? (
								<span>Fill out the fields, please.</span>
								) : null}
								{errors.name && touched.name ? (
								<span>{errors.name}</span>
								) : null}
								{errors.description && touched.description ? (
								<span>{errors.description}</span>
								) : null}
							</Required>
							<StyledButton onClick={onCloseNewTastForm} type="button">Cancel</StyledButton>
							<StyledButton disabled={!dirty} type="submit">Add</StyledButton>
						</ButtonsContainer>
					</StyledForm>
				)
			}
			</Formik>
		</div>
	)
}
