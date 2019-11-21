import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 2rem 0 0 auto;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 3px;
  font-size: ${({ theme }) => theme.fontSizeRegular};
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const AppContainer = styled.div`
	width: 600px;
	margin: 0 auto;
`;