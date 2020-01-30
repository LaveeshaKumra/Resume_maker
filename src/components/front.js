import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export class Front extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        return (
            <div>
                 <div className="container">
      <div  className="list-group">
  
  <button type="button"  className="list-group-item list-group-item-action" onClick={this.continue}>Personal Details </button>
  <button type="button"  className="list-group-item list-group-item-action" disabled>Educational Background</button>
  <button type="button"  className="list-group-item list-group-item-action" disabled>Skills</button>
  <button type="button"  className="list-group-item list-group-item-action" disabled>Projects Details</button>
  <button type="button"  className="list-group-item list-group-item-action" disabled>Experience</button>
  <button type="button"  className="list-group-item list-group-item-action" disabled>Awards / Achievements</button>
  
  <Button type="button" variant="outline-success" className="mt-4" size="lg" block onClick={this.continue}>Let's Begin >> </Button>
</div>
      </div>
            </div>
        )
    }
}

export default Front
