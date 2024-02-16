import { useState } from 'react'
import './Tasks.css'
import TaskContainer from '../TaskContainer/TasksContainer'

interface taskInterface{
    title: string,
    description: string,
    deadline: Date,
    priority:number,
    complete: boolean
}

interface tasksInterface extends Array<taskInterface>{}

export default function Tasks(){

    const [ tasks, setTasks ] = useState([{title: 'title', deadline:new Date(), description:'description', priority: 1}] as tasksInterface)

    return(
        <div className='tasksContainer'>
            {tasks.map((task: taskInterface) =>{
                return(
                    <TaskContainer priority={task.priority} title={task.title} description={task.description} deadline={task.deadline} complete={task.complete}/>
                )
            })}
            
        </div>
    )
}