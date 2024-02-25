import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom'

export const TaskList = () => {

    const tasks = useSelector(state=>state.tasks)
    console.log(tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))    
    }

  return (
    <div className='grid grid-cols-3 gap-3 p-8 flex flex-col'>
      {tasks.map(task => (
        <div key={task.id} className="bg-black rounded-md p-4 max-w-500">
            <div className='max-h-8900'>
                <h3 className="text-lg font-bold mb-2">{task.title}</h3>
                <p className="flex text-gray-500 mb-10 leading-6 overflow-auto">{task.description}</p>
            </div>
            <div className='w-full h-8 m-4'>
                <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                    Delete
                </button>
                <Link to={`/update-task/${task.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                    </button>
                </Link>
            </div>
        </div>
      ))}
    </div>
  )
}
