import "./App.css";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import Tasks from "./Components/Tasks/Tasks";

function App() {
 


  return (
    <div className="AppContainer">
      
      <div className="ComponentsContainer">

      <div className="AppHeaderContainer">
          <Header/>
        </div>

        <div className="AppTasksContainer">
          <Tasks/>
        </div>


        <div className="AppInputContainer">
          <Input/>
        </div>
      
      </div>
    
    </div>
  );
}

export default App;
