import styled from 'styled-components';

export const Task = styled.div`
	padding: 0.6rem 1rem;
	margin: 0.75rem 0;
	flex-basis: 250px;
	border: 2px solid ${({ theme }) => theme.primary};
	border-radius: 3px;
	color: ${({ theme }) => theme.secondary};
	cursor: pointer;
	transition: all .2s ease-in-out;
	&:hover {
		transform: scale(1.1);
	}
`;

export const TasksContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;