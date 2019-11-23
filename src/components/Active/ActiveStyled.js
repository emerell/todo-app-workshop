import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledField = styled(Field)`
	width: 100%;
	padding: 0.6rem 1rem;
	border: none;
	resize: none;
	font-family: "Roboto", sans-serif;
	font-size: ${({ theme }) => theme.fontSizeRegular};
	line-height: 1.2;
	color: ${({ theme }) => theme.textColor};
	&:focus {
		outline: none;
	}
`;

export const Line = styled.div`
	margin-bottom: 0.4rem;
	border: 1px solid ${({ theme }) => theme.primary};
`;

export const StyledForm = styled(Form)`
	width: 600px;
	margin: 0 auto 1.5rem;
	border: 2px solid ${({ theme }) => theme.primary};
	border-radius: 5px;
`;

export const StyledButton = styled.button`
	margin: 1rem 1.5rem 1rem 0;
	background-color: ${({ theme }) => theme.primary};
	border: none;
	border-radius: 3px;
	font-family: "Roboto", sans-serif;
	font-size: ${({ theme }) => theme.fontSizeRegular};
	text-transform: uppercase;
	width: 100px;
	height: 34px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.white};
	cursor: pointer;
	&:focus {
		outline: none;
		}
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export const StyledDeleteButton = styled.button`
	margin: 0 1.25rem;
	background-color: ${({ theme }) => theme.secondary};
	border: none;
	border-radius: 3px;
	font-family: "Roboto", sans-serif;
	font-size: 0.6rem;
	text-transform: uppercase;
	width: 75px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.white};
	cursor: pointer;
	&:focus {
		outline: none;
		}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const FieldButtonBox = styled.div`
	display: flex;
	align-items: center;
`;

export const Required = styled.div`
	font-size: 0.8rem;
	font-weight: bold;
	color: ${({ theme }) => theme.secondary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-right: 1rem;
`;
