import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home, MarsRover } from "./screens"



function App() {

  return (
    
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/marsrover">
          <MarsRover/>
        </Route>
      </Switch>
  
  )
}

export default App
