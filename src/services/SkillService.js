import api from "../config/api";

export const getSkills = async () => {
  let data = await api.get("/Skill").then((result) => result.data);
  console.log(data);
  return data;
};

//post de skill applicant 
export const postSkill = async (education) => {
  let data = await api
    .post("/ApplicantSkills", education)
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


//getallbyid con todas las skill del applicant
export const getSkillByID = async (id) => {
  let data = await api.get("/ApplicantSkill/"+id).then((result) => result.data);
  console.log(data);
  return data;
};

//getbyid

export const deleteSkill = async (id) => {
  try {
    let data = await api.delete(`/Skill/${id}`);
    // return data;
    console.log(data.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};









