import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";

const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/${tno}`); //여기 공백 있어서 오류났음

  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;

  const res = await axios.get(`${prefix}/list`, { params: { ...pageParam } });

  return res.data;
};

export const postAdd = async (todoObj) => {
  // 이거원래 json JSON.stringify(obj) 로 객체 -> json 으로 만들어줘야하는데 axios를 사용하면 걍객체로 보내도된대
  const res = await axios.post(`${prefix}/`, todoObj);

  return res.data;
};
