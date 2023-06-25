import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecursoPorId } from "../../services/ApplicantService";


const ViewApply = () => {
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
                <hr />
                <h4>
                  Applicant offer:
                  <br />
                  {applicant.offerApplicantList.map((offers) => (
                    <>
                      <br /><span>ID Offer: {offers.idOffer}</span> <br />
                      <span>Company: {offers.idCompany} </span> <br />
                      <span>Offer description {offers.offerDescription} </span>
                      <br />
                    </>
                  ))}
                </h4>
              </div>
            </>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </>
  );
};

export default ViewApply;
