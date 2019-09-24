import React, { Component } from 'react'
import firebase, { app } from 'firebase';
import '../App.css';
import '../App.js';
import swal from 'sweetalert';
import './Nav.js';
import Nav from './Nav.js';




class Login extends Component {
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
       firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        swal({
          title: "Success",
          text: "The user was created succesfully!",
          icon: "./iconoperro.ico",
          button: "OK",
        });
        this.props.history.push("/Perfil");

        
       }).catch((error)=>{
        swal({
          title: "Error",
          text: "Username or Password is incorrect, please try again.",
          icon: "./iconoperro.ico",
          button: "Ok",
        });
           this.props.history.push("/Inicio");
           console.log(error);
       });
     
  }
   login(e){
       e.preventDefault();
       firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        swal({
          title: "Success",
          text: "The user was logged in succesfully!",
          icon: "./iconoperro",
          button: "OK",
        });
          this.props.history.push("/Perfil");
       }).catch((error)=>{
        swal({
          title: "Error",
          text: "Username or Password is incorrect, please try again.",
          icon: "./iconoperro",
          button: "Ok"
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
    <form class="Login-form border border-light p-5" action="#!">
    <br/><br/><br/><br/><br/><br/><br/><br/>


    <p class="h4 mb-4 text-dark "><strong>Sign in</strong></p>


    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} class="form-control mb-4" placeholder="E-mail"/>


    <input type="password" id="password" name="password"value={this.state.password} onChange= {this.handleChange} class="form-control mb-4" placeholder="Password"/>

    <div class="d-flex justify-content-around">
        <div>

            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"/>
                <label class="custom-control-label text-dark" >Remember me</label>
            </div>
        </div>
        <div>

            <a href="">Forgot password?</a>
        </div>
    </div>

    <button class="btn btn-block btn-dark my-4" type="submit"onClick={this.login}>Sign in</button>


    <p class="text-dark">Not a member?
        <a href="./Signup"> Register</a>
    </p>


</form>


    )
  }
}

export default Login
