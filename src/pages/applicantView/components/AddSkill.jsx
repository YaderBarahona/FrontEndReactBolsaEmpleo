import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";

import { Collapse } from "bootstrap";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useQuery } from "react-query";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faFileLines,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

import { getSkills, postSkill } from "../../../services/SkillService";

  const AddSkill = (props) => {

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
      let myCollapse = document.getElementById("collapseTarget");
      let bsCollapse = new Collapse(myCollapse, { toggle: false });
      toggle ? bsCollapse.show() : bsCollapse.hide();
    });
  
  const queryClient = useQueryClient();

  const mutation = useMutation("ApplicantSkills", postSkill, {
    // onSuccess: () => {
    //   // Llamado después de una mutación exitosa
    //   queryClient.invalidateQueries('education'); // Invalida la consulta existente y fuerza un refetch
    // },
    onSettled: () => queryClient.invalidateQueries("ApplicantSkills"),
    mutationKey: "ApplicantSkills",
  });

  const { data, isLoading, isError } = useQuery("skill", getSkills, {
    enabled: true,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  const MySwal = withReactContent(Swal);

  const handleSave = (id) => {
    let newSkill = {
      idApplicant: props.id,
      idSkill: id,
    };
    mutation.mutateAsync(newSkill);

    MySwal.fire({
      title: <strong>Skill added!</strong>,
      icon: "success",
    });

    // setInput('');
  };

  //   const save = (id, name) => {
  //     const MySwal = withReactContent(Swal);
  //     MySwal.fire({
  //       title: "¿Sure to remove the education " + name + " ?",
  //       icon: "question",
  //       text: "You cannot go back",
  //       showCancelButton: true,
  //       confirmButtonText: "Yes, delete",
  //       cancelButtonText: "Cancel",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         deleteEducation(id);
  //         // window.location.href = window.location.href;
  //         queryClient.invalidateQueries("education");
  //       } else {
  //         showAlert("The education was NOT removed", "info");
  //       }
  //     });
  //   };

  return (
    <>
      <div className="py-2">
        <button
          className="btn btn-dark titulo-item"
          onClick={() => setToggle((toggle) => !toggle)}
        >
          Add Skill
        </button>
        <div className="collapse" id="collapseTarget">
          <br />
          <div class="container">
            <div class="row">
              {data.map((skill) => (
                <div class="col" key={skill.idSkill}>
                  <button
                    onClick={() => handleSave(skill.idSkill)}
                    className="btn btn-outline-dark skillBtn"
                    data-mdb-ripple-color="dark"
                  >
                    <i>
                      <FontAwesomeIcon icon={faFloppyDisk} />{" "}
                      {skill.skillDescription}
                    </i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSkill;
