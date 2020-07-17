import React from 'react';
import axios from 'axios';
import Header from './components/header';
import Footer from './components/footer';
import BattleDetails from './components/battledetails';
import FilterBattles from './components/filterBattles';
import BattlesCount from './components/battleCount';

import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      battles:[],
      battlesCount:0
    }
  }
  componentDidMount(){
    axios.get('/list').then((res)=>this.setState({battles:res.data}))
    .catch((err)=>console.error(err))
    axios.get('/count').then((res)=>this.setState({battlesCount:res.data.battlesCount}))
    .catch((err)=>console.error(err))
  }
  submitHandler = (searchParams) =>{
    var query = {}
    if(searchParams.king!==""){
      query.king = searchParams.king.trim()
    }
    if(searchParams.location!==""){
      query.location = searchParams.location.trim()
    }
    if(searchParams.type!==""){
      query.type = searchParams.type.trim()
    }
    axios.get('/search',{
      params:query}).then(res=>this.setState({battles:res.data}))
    .catch(err=>console.error(err))
  }
  render(){
    return(
      <div className="App">
        <Header/>
        <BattlesCount battlesCount={this.state.battlesCount}/>
        <FilterBattles onSubmit={this.submitHandler}/>
        <BattleDetails battless={this.state.battles}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
