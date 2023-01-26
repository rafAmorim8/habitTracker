import './styles/global.css';

import { Habit } from "./components/Habit";

function App() {
  return (
    <div>
      <Habit title="test 1" completed={1} />
      <Habit title="test 2" completed={22} />
      <Habit title="test 3" completed={5} />
    </div>
  )
}

export default App
