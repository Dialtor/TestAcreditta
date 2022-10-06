import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Asteroids, Home, MarsRover } from "./screens"



function App() {

  return (
    
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/marsrover">
          <MarsRover/>
        </Route>
        <Route path="/asteroids">
          <Asteroids/>
        </Route>
      </Switch>
  
  )
}

export default App
