import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Quest1() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const answer = {
    year: 2021,
    month: 11,
    date: 12,
  };
  const history = useHistory();

  const handleConfirm = () => {
    if (
      answer.year === selectedDate.getFullYear() &&
      answer.month === selectedDate.getMonth() + 1 &&
      answer.date === selectedDate.getDate()
    ) {
      alert("정답입니다.");
      history.push("/Question_01");
    } else {
      alert("오답입니다.");
    }
  };
  return (
    <>
      <div>
        <button>이전 단계로</button>
      </div>
      <div>우리는 언제 처음 만났을까요?</div>
      <KeyboardDatePicker
        value={selectedDate}
        onChange={handleDateChange}
        format="yyyy/MM/dd"
      />
      <p>
        <Button onClick={handleConfirm}>확인하기</Button>
      </p>
    </>
  );
}

export default Quest1;
