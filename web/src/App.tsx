//import Habits from "./components/Habits"
import { Header } from './components/Header';
import './styles/global.css';


export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full maw-w-5xl px-6 flex flex-col gap-16'>
        <Header />
      </div>
    </div>
  )
}


