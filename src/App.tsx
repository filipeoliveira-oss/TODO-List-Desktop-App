import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import Tasks from "./Components/Tasks/Tasks";


interface taskInterface{
  title: string,
  description: string,
  deadline: Date,
  priority:number,
  complete: boolean,
  id: number
}

interface tasksInterface extends Array<taskInterface>{}

function App() {
 
  const [tasks, setTasks] = useState([
    {title: 'title 1', deadline:new Date(), description:'description', priority: 1, complete:false, id: 1},
    {title: 'title 2', deadline:new Date(), description:'description', priority: 1, complete:true, id:2},
    {title: 'to delete', deadline: new Date(), description:'to delete', priority: 1, complete:true, id:3}] as tasksInterface)

  return (
    <div className="AppContainer">
      
      <div className="ComponentsContainer">

      <div className="AppHeaderContainer">
          <Header tasks={tasks}/>
        </div>

        <div className="AppTasksContainer">
          <Tasks tasks={tasks} setTasks={setTasks}/>
        </div>


        <div className="AppInputContainer">
          <Input/>
        </div>
      
      </div>
    
    </div>
  );
}

export default App;
