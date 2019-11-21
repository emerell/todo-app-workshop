import React, { createContext, useState } from 'react';
import { Active } from './components/Active';
import { List } from './components/List';
import { New } from './components/New';
import { StyledButton } from './AppStyled';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 1.2;
  }

  body {
    margin: none;
  }
`;

export const MyContext = createContext(null);

const theme = {
  primary: '#D1004B',
  secondary: '#5F5F64',
  white: '#FFFFFF',
  fontSizeRegular: '16px',
  fontSizeSmall: '10px'
}

const initialState = {
  list: [
    { id: 1, name: 'task 1', description: 'task 1 description' },
    { id: 2, name: 'task 2', description: 'task 2 description' }
  ],
  active: null,
  showNew: false
}

export const App = () => {
  const [state, setState] = useState(initialState);
  const getById = (taskId) => state.list.find(item => item.id === taskId);
  const deleteTask = (taskId) => {
     const newList = state.list.filter(item => item.id !== taskId);
    setState({ ...state, list: newList, active: null });
  }
  const changeTask = (task) => {
    const newTasks = state.list.map(t => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    })
    setState({ ...state, list: newTasks, active: task })
  }
  const onShowNewTastForm = () => {
    setState({ ...state, showNew: true, active: null })
  }

  const context = {
    list: state.list
  }

  return (
    <MyContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyled />
          {
            state.active && (
              <Active />
            )
          }
          {
            state.showNew && (
              <New />
            )
          }
          <List />
          <StyledButton onClick={onShowNewTastForm}>Add new task</StyledButton>
        </div>
      </ThemeProvider>
    </MyContext.Provider>
  )
} 

export default App;
