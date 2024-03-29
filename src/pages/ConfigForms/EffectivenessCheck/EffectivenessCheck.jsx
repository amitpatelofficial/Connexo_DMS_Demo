import React from "react";
import { useState, useReducer } from "react";
import HeaderTop from "../../../components/Header/HeaderTop";
import Grid from "../../../components/DataFields/Grid";
import InputDate from "../../../components/DataFields/InputDate";
import { CurrentDate } from "../../../components/DateReturners";
import {
  formList,
  docFile,
  workFlow,
  currentYear,
  site,
} from "./EffectivenessCheckFunction";
import "../ConfigForms.css";

function EffectivenessCheck() {
  const [form, setForm] = useState(formList[0]);
  const [asideWorkFlow, setAsideWorkFlow] = useState(false);
  const [asideFamilyTree, setAsideFamilyTree] = useState(false);
  const [generalInformation, setGeneralInformation] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      recordNumber: `${site}/EC/${currentYear}/000001`,
      site: site,
      initiator: "Amit Guru",
      dateOfInitiation: CurrentDate(),
      assignedTo: "",
      dueDate: "",
      initiatorGroup: "",
      shortDescription: "",
      severityLevel: "",
      initiatedThrough: "",
      initiatedThroughOthers: "",
      qualityReviewer: "",
      repeat: "",
      repeatNature: "",
      riskLevel: "",
      divisionCode: "",
      natureOfChange: "",
      natureOfChangeOthers: "",
      initialAttachment: "",
      groupComment: "",
    }
  );

  const [effectivenessCheckResults, setEffectivenessCheckResults] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      effectivenessSummary: "",
      effectivenessResults: "",
      effectivenesscheckAttachment: "",
      addendumComments: "",
      addendumAttachment: "",
    }
  );

  const [activityHistory, setActivityHistory] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      actualClosureDate: "",
      originalDateDue: "",
      cancellationCategory: "",
      trackWiseRecordType: "",
      cancellationJustification: "",
    }
  );

  return (
    <>
      <div
        id="main-form-container"
        style={
          asideWorkFlow || asideFamilyTree ? { padding: "0 0 0 300px" } : {}
        }
      >
        {asideWorkFlow && (
          <div className="aside-container">
            <div className="head">
              <div>Workflow</div>
              <div>Trust The Process</div>
            </div>
            <div className="content workflow">
              {workFlow.map((item, index) => (
                <div
                  className={
                    index === 0
                      ? "green-state"
                      : index === workFlow.length - 1
                      ? "red-state"
                      : ""
                  }
                >
                  {item}
                  {index !== workFlow.length - 1 && (
                    <img src="/down.gif" alt="..." />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {asideFamilyTree && (
          <div className="aside-container">
            <div className="head">
              <div>Family Tree</div>
              <div>Family of Precision</div>
            </div>
            <div className="content family-list">
              <div>CAPA (1)</div>
              <div>Audit Program (0)</div>
              <div>Observation (3)</div>
              <div>Extension (2)</div>
              <div>Effectiveness Check (0)</div>
              <div>Change Control (0)</div>
              <div>Root Cause Analysis (0)</div>
            </div>
          </div>
        )}

        <div id="config-form-document-page">
          <HeaderTop />

          <div className="top-block">
            <div>
              <strong> Record Name:&nbsp;</strong>Effectiveness-Check
            </div>
            <div>
              <strong> Site:&nbsp;</strong>EHS-North America
            </div>
            <div>
              <strong> Current Status:&nbsp;</strong>Under Initiation
            </div>
            <div>
              <strong> Initiated By:&nbsp;</strong>Shaleen Mishra
            </div>
          </div>

          <div className="document-block">
            <div className="document-tabs">
              {formList.map((item, index) => (
                <div
                  key={index}
                  className={form === item ? "active" : ""}
                  onClick={() => setForm(item)}
                >
                  {item}
                </div>
              ))}
            </div>

            {form === formList[0] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">General Information</div>
                  <div className="form-flex">
                    <div className="group-input">
                      <label>Record Number</label>
                      <input
                        type="text"
                        value={generalInformation.recordNumber}
                        disabled
                      />
                    </div>
                    <div className="group-input">
                      <label>Site/Location Code</label>
                      <input
                        type="text"
                        value={generalInformation.site}
                        disabled
                      />
                    </div>
                    <div className="group-input">
                      <label>Initiator</label>
                      <input
                        type="text"
                        value={generalInformation.initiator}
                        disabled
                      />
                    </div>
                    <div className="group-input">
                      <label>Date of Initiation</label>
                      <input
                        type="text"
                        value={generalInformation.dateOfInitiation}
                        disabled
                      />
                    </div>
                    <div className="group-input">
                      <label>Assigned To</label>
                      <select
                        name="assign_id"
                        value={generalInformation.assignedTo}
                        onChange={(e) =>
                          setGeneralInformation({ assignedTo: e.target.value })
                        }
                      >
                        <option value="">Select a value</option>
                        <option value="1">Amit Guru</option>
                        <option value="2">Shaleen Mishra</option>
                        <option value="3">Vikas Prajapati</option>
                        <option value="4">Anshul Patel</option>
                        <option value="5">Amit Patel</option>
                        <option value="6">Madhulika Mishra</option>
                        <option value="7">Jin Kim</option>
                        <option value="8">Akash Asthana</option>
                      </select>
                    </div>

                    <InputDate
                      label="Due Date"
                      instruction="Please mention expected date of completion."
                      isRequired="true"
                      enableDate="future"
                      value={generalInformation.dueDate}
                      returnDate={(date) =>
                        setGeneralInformation({ dueDate: date })
                      }
                    />
                    <div className="group-input">
                      <label>Quality Reviewer</label>

                      <select
                        value={generalInformation.qualityReviewer}
                        onChange={(e) =>
                          setGeneralInformation({
                            qualityReviewer: e.target.value,
                          })
                        }
                      >
                        <option value="">Select a value</option>
                        <option value="1">Amit Guru</option>
                        <option value="2">Shaleen Mishra</option>
                        <option value="3">Vikas Prajapati</option>
                        <option value="4">Anshul Patel</option>
                        <option value="5">Amit Patel</option>
                        <option value="6">Madhulika Mishra</option>
                        <option value="7">Jin Kim</option>
                        <option value="8">Akash Asthana</option>
                      </select>
                    </div>
                  </div>
                  <div className="group-input">
                    <label>
                      <div className="required"></div>Short Description
                    </label>
                    <div className="instruction">
                      Please mention brief summary
                    </div>
                    <textarea
                      value={generalInformation.shortDescription}
                      onChange={(e) =>
                        setGeneralInformation({
                          shortDescription: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <div className="group-input">
                    <label>Severity Level</label>

                    <select
                      value={generalInformation.severityLevel}
                      onChange={(e) =>
                        setGeneralInformation({ severityLevel: e.target.value })
                      }
                    >
                      <option value="Select">-- Select --</option>
                      <option value="Major">Major</option>
                      <option value="Minor">Minor</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>

                  <div className="sub-head">
                    Effectiveness Planning Information
                  </div>
                  <div className="group-input">
                    <label>Effectiveness check Plan</label>
                    <input
                      type="text"
                      value={generalInformation.effectivenesscheckPlan}
                      onChange={(e) =>
                        setGeneralInformation({
                          effectivenesscheckPlan: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            ) : form === formList[1] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Effectiveness Summary</div>

                  <div className="group-input">
                    <label>Effectiveness Summary</label>
                    <textarea
                      value={effectivenessCheckResults.effectivenessSummary}
                      onChange={(e) =>
                        setEffectivenessCheckResults({
                          effectivenessSummary: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <div className="sub-head">Effectiveness Check Results</div>
                  <div className="group-input">
                    <label>Effectiveness Results</label>
                    <input
                      type="text"
                      value={effectivenessCheckResults.effectivenessResults}
                      onChange={(e) =>
                        setEffectivenessCheckResults({
                          effectivenessResults: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="group-input">
                    <Grid
                      label={docFile[0].label}
                      required={docFile[0].required}
                      instruction={docFile[0].instruction}
                      columnList={docFile[0].columnList}
                    />
                  </div>

                  <div className="sub-head">Reopen</div>
                  <div className="group-input">
                    <label>Addendum Comments</label>
                    <input
                      type="text"
                      value={effectivenessCheckResults.addendumComments}
                      onChange={(e) =>
                        setEffectivenessCheckResults({
                          addendumComments: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="group-input">
                    <Grid
                      label={docFile[1].label}
                      required={docFile[1].required}
                      instruction={docFile[1].instruction}
                      columnList={docFile[1].columnList}
                    />
                  </div>
                </div>
              </div>
            ) : form === formList[2] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Data History</div>
                  <div className="form-flex">
                    <InputDate
                      label="Actual Closure Date"
                      // instruction="Please mention expected date of completion."
                      isRequired="false"
                      enableDate="future"
                      value={activityHistory.actualClosureDate}
                      returnDate={(date) =>
                        setActivityHistory({ actualClosureDate: date })
                      }
                    />

                    <InputDate
                      label="Original Date Due"
                      // instruction="Please mention expected date of completion."
                      isRequired="false"
                      enableDate="future"
                      value={activityHistory.originalDateDue}
                      returnDate={(date) =>
                        setActivityHistory({ originalDateDue: date })
                      }
                    />
                  </div>
                  <div className="sub-head">Record Signature</div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Submitted by:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Submitted On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Completed By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Completed On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Quality Approal By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Quality Approal On:&nbsp;</strong>15 Jan, 2023
                      11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Addendum Complete By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Addendum Complete On:&nbsp;</strong>15 Jan, 2023
                      11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Cancel By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Cancel On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Re Open For Addendum By:&nbsp;</strong>Shaleen
                      Mishra
                    </div>
                    <div>
                      <strong>Re Open For Addendum On:&nbsp;</strong>15 Jan,
                      2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Cancellation Approve By:&nbsp;</strong>Shaleen
                      Mishra
                    </div>
                    <div>
                      <strong>Cancellation Approve On:&nbsp;</strong>15 Jan,
                      2023 11:00 PM
                    </div>
                  </div>
                  <div className="sub-head">Cancellation Details</div>
                  <div className="form-flex">
                    <div className="group-input">
                      <label>Cancellation Category</label>
                      <select
                        value={activityHistory.cancellationCategory}
                        onChange={(e) =>
                          setActivityHistory({
                            cancellationCategory: e.target.value,
                          })
                        }
                      >
                        <option value="">Enter Your Selection Here</option>
                        <option value="Duplicate Entry">Duplicate Entry</option>
                        <option value="Entered in Error">
                          Entered in Error
                        </option>
                        <option value="No Longer Necessary">
                          No Longer Necessary
                        </option>
                        <option value="Parent Record Closed">
                          Parent Record Closed
                        </option>
                      </select>
                    </div>

                    <div className="group-input">
                      <label>TrackWise Record Type</label>

                      <select
                        value={activityHistory.trackWiseRecordType}
                        onChange={(e) =>
                          setActivityHistory({
                            trackWiseRecordType: e.target.value,
                          })
                        }
                      >
                        <option>Enter Your Selection Here</option>
                        <option value="Effectiveness Check">
                          Effectiveness Check
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="group-input">
                    <label>Cancellation Justification</label>
                    <textarea
                      value={activityHistory.cancellationJustification}
                      onChange={(e) =>
                        setActivityHistory({
                          cancellationJustification: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div
            className="button-block"
            style={
              asideWorkFlow || asideFamilyTree
                ? { width: "calc(100% - 300px)" }
                : { width: "100%" }
            }
          >
            <button className="themeBtn">Save</button>
            <button className="themeBtn">Back</button>
            <button className="themeBtn">Next</button>
            <button className="themeBtn">Exit</button>
          </div>
        </div>

        <div className="sticky-buttons">
          <div
            onClick={() => {
              setAsideWorkFlow(!asideWorkFlow);
              setAsideFamilyTree(false);
            }}
          >
            <svg
              width="18"
              height="24"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34M332.1 128H256V51.9zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288zm220.1-208c-5.7 0-10.6 4-11.7 9.5c-20.6 97.7-20.4 95.4-21 103.5c-.2-1.2-.4-2.6-.7-4.3c-.8-5.1.3.2-23.6-99.5c-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1c-24.4 99-24 96.2-24.8 103.7c-.1-1.1-.2-2.5-.5-4.2c-.7-5.2-14.1-73.3-19.1-99c-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8c8 32.6 26.7 109.5 33.2 136c1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4c1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1c20.8-81.9 30.2-119 34.5-136c1.9-7.6-3.8-14.9-11.6-14.9h-15.8z"
              />
            </svg>
          </div>
          <div
            onClick={() => {
              setAsideFamilyTree(!asideFamilyTree);
              setAsideWorkFlow(false);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M25.01 49v46H103V49zM153 49v46h78V49zm128 0v46h78V49zm128 0v46h78V49zM55.01 113v64H119v46h18v-46h64v-64h-18v46H73.01v-46zM311 113v64h64v46h18v-46h64v-64h-18v46H329v-46zM89.01 241v46H167v-46zM345 241v46h78v-46zm-226 64v48h128v46h18v-46h128v-48h-18v30H137v-30zm98 112v46h78v-46z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default EffectivenessCheck;
