import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";

const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/${tno}`); //여기 공백 있어서 오류났음
console.log(res)
  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;

  const res = await axios.get(`${prefix}/list`, { params: { ...pageParam } }); //params는 &로 연결해줌
  console.log(res)
  return res.data; //async의 모든 리턴은 프로미스? 래
};

export const postAdd = async (todoObj) => {
  // 이거원래 json JSON.stringify(obj) 로 객체 -> json 으로 만들어줘야하는데 axios를 사용하면 걍객체로 보내도된대
  const res = await axios.post(`${prefix}/`, todoObj);
  console.log(res)
  return res.data;
};


// TODO: 유스이팩트: 비동기 통신할때 어떤 조건에서만 호출 하는것(무한 반복을 방지)