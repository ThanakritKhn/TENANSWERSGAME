import React, { useEffect, useRef, useState } from "react";
import Winner from "/Winner.png";
import Loser from "/Loser.png";
import Btn_back from "../src/Components/MyButton";

export const Easy = () => {
  const easyMode = () => {
    let r = Math.floor(Math.random() * 10) + 1;
    console.log("random " + r);
    return r;
  };

  let [round, setround] = useState(1);
  let [time, setlife] = useState(0);
  const [value, setValue] = useState("");
  const [random, setRandom] = useState(easyMode);
  const [list, Setlist] = useState([]);

  const hint = useRef();
  const rounds = useRef();
  const answerCorrect = useRef();
  const answerLoser = useRef();
  const popup_youwin = useRef();
  const popup_youlost = useRef();

  let inputValues = [];

  useEffect(() => {
    setlife(time + 1);
  }, [round]);

  const submitez = () => {
    let values = Number(document.getElementById("input-easy").value);
    answerLoser.current.innerText = random;
    answerCorrect.current.innerText = random;
    document.getElementById("input-easy").value = "";

    if (values != " ") {
      inputValues.push(values); // เก็บค่าที่ส่งเข้ามาเป็น array เพื่อที่จำนำไปแสดง
      hint.current.innerText = "";

      if (round < 3) {
        if (values === random) {
          popup_youwin.current.style.display = "block";
        } else if (random >= 1 && random <= 3 && round > 0) {
          hint.current.innerText = "Close 1 TO 3";
        } else if (random >= 3 && random <= 6 && round > 0) {
          hint.current.innerText = "Close 3 To 6";
        } else if (random >= 6 && random <= 10 && round > 0) {
          hint.current.innerText = "Close 6 To 10";
        }

        setround(round + 1);
      } else if (round == 3) {
        if (values === random) {
          popup_youwin.current.style.display = "block";
        } else {
          popup_youlost.current.style.display = "block";
        }
      }
    } else {
      hint.current.innerText = "Please enter a number!";
    }

    list.push(inputValues);
    document.getElementById("number1").innerText = list[0] || "";
    document.getElementById("number2").innerText = list[1] || "";
    document.getElementById("number3").innerText = list[2] || "";
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 2) {
      setValue(inputValue);
    }
  };

  function close_popup() {
    document.getElementById("popup").style.display = "none";
  }

  function refresh() {
    window.location.reload(Easy);
  }

  return (
    <div className="containergame">
      <p className="easy-mode">Mode : Easy (1-10)</p>
      <div className="round ">
        <div style={{ textAlign: "center" }}>
          <p style={{ paddingTop: "25px" }} className="Life">
            Life
            <span className="display-round" ref={rounds}></span>
            {time}/ 3 Time
          </p>
          <p className="pen">Hint</p>
          <p className="hint" ref={hint}></p>
        </div>
        <span className="display-round" ref={rounds}></span>
        <p ref={hint}></p>
      </div>
      <input
        className="input-number"
        id="input-easy"
        type="number"
        min="1"
        max="10"
        value={value}
        onChange={handleChange}
      />
      <div className="display-number">
        <div className="display-row-1">
          <div className="one" id="number1"></div>
          <div className="one" id="number2"></div>
        </div>
        <div className="display-row-6">
          <div className="one" id="number3"></div>
        </div>
        <button onClick={submitez} type="button" className="btn-check">
          Submit
        </button>
        <div className="popup-youwin" ref={popup_youwin}>
          <img src={Winner} width="180px" height="180px" alt="Winner" />
          <div className="win">Youwin</div>
          <div className="answer" ref={answerCorrect}></div>
          <div onClick={close_popup} className="newgame">
            <a onClick={refresh}>Play Again</a>
          </div>
        </div>
        <div className="popup-lose" ref={popup_youlost}>
          <img src={Loser} width="180px" height="180px" alt="Loser" />
          <div className="lose">Loser</div>
          <div className="answer" ref={answerLoser}></div>
          <div onClick={close_popup}>
            <button className="newgamelost" onClick={refresh}>
              Play Again
            </button>
          </div>
        </div>
      </div>
      <div>
        <Btn_back />
      </div>
    </div>
  );
};
