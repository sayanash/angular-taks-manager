export interface task {
    [x: string]: string | undefined;
    taskId: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }

  export interface NewTaskData {
    title: string;
    summary: string;
    dueDate: string;
  }