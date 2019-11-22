import React, { createContext, useState } from 'react';
import { Active } from './components/Active';
import { List } from './components/List';
import { New } from './components/New';
import { StyledButton, AppContainer } from './AppStyled';

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
  secondary: '#E28417',
  textColor: '#5F5F64',
  white: '#FFFFFF',
  fontSizeRegular: '16px',
  fontSizeSmall: '10px'
}

const initialState = {
  list: [
    { id: 1, name: 'Task 1', description: 'Task 1 description' },
    { id: 2, name: 'Task 2', description: 'Task 2 description' },
    { id: 3, name: 'Task 3', description: 'Task 3 description' },
    { id: 4, name: 'Task 4', description: 'Task 4 description' }
  ],
  active: null,
  showNew: false
}

export const App = () => {
  const [state, setState] = useState(initialState);

  const getActiveTask = (taskId) => {
    const activeTask = state.list.find(item => item.id === taskId);
    setState({ ...state, active: activeTask, showNew: false })
  }

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
    list: state.list,
    active: state.active
  }

  return (
    <MyContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <GlobalStyled />
          {
            state.active && (
              <Active deleteTask={deleteTask} />
            )
          }
          {
            state.showNew && (
              <New />
            )
          }
          <List getActiveTask={getActiveTask}/>
          <StyledButton onClick={onShowNewTastForm}>Add new task</StyledButton>
        </AppContainer>
      </ThemeProvider>
    </MyContext.Provider>
  )
} 

export default App;
