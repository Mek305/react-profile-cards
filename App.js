import React from 'react';
import './App.css';
import Squad from './squad.js';
import ProfileCard from './ProfileCard'

class App extends React() {
  constructor(){
    super();
 function RenderProfile(){
  const squadin = this.props.squad.map ((item) => <ProfileCard key = {item}/>)
 
  }

  return (
    <div className="App">
    
      <ProfileCard  />
      
    </div>
  );
}
}


export default App;
