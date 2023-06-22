import api from "../config/api";

export const getOffers = async () => {
  let data = await api.get("/Offer").then((result) => result.data);
  console.log(data);
  return data;
};

//post de skill applicant 
export const postOffer = async (education) => {
  let data = await api
    .post("/OfferApplicants", education)
    .then((result) => result.data);
  return data;
};

// export const getEducationById = async (id, state) => {
//   try {
//     let response = await api.get(`/Education/${id}`);
//     let data = response.data;
//     state(data);
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };










