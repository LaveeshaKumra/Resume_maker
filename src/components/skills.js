import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Table from 'react-bootstrap/Table'


export class Skills extends Component {
    state = {
        val: '',
        val2: ''
    }
    
    Change = e => {
        e.preventDefault();
        this.setState({
            val: e.target.value
        });
    }
    Change2 = e => {
        e.preventDefault();
        this.setState({
            val2: e.target.value
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
        
        const { values  , handleChange  } = this.props;
       

        return (
            <div className="container-fluid back">
                <div className="row">
                    <div className="col-sm-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8UwUitckpLaxWaZRzLZ46NH4XTI5trC1V6iRTaDAxK5AC8fA&s" className="imgg2" /></div>
                    <div className="formm col-sm-6">
                        <form noValidate autoComplete="off" >
                            <h2 >Add Technical Skills</h2>
                            <br /><br />
                            < TextField required id="standard-required"
                                label="Tech. Skill"
                                value={this.state.val}
                                onChange={this.Change}
                            />

                            <Fab color="primary" aria-label="add" onClick={handleChange('skill', this.state.val)} >
                                <AddIcon />
                            </Fab>
                            <br /><br />
                            <Table striped bordered hover>
                                <tbody>
                                {values.skill.map((item, index) =>   (
                                            <tr key={index}>
                                                <td>{item}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>

                            <br /><br /><br />



                            <h2 >Add Non-Technical Skills</h2>
                            <br /><br />
                            < TextField required id="standard-required"
                                label=" Non tech. Skill"
                                value={this.state.val2}
                                onChange={this.Change2}
                            />

                            <Fab color="primary" aria-label="add" onClick={handleChange('ntskill', this.state.val2)} >
                                <AddIcon />
                            </Fab>
                            <br /><br />
                            <Table striped bordered hover>
                                <tbody>
                                {values.ntskill.map((item, index) =>   (
                                            <tr key={index}>
                                                <td>{item}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>

                            <br /><br /><br />
                            <Button variant="contained" color="primary" onClick={this.back} className="m-2">
                                Previous </Button>
                            <Button variant="contained" color="primary" onClick={this.continue} className="m-2">
                                Next >></Button>

                        </form>
                    </div>
                    <div className="col-sm-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVeZkrvQOoz0EZAcwFwuxWdcTM4ZGc4t_TJByGnZ9PpfY2pbXu&s" className="imgg2" /></div>
                </div>
            </div>
        )
    }
}

export default Skills
