import React, { Component } from 'react'

export default class filterBattles extends Component {
    constructor(props){
        super(props);
        this.state = {
            king:"",
            location:"",
            type:""
        }
    }
    sendStates = (e) =>{
        e.preventDefault()
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div className="row">
            <div className="col s12">
              <div className="row">
                <h5>Filter Results By:</h5>
                <div className="input-field col s3">
                  <input type="text" value={this.state.king} id="king" onChange={(e)=>{this.setState({king:e.target.value})}} className="autocomplete"/>
                  <label htmlFor="autocomplete-input">King</label>
                </div>
                <div className="input-field col s3">
                  <input type="text" value={this.state.location} id="location" onChange={(e)=>{this.setState({location:e.target.value})}} className="autocomplete"/>
                  <label htmlFor="autocomplete-input">Location</label>
                </div>
                <div className="input-field col s3">
                  <input type="text" value={this.state.type} id="type" onChange={(e)=>{this.setState({type:e.target.value})}} className="autocomplete"/>
                  <label htmlFor="autocomplete-input">Type of Battle</label>
                </div>
                <div className="input-field col s3">
                <button onClick={this.sendStates} className="btn waves-effect waves-light" type="submit" name="action">Find Battles
                </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
