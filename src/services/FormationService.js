import api from "../config/api";

export const getEducation = async () => {
  let data = await api.get("/Education").then((result) => result.data);
  console.log(data);
  return data;
};

export const postEducation = async (education) => {
  let data = await api
    .post("/Education", education)
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


//getallbyid con todas las formaciones del applicant
export const getEducationById = async (id) => {
  let data = await api.get("/EducationApplicant/"+id).then((result) => result.data);
  console.log(data);
  return data;
};

//getbyid

export const deleteEducation = async (id) => {
  try {
    let data = await api.delete(`/Education/${id}`);
    // return data;
    console.log(data.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};









