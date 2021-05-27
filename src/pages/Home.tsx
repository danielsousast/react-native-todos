import React, { useState } from "react";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((prevState: Task[]) => [...prevState, task]);
  }

  function handleMarkTaskAsDone(id: number) {
    const newTaskList: Task[] = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, done: !task.done };
      }

      return task;
    });

    setTasks(newTaskList);
  }

  function handleRemoveTask(id: number) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
