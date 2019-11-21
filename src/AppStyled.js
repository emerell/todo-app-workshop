import styled from 'styled-components';

export const StyledButton = styled.button`
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
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;