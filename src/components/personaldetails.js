import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class Personaldetails extends Component {
  // constructor(props){
  //   super(props)
  //   this.handleChange.bind(this)
  // }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
}
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="container-fluid back">
        <div className="row">
          <div className="col-sm-3"><img src="https://cdn1.iconfinder.com/data/icons/data-organization-3/66/21-512.png" className="imgg"></img></div>
          <div className="formm col-sm-6">
            <form noValidate autoComplete="off" >
              <div>
                <h2>Personal Details</h2><br />
                < TextField required id="standard-required"
                  label="Name"
                  onChange={handleChange('name')}
                  defaultValue={values.name}
                />
                <br /><br />
                < TextField required id="standard-required"
                  label="Email Id"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                />
                <br /><br />
                <TextField required
                  id="standard-number"
                  label="Mobile number"
                  type="number"
                  onChange={handleChange('mobileno')}
                  defaultValue={values.mobileno}
                />
                <br /><br />
                <TextField required
                  id="standard-required"
                  label="city"
                  onChange={handleChange('location')}
                  defaultValue={values.location}
                />
                <br /><br />
                <TextField required
                  id="standard-required"
                  label="Github link"
                  onChange={handleChange('github')}
                  defaultValue={values.github}
                />
                <br /><br />
                <TextField required
                  id="standard-required"
                  label="Linkedin link"
                  onChange={handleChange('linkedin')}
                  defaultValue={values.linkedin}
                />
                <br /><br />
                <TextField required
                  id="standard-multiline-flexible"
                  label="Bio"
                  multiline
                  rowsMax="10"
                  defaultValue={values.bio}
                  onChange={handleChange('bio')}
                />
                <br /><br />
                <Button variant="contained" color="primary" onClick={this.back} className="m-2">
                  Previous </Button>
                <Button variant="contained" color="primary" onClick={this.continue} className="m-2">
                  Next >></Button>


              </div>

            </form>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>

    )
  }
}

export default Personaldetails
