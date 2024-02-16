import { useState } from 'react'
import './Input.css'
import SendSVG from '../../assets/svg/SendSvg'


export default function Input(){

    const [newTask, setNewTask] = useState('')

    return(
        <div className='InputContainer'>
            <input type="text" className='InputText' onChange={(e) => setNewTask(e.target.value)} placeholder='Add a new task'/>
            <button className='InputSendBtn'><SendSVG/></button>
        </div>
    )
}