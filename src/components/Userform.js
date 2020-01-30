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
    state = {
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
        experience:[]
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



    handleChange = (input, val) => e => {

        if ([input] === 'skill') {
            console.log(val)
            const list1 = this.state.skill.push(val);
            this.setState({ [input]: list1 })
            console.log(this.state.skill)
        }
        if (input ==='ntskill') {
            const list2 = this.state.ntskill.concat(val);
            this.setState({ [input]: list2 })
        }
        if (input === 'achievements') {
            const list = this.state.achievements.concat(val);
            this.setState({ [input]: list })
        }
        if (input === 'experience') {
            console.log(val)
            const list = this.state.experience.push(val);
            this.setState({ [input]: list })
            console.log(this.state.experience)
            
        }
        if ([input] === 'projects') {
            const list = this.state.projects.concat(val);
            this.setState({ [input]: list })
        }
        else
            this.setState({ [input]: e.target.value });

        console.log(this.state);
    }



    render() {
        const { step } = this.state;
        const {
            name ,
            email ,
            mobileno ,
            location ,
            github ,
            linkedin ,
            bio,
            college,
            clglocation,
            degree,
            startyear,
            endyear,
            cgpa,
            skill,
            ntskill,
            projects,
            achievements,
            experience,
        } = this.state;
        const values = {
            name ,
            email ,
            mobileno ,
            location ,
            github ,
            linkedin ,
            bio,
            college,
            clglocation,
            degree,
            startyear,
            endyear,
            cgpa,
            skill,
            ntskill,
            projects,
            achievements,
            experience,
        };
        
        switch (step) {
            case 0:
                return (
                    <Front nextStep={this.nextStep} />
                )
            case 1:
                return (
                    <Personaldetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                )
            case 2:
                return (
                    <Education nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />

                )
            case 3:
                return (
                    <Skills nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values}/>

                )
            case 4:
                return (
                    <Projects nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />

                )
            case 5:
                return (
                    <Awards nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />

                )
                
            case 6:
                return (
                    <Experience nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                )
            case 7:
                return (
                    <Final nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />

                )

        }

    }
}

export default Userform
