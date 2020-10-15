import React, { Component } from 'react'
import classes from "./app.module.css"

class App extends Component {
  constructor(props){
    super(props)
    this.state = { /* Green */
    border: "1px solid black",
    color: "green",
    "textAlign": "center",
    "textDecoration": "none",
    display: "block",
    "fontSize": "12px",
    "fontWeight":"10px",
    "backgroundColor":"red",
    margin: "4px 8px",
    padding:"4px 10px",
    text:"Click"}
    }
    changeHandler = (event)=>{
      event.preventDefault()
      this.setState({[event.target.name]:event.target.value})
      console.log(this.state);
      

    }
  render() {
    let button = this.state
    let buttoncss = Object.entries(button) 
    let properties = Object.keys(button)
    return (
      <div className={classes.bodyDiv} >
      <div className={classes.cssDiv}>{buttoncss.map((param,index)=>
      <p key={index}>{`${param[0]} : ${param[1]}`}</p>)}</div>
      <div ><form>
      {properties.map((item,index)=><div key={index}><label htmlFor={item}>{item}</label><br/>
      <input name={item} type="text" id={item} onChange={(event)=>this.changeHandler(event)}/></div>)}
      </form></div>
       <div ><button style={button}>{button.text}</button></div>

        {/* <div className={}>
       
        </div> */}
      {/* <div className={}>
        
      </div> */}
      </div>
    )
  }
}
export default App