import logo from './logo.svg';
import icon1 from "../src/images/con1.png";
import icon2 from "../src/images/vector.png";
import Common2 from "./Common2";
import Common from './Common';
import {Route, Switch} from "react-router-dom";



import './index.css';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/login' component={Common2}>
      <Common2 image={icon1} visit="/Common"/>  
      </Route>
      <Route exact path='/sigin' component={Common}>
      <Common  image1={icon2}/>  
      </Route>
    </Switch> 
 </>
  );
}


export default App;
