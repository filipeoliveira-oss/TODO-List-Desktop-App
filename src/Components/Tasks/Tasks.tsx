import './Tasks.css'
import TaskContainer from '../TaskContainer/TasksContainer'

interface taskInterface{
    title: string,
    description: string,
    deadline: Date,
    priority:number,
    complete: boolean,
    id:number
  }
  
  interface tasksInterface extends Array<taskInterface>{}


export default function Tasks(props: {tasks: tasksInterface, setTasks: Function}){

    return(
        <div className='tasksContainer'>
            {props.tasks.map((task: taskInterface) =>{
                return(
                    <TaskContainer task={task} taskList={props.tasks} setTasks={props.setTasks}/>
                )
            })}
            
        </div>
    )
}