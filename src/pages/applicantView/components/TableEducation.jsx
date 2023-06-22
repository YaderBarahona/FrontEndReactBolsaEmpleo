import React, { useState } from "react";

import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

import { useQuery } from "react-query";

import { useMutation, useQueryClient } from "react-query";

import {
  deleteEducation,
  getEducation,
  getEducationById,
} from "../../../services/FormationService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { showAlert } from "../../../functions/Functions";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { deleteApplicant } from "../../../services/ApplicantService";

const TableEducation = (props) => {

  const queryClient = useQueryClient();

  const handleDelete = async (name) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "¿Sure to remove the education " + name + " ?",
      icon: "question",
      text: "You cannot go back",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEducation(id); // Envía la solicitud de eliminación

        queryClient.invalidateQueries("registros"); // Invalida la consulta existente y fuerza un refetch
      } else {
        showAlert("The education was NOT removed", "info");
      }
    });
  };

  const deleteA = (id, name) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "¿Sure to remove the education " + name + " ?",
      icon: "question",
      text: "You cannot go back",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEducation(id);
        // window.location.href = window.location.href;
        queryClient.invalidateQueries("education");
      } else {
        showAlert("The education was NOT removed", "info");
      }
    });
  };

  const { data, isLoading, isError } = useQuery(["education", props.id], () =>
    getEducationById(props.id)
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div>
      <hr />
      <h1>Education List</h1>
      <div className="container-fluid">
        <div className="table-responsive">
          <table className="table table-bordered tblAppl">
            <thead>
              <tr>
                {/* <th>#</th> */}
                <th>Tittle</th>
                <th>Description</th>
                <th>date</th>
                <th>id A</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {data.map((education, i) => (
                <tr key={education.idApplicant}>
                  <td>{education.idEducation}</td>
                  <td>{education.tittle}</td>
                  <td>{education.educationDescription}</td>
                  <td>{education.dateCompletionStudies}</td>
                  <td>
                    <button
                      onClick={() =>
                        deleteA(education.idEducation, education.title)
                      }
                      className="btn btn-danger" title="Delete education"
                    >
                      <i>
                        <FontAwesomeIcon icon={faTrash} />
                      </i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableEducation;
