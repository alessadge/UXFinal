import React, { Component } from 'react'
import firebase from 'firebase';
import '../App.css';
import swal from 'sweetalert';
import '../App.js';

class Signup extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
    email:'',
    password:''
    }
   }
  signup(e){
      e.preventDefault();
       firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error)=>{
           console.log(error);
           this.props.history.push("/Login");
       });
  }
   login(e){
       e.preventDefault();
       firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "./icon.ico",
          button: "Ok",
        });
          this.props.history.push("/Inicio");
       }).catch((error)=>{
        swal({
          title: "Error",
          text: "Username or Password is incorrect, please try again.",
          icon: "./icono.ico",
          button: "Ok",
        });
           console.log(error);
       });
   }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    return(
    <form class="Login-form text-center p-5" action="#!">
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <p class="h4 mb-4 text-dark"><strong>Sign up</strong></p>


    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} class="form-control mb-4" placeholder="Enter E-mail"/>


    <input type="password" id="password" name="password"value={this.state.password} onChange= {this.handleChange} class="form-control mb-4" placeholder="Enter Password"/>

    <div class="d-flex justify-content-around">
        

    </div>

    <button class="btn btn-block btn-dark my-4" type="submit"onClick={this.signup}>Sign up</button>


    


</form>


    )
  }
}

export default Signup
