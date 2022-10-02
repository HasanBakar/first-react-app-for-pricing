import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import AssignmentMark from './components/AssignmentMark/AssignmentMark'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <AssignmentMark></AssignmentMark>
    </div>
  );
}

export default App;
