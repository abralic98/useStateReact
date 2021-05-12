//components
import Title from "./components/Title"
import Todo from "./components/Todo"

import './App.css';


function App(props) {
  return (
    <div className="App">
        <Title/>
        <div className="all-todos">
            <Todo text="Osvojit krajinu"/>
            <Todo text="Okrenit svilju na koridoru"/>
            <Todo text="Snimit oj alija aljo remaster"/>   
        </div>
        
        
        
        
    </div>
  );
}

export default App;
