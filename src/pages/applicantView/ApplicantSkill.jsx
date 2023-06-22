import { useState, useEffect } from "react";

import { getRecursoPorId } from "../../services/ApplicantService";
import { useParams } from "react-router-dom";

import AddSkill from "./components/AddSkill";

const ApplicantSkill = () => {

  const applicantP = useParams();

  const [applicant, setApplicant] = useState(null);

  useEffect(() => {
    getRecursoPorId(applicantP.idApplicant, setApplicant);
  }, []);

  return (
    <>
      <div>
        <br />
        <h1>Applicant Skills</h1>
        {/* <h1>{recurso}</h1> */}
        <div>
          {applicant != null ? (
            <>
              <div className="viewApp">
                <h4>Name: {applicant.name}</h4>
                <h4>Email: {applicant.email}</h4>
                <h4>Resume: {applicant.resume}</h4>
              </div>

              <div className="addFor">
                <AddSkill  id={applicantP.idApplicant}/>
              </div>
              
              {/* <TableEducation id={applicantP.idApplicant}/> */}
              <hr />
            </>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </>
  );
};

export default ApplicantSkill;
