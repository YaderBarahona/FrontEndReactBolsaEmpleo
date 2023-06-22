import React, { useState } from "react";

import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

import { useQuery } from "react-query";
import { deleteApplicant, getApplicants } from "../../../services/ApplicantService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { showAlert } from "../../../functions/Functions";
import withReactContent from "sweetalert2-react-content";

import Swal from 'sweetalert2'

const TableApplicant = () => {

  const { data, isLoading, isError } = useQuery("Applicant", getApplicants, {
    enabled: true,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  const deleteA = (id, name) => {
    const MySwal = withReactContent(Swal); 
    MySwal.fire({
        title: '¿Sure to remove the applicant '+name+' ?',
        icon: 'question', text:'You cannot go back',
        showCancelButton:true, confirmButtonText:'Yes, delete', cancelButtonText:'Cancel'
    }).then((result) => {
        if(result.isConfirmed){
          deleteApplicant(id);
          window.location.href = window.location.href;
        } else {
            showAlert('The applicant was NOT removed','info');
        }
    });

}

  return (
    <div>
      <br />
      <br />
      <h1>Applicant List</h1>
      <div className="container-fluid">
        <div className="table-responsive">
          <table className="table table-bordered tblAppl">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Resume</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {data.map((applicant) => (
                <>
                <tr key={applicant.idApplicant}>
                  <td>{applicant.idApplicant}</td>
                  <td>{applicant.name}</td>
                  <td>{applicant.email}</td>
                  <td>{applicant.resume}</td>
                  <td>
                    <NavLink to={`viewApplicant/${applicant.idApplicant}`}>
                      <button className="btn btn-warning" title="View applicant"> 
                        <i>
                          <FontAwesomeIcon icon={faEye} />
                        </i>
                      </button>
                    </NavLink>

                    &nbsp;

                    <NavLink to={`applicantSkill/${applicant.idApplicant}`}>
                    <button className="btn btn-info" title="Edit skills">
                      <i>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </i>
                    </button>
                    </NavLink>

                    &nbsp;
                   
                    <button onClick={() => deleteA(applicant.idApplicant, applicant.name)} title="Delete applicant"
                     className="btn btn-danger">
                      <i>
                        <FontAwesomeIcon icon={faTrash} />
                      </i>
                    </button>
                  </td>
                </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableApplicant;
