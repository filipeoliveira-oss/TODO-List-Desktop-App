import CheckSVG from '../../assets/svg/CheckSvg'
import PencilSVG from '../../assets/svg/PencilSvg'
import TrashSVG from '../../assets/svg/TrashSvg'
import { ask } from '@tauri-apps/api/dialog';
import './taskContainer.css'

interface taskInterface{
    title: string,
    description: string,
    deadline: Date,
    priority:number,
    complete: boolean,
    id: number
}


export default function TaskContainer(props: {task: taskInterface, setTasks: Function, taskList:taskInterface[]}){

    function defineColorPriority(priority: number){
        if (typeof priority != 'number'){
            throw 'Priority must be a number'
        }

        if(priority === 1){
            return '#E23636'
        }

        if(priority === 2){
            return '#EDB95E'
        }

        if(priority === 3){
            return '#82DD55'
        }
    }

    function defineColorBorder(priority: number){
        if (typeof priority != 'number'){
            throw 'Priority must be a number'
        }

        if(priority === 1){
            return 'red'
        }

        if(priority === 2){
            return '#f0f002'
        }

        if(priority === 3){
            return '#91f75e'
        }
    }

    const priorityStyle = {
        backgroundColor: defineColorPriority(props.task.priority),
        borderColor: defineColorBorder(props.task.priority)
    }

    function defineIfDeadlineIsDue(date: Date){
        if(date < new Date()){
            return 'Overdue in: 0d 01h 25m'
        }

        return 'Deadline: 0d 01h 25m'
    }

    function completeTask(id:number){
        const newTaskList = props.taskList.map(task =>{
            if(task.id == id){
                return {...task, complete: !task.complete}
            }
            return task
        })

        props.setTasks(newTaskList)
    }

    async function removeTask(id:number, title: string){
        const confirmed = await ask(`This action cannot be reverted. Are you sure you want to delete the task ${title}?`, { title: 'Delete task', type: 'warning'});

        if(confirmed){
            const newTaskList = props.taskList.filter(task =>{
                return task.id !== id
            })

            props.setTasks(newTaskList)
        }
    }

    return(
        <div className='TaskContainer'>
            <div className='TaskPriority' style={priorityStyle} onClick={() => completeTask(props.task.id)}>
                <CheckSVG className={props.task.complete == true ? 'done' : 'todo'}/>
            </div>

            <div className='TaskDetails'>
                <h3>{props.task.title}</h3>
                <div className='taskDetailsDesc'>
                    <h6>{defineIfDeadlineIsDue(new Date())}</h6>
                    <span> - </span>
                    <span>{props.task.description}</span>
                </div>
            </div>

            <div className='TaskActions'>
                <button className='TaskAction'><PencilSVG/></button>
                <button className='TaskAction' onClick={() => removeTask(props.task.id, props.task.title)}><TrashSVG/></button>
            </div>
        </div>
    )
}