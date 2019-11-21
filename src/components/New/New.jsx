import React from 'react'
import { Formik } from 'formik'
import { 
	StyledField, 
	StyledForm, 
	StyledButton, 
	Line, 
	ButtonsContainer 
} from './NewStyled';

export const New = () => {
	return (
		<div>
			<Formik
				initialValues={{
					name: '',
					description: ''
				}}
			>
			{
				({ handleSubmit, values, dirty }) => (
					<StyledForm onSubmit={handleSubmit}>
						<StyledField 
							name="name" 
							placeholder="Type task name..." 
							value={values.name}
							autoFocus
						/>
						<Line />
						<StyledField 
							component="textarea"
							name="description" 
							placeholder="Type task description..." 
							value={values.description} 
						/>
						<ButtonsContainer>
							<StyledButton>Cancel</StyledButton>
							<StyledButton disabled={!dirty}>Add</StyledButton>
						</ButtonsContainer>
					</StyledForm>
				)
			}
			</Formik>
		</div>
	)
}
