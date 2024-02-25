import { Route, Routes, useNavigate } from 'react-router-dom';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { useSelector } from 'react-redux';

function App() {
  const tasks = useSelector(state => state.tasks);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-900 h-screen text-white">
        <div className="p-4  items-center justify-center">
          <header className="text-lg text-center">C U R R E N T <br/>  T A S K S </header>
          <h1 className='text-red-500 text-center mt-2'>{tasks.length}</h1>
        </div>
      <div className="p-2">
        {window.location.pathname === '/create' || window.location.pathname.includes('/update-task') ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate('/')}
          >
            Volver a Tasks
          </button>
        ) : (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate('/create')}
          >
            Crear Tarea
          </button>
        )}
      </div>
      <div className='flex items-center justify-center flex-1'>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create" element={<TaskForm />} />
          <Route path="/update-task/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
