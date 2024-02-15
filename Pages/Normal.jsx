import React, { useEffect, useRef, useState } from "react";
import Winner from "/Winner.png";
import Loser from "/Loser.png";
import Btn_back from "../src/Components/MyButton";

export const Normal = () => {
  const normalMode = () => {
    let r = Math.floor(Math.random() * 50) + 1;
    console.log("random " + r);
    return r;
  };

  let [round, setround] = useState(1);
  let [time, setlife] = useState(0);
  const [value, setValue] = useState("");
  const [random, setRandom] = useState(normalMode);
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

  const checknormal = () => {
    let values = Number(document.getElementById("input-normal").value);
    answerLoser.current.innerText = random;
    answerCorrect.current.innerText = random;
    document.getElementById("input-normal").value = "";

    if (values != " ") {
      inputValues.push(values); // เก็บค่าที่ส่งเข้ามาเป็น array เพื่อที่จำนำไปแสดง
      hint.current.innerText = "";

      if (round < 5) {
        if (values === random) {
          popup_youwin.current.style.display = "block";
        } else if (random >= 1 && random <= 10 && round > 0) {
          hint.current.innerText = "Close 1 TO 10";
        } else if (random >= 11 && random <= 20 && round > 0) {
          hint.current.innerText = "Close 11 To 20";
        } else if (random >= 21 && random <= 30 && round > 0) {
          hint.current.innerText = "Close 21 To 30";
        } else if (random >= 31 && random <= 40 && round > 0) {
          hint.current.innerText = "Close 31 To 40";
        } else if (random >= 41 && random <= 50 && round > 0) {
          hint.current.innerText = "Close 41 To 50";
        }
        setround(round + 1);
      } else if (round == 5) {
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
      <p className="easy-mode">Mode : Normal (1-50)</p>
      <div className="round ">
        <div style={{ textAlign: "center" }}>
          <p style={{ paddingTop: "25px" }} className="Life">
            Life
            <span className="display-round" ref={rounds}></span>
            {time} / 5 Time
          </p>
          <p className="pen">Hint</p>
          <p className="hint" ref={hint}></p>
        </div>
        <span className="display-round" ref={rounds}></span>
        <p ref={hint}></p>
      </div>
      <input
        className="input-number"
        id="input-normal"
        type="number"
        min="1"
        max="10"
        value={value}
        onChange={handleChange}
      />
      <div className="display-number">
        <div className="display-row-3">
          <div className="three" id="number1"></div>
          <div className="three" id="number2"></div>
          <div className="three" id="number3"></div>
          <div className="three" id="number4"></div>
        </div>
        <div className="display-row-4">
          <div className="three" id="number5"></div>
        </div>
        <button onClick={checknormal} type="button" className="btn-check">
          Submit
        </button>
        <div className="popup-youwin" ref={popup_youwin}>
          <img src={Winner} width="180px" height="180px" alt="Winner" />
          <div className="win">Youwin</div>
          <div className="answer" ref={answerCorrect}></div>
          <div onClick={close_popup}>
            <button className="newgame" onClick={refresh}>
              Play Again
            </button>
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
