import React, { useState } from "react";
import Modal from "react-modal";
import { QueryClient, useMutation } from "react-query";
import { useQuery } from "react-query";
import { getApplicants } from "../../../services/ApplicantService";
import { postOffer } from "../../../services/OfferService";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const InputModal = ({ param }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { data, isLoading, isError } = useQuery("applicant", getApplicants);

  const MySwal = withReactContent(Swal);

  const openModal = () => {
    setIsOpen(true);
    console.log(param);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input value:", inputValue);
    closeModal();
    save(inputValue);
  };

  const queryClient = new QueryClient();

  const mutation = useMutation("ApplicantOffer", postOffer, {
    onSettled: () => queryClient.invalidateQueries("ApplicantOffer"),
    mutationKey: "ApplicantOffer",
  });

  const save = (id) => {
    const applicant = data.filter(
      (applicant) => applicant.email === inputValue
    );

    let idApplicant = applicant[0].idApplicant;

    console.log("id: " + idApplicant);
    let ApplicantOffer = {
      idApplicant: idApplicant,
      idOffer: parseInt(param),
    };

    try {
      mutation.mutateAsync(ApplicantOffer);
      console.log(ApplicantOffer);
      MySwal.fire({
        title: <strong>Offer applied!</strong>,
        icon: "success",
      });
    } catch (error) {
      MySwal.fire({
        title: <strong>Error...</strong>,
        icon: "error",
      });
    }
  };

  return (
    <div>
      <a onClick={openModal} className="btn btn-primary btn-sm float-right">
        Apply Offer
      </a>
      {/* <button onClick={openModal}>Open</button> */}

      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Apply"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Apply Offer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form className="formApply" onSubmit={handleSubmit}>
              <label>
                <input className="inputApply"
                  type="text"
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </label>
              <button className="btnApply" type="submit">Enviar</button>
            </form>
          </Typography>
        </Box>
      </Modal>

      {/* <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Apply">
        <p>OfferId: {param}</p>
        <form className="formApply" onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Email"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </Modal> */}
    </div>
  );
};

export default InputModal;
