import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Asteroids, Home, MarsRover, Tle } from "./screens"



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
        <Route path="/tle">
          <Tle/>
        </Route>
      </Switch>
  
  )
}

export default App
