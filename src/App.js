
import './styles/App.css'
import { TopArea } from './components/TopArea'
import { BodyArea } from './components/BodyArea'
import { BottomArea } from './components/BottomArea'

function App() {
  return (
    <>
    <div className="App">
      <div id="topArea">
        <TopArea/>
        <BodyArea/>
        <BottomArea/>
      </div>
    </div>
    </>
  )
}

export default App;
