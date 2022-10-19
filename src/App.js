import { useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(() => {
    return 5
    })
  const [theme, setTheme] = useState(() => {
    return "blue"
    })
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
    setTheme("red")
  }
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
    setTheme("green")
  }
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
