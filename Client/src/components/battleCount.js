import React from 'react'

export default function battleCount(props) {
    return (
        <div className="col s6">
            <h3>Total Battles Fought: {props.battlesCount}</h3>
        </div>
    )
}
