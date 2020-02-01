import React, { Component } from 'react'

export class Final extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {values }=this.props;

        return (
            <div>
                <p>{values.name}</p>
                <p>{values.email}</p>
            </div>
        )
    }
}

export default Final
