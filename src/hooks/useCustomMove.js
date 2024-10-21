import React, { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";



const getNum = (param, defaultVaue) => {
  if (!param) {
    return defaultVaue;
  }
  return parseInt(param);
};




const useCustomMove = () => {
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();
  const [queryParams] = useSearchParams(); //쿼리 스트링 처리 훅


  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);


  //page=3&size=10 이렇게만드는 함수
  const queryDefault = createSearchParams({ page, size }).toString();





  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1);
      const sizeNum = getNum(pageParam.size, 10);

      queryStr = createSearchParams({page: pageNum,size: sizeNum,}).toString();
    } else {
      queryStr = queryDefault;
    }

    setRefresh(!refresh);
    navigate({ pathname: `../list`, search: queryStr });
  };

  const moveToModify = (num) => {
    navigate({
      pathname: `../modify/${num}`, //..은 상대 경로에서 현재 디렉토리의 부모를 가리킵니다. 즉, 현재 URL의 한 단계 위 경로로 이동하는 것입니다.
      search: queryDefault, //쿼리 문자열을 설정합니다.
      //url에 쿼리문자열을 추가하여 페이지 전환시에도 해당정보를 유지할수있음
    });
  };

  const moveToRoad = (num) => {
    navigate({
      pathname: `../read/${num}`,
      search: queryDefault,
    });
  };

  return { moveToList, moveToModify, moveToRoad, page, size, refresh }; //컴포넌트  x  이건 커스텀 훅 이고 반환하는건 객체
};

export default useCustomMove;
