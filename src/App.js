import Toggle from "./components/Toggle"
import Lightbulb from "./components/Lightbulb"
import SmartLightbulb from "./components/SmartLightbulb"

import {useLocalStorage} from "./hooks"

import './App.css';

function App() {
  const [value, setValue] = useLocalStorage({})
  const [value2, setValue2] = useLocalStorage("test", "irgendeinkey")

  return (
    <div className="App">
      <Toggle />
      <Lightbulb />
      <SmartLightbulb />
    </div>
  );
}

export default App;
