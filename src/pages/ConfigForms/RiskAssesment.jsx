/* eslint-disable no-unused-vars */
import { useState } from "react";
import HeaderTop from "../../components/Header/HeaderTop";
import "./ConfigForms.css";
import { MultiSelect } from "react-multi-select-component";
import Grid from "../../components/DataFields/Grid";


function RiskAssesment() {
    const [form, setForm] = useState("Risk Assesment");
    const [groupComment, setGroupComment] = useState(0);
    const [selected, setSelected] = useState([]);

    const records = [
        { label: "Select Department", value: "Select Department" },
        { label: "QA", value: "QA" },
        { label: "QC", value: "QC" },
        { label: "R&D", value: "R&D" },
        { label: "Manufacuring", value: "Manufacuring" },
        { label: "Warehouse", value: "Warehouse" },
    ];

    const refrenceRecord = [
        // { label: "---Select---", value: "Select" },
    ];
    const rootCause = [
        { label: "Why-Why Chart", value: "Why-Why Chart" },
        { label: "Failure Mode and Efect Analysis", value: "Failure Mode and Efect Analysis" },
        { label: "Fishbone or Ishikawa Diagram", value: "Fishbone or Ishikawa Diagram" },
        { label: "Is/Is Not Analysis", value: "Is/Is Not Analysis" },
    ];

    const team = [
        { label: "Select Team Member", value: "Select Team Member" },
        { label: "Amit Guru", value: "Amit Guru" },
        { label: "Anshul Patel", value: "Anshul Patel" },
        { label: "Vikash Prajapati", value: "Vikash Prajapati" },
        { label: "Amit Patel", value: "Amit Patel" },
        { label: "Shaleen Mishra", value: "Shaleen Mishra" },
        { label: "Madhulika Mishra", value: "Madhulika Mishra" },
    ];

    const docFile = [
        {
            label: "Action Plan",
            // instruction: "Please Attach all relevant or supporting documents",
            // required: true,
            columnList: [
                { id: "2.1.1.1", name: "Action", type: "text" },
                { id: "2.1.1.2", name: "Responsible Person", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Shaleen Mishra", "Madhulika Mishra", "Jin Kim", "Akash Asthana", "Amit Patel"] },
                { id: "2.1.1.3", name: "Deadline", type: "date" },
                { id: "2.1.1.4", name: "Item Static", type: "text" },
            ],
        },
    ];

    const FailureModenEffectAnalysis = [
        {
            label: "Failure Mode and Effect Analysis",
            columnList: [
                { id: "2.1.1.1", name: "Risk Factor", type: "text" },
                {
                    id: "2.1.1.2", name: "Risk Element", type: "text"
                },
                { id: "2.1.1.3", name: "Probable cause of risk element", type: "text" },
                { id: "2.1.1.4", name: "Existing Risk Controls", type: "text" },
                { id: "2.1.1.5", name: "Initial Severity- H(3)/M(2)/L(1)", type: "singleSelection", selectionValues: ["1", "2", "3"] },
                { id: "2.1.1.6", name: "Initial Probability- H(3)/M(2)/L(1)", type: "singleSelection", selectionValues: ["1", "2", "3"] },
                { id: "2.1.1.7", name: "Initial Detectability- H(1)/M(2)/L(3)", type: "singleSelection", selectionValues: ["1", "2", "3"] },
                { id: "2.1.1.8", name: "Initial RPN", type: "text" },
                { id: "2.1.1.9", name: "Risk Acceptance (Y/N)", type: "singleSelection", selectionValues: ["Y", "N"] },
                { id: "2.1.1.10", name: "Proposed Additional Risk control measure (Mandatory for Risk elements having RPN > 4)", type: "text" },
                { id: "2.1.1.11", name: "Residual Severity- H(3)/M(2)/L(1)", type: "singleSelection", selectionValues: ["1", "2", "3"] },
                { id: "2.1.1.12", name: "Residual Probability- H(3)/M(2)/L(1)", type: "singleSelection", selectionValues: ["1", "2", "3"] },
                { id: "2.1.1.13", name: "Residual Detectability- H(1)/M(2)/L(3)", type: "singleSelection", selectionValues: ["1", "2", "3"] },
                { id: "2.1.1.14", name: "Risk Acceptance (Y/N)", type: "singleSelection", selectionValues: ["Y", "N"] },
                { id: "2.1.1.15", name: "Mitigation proposal (Mention either CAPA reference number, IQ, OQ or PQ)", type: "text" },

            ],
        },
    ];

    const attachment = [
        {
            label: "Initial attachment",
            // instruction: "Please Attach all relevant or supporting documents",
            // required: true,
            columnList: [
                { id: "2.1.1.1", name: "Title of Document", type: "text" },
                { id: "2.1.1.2", name: "Attached File", type: "file" },
                { id: "2.1.1.3", name: "Remark", type: "text" },
            ],
        },
    ];


    const Mitigation = [
        {
            label: "Mitigation Plan Details",
            // instruction: "Please Attach all relevant or supporting documents",
            // required: true,
            columnList: [
                { id: "2.1.1.1", name: "Mitigation Steps", type: "text" },
                { id: "2.1.1.2", name: "Deadline", type: "date" },
                { id: "2.1.1.3", name: "Responsible Person", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Madhulika Mishra", "Jin Kim", "Akash Asthana", "Amit Patel"] },
                { id: "2.1.1.4", name: "Status", type: "text" },
                { id: "2.1.1.5", name: "Remark", type: "text" }
            ],
        },
    ];


    return (
        <>
            <HeaderTop />
            <div id="config-form-document-page">
                <div className="top-block">
                    <div className="head">Risk Assesment</div>
                    <div className="content">
                        Site / Process : Jordan / Risk Assesment
                    </div>
                </div>
                <div className="document-block">
                    <div className="document-tabs">
                        <div
                            className={form === "Risk Assesment" ? "active" : ""}
                            onClick={() => setForm("Risk Assesment")}
                        >
                            Risk Assesment
                        </div>

                        <div
                            className={form === "Risk Details" ? "active" : ""}
                            onClick={() => setForm("Risk Details")}
                        >
                            Risk Details
                        </div>

                        {/* <div
                            className={form === "QA Review" ? "active" : ""}
                            onClick={() => setForm("QA Review")}
                        >
                            QA Review
                        </div> */}

                        <div
                            className={form === "Work Group Assignment" ? "active" : ""}
                            onClick={() => setForm("Work Group Assignment")}
                        >
                            Work Group Assignment
                        </div>

                        <div
                            className={form === "Risk Analysis" ? "active" : ""}
                            onClick={() => setForm("Risk Analysis")}
                        >
                            Risk Analysis
                        </div>

                        {/* {groupComment === "yes" && (
                            <div
                                className={form === "Group Comments" ? "active" : ""}
                                onClick={() => setForm("Group Comments")}
                            >
                                Group Comments
                            </div>
                        )} */}

                        <div
                            className={form === "Residual Risk" ? "active" : ""}
                            onClick={() => setForm("Residual Risk")}
                        >
                            Residual Risk
                        </div>
                        <div
                            className={form === "Risk Mitigation" ? "active" : ""}
                            onClick={() => setForm("Risk Mitigation")}
                        >
                            Risk Mitigation
                        </div>
                        <div
                            className={form === "Signatures" ? "active" : ""}
                            onClick={() => setForm("Signatures")}
                        >
                            Signatures
                        </div>
                    </div>
                    {form === "Risk Assesment" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            <b>Record Number</b>
                                        </label>
                                        <input type="text" value="Jordan/EA/2024/00000001" disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>Site / Division</b>
                                        </label>
                                        <input type="text" value="KSA" disabled />
                                    </div>
                                </div>
                                <div className="form-flex">
                                    <div className="group-input">
                                        <label>
                                            <b>Initiator</b>
                                        </label>
                                        <input type="text" value="Amit Guru" disabled />
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Date of Initiation</b>
                                        </label>
                                        <input type="" value="10-Jan-2024" disabled />
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            {/* <div className="required"></div> */}
                                            <b>Assigned To</b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="assign_to"
                                        >
                                            <option value="Amit Guru">Amit Guru</option>
                                            <option value="Shaleen Mishra">Shaleen Mishra</option>
                                            <option value="Vikas Prajapati">Vikas Prajapati</option>
                                            <option value="Anshul Patel">Anshul Patel</option>
                                            <option value="Amit Patel">Amit Patel</option>
                                            <option value="Madhulika Mishra">Madhulika Mishra</option>
                                            <option value="Jin Kim">Jin Kim</option>
                                            <option value="Akash Asthana">Akash Asthana</option>
                                        </select>{" "}
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Due Date</b>
                                        </label>
                                        <div className="instruction">
                                            Please mention expected date of completion
                                        </div>
                                        <input type="date" placeholder="" />
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Initiator Group{" "}
                                            </b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="Initiator_group"
                                        >
                                            <option value="">-- Select --</option>
                                            <option value="CQA">Corporate Quality Assurance</option>
                                            <option value="QAB">Quality Assurance Biopharma</option>
                                            <option value="CQC">Central Quality Control</option>
                                            <option value="CQC">Manufacturing</option>
                                            <option value="PSG">Plasma Sourcing Group</option>
                                            <option value="CS">Central Stores</option>
                                            <option value="ITG">Information Technology Group</option>
                                            <option value="MM">Molecular Medicine</option>
                                            <option value="CL">Central Laboratory</option>

                                            <option value="TT">Tech team</option>
                                            <option value="QA"> Quality Assurance</option>
                                            <option value="QM">Quality Management</option>
                                            <option value="IA">IT Administration</option>
                                            <option value="ACC">Accounting</option>
                                            <option value="LOG">Logistics</option>
                                            <option value="SM">Senior Management</option>
                                            <option value="BA">Business Administration</option>
                                        </select>{" "}
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Initiator Group Code</b>
                                        </label>
                                        <input type="" value="" disabled />
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label>
                                        <div className="required"></div>
                                        <b>
                                            Short Description{" "}
                                        </b>
                                    </label>
                                    <div className="instruction">
                                        Please mention brief summary
                                    </div>
                                    <textarea name="w3review" rows="3" cols="50"></textarea>
                                </div>
                                <div className="group-input">
                                    <label>
                                        <b>Department(s)</b>
                                    </label>
                                    <MultiSelect
                                        options={records}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className="group-input">
                                    <label>
                                        <b>Team Members</b>
                                    </label>
                                    <MultiSelect
                                        options={team}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className="form-flex">
                                    <div className="group-input">
                                        <label>
                                            <b>Source of Risk</b>
                                        </label>
                                        <div className="instruction">
                                            Please select related information
                                        </div>
                                        <select name="initiated_through" className="form-control">
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="Audit">Audit</option>
                                            <option value="Complaint">Complaint</option>
                                            <option value="Employee">Employee</option>
                                            <option value="Customer">Customer</option>
                                            <option value="Regulation">Regulation</option>
                                            <option value="Competition">Competition</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Type</b>
                                        </label>
                                        <div className="instruction">
                                            Please select related information
                                        </div>
                                        <select name="initiated_through" className="form-control">
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="Other">Other</option>
                                            <option value="Business_Risk">Business Risk</option>
                                            <option value="custumer_Related">custumer-Related Risk(Complaint)</option>
                                            <option value="Market">Market</option>
                                            <option value="Operational_Risk">Operational Risk</option>
                                            <option value="Strategic_Rick">Strategic Rick</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Priority Level</b>
                                        </label>
                                        <div className="instruction">
                                            Please select yes if it is has recurred in past six months
                                        </div>
                                        <select name="initiated_through" className="form-control">
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="High">High</option>
                                            <option value="medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Zone</b>
                                        </label>
                                        <div className="instruction">
                                            Please select yes if it is has recurred in past six months
                                        </div>
                                        <select name="initiated_through" className="form-control">
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="Asia">Asia</option>
                                            <option value="Europe">Europe</option>
                                            <option value="Africa">Africa</option>
                                            <option value="Central_America">Central America</option>
                                            <option value="South_America">South America</option>
                                            <option value="Oceania">Oceania</option>
                                            <option value="North_America">North America</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Country</b>
                                        </label>
                                        <select name="Country">
                                            <option value="">Select Country</option>
                                            <option value="Afghanistan" >Afghanistan</option>
                                            <option value="Aland Islands" >Aland Islands</option>
                                            <option value="Albania" >Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antarctica" >Antarctica</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>State / District</b>
                                            {/* <span>*</span> */}
                                        </label>
                                        <select name="div_code">
                                            <option value="0">-- Select --</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="group-input">
                                    <label>
                                        <b>City</b>
                                    </label>
                                    <select name="natureChange">
                                        <option value="0">-- Select --</option>
                                    </select>
                                </div>
                                <div className="group-input">
                                    <label>
                                        <b>Description</b>
                                    </label>
                                    <textarea name="w3review"></textarea>
                                </div>
                                <div className="group-input">
                                    <label htmlFor="group_comment_required">
                                        Group Comment Required
                                    </label>
                                    <textarea name="" id="" cols="30" rows="3"></textarea>
                                    {/* <select
                                        name="group_comment_required"
                                        // value={groupComment}
                                        // onChange={(e) => setGroupComment(e.target.value)}
                                    >
                                        <option value="0">-- Select --</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select> */}
                                </div>
                            </div>
                        </div>
                    ) : form === "Risk Details" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            <b>Related Records</b>
                                        </label>
                                        <MultiSelect
                                            options={records}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                        />
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {/* <span className="required"></span> */}
                                            <b>Source of Risk</b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="Source_of_risk"
                                        >
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="Audit">Audit</option>
                                            <option value="Complaint">Complaint</option>
                                            <option value="Employee">Employee</option>
                                            <option value="Customer">Customer</option>
                                            <option value="Regulation">Regulation</option>
                                            <option value="Competition">Competition</option>
                                            <option value="Other">Other</option>
                                        </select>{" "}
                                    </div>
                                </div>
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            {/* <span className="required"></span> */}
                                            <b>Site Code</b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="Site Code"
                                        >
                                            <option value="0">Select a value</option>
                                            <option value="1">Select Department</option>
                                            <option value="3">QA</option>
                                            <option value="4">QC</option>
                                            <option value="5">R&D</option>
                                            <option value="6">Manufacturing</option>
                                            <option value="7">Warehouse</option>
                                        </select>{" "}
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {/* <span className="required"></span> */}
                                            <b>Building</b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="assign_to"
                                        >
                                            <option value="0">Select a value</option>
                                            <option value="1">A</option>
                                            <option value="3">B</option>
                                            <option value="4">C</option>
                                            <option value="5">D</option>
                                        </select>{" "}
                                    </div>
                                </div>
                                {/* floor room  */}
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            {/* <span className="required"></span> */}
                                            <b>Floor</b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="assign_to"
                                        >
                                            <option value="NA">Select a value</option>
                                            <option value="First">First</option>
                                            <option value="Second">Second</option>
                                        </select>{" "}
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {/* <span className="required"></span> */}
                                            <b>Room</b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="assign_to"
                                        >
                                            <option value="0">Select a value</option>
                                            <option value="1">C-101</option>
                                            <option value="3">C-201</option>
                                        </select>{" "}
                                    </div>
                                </div>
                                <div className="group-input">
                                    <label>
                                        <b>Related Records</b>
                                    </label>
                                    <MultiSelect
                                        options={records}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                {/* duration hazard  */}
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            {/* <span className="required"></span> */}
                                            <b>Duration</b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="duration"
                                        >
                                            <option value="0">Enter Your Selection Here</option>
                                            <option value="1">2 Hour</option>
                                            <option value="3">4 Hour</option>
                                            <option value="4">8 Hour</option>
                                            <option value="5">16 Hour</option>
                                            <option value="6">24 Hour</option>
                                            <option value="7">36 Hour</option>
                                            <option value="8">72 Hour</option>
                                        </select>{" "}
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {/* <span className="required"></span> */}
                                            <b>Hazard</b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="Hazard"
                                        >
                                            <option value="0">Enter Your Selection Here</option>
                                            <option value="1">Confined Space</option>
                                            <option value="3">Electrical</option>
                                            <option value="4">Energu Use</option>
                                            <option value="5">Ergonomics</option>
                                            <option value="6">Machine Guarding</option>
                                            <option value="7">Material Storage</option>
                                            <option value="8">Material Use</option>
                                            <option value="9">Pressure</option>
                                            <option value="9">Thermal</option>
                                            <option value="9">Water Use</option>
                                        </select>{" "}
                                    </div>
                                </div>
                                {/* room regulatory climate  */}
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            {/* <span className="required"></span> */}
                                            <b>Room</b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="Room"
                                        >
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="Automation">Automation</option>
                                            <option value="Biochemistry">Biochemistry</option>
                                            <option value="Blood Collection">Blood Collection</option>
                                            <option value="Enter Yo">Enter Yo</option>
                                            <option value="Buffer Preparation">Buffer Preparation</option>
                                            <option value="Bulk Fill">Bulk Fill</option>
                                            <option value="Calibration">Calibration</option>
                                            <option value="Component Manufacturing">Component Manufacturing</option>
                                            <option value="Computer">Computer</option>
                                            <option value="Computer / Automated Systems">Computer / Automated Systems</option>
                                            <option value="Despensing Donor Suitability">Despensing Donor Suitability</option>
                                            <option value="Filling">Filling</option>
                                            <option value="Filtration">Filtration</option>
                                            <option value="Formulation">Formulation</option>
                                            <option value="Incoming QA">Incoming QA</option>
                                            <option value="Hazard">Hazard</option>
                                            <option value="Laboratory">Laboratory</option>
                                            <option value="Laboratory Support Facility">Laboratory Support Facility</option>
                                            <option value="Enter Your">Enter Your</option>
                                            <option value="Lot Release">Lot Release</option>
                                            <option value="Manufacturing">Manufacturing</option>
                                            <option value="Materials Management">Materials Management</option>
                                            <option value="Room">Room</option>
                                            <option value="Operations">Operations</option>
                                            <option value="Packaging">Packaging</option>
                                            <option value="Plant Engineering">Plant Engineering</option>
                                            <option value="Enter Your Sele">Enter Your Sele</option>
                                            <option value="Njown">Njown</option>
                                            <option value="Powder Filling">Powder Filling</option>
                                            <option value="Process Development">Process Development</option>
                                            <option value="Product Distribution">Product Distribution</option>
                                            <option value="Product Testing">Product Testing</option>
                                            <option value="Production Purification">Production Purification</option>
                                            <option value="QA">QA</option>
                                            <option value="QA Laboratory Quality Control">QA Laboratory Quality Control</option>
                                            <option value="Quality Control / Assurance">Quality Control / Assurance</option>
                                            <option value="Sanitization">Sanitization</option>
                                            <option value="Shipping/Distribution Storage/Distribution">Shipping/Distribution Storage/Distribution</option>
                                            <option value="Storage and Distribution">Storage and Distribution</option>
                                        </select>{" "}
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {/* <span className="required"></span> */}
                                            <b>Regulatory Climate</b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="Regulatory_Climate"
                                        >
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="1">0. No significant regulatory issues affecting operation
                                            </option>
                                            <option value="2">1. Some regulatory or enforcement changes potentially
                                                affecting
                                                operation are
                                                anticipated </option>
                                            <option value="3">2. A few regulatory or enforcement changes affect
                                                operations</option>
                                            <option value="4">3. Regulatory and enforcement changes affect operation
                                            </option>
                                            <option value="5">4. Significant programatic regulatory and enforcement
                                                changes affect
                                                operation
                                            </option>
                                            <option value="2">1. Some regulatory or enforcement changes potentially
                                                affecting operation are anticipated </option>
                                            <option value="3">2. A few regulatory or enforcement changes affect
                                                operations</option>
                                            <option value="4">3. Regulatory and enforcement changes affect operation
                                            </option>
                                            <option value="5">4. Significant programatic regulatory and enforcement
                                                changes affect operation</option>
                                        </select>{" "}
                                    </div>
                                </div>
                                {/* number of emp / risk mng  */}
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            {/* <span className="required"></span> */}
                                            <b>Number Of Employees</b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="Number_Of_Emp"
                                        >
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="1">0-50</option>
                                            <option value="2">5-100</option>
                                            <option value="3">100-200</option>
                                            <option value="4">200-300</option>
                                            <option value="5">300-500</option>
                                            <option value="6">500-1000</option>
                                            <option value="7">1000+</option>
                                        </select>{" "}
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {/* <div className="required"></div> */}
                                            <b>Risk Management Strategy</b>
                                        </label>
                                        <select
                                            id="select-state"
                                            className="form-control"
                                            placeholder="Select..."
                                            name="Risk_Management_Strategy"
                                        >
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="1">Accept</option>
                                            <option value="2">Avoid the Risk</option>
                                            <option value="3">Mitigate</option>
                                            <option value="4">Transfer</option>
                                        </select>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : form === "Work Group Assignment" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <div className="sub-head">Assignment Details</div>

                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            <b>Scheduled Start Date</b>
                                        </label>
                                        <input type="date" name="" id="" />
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>Scheduled End Date</b>
                                        </label>
                                        <input type="date" name="" id="" />
                                    </div>
                                </div>
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            <b>Estimated Man-Hours</b>
                                        </label>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>Estimated Cost</b>
                                        </label>
                                        <input type="text" name="" id="" />
                                    </div>
                                </div>
                                <div className="group-input">
                                    <label>
                                        <b>Currency</b>
                                    </label>
                                    <select name="currency" id="currency">
                                        <option value="">Enter Your Selection Here</option>
                                        <option value="1">ARS-Argentine Peso</option>
                                        <option value="2">AUD-Australian Dollar</option>
                                        <option value="3">BRL-Brazilian Real CAD-Canadian Dollar</option>
                                        <option value="4">CHF-Swiss Franc</option>
                                        <option value="5">CNY-Chinese Yuan</option>
                                        <option value="6">EUR-Euro</option>
                                        <option value="7">HKD-Hong Kong Dollar ILS-Israeli New Sheqel</option>
                                        <option value="8">INR-Indian Rupee JPY-Japanese Yen</option>
                                        <option value="9">KRW-South Korean Won</option>
                                        <option value="10">MXN-Mexican Peso</option>
                                        <option value="11">RUB-Russian Rouble</option>
                                        <option value="12">SAR-Saudi Riyal</option>
                                        <option value="13">TRY-Turkish Lira</option>
                                        <option value="14">USD-US Dollar</option>
                                        <option value="15">XAG-Silver</option>
                                        <option value="16">XAU-Gold</option>
                                        <option value="17">XPD-Palladium</option>
                                        <option value="18">XPT-Platinum</option>
                                    </select>
                                </div>
                                <div className="group-input">
                                    <label>
                                        <b>Justification / Rationale</b>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div>
                                <div className="sub-head">Action Plan</div>
                                <div className="group-input">
                                    <Grid
                                        label={docFile[0].label}
                                        required={docFile[0].required}
                                        instruction={docFile[0].instruction}
                                        columnList={docFile[0].columnList}
                                    />
                                </div>
                                <div className="group-input">
                                    <Grid
                                        label={attachment[0].label}
                                        required={attachment[0].required}
                                        instruction={attachment[0].instruction}
                                        columnList={attachment[0].columnList}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : form === "Risk Analysis" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <div className="sub-head">RCA Results</div>
                                <div className="group-input">
                                    <label>
                                        <b>Root Cause Methodology</b>
                                    </label>
                                    <MultiSelect
                                        options={rootCause}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className="group-input">
                                    <Grid
                                        label={FailureModenEffectAnalysis[0].label}
                                        required={FailureModenEffectAnalysis[0].required}
                                        instruction={FailureModenEffectAnalysis[0].instruction}
                                        columnList={FailureModenEffectAnalysis[0].columnList}
                                    />
                                </div>
                            </div>

                            <div className="why-why-container">
                                <label>
                                    <b>
                                        Why-Why Chart
                                    </b>
                                </label>
                                <div className="group-inpu">
                                    <div className="thContainer" style={{ background: "yellow" }}>
                                        <div className="lft">Problem Statement :</div>
                                        <div className="right"></div>
                                    </div>
                                    <div className="input-container" style={{ display: "flex" }}>
                                        <div className="ins-add" >
                                            why
                                            <span>
                                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="none" stroke="#" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h6m0 0h6m-6 0v6m0-6V6" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="input-container">
                                            <textarea cols="190" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="table-wrapper">
                                <label>
                                    <b>
                                        Is/Is Not Analysis
                                    </b>
                                </label>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Will be</th>
                                            <th>Will Not be</th>
                                            <th>Rationale</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>What</th>
                                            <td>
                                                <textarea cols="60" rows="3"></textarea>
                                                {/* <input type="text" /> */}
                                            </td>
                                            <td>
                                                {/* <input type="text" /> */}
                                                <textarea cols="60" rows="3"></textarea>
                                            </td>
                                            <td>
                                                {/* <input type="text" /> */}
                                                <textarea cols="60" rows="3"></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Where</th>
                                            <td>
                                                <textarea cols="60" rows="3"></textarea>
                                                {/* <input type="text" /> */}
                                            </td>
                                            <td>
                                                {/* <input type="text" /> */}
                                                <textarea cols="60" rows="3"></textarea>
                                            </td>
                                            <td>
                                                {/* <input type="text" /> */}
                                                <textarea cols="60" rows="3"></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>When</th>
                                            <td>
                                                <textarea cols="60" rows="3"></textarea>
                                                {/* <input type="text" /> */}
                                            </td>
                                            <td>
                                                {/* <input type="text" /> */}
                                                <textarea cols="60" rows="3"></textarea>
                                            </td>
                                            <td>
                                                {/* <input type="text" /> */}
                                                <textarea cols="60" rows="3"></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Coverage</th>
                                            <td>
                                                <textarea cols="60" rows="3"></textarea>
                                                {/* <input type="text" /> */}
                                            </td>
                                            <td>
                                                {/* <input type="text" /> */}
                                                <textarea cols="60" rows="3"></textarea>
                                            </td>
                                            <td>
                                                {/* <input type="text" /> */}
                                                <textarea cols="60" rows="3"></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Who</th>
                                            <td>
                                                <textarea cols="60" rows="3"></textarea>
                                                {/* <input type="text" /> */}
                                            </td>
                                            <td>
                                                {/* <input type="text" /> */}
                                                <textarea cols="60" rows="3"></textarea>
                                            </td>
                                            <td>
                                                {/* <input type="text" /> */}
                                                <textarea cols="60" rows="3"></textarea>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <br />
                            <div className="sub-head">

                            </div>
                            <div className="group-input">
                                <label><b>Root Cause Description</b></label>
                                <textarea cols="30" rows="3"></textarea>
                            </div>
                            <div className="group-input">
                                <label>
                                    <b>
                                        Investigation Summary
                                    </b>
                                </label>
                                <textarea cols="30" rows="3"></textarea>
                            </div>

                            <div className="sub-head">
                                Risk Analysis
                            </div>

                            <div className="dual-grid">
                                <div className="group-input">
                                    <label >
                                        <b>
                                            Severity Rate
                                        </b>
                                    </label>
                                    <select name="severity_rate" id="analysisR">
                                        <option value="">Enter Your Selection Here</option>
                                        <option value="1">Negligible</option>
                                        <option value="2">Moderate</option>
                                        <option value="3">Major</option>
                                        <option value="4">Fatal</option>
                                    </select>
                                </div>
                                <div className="group-input">
                                    <label >
                                        <b>
                                            Occurrence
                                        </b>
                                    </label>
                                    <select name="occurrence" id="analysisP">
                                        <option value="">Enter Your Selection Here</option>
                                        <option value="5">Extremely Unlikely</option>
                                        <option value="4">Rare</option>
                                        <option value="3">Unlikely</option>
                                        <option value="2">Likely</option>
                                        <option value="1">Very Likely</option>
                                    </select>
                                </div>
                            </div>
                            <div className="dual-grid">
                                <div className="group-input">
                                    <label>
                                        <b>
                                            Detection
                                        </b>
                                    </label>
                                    <select name="detection" id="analysisN">
                                        <option value="">Enter Your Selection Here</option>
                                        <option value="5">Impossible</option>
                                        <option value="4">Rare</option>
                                        <option value="3">Unlikely</option>
                                        <option value="2">Likely</option>
                                        <option value="1">Very Likely</option>
                                    </select>
                                </div>
                                <div className="group-input">
                                    <label>
                                        <b>
                                            Detection
                                        </b>
                                    </label>
                                    <div className="instruction">Auto - Calculated</div>
                                    <input type="text" disabled />
                                </div>
                            </div>
                        </div>
                    ) : form === "Residual Risk" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <div className="group-input">
                                    <label>
                                        <b>Residual Risk</b>
                                    </label>
                                    <input type="text" />
                                </div>
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            <b>Residual Risk Impact
                                            </b>
                                        </label>
                                        <select name="Residual Risk Impact" id="curResidual Risk Impactrency">
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="1">High</option>
                                            <option value="2">Low</option>
                                            <option value="3">Medium</option>
                                            <option value="4">None</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>Residual Risk Probability
                                            </b>
                                        </label>
                                        <select name="Residual Risk Probability" id="Residual Risk Probability">
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="1">High</option>
                                            <option value="2">Medium</option>
                                            <option value="3">Low</option>
                                        </select>
                                    </div>
                                </div>
                                {/* residual detection  */}
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            <b>Residual Detection
                                            </b>
                                        </label>
                                        <select name="Residual Risk Impact" id="curResidual Risk Impactrency">
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="Impossible">Impossible</option>
                                            <option value="Rare">Rare</option>
                                            <option value="Unlikely">Unlikely</option>
                                            <option value="Likely">Likely</option>
                                            <option value="Very Likely">Very Likely</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>Residual RPN
                                            </b>
                                        </label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="group-input">
                                    <label>
                                        <b>Comments
                                        </b>
                                    </label>
                                    <textarea />
                                </div>
                            </div>
                        </div>
                    ) : form === "Risk Mitigation" ? (
                        <>
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="group-input">
                                        <Grid
                                            label={Mitigation[0].label}
                                            required={Mitigation[0].required}
                                            instruction={Mitigation[0].instruction}
                                            columnList={Mitigation[0].columnList}
                                        />
                                    </div>
                                    <div className="sub-head">Risk Mitigation</div>
                                    <div className="group-input">
                                        <label>
                                            <b>Mitigation Required</b>
                                        </label>
                                        <select name="currency" id="currency">
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>Mitigation Plan</b>
                                        </label>
                                        <textarea cols="30" rows="3"></textarea>
                                    </div>
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>
                                                <b>
                                                    Mitigation Due Date
                                                </b>
                                            </label>
                                            <input type="date" />
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                <b>
                                                    Status of Mitigation
                                                </b>
                                            </label>
                                            <select name="statusofmitigation" id="currency">
                                                <option value="0">-- Select --</option>
                                                <option value="green">Green Status</option>
                                                <option value="amber">Amber Status</option>
                                                <option value="red">Red Staus</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Mitigation Status Comments
                                            </b>
                                        </label>
                                        <textarea cols="30" rows="3"></textarea>
                                    </div>
                                    <div className="sub-head">Overall Assessment</div>
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>
                                                <b>
                                                    Impact
                                                </b>
                                            </label>
                                            <input type="date" />
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                <b>
                                                    Critically
                                                </b>
                                            </label>
                                            <select name="statusofmitigation" id="currency">
                                                <option value="0">-- Select --</option>
                                                <option value="high">High</option>
                                                <option value="medium">Medium</option>
                                                <option value="low">Low</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Impact Analysis
                                            </b>
                                        </label>
                                        <textarea cols="30" rows="3"></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Risk Analysis
                                            </b>
                                        </label>
                                        <textarea cols="30" rows="3"></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>Refrence Record</b>
                                        </label>
                                        <MultiSelect
                                            options={refrenceRecord}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                        />
                                    </div>
                                    <div className="sub-head">Extension Justification</div>
                                    <div className="group-input">
                                        <label>
                                            <b>Due Date Extension Justification</b>
                                        </label>
                                        <div className="instruction">Please Mention justification if due date is crossed</div>
                                        <textarea cols="30" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : form === "Signatures" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Submitted By..
                                            </b>
                                        </label>
                                        <input type="text" />
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Submitted On
                                            </b>
                                        </label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Evaluated By
                                            </b>
                                        </label>
                                        <input type="text" />
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Evaluated On
                                            </b>
                                        </label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Plan Approved By
                                            </b>
                                        </label>
                                        <input type="text" />
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Plan Approved On
                                            </b>
                                        </label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="dual-grid">
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Risk Analysis Completed By
                                            </b>
                                        </label>
                                        <input type="text" />
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Risk Analysis Completed On
                                            </b>
                                        </label>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : ""}
                </div>
                <div className="button-block">
                    <button className="themeBtn">Save</button>
                    <button className="themeBtn">Back</button>
                    <button className="themeBtn">Next</button>
                    <button className="themeBtn">Exit</button>
                </div>
            </div >
        </>
    )
}

export default RiskAssesment