import React from 'react'
import logo from './logo.svg'
import './App.css'
import { UseEffectComponent } from './components/UseEffectComponent'

function App() {
  const [cnt, setCnt] = React.useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          for check the behavior of useEffect. For detail:
          <a href="https://stackoverflow.com/questions/56800694/what-is-the-expected-return-of-useeffect-used-for">
            here
          </a>
        </p>
        <UseEffectComponent count={cnt} />
        <button onClick={() => setCnt(cnt + 1)}>Click me</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
