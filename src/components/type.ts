import { ChangeEvent } from "react";

export interface UpdateTitle{
    title: string;
}

export interface Task extends UpdateTitle{
    id: string;
}


export interface ITaskManagerReturnType {
    tasks: Task[];
    addTask: () => void;
    completeTask: (id: string) => void;
    updateTask: (id: string, taskUpdate: UpdateTitle) => void;
    handleSearch: (ev: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    setTitle: (title: string) => void;
    deleteTask: (id: string) => void;
    searchKeyword: string;
  }