import React, { Component, PropTypes } from 'react'
import * as jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas'
import Button from 'react-bootstrap/Button'
import ReactDOMServer from "react-dom/server";
import ReactDOM from 'react-dom';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

export class Final extends Component {
    constructor(props) {
        super(props);
    }
    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
            ;

    }
    pdfExportComponent;
    exportPDFWithMethod = () => {
        savePDF(ReactDOM.findDOMNode(this.pdfExportComponent), { paperSize: 'A4' });
    }

    render() {

        const { values } = this.props;

        return (
            <div>
                <div className="container m-5">
                    <div style={{ border: "2px solid black" }}>


                        <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize="A4">

                            <div className="container m-3" id="divToPrint" >
                                <div style={{ paddingLeft: "10px" }}>
                                    <h3>{values.name}</h3>
                                    <h5 style={{ marginBottom: 0 }}>{values.bio}</h5>
                                </div>
                                <div style={{ marginTop: 0, paddingLeft: "10px" }}>
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
                                                <h4>PROJECTS</h4><hr />
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
                                                <h4>AWARDS / ACHIEVEMENTS</h4><hr />
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
                                                <hr />
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
                        </PDFExport>

                    </div>
                    <div className="mb5">
                        <Button type="button" variant="outline-success" className="mt-4" size="lg" onClick={this.exportPDFWithMethod}> Download resume </Button>
                    </div> </div>
            </div>
        )
    }
}

export default Final
