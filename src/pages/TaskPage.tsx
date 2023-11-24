import { TasksGroup } from '../components/taskComponents/TasksGroup';
import { useTaskStore } from '../stores/index.store';

export const TaskPage = () => {

  const pendingTasks = useTaskStore( state => state.getTaskByStatus('open') );

  return (

    <div className='h-screen'>

      <div className='w-full flex flex-col justify-center items-center pb-3 bg-gray-400 text-white'>

        <h1 className='text-4xl'>Rise&Grind</h1>
        <p className='text-xl'>Mejora tus hábitos</p>

      </div>

      <div>
        
        <TasksGroup 
          title = 'Check habits' 
          frecuency = {4} 
          task = {pendingTasks} 
          status = 'open' 
          taskType='checkeable'
        />

      </div>

    </div>

  );
};