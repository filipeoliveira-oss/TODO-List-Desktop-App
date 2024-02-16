import CheckSVG from '../../assets/svg/CheckSvg'
import PencilSVG from '../../assets/svg/PencilSvg'
import TrashSVG from '../../assets/svg/TrashSvg'
import './taskContainer.css'

interface taskInterface{
    title: string,
    description: string,
    deadline: Date,
    priority:number,
    complete: boolean
}


export default function TaskContainer(props: taskInterface){

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
        backgroundColor: defineColorPriority(props.priority),
        borderColor: defineColorBorder(props.priority)
    }

    function defineIfDeadlineIsDue(date: Date){
        if(date < new Date()){
            return 'Overdue in: 0d 01h 25m'
        }

        return 'Deadline: 0d 01h 25m'
    }

    return(
        <div className='TaskContainer'>
            <div className='TaskPriority' style={priorityStyle}>
                <CheckSVG/>
            </div>

            <div className='TaskDetails'>
                <h3>{props.title}</h3>
                <div className='taskDetailsDesc'>
                    <h6>{defineIfDeadlineIsDue(new Date())}</h6>
                    <span> - </span>
                    <span>{props.description}</span>
                </div>
            </div>

            <div className='TaskActions'>
                <button className='TaskAction'><PencilSVG/></button>
                <button className='TaskAction'><TrashSVG/></button>
            </div>
        </div>
    )
}