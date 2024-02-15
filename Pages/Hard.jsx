import React, { useEffect, useRef, useState } from "react";
import Winner from "/Winner.png";
import Loser from "/Loser.png";
import Btn_back from "../src/Components/MyButton";

export const Hard = () => {
  const hardMode = () => {
    let r = Math.floor(Math.random() * 100) + 1;
    console.log("random " + r);
    return r;
  };

  let [round, setround] = useState(1);
  let [time, setlife] = useState(0);
  const [value, setValue] = useState("");
  const [random, setRandom] = useState(hardMode);
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

  const checkhard = () => {
    let values = Number(document.getElementById("input-hard").value);
    answerLoser.current.innerText = random;
    answerCorrect.current.innerText = random;
    document.getElementById("input-hard").value = "";

    if (values != " ") {
      inputValues.push(values); // เก็บค่าที่ส่งเข้ามาเป็น array เพื่อที่จำนำไปแสดง
      hint.current.innerText = "";

      if (round < 10) {
        if (values === random) {
          popup_youwin.current.style.display = "block";
        } else if (random >= 10 && random <= 20 && round > 0) {
          hint.current.innerText = "Close 10 TO 20";
        } else if (random >= 20 && random <= 30 && round > 0) {
          hint.current.innerText = "Close 20 To 30";
        } else if (random >= 30 && random <= 40 && round > 0) {
          hint.current.innerText = "Close 30 To 40";
        } else if (random >= 40 && random <= 50 && round > 0) {
          hint.current.innerText = "Close 40 To 50";
        } else if (random >= 50 && random <= 60 && round > 0) {
          hint.current.innerText = "Close 50 To 60";
        } else if (random >= 60 && random <= 70 && round > 0) {
          hint.current.innerText = "Close 60 To 70";
        } else if (random >= 70 && random <= 80 && round > 0) {
          hint.current.innerText = "Close 70 To 80";
        } else if (random >= 80 && random <= 90 && round > 0) {
          hint.current.innerText = "Close 80 To 90";
        } else if (random >= 90 && random <= 100 && round > 0) {
          hint.current.innerText = "Close 90 To 100";
        } else if (random >= 100 && random <= 100 && round > 0) {
          hint.current.innerText = "Close 100 ";
        }
        setround(round + 1);
      } else if (round == 10) {
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
    document.getElementById("number4").innerText = list[3] || "";
    document.getElementById("number5").innerText = list[4] || "";
    document.getElementById("number6").innerText = list[5] || "";
    document.getElementById("number7").innerText = list[6] || "";
    document.getElementById("number8").innerText = list[7] || "";
    document.getElementById("number9").innerText = list[8] || "";
    document.getElementById("number10").innerText = list[9] || "";
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
    window.location.reload();
  }

  return (
    <div className="containergame">
      <p className="easy-mode">Mode : Hard (1-100)</p>
      <div className="round ">
        <div style={{ textAlign: "center" }}>
          <p style={{ paddingTop: "25px" }} className="Life">
            Life
            <span className="display-round" ref={rounds}></span> {time} / 10
            Time
          </p>
          <p className="pen">Hint</p>
          <p className="hint" ref={hint}></p>
        </div>
        <span className="display-round" ref={rounds}></span>
        <p ref={hint}></p>
      </div>
      <input
        className="input-number"
        id="input-hard"
        type="number"
        min="1"
        max="10"
        value={value}
        onChange={handleChange}
      />
      <div className="display-number">
        <div className="display-row-3">
          <div className="four" id="number1"></div>
          <div className="four" id="number2"></div>
          <div className="four" id="number3"></div>
          <div className="four" id="number4"></div>
          <div className="four" id="number5"></div>
        </div>
        <div className="display-row-5">
          <div className="four" id="number6"></div>
          <div className="four" id="number7"></div>
          <div className="four" id="number8"></div>
          <div className="four" id="number9"></div>
          <div className="four" id="number10"></div>
        </div>
        <button onClick={checkhard} type="button" className="btn-check">
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
