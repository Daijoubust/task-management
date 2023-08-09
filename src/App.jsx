import { useEffect, useState } from 'react'
import './App.scss'
import { AddForm } from './components/addform/AddForm'
import { Header } from './components/header/Header'
import {Item}  from './components/item/Item'
import { Alert } from '@mui/material'
import { Footer } from './components/footer/Footer'

export const App = () => {
  const [tasks,setTasks] = useState( JSON.parse(localStorage.getItem("tasks")) || [])
  const [title,setTitle] = useState('')
  const [editId,setEditId] = useState(null)
  const [showAlert,setShowAlert] = useState(false)
  const [theme ,setTheme] = useState('light')
  const [priority, setPriority] = useState('low')

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }, [tasks])

  const deleteTask =(id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const editTask = (id) => {
    setEditId(id)
    const editTask = tasks.find((item) => item.id === id)
    setTitle(editTask.title)
    setPriority(editTask.priority)
  }

  const saveTask = (e) => {
    e.preventDefault()
    if(!title) {
      setShowAlert(true)
    } else if (editId) {
      // Update Data
      const updateTask = tasks.map((item) => {
        // Check if the item id is equal to the editId
        if (item.id === editId) {
          return {...item,title:title,priority:priority}
        }
        return item
      })
      setTasks( updateTask)
      setEditId(null)
      setTitle('')
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 10000) + 1,
        title: title,
        priority: priority
      }
      setTasks([...tasks,newTask])
      setTitle('')
      setShowAlert(false)
    }
  }

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className='container'>
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId} priority={priority} setPriority={setPriority}/>
        {showAlert && <Alert severity="error">Please enter a task</Alert>}
        <section>
          {tasks.map((data) => (
            <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} priority={priority} />
          ))}
        </section>
      </div>
      <Footer/>
    </div>
  )
}
