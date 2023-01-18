import Habits from "./components/Habits"
import './styles/global.css';

function App() {
  return (
    <>
      <Habits completed={3} />
      <Habits completed={10} />
      <Habits completed={121} />
  
    </>
  )
}

export default App
