import React, { useContext } from 'react';
import { MyContext } from '../../App';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { 
	StyledField, 
	StyledForm, 
	StyledButton,
	StyledDeleteButton,
	Line, 
	Required,
	ButtonsContainer,
	FieldButtonBox
} from './ActiveStyled';

const ActiveTaskSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .max(40, 'Name is too long!')
    .required('Name is required!'),
  description: Yup.string()
    .min(10, 'Description is too short!')
    .required('Description is required!'),
});


export const Active = ({changeTask, deleteTask, onCloseActiveTastForm}) => {
	const { active } = useContext(MyContext);
	return (
		<div>
			<Formik
				initialValues={{
					id: active.id,
					name: active.name,
					description: active.description
				}}
				validationSchema={ActiveTaskSchema}
				onSubmit={(values, errors) => {
          changeTask(values)
      	}}
			>
			{
				({ handleSubmit, values, errors, touched }) => (
					<StyledForm onSubmit={handleSubmit}>
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
							<StyledButton 
								onClick={onCloseActiveTastForm} 
								type="button"
							>Cancel</StyledButton>
							<StyledButton type="submit">Add</StyledButton>
						</ButtonsContainer>
					</StyledForm>
				)
			}
			</Formik>
		</div>
	)
}
