import { useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { create } from "../../../services/ApplicantService";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faFileLines,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

import { showAlert } from "../../../functions/Functions";

const AddApplicant = () => {
  const queryClient = useQueryClient();
  const nameApplicant = useRef(null);
  const emailApplicant = useRef(null);
  const resumeApplicant = useRef(null);

  const MySwal = withReactContent(Swal);

  const mutation = useMutation("applicant", create, {
    // onSuccess: () => {
    //   // Llamado después de una mutación exitosa
    //   queryClient.invalidateQueries('applicant'); // Invalida la consulta existente y fuerza un refetch
    // },
    onSettled: () => queryClient.invalidateQueries("applicant"),
    mutationKey: "applicant",
  });

  const [input, setInput] = useState("");

  const takeChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSave = () => {
    let newApplicant = {
      name: nameApplicant.current.value,
      email: emailApplicant.current.value,
      resume: resumeApplicant.current.value,
    };
    mutation.mutateAsync(newApplicant);

    MySwal.fire({
      title: <strong>Applicant added!</strong>,
      icon: "success",
    });

    setInput("");
  };

  const validar = () => {
    if (nameApplicant.current.value === "") {
      showAlert("Type the name", "warning");
    } else if (emailApplicant.current.value === "") {
      showAlert("Tpe the email", "warning");
    } else if (resumeApplicant.current.value === "") {
      showAlert("Type the resume", "warning");
    } else {
      handleSave();
    }
  };

  return (
    <div>
      <br />
      <br />
      <h1>Add Applicant</h1>
      <div className="contendor">
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i>
              <FontAwesomeIcon icon={faUser} />
            </i>
          </span>
          <input
            value={input}
            onChange={takeChangeInput}
            ref={nameApplicant}
            type="text"
            name="name"
            className="form-control "
            placeholder="Name"
          ></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
          </span>
          <input
            value={input}
            onChange={takeChangeInput}
            ref={emailApplicant}
            type="text"
            name="email"
            className="form-control "
            placeholder="Email"
          ></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i>
              <FontAwesomeIcon icon={faFileLines} />
            </i>
          </span>
          <input
            value={input}
            onChange={takeChangeInput}
            ref={resumeApplicant}
            type="text"
            name="resume"
            className="form-control "
            placeholder="Resume"
          ></input>
        </div>

        <div className="d-grid col-6 mx-auto">
        {/* <div class="cssToolTip"> */}
          <button
            onClick={validar}
            className="btn btn-primary"
            title="Save applicant"
          >
            <i>
              <FontAwesomeIcon icon={faFloppyDisk} /> Save
            </i>
            {/* <span> Add applicant </span> */}
          </button>
          {/* </div> */}
        </div>        
      </div>
    </div>
  );
};

export default AddApplicant;
