import { useState, ChangeEvent } from "react";
import { nanoid } from "nanoid";
import { ITaskManagerReturnType, Task, UpdateTitle } from "../components/type";

export function useTaskManager(): ITaskManagerReturnType {
  const [title, setTitle] = useState<string>("");
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const completeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: string, taskUpdate: UpdateTitle) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      const newTasks = [...tasks];
      newTasks[index] = { ...newTasks[index], title: taskUpdate.title };
      setTasks(newTasks);
    }
  };

  const addTask = () => {
    if (title.length < 1) {
      return;
    }

    const newTask: Task = {
      id: nanoid(),
      title,
    };
    setTasks((prev) => prev.concat(newTask));
    setTitle("");
  };

  const handleSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(ev.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { 
    tasks: filteredTasks, 
    addTask, 
    completeTask, 
    updateTask, 
    handleSearch,
    title,
    setTitle,
    deleteTask,
    searchKeyword
};
}
