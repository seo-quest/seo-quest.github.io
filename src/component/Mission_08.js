import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Mission_08() {
  const history = useHistory();
  const handleNext = () => {
    history.push("/Mission/09");
  };

  return (
    <div className="mission">
      <h1 className="mission-title">미션 :</h1>
      <h2 className="mission-description">물품 보관함 번호는 XX입니다.</h2>
      <div className="mission-list-label">
        이전 문제의 정답을 비밀번호로 보관함을 열어보세요!
      </div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleNext}>
          보관함을 열었습니다!
        </Button>
      </div>
    </div>
  );
}

export default Mission_08;