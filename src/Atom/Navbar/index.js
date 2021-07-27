import React from 'react'
//import './Navbar.css'
import {Button} from 'react-bootstrap'
import Login from '../Modal/Login'
import Chart from '../Chart/Chart'
import Register from '../Modal/Register'
export default class  Navbar extends React.Component{
    userData;
    constructor(props){
        super(props)
        this.handleModal = this.handleModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleRegister = this.handleRegister.bind(this)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeGender = this.onChangeGender.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeNationalism = this.onChangeNationalism.bind(this)
        this.onChangeJob = this.onChangeJob.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state  = {
            show : false,
            showRegister: false,
            isLoggedIn : false,
            username: "",
            password:"",
            gender: "",
            description: "",
            job:"",
            daftar: null
            // user: {
            //     username:"",
            //     password:"passwod"
            // }
        }
    }

    handleModal(){
        this.setState({
            show: !this.state.show,
            showRegister: false
        })
    }
    onChangeUsername(e){
        this.setState({ username: e.target.value})
    }
    onChangePassword(e){
        this.setState({ password: e.target.value})
    }
    onChangeDescription(e){
        this.setState({ description: e.target.value})
    }
    onChangeGender(e){
        this.setState({ gender: e.target.value})
    }
    onChangeNationalism(e){
        this.setState({ nationalism: e.target.value})
    }
    onChangeJob(e){
        this.setState({ job: e.target.value})
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
   
    onSubmit(e){
        this.userData = JSON.parse(localStorage.getItem('user'))
        //let {username, password, gender, description, job} = this.state
        let daftar = {
            username: this.userData.username,
            password:this.userData.password,
            gender: this.userData.gender,
            description: this.userData.description,
            job: this.userData.job,
        }
        console.log(daftar)
        e.preventDefault()
        this.setState({
            // username: "",
            // password:"",
            // gender: "",
            // description: "",
            // job:"",
            showRegister: false
        })
    }
    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'))
        if(localStorage.getItem('user')){
            this.setState({
                username: this.userData.username,
                password:this.userData.password,
                gender: this.userData.gender,
                description: this.userData.description,
                job: this.userData.job,
            })
        }
        else {
            this.setState({
                username: "",
                password:"",
                gender: "",
                description: "",
                job:"",
            })
        }
    }
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('user', JSON.stringify(nextState))
    }

    
    handleLogin(){
        let {username, password, daftar} = this.state;
        this.userData = JSON.parse(localStorage.getItem('user'))
        console.log(daftar)
        if(this.userData.username === username && this.userData.password === password)
        {
            this.setState({
                show:false,
                isLoggedIn : true,
            })
        }
        else {
            alert("can't login")
        }
    }
    handleLogout(){
        this.setState({
            isLoggedIn: false
        })
    }
    handleRegister(){
        this.setState({
            showRegister: !this.state.showRegister,
            show: false,
            isLoggedIn: false
        })
    }
    render(){
        let {username, password,gender, job, description} = this.state;
        return (
            <>
            <div className="navbar" >
                <div className="navbar-container container">
                    <ul className="nav-menu">
                    <li className="nav-btn">
                        {
                            this.state.isLoggedIn === false? <button className="btn-outline" onClick={this.handleRegister}>
                            SIGN UP
                        </button> :
                        ""
                        }
                        
                    </li>  
                    <li>
                        {this.state.isLoggedIn === false? <Button onClick={this.handleModal}>Login</Button> 
                            : <Button onClick={this.handleLogout}>Logout</Button>
                        }
                    </li>          
                    </ul>
                </div>
            </div>
            <div>
                <Login show={this.state.show}  
                    handleChange={this.handleChange} 
                    handleLogin={this.handleLogin}
                    handleModal={this.handleModal}
                />
            </div>
            <Register showRegister={this.state.showRegister} 
                    onSubmit={this.onSubmit}
                    username={this.state.username}
                    password={this.state.password}
                    gender={gender}
                    description={description}
                    job={job}
                    onChangeUsername={this.onChangeUsername}
                    onChangePassword={this.onChangePassword}
                    onChangeNationalism={this.onChangeNationalism}
                    onChangeJob = {this.onChangeJob}
                    onChangeGender = { this.onChangeGender}
                    onChangeDescription = {this.onChangeDescription}
                />
            <div>
            <Chart isLoggedIn={this.state.isLoggedIn}/>
            </div>
            </>
        )
    }
  
}