import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class Education extends Component {
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
          <div className="col-sm-3"><img src="https://png.pngtree.com/svg/20170525/curriculum_20182.png" className="imgg"></img></div>
          <div className="formm col-sm-6">
            <form noValidate autoComplete="off" >
              <h2>YOUR EDUCATIONAL BACKGROUND</h2><br />

              
              <div id="repeat">

                < TextField required id="standard-required"
                  label="College/University Name"
                  onChange={handleChange('college')}
                  defaultValue={values.college}
                />
                <br /><br />
                < TextField required id="standard-required"
                  label="Location of university"
                  onChange={handleChange('clglocation')}
                  defaultValue={values.clglocation}
                />
                <br /><br />
                <TextField required
                  id="standard-required"
                  label="Degree "
                  onChange={handleChange('degree')}
                  defaultValue={values.degree}
                />
                <br /><br />
                <TextField required
                  id="standard-full-width"
                  label="Starting year of graduation"
                  type="number"
                  onChange={handleChange('startyear')}
                  defaultValue={values.startyear}
                />
                <br /><br />

                <TextField required
                  id="standard-full-width"
                  label="Ending year of graduation"
                  type="number"
                  onChange={handleChange('endyear')}
                  defaultValue={values.endyear}
                />
                <br /><br />
                <TextField required
                  id="standard-required"
                  label="Cgpa/Percentage"
                  type="number"
                  onChange={handleChange('cgpa')}
                  defaultValue={values.cgpa}
                />
                <br /><br />
              </div>
              
              

              <Button variant="contained" color="primary" onClick={this.back} className="m-2">Previous</Button>
              <Button variant="contained" color="primary" onClick={this.continue} className="m-2">Next >></Button>



            </form>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>

    )
  }
}

export default Education
