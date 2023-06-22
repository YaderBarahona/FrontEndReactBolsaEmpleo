import { useRef, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Collapse } from "bootstrap";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faFileLines,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

import { showAlert } from "../../../functions/Functions";
import { postEducation } from "../../../services/FormationService";

const AddEducation = (props) => {
  const queryClient = useQueryClient();
  const tittleEducation = useRef(null);
  const descriptionEducation = useRef(null);
  const dateEducation = useRef(null);

  // const applicantP = useParams();

  const MySwal = withReactContent(Swal);

  const mutation = useMutation("education", postEducation, {
    // onSuccess: () => {
    //   // Llamado después de una mutación exitosa
    //   queryClient.invalidateQueries('education'); // Invalida la consulta existente y fuerza un refetch
    // },
    onSettled: () => queryClient.invalidateQueries("education"),
    mutationKey: "education",
  });
  
  const [input, setInput] = useState('');

  const takeChangeInput = (e) => {
      setInput(e.target.value);
  } 

  const handleSave = () => {
    let newEducation = {
      tittle: tittleEducation.current.value,
      educationDescription: descriptionEducation.current.value,
      dateCompletionStudies: dateEducation.current.value,
      idApplicant: props.id,
    };
    mutation.mutateAsync(newEducation);

    MySwal.fire({
      title: <strong>Education added!</strong>,
      icon: "success",
    });

    setInput('');

  };
  var [toggle, setToggle] = useState(false);

  useEffect(() => {
    var myCollapse = document.getElementById("collapseTarget");
    var bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
  });
  const validar = () => {
    if (tittleEducation.current.value === "") {
      showAlert("Type the tittle", "warning");
    } else if (descriptionEducation.current.value === "") {
      showAlert("Type the description", "warning");
    } else if (dateEducation.current.value === "") {
      showAlert("Select the date", "warning");
    } else {
      handleSave();
    }
  };




  return (
    <>
      <div className="py-2">
        <button
          className="btn btn-dark titulo-item"
          onClick={() => setToggle((toggle) => !toggle)}
        >
          Add education
        </button>
        <div className="collapse" id="collapseTarget">
          <div className="contendor">
            <div className="input-group mb-3">
              <span className="input-group-text ">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
              </span>
              <input
                value={input}
                ref={tittleEducation}
                id="inputa"
                type="text"
                name="tittle"
                className="form-control task-input"
                placeholder="Tittle"
                onChange={takeChangeInput}
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
                ref={descriptionEducation}
                id="inputb"
                type="text"
                name="description"
                className="form-control task-input" 
                placeholder="Description"
                onChange={takeChangeInput}
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
                ref={dateEducation}
                id="inputc"
                type="text"
                name="date"
                className="form-control task-input"
                placeholder="Date"
                onChange={takeChangeInput}
              ></input>
            </div>

            <div className="d-grid col-6 mx-auto">
              <button onClick={validar} className="btn btn-success">
                <i>
                  <FontAwesomeIcon icon={faFloppyDisk} /> Save
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEducation;
