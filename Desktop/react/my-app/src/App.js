import React from "react";
import Titles from "./components/titles.js";
import Form from "./components/form.js";
import Weather from "./components/weather.js";

const API_KEY = "efc46979fd28d35d01a7b0dd621cd2c8";

// initializing a component
class App extends React.Component{
  //r functions allows you to use the this keyword independently
  getWeather =  async (e) => {
    //console.log('gt')
    e.preventDefault();   
    // const city = e.target.elements.name.city.value;
    // const country = e.target.elements.name.country.value;
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
    const data = await API_CALL.json();
    console.log(data);
  }
    
  
  // render methods returnd a jsx(looks like html but its a javascript code runing in the background)
  render(){
    //you cant return another parent element only one is allowed
    return(
    <div>
      {/* to show the components you have to put a self closing tag with what you imported */}
      <Titles />
      <Form  getWeather={this.getWeather}/>
      <Weather/>
    </div>
    )}
};

export default App;
