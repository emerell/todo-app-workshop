import React, { useContext } from 'react';
import { MyContext } from '../../App';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { 
	StyledField, 
	StyledForm, 
	StyledButton, 
	Line, 
	ButtonsContainer,
	Required,
	FieldButtonBox,
	StyledDeleteButton,
	StyledCancelButton
} from './FormStyled';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short! It should be at least 2 characters')
    .max(40, 'Name should not be more than 40 characters')
    .required('Name is required!'),
  description: Yup.string()
    .min(10, 'Description should be at least 10 characters')
    .required('Description is required!'),
});

export const Form = ({sumbitFormAction, submitFormButtonText,
											onCloseForm, hasDeleteButton, deleteTask
										}) => {
	const { active } = useContext(MyContext);

	return (
		<div>
			<Formik
				enableReinitialize
				initialValues={{
					id: active ? active.id : null,
					name: active ? active.name : '',
					description: active ? active.description : ''
				}}
				validationSchema={FormSchema}
				onSubmit={(values, errors) => {
          sumbitFormAction(values)
      	}}
			>
			{
				({ handleSubmit, values, errors, touched }) => (
					<StyledForm onSubmit={handleSubmit}>
						{ hasDeleteButton ? 
							<FieldButtonBox>
								<StyledField 
									name="name" 
									placeholder="Type task name..." 
									value={values.name}
									autoFocus
								/>
								<StyledDeleteButton 
									onClick={deleteTask.bind(null, active.id)}
									type="button"
								>Delete</StyledDeleteButton>
						</FieldButtonBox>
							:
							<StyledField 
								name="name" 
								placeholder="Type task name..." 
								value={values.name}
						/>
						}
						<Line />
						<StyledField 
							component="textarea"
							name="description" 
							placeholder="Type task description..." 
							value={values.description} 
						/>
						<ButtonsContainer>
							<Required>
								{errors.name && touched.name ? (
								<span>{errors.name}</span>
								) : null}
								{errors.description && touched.description ? (
								<span>{errors.description}</span>
								) : null}
							</Required>
							<StyledCancelButton onClick={onCloseForm} type="button">Cancel</StyledCancelButton>
							<StyledButton type="submit">{submitFormButtonText}</StyledButton>
						</ButtonsContainer>
					</StyledForm>
				)
			}
			</Formik>
		</div>
	)
}

Form.propTypes = {
	sumbitFormAction: PropTypes.func.isRequired,
	onCloseForm: PropTypes.func.isRequired,
	hasDeleteButton: PropTypes.bool,
	submitFormButtonText: PropTypes.string,
	deleteTask: PropTypes.func
}

Form.defaultProps = {
	submitFormButtonText: 'Save',
  hasDeleteButton: false,
	deleteTask: null
};