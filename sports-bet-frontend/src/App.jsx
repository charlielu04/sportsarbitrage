import { Table } from "./components/home";
import { Header } from './components/common'
import { Description } from "./components/home";
import './App.css'

function App() {
  return (
    <div className='flexbox'>
      <Header />
      <Table />
      <Description />
    </div>
  )
}

export default App
