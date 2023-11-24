import { StateCreator, create } from "zustand";
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskStatus } from '../../interfaces';
import { persist } from "zustand/middleware";

interface TaskState {

  tasks: Record<string, Task>,

  getTaskByStatus: (status: TaskStatus) => Task[];
  getTaskByType: (taskType: string) => Task[];
  
  addTask: (title: string, frecuency: string, status: TaskStatus, taskType: string) => void;

}

const storeApi: StateCreator<TaskState> = (set, get) => ({

  tasks: {
    'ABC-1': { id: 'ABC-1', title: 'Entrenar', frecuency: '5', status: 'open', taskType: 'checkeable' },
  },

  getTaskByStatus: (status: TaskStatus) => {
    const tasks = get().tasks;
    return Object.values( tasks ).filter( task => task.status === status ); 
  },

  getTaskByType: (taskType: string) => {
    const tasks = get().tasks;
    return Object.values( tasks ).filter( task => task.taskType === taskType ); 
  },

  addTask: (title: string, frecuency: string, status: TaskStatus, taskType: string) => {

    const newTask = { id: uuidv4(), title, frecuency, status, taskType };

    set(state => ({
      tasks: {
        ...state.tasks,
        [newTask.id]: newTask
      }
    }));

  },

})  

export const useTaskStore = create<TaskState>()(
  persist(
    (storeApi)
    ,{ name: 'task-store' }
  )
);