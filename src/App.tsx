import './App.scss'
import MainSearch from './components/MainSearch'
import MainLogo from './components/MainLogo'
import ResponseWindow from './components/ResponseWindow'
import { useState } from 'react'
import ConnectionTest from '@/mods/ConnectionTest';

function App() {

  
  return (
    <>
      <div className='app'>

        <div className="connectionTest">
          <ConnectionTest />
        </div>

        {/* <MainLogo /> */}

        <h1>People API</h1>

        <MainSearch />

        <ResponseWindow response="Hello world" />
      </div>
    </>
  )
}

export default App
