import React, { useContext } from 'react';
import { MyContext } from '../../App';
import { Formik } from 'formik';
import { 
	StyledField, 
	StyledForm, 
	StyledButton,
	StyledDeleteButton,
	Line, 
	ButtonsContainer,
	FieldButtonBox
} from './ActiveStyled';

export const Active = ({deleteTask}) => {
	const { active } = useContext(MyContext);
	return (
		<div>
			<Formik
				initialValues={{
					name: active.name,
					description: active.description
				}}
			>
			{
				({ handleSubmit, values, dirty }) => (
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
							<StyledButton>Cancel</StyledButton>
							<StyledButton>Add</StyledButton>
						</ButtonsContainer>
					</StyledForm>
				)
			}
			</Formik>
		</div>
	)
}
