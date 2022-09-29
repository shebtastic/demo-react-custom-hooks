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
      <div>
        <label htmlFor="localstorage">value in localStorage of "irgendeinkey" key: </label>
        <input id="localstorage" value={value2} onChange={(event) => setValue2(event.target.value)} />
      </div>
    </div>
  );
}

export default App;
