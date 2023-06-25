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
import { NavLink } from "react-router-dom";

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
                  Skills:
                  {applicant.applicantSkillsList.map((skills) => (
                    <>
                      <span> {skills.skillDescription}, </span>
                    </>
                  ))}
                </h4>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="addFor">
                <AddEducation id={applicantP.idApplicant} />
              </div>

              <TableEducation id={applicantP.idApplicant} />
              <hr />
              <NavLink to={`apply/${applicant.idApplicant}`}>
                <p className="viewAppP">
                  <a>View my applications</a>
                </p>
              </NavLink>
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
