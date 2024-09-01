import './App.scss'
import MainSearch from './components/MainSearch'
import ConnectionTest from '@/mods/ConnectionTest';
import Terminal from '@/components/Terminal';

function App() {

  
  return (
    <div className='app'>

      <div className="connectionTest">
        <ConnectionTest />
      </div>


      <h1>People API</h1>

      <MainSearch />

      <Terminal response="Hello world" />
    </div>
  )
}

export default App
