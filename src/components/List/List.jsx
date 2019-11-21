import React, { useContext } from 'react'
import { MyContext } from '../../App'

import { Task, TasksContainer } from './ListStyled'

export const List = ({getActiveTask}) => {
	const { list } = useContext(MyContext);

	const onShowActiveTastForm = (id) => {
    getActiveTask(id);
  }

	return (
		<TasksContainer>
		{
			list.map(item => (
				<Task 
					key={item.id} 
					onClick={onShowActiveTastForm.bind(null, item.id)}
				>
				{item.name}</Task>
			))
		}
		</TasksContainer>
	)
}
