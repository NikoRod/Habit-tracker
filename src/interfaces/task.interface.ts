export interface Task {
  id: string;
  title: string;
  frecuency: string;
  status: TaskStatus;
  taskType: string;
}

export type TaskStatus = 'open' | 'in-progress' | 'done'