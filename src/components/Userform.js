import React, { Component } from 'react'
import Skills from './skills';
import Personaldetails from './personaldetails'
import Education from './education'
import Projects from './projects'
import Awards from './awards'
import Front from './front'
import Experience from './experience'
import Final from './final'


export class Userform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 0,
            name: '',
            email: '',
            mobileno: '',
            location: '',
            github: '',
            linkedin: '',
            bio: '',
            college: '',
            clglocation: '',
            degree: '',
            startyear: '',
            endyear: '',
            cgpa: '',
            skill: [],
            ntskill: [],
            projects: [],
            achievements: [],
            experience: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.nextStep = this.nextStep.bind(this)
        this.prevStep = this.prevStep.bind(this)
    }


    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })

    }


    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })

    }



    handleChange = (input, val)=> e => {

        if ([input] == 'skill') {
            const list1 = this.state.skill.concat(val);
            this.setState({ [input]: list1 })

        }
        else if (input == 'ntskill') {
            const list2 = this.state.ntskill.concat(val);
            this.setState({ [input]: list2 })
        }
        else if (input === 'achievements') {
            const list = this.state.achievements.concat(val);
            this.setState({ [input]: list })
        }
        else if ([input] == 'experience') {
            var joined = this.state.experience.concat([val]);
            this.setState({ experience: joined },() => {
                 console.log(this.state)
            }
            )
        }
        else if ([input] == 'projects') {
            const list2 = this.state.projects.concat([val]);
            this.setState({ [input]: list2 })
        }
        else
            this.setState({ [input]: e.target.value });


    }



    render() {
        

        switch (this.state.step) {
            case 0:
                return (
                    <Front nextStep={this.nextStep} />
                )
            case 1:
                return (
                    <Personaldetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={this.state} />
                )
            case 2:
                return (
                    <Education nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={this.state} />

                )
            case 3:
                return (
                    <Skills nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={this.state} />

                )
            case 4:
                return (
                    <Projects nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={this.state} />

                )
            case 5:
                return (
                    <Awards nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={this.state} />

                )

            case 6:
                return (
                    <Experience nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={this.state} />
                )
            case 7:
                return (
                    <Final prevStep={this.prevStep}  values={this.state} />

                )

        }

    }
}

export default Userform
