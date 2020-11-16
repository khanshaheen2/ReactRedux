import React,{ Component } from "react";
import NewProp from "./NewProp";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from  "@material-ui/core/Button";

class App extends React.Component<NewProp>{
    constructor (props:NewProp){
      super(props);
    }
    render(){
      return(
        <div>
          <Typography variant="h3" color="primary">
            {this.props.age}
          </Typography>
          <Button color="secondary" onClick={this.props.ageUp}>Age Up</Button>
          <Button color="secondary" onClick={this.props.ageDown}>Age DOwn</Button>
        </div>
      )
    }
}
const fun_two = (state:any)=>{
  return{
    age: state.age
  }
};
const fun_one = (dispatch:any)=>{
  return{
    ageUp : ()=>{dispatch({type:"AGE_UP",value:1})},
    ageDown : ()=>{dispatch({type:"AGE_DOWN",value:1})}
  }
};

export default connect(fun_two,fun_one)(App);