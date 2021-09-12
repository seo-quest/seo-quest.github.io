import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Start() {
  const history = useHistory();
  const handleStartBtn = () => {
    history.push("/Mission/01");
  };

  return (
    <div className="main">
      <p>지금부터 문제를 다 풀기 전까지는 저와 연락을 할 수가 없습니다.</p>
      <p>다음의 문제를 풀고 순서에 따라 진행해 주세요.</p>
      <Button color="primary" onClick={handleStartBtn}>
        시작하기
      </Button>
    </div>
  );
}

export default Start;
