import { useState } from 'react'
import './Input.css'
import SendSVG from '../../assets/svg/SendSvg'
import { useForm, SubmitHandler } from "react-hook-form"
import CloseSVG from '../../assets/svg/CloseSvg'

export default function Input(){

    const [formStep, setFormStep] = useState(2)
    // const [priority, setPriority] = useState<null | string>()
    const {register, watch} = useForm({
        defaultValues:{
            title: '',
            description: '',
            priority: 0
        }
    })
    const priority = watch('priority')

    return(
        <div className='InputContainer'>
            <div className="formStep">
                <CloseSVG className='formSvg'/>
                {formStep === 1 && (
                    <span className='formStepName'>TASK NAME</span>
                )}
                {formStep === 2 && (
                    <span className='formStepName'>PRIORITY</span>
                )}
                <div className='formStepIndicator'>{formStep}</div>
            </div>

            <div className='formInput'>
                {formStep === 1 && (
                    <>
                        <input type="text" className='InputText inputTitle' placeholder='Add a task name' {...register('title' ,{required:true})} maxLength={50}/>
                        <input type="text" className='InputText inputDescription' placeholder='Add a task name' {...register('description' ,{required:false})} maxLength={50}/>
                    </>
                )}

                {formStep === 2 && (
                    <div className='formSelectDiv'>
                        <select {...register('priority')} className={`formSelect ${priority == 0 ? 'noPriority' : 'priorityTask'}`} >
                            <option value={0}>None</option>
                            <option value={1}>High</option>
                            <option value={2}>Medium</option>
                            <option value={3}>Low</option>
                        </select>
                    </div>
                )}
            </div>
            {formStep === 2 && (
                <div className='prevStep' onClick={() => setFormStep((curr) => curr - 1)}>
                    <h2>&lt;</h2>
                </div>
            )}
            <button className='nextStep' onClick={() => setFormStep((curr) => curr + 1)}>
                {formStep === 1 && (
                    <h2>&gt;</h2>
                )}
                {formStep === 2 && (
                    <h2>+</h2>
                )}
            </button>
        </div>
    )
}