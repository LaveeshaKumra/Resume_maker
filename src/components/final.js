import React, { Component } from 'react'

export class Final extends Component {
    
    render() {
        const {values , handleChange }=this.props;

        return (
            <div>
                <p>{values.name}</p>
                <p>{values.email}</p>
            </div>
        )
    }
}

export default Final
