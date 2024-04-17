import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// If this import is moved to below LavaPool, both buttons inside 
// the nested Pools will become green instead of now black
import { WaterPool } from './components/WaterPool'

import { LavaPool } from './components/LavaPool'

import { Button } from './components/Button'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <WaterPool>
          <Button>Clicky</Button>
          <LavaPool>
            <Button>Clicky</Button>
          </LavaPool>
        </WaterPool>
        <LavaPool>
          <Button>Clicky</Button>
          <WaterPool>
            <Button>Clicky</Button>
          </WaterPool>
        </LavaPool>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
