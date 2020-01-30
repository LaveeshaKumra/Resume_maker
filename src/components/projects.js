import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Projects extends Component {
    state = {
        pname: '',
        pdesc:'',
        sdate: '',
        edate: '',
        sused: ''
    }
    Change1 = e => {
        e.preventDefault();
        this.setState({
            pname: e.target.value
        });
    }
    Change2 = e => {
        e.preventDefault();
        this.setState({
            pdesc: e.target.value
        });
    }
    Change3 = e => {
        e.preventDefault();
        this.setState({
            sdate: e.target.value
        });
    }
    Change4 = e => {
        e.preventDefault();
        this.setState({
            edate: e.target.value
        });
    }
    Change5 = e => {
        e.preventDefault();
        this.setState({
            sused: e.target.value
        });
    }
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
                    <div className="col-sm-3"><img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v172-tang-70-icons_2.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1400&s=e2fc33696f04ac0b532f54282547bdb2" className="imgg2" /></div>
                    <div className="formm col-sm-6">
                        <form noValidate autoComplete="off" >
                            <h2 >Projects</h2>

                            < TextField required id="standard-required"
                                label="Company name"
                                onChange={this.Change1}
                                defaultValue={this.state.pname}
                            /><br />

                            < TextField required id="standard-required"
                                label="Job Title"
                                onChange={this.Change2}
                                defaultValue={this.state.pdesc}
                            /><br /><br/>
                            <TextField
                                id="date"
                                label="Start Date"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.Change3}
                            />
                            <br /><br/>
                            <TextField
                                id="date"
                                label="End Date"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.Change4}
                            /><br />


                            < TextField required id="standard-required"
                                label="Description"
                                onChange={this.Change5}
                                defaultValue={this.state.sused}
                            /><br /><br />

                            <Button variant="light" onClick={handleChange('projects', this.state)}>Save Details</Button>


                            <br /><br />
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Project Name</th>
                                        <th>Project Description</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Skill Used</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {values.projects.length != 0 ?
                                        (values.experience.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.pname}</td>
                                                <td>{item.pdesc}</td>
                                                <td>{item.sdate}</td>
                                                <td>{item.edate}</td>
                                                <td>{item.sused}</td>
                                            </tr>
                                        ))) : 
                                        (
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>No Projects !!</td>
                                            <td></td>
                                            <td></td></tr>
                                        )
                                        }
                                </tbody>
                            </Table>
                            <br />
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.back} className="m-2">
                                Previous </Button>
                            <Button variant="contained" color="primary" onClick={this.continue} className="m-2">
                                Next >></Button>

                        </form>
                    </div>
                    <div className="col-sm-3"><img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/19795616721571183081-512.png" className="imgg" /></div>
                </div>
            </div>
        )
    }
}

export default Projects
