import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'

export const TaskForm = () => {
    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state=> state.tasks)


    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
    });
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (params.id){
            dispatch(updateTask(task))
        } else{

        dispatch(addTask({
            ...task,
            id: uuid(),
    }))
        }
        navigate('/')
    }

    useEffect(() =>{
        if(params.id){
            setTask(tasks.find((task) => task.id === params.id));
        }
    }, 
    [params.id, tasks])

  return (
    <div className='flex p-7 bg-black rounded-md shadow-md'>
        <form 
        className='flex flex-col p-4 bg-black rounded-md shadow-md' 
        onSubmit={handleSubmit}
        >

        <label className='mb-2' htmlFor='title'>
        Title:
        </label>
        <input
        className='mb-2 p-2 border border-black-300 rounded-md text-black'
        name='title'
        type='text'
        placeholder='Title'
        onChange={handleChange}
        value={task.title}
        maxLength={30}
        />
        <label className='mb-2' htmlFor='description'>
        Description:
        </label>

        <textarea
        className='mb-2 p-2 border border-gray-300 rounded-md text-black'
        name='description'
        placeholder='Description'
        onChange={handleChange}
        value={task.description}
        maxLength={100}
        />

        <button
        className='inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200'
        type='submit'
        >
        Save
        </button>
    </form>
    </div>

  )
}
