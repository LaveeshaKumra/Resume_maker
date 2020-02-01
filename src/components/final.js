import React, { Component } from 'react'

export class Final extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { values } = this.props;

        return (
            <div>
                <div className="container m-5">
                    
                    <div className="container m-3" style={{border:"2px solid black"}}>
                        <div style={{ backgroundColor: "lightblue" }}>
                            <h3>{values.name}</h3>
                            <h5 style={{ marginBottom: 0, paddingBottom: "0.5rem" }}>{values.bio}</h5>
                        </div>
                        <div style={{ backgroundColor: "lightblue", marginTop: 0 }}>
                            <h5>Emailid: {values.email}</h5>
                            <h5>Mobile no: {values.mobileno}</h5>
                            <h5>City: {values.location}</h5>
                            <h5>Github Link: {values.github}</h5>
                            <h5>Linkedin Link: {values.linkedin}</h5>
                        </div>
                        <div className="mt-4">
                            <h4>EDUCATION</h4>
                            <hr />
                            <p><b>{values.college}</b></p>
                            <p>{values.clglocation}</p>
                            <p>Degree: {values.degree}  ({values.startyear} - {values.endyear})</p>
                            <p>CGPA/PER(%) :{values.cgpa}</p>
                        </div>
                        <div className="mt-4">
                            {(values.skill.length == 0 && values.ntskill.length == 0) ? (<h4></h4>) :
                                (<h4>SKILLS</h4>)
                            }
                            <hr />
                            <div className="row">
                                <div className="col-sm-6">
                                    {values.skill.length !== 0 &&
                                        <h5>Technical Skills</h5>}
                                    <ul>
                                        {values.skill.length !== 0 &&

                                            values.skill.map((item, index) => (
                                                <li key={index}>
                                                    {item}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    {values.ntskill.length !== 0 &&
                                        <h5>Behavioral Skills</h5>}
                                    <ul>
                                        {values.ntskill.length !== 0 &&

                                            values.ntskill.map((item, index) => (
                                                <li key={index}>
                                                    {item}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4">
                                {values.projects.length != 0 &&
                                    (<div>
                                        <h4>PROJECTS</h4><hr/>
                                        <ul>
                                            {
                                                values.projects.map((item, index) => (
                                                    <li key={index}>
                                                        <h5>{item.pname}</h5>
                                                        <p>({item.sdate} - {item.edate})</p>
                                                        <p>{item.pdesc}</p>

                                                        <p>Skills used:{item.sused}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    )
                                }
                            </div>


                            <div className="mt-4">
                                {values.achievements.length != 0 &&
                                    (<div>
                                        <h4>AWARDS / ACHIEVEMENTS</h4><hr/>
                                        <ul>                                            {
                                                values.achievements.map((item, index) => (
                                                    <li key={index}>
                                                        <p>{item}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    )
                                }
                            </div>

                            <div className="mt-4">
                                {values.experience.length != 0 &&
                                    (<div>
                                        <h4>PROJECTS</h4>
                                        <hr/>
                                        <ul>
                                            {
                                                values.experience.map((item, index) => (
                                                    <li key={index}>
                                                        <h5>{item.cname}</h5>
                                                        <p>({item.sdate} - {item.edate})</p>
                                                        <p>{item.jobtitle}</p>
                                                        <p>Skills used:{item.desc}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    )
                                }
                            </div>


                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Final
