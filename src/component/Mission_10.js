import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Mission_10() {
  const history = useHistory();
  const handleNext = () => {
    history.push("/Finish");
  };

  return (
    <div className="mission">
      <h1 className="mission-title">미션 :</h1>
      <h2 className="mission-description">남산타워로 와주세요.</h2>
      <div className="mission-list-label">
        아래 지도에 표시된 위치에서 버스를 타고,
        <br /> '남산타워 정류장' 에서 내려(3정거장) 남산타워까지 와주세요.
      </div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleNext}>
          남산타워 앞이에요.
        </Button>
      </div>
    </div>
  );
}

export default Mission_10;
