import { useEffect, useState } from 'react'
import BellSVG from '../../assets/svg/BellSvg'
import FolderSVG from '../../assets/svg/FolderSvg'
import SaveSVG from '../../assets/svg/SaveSvg'
import SettingsSVG from '../../assets/svg/SettingsSvg'
import './Header.css'

interface taskInterface{
    title: string,
    description: string,
    deadline: Date,
    priority:number,
    complete: boolean,
    id: number
  }

export default function Header(props: {tasks: taskInterface[]}){

    const [todoCount, setTodoCount] = useState<number>()
    const [doneCount, setDoneCount] = useState<number>()

    useEffect(() =>{
        setTodoCount(() =>{
            const todo = props.tasks.filter(task =>{
                return task.complete == false
            })

            return todo.length
        })

        setDoneCount(() =>{
            const done = props.tasks.filter(task =>{
                return task.complete == true
            })

            return done.length
        })

    }, [props.tasks])

    return(
        <div className='HeaderContainer'>
            <div className="HeaderFileActions">
                <button><FolderSVG/></button>
                <button><SaveSVG/></button>
            </div>

            <div className="HeaderFilters">
                <button>To do: ({todoCount})</button>
                <button>Done: ({doneCount})</button>
            </div>

            <div className="HeaderConfigsActions">
                <button><BellSVG/></button>
                <button><SettingsSVG/></button>
            </div>
        </div>
    )
}