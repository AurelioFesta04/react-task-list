import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed"
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed"
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed"
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed"
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed"
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed"
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog"
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress"
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog"
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress"
    }
  ];

  const currentTasks = tasks.filter(task => task.state === 'backlog' || task.state === 'in_progress');
  const currentTasksList = () => {
    return currentTasks.map((task) => <li key={task.id}><p className='task-title'>{task.title} <span className='task-state'>{task.state}</span></p><p>Priority: {task.priority}</p><p>Est. time {task.estimatedTime}</p></li>);
  };

  const completedTasks = tasks.filter(task => task.state === 'completed');
  const completedTasksList = () => {
    return completedTasks.map((task) => <li key={task.id}><p className='task-title'>{task.title} <span className='task-state'>{task.state}</span></p><p>Priority: {task.priority}</p><p>Est. time {task.estimatedTime}</p></li>);
  };

  return (
    <>
      <div className='pagina-tasks'>
        <p className='title'>Task Manager</p>
        <div className='tasks'>
          <p className='cur-compl-tasks'>Current Tasks ({currentTasksList().length})</p>
          <ul className='list'>
            {currentTasksList()}
          </ul>
          <div className='separatore'></div>
          <p className='cur-compl-tasks'>Completed Tasks ({completedTasksList().length})</p>
          <ul className='list'>
            {completedTasksList()}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
