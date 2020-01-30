import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Table from 'react-bootstrap/Table'

export class Awards extends Component {
    state = {
        val: ''
    }
    Change = e => {
        e.preventDefault();
        this.setState({
            val: e.target.value
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
                            <h2 >Awards / Achievements</h2>

                            < TextField required id="standard-required"
                                label="Awards"
                                onChange={this.Change} 
                                defaultValue={this.state.val}
                            />

                            <Fab color="primary" aria-label="add" onClick={handleChange('achievements', this.state.val)} >
                                <AddIcon />
                            </Fab>

                        
                            <br /><br />
                            <Table striped bordered hover>
                                <tbody>
                                {values.achievements.map((item, index) =>   (
                                            <tr key={index}>
                                                <td>{item}</td>
                                            </tr>
                                        ))}    
                                </tbody>
                            </Table>
                            <br/>
                            <br/><br/>
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

export default Awards
