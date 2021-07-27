import './App.css';
import React from 'react'
import Navbar from './Atom/Navbar'
import Register from './Atom/Modal/Register'

export default class App extends React.Component{

    render(){
      return (
        <>
        <Navbar />
        <Register />
        </>
      );
    }
} 
  

