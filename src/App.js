import logo from './logo.svg';
import Question from './Components/Question';
import Header from './Components/Header';
import './App.css';
import Body from './Components/Body';
import Landingpage from './Components/Landingpage';
import Silicon from './Components/Silicon';
import Svgcollection from './Components/Svgcollection';
import Navbar from './Components/Navbar';
import Emailform from './Components/Emailform';
import Pic1 from './Components/Pic1';
import Hamburger from './Components/Hamburger';
import { createContext,useState } from 'react';
import ReactSwitch from 'react-switch';
export const ThemeContext=createContext(null);

function App() {
  
  const [theme,setTheme]=useState("light");
  const toggletheme=()=>{
    setTheme((curr)=>(curr==="light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{theme,toggletheme}}>
    <div id={theme} >
    
    
<Header/>
<div id='element1'>


<div id='div1'>
<Navbar className='navbar1'/>
</div>
<div id='div2'>

<ReactSwitch onChange={toggletheme} checked={theme=== "dark"}/>

</div>
<div>

</div>

</div>
<div id='element'>

</div>

<Body/>

<Svgcollection/>

<Landingpage/>
<Silicon/>
<Emailform/>
{/*<Question/>*/}
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
