import React, { useRef, useEffect, useState } from "react";

import { useQuery } from "react-query";

import { getRecursoPorId } from "../../../services/ApplicantService";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import AddEducation from "./AddEducation";
import TableEducation from "./TableEducation";
import { getEducationById } from "../../../services/FormationService";

const ViewApplicant = () => {
  const applicantP = useParams();

  const [applicant, setApplicant] = useState(null);

  useEffect(() => {
    getRecursoPorId(applicantP.idApplicant, setApplicant);
  }, []);

  return (
    <>
      <div>
        <br />
        <h1>View Applicant</h1>
        {/* <h1>{recurso}</h1> */}
        <div>
          {applicant != null ? (
            <>
              <div className="viewApp">
                <h4>Name: {applicant.name}</h4>
                <h4>Email: {applicant.email}</h4>
                <h4>Resume: {applicant.resume}</h4>
                <h4>
                  Skills: {applicant.applicantSkillsList.skillDescription}
                </h4>

                {/* {applicant.map((applicant) => ( 
                  <>
                  <h4>Skills: {applicant.applicantSkillsList}</h4>
                  </>
                 ))} */}
              </div>

<br />
              <div className="addFor">
                <AddEducation id={applicantP.idApplicant} />
              </div>

              <TableEducation id={applicantP.idApplicant} />
              <hr />
              <p className="viewAppP">
                <a href="">View my applications</a>
              </p>
            </>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </>
  );
};

export default ViewApplicant;
