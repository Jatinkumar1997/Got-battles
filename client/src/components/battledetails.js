import React from 'react'
import '../App.css'

export default class battledetails extends React.Component{
    componentDidUpdate(prevprops){
        if(prevprops.battless.length!==this.props.battless){
            this.render()
        }
    }
    render() {
        const obj = this.props.battless.map((x)=>{
        return(    
            <div key={x._id} className="row">
                <div className="col s12 m12">
                <table className="centered">
                <thead>
                    <tr>
                <th>Name: {x.name}</th>
                <th>Location: {x.location}</th>
                <th>Battle Type: {x.battle_type}</th>
                </tr>
                </thead>

                </table>
                </div>
                <div className="col s12 m6" >
                    <div className={"card "+ (x.attacker_outcome==='win'?'green':'red') +" darken-0"}>
                        <div className="card-content white-text">
                            <span className="card-title">{x.attacker_king}</span>
                        </div>
                    </div>
                </div>
                <div className={"col s12 m6"}>
                    <div className={"card "+ (x.attacker_outcome==='loss'?'green':'red') +" darken-0"}>
                        <div className="card-content white-text">
                            <span className="card-title">{x.defender_king}</span>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12">
                    {x.note!==''?<div className="card-panel teal lighten-2">{x.note}</div>:''}
                </div>
            </div>
        )
        })
        return(
        <div>
            {obj}
        </div>
        )
    }
}

