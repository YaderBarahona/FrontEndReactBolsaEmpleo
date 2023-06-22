import api from "../config/api";

export const getApplicants = async () => {
  let data = await api.get("/Applicant").then((result) => result.data);
  console.log(data);
  return data;
};

export const create = async (applicant) => {
  let data = await api
    .post("/Applicant", applicant)
    .then((result) => result.data);
  return data;
};

export const getRecursoPorId = async (id, state) => {
  try {
    let response = await api.get(`/Applicant/${id}`);
    let data = response.data;
    state(data);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteApplicant = async (id) => {
  try {
    let data = await api.delete(`/Applicant/${id}?idApplicant=${id}`);
    queryCache.invalidateQueries(['applicant', id]);
    // return data;
    console.log(data.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};









