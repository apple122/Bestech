import { useEffect, useReducer, useState } from "react";
import Axios from "axios";
import apiurl from "../../service/server";
import Swal from "sweetalert2";
import axios from "axios";
import Moment from "moment";

const useLuckyDraw = () => {

  const [spin, setSpin] = useState(false);
  const [ring1, setRing1] = useState();
  const [ring2, setRing2] = useState();
  const [ring3, setRing3] = useState();
  const [ring4, setRing4] = useState();
  const [ring5, setRing5] = useState();
  const [ring6, setRing6] = useState();
  const [ring7, setRing7] = useState();
  const [ring8, setRing8] = useState();
  const [ring9, setRing9] = useState();
  const [ring10, setRing10] = useState();
  const [ring11, setRing11] = useState();
  const [ring12, setRing12] = useState();
  const [ring13, setRing13] = useState();
  const [ring14, setRing14] = useState();
  const [ring15, setRing15] = useState();
  const [ring16, setRing16] = useState();
  const [ring17, setRing17] = useState();
  const [ring18, setRing18] = useState();
  const [ring19, setRing19] = useState();

  const [ reducer, setRedeuce ] = useReducer(x => x + 1, 0)
  const [prize, setPrize] = useState([]);
  const [showWeek, setShowWeek] = useState();
  const [ GETAPIWEEK, setGETweek ] = useState([])
  const [winner, setWinner] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [drawdateID, setDrawdateID] = useState([]);
  const [ TimeDraw, setIimedraw ] = useState([])
  const [ Response, setresponse ] = useState([])
  const [ INterNet, setInternet ] = useState(false)
  const [ GetAPI_UID, setGEtAPI_UID ] = useState([])
  const [ NUmberReplay, setNUmberReplay ] = useState('')
  const [ NumberNone, setDisplayNone ] = useState(false)

  const [bill, setBill] = useState("");
  const [ Display, setDisplay ] = useState(false)

  const LoopQnumberDrw = [...new Set(GetAPI_UID.map(item => item.prize.title))]

  function row1() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring1 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring1 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring1 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring1 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring1 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring1 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring1 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring1 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring1 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring1 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring1 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    } else if (ring1 === " ") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">&nbsp;</div>
        </>
      );  
    }else if (ring1 === " ") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">&nbsp;</div>
        </>
      );  
    }
  }

  function row2() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring2 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring2 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring2 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring2 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring2 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring2 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring2 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring2 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring2 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring2 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring2 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }else if (ring2 === " ") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">&nbsp;</div>
        </>
      );  
    }else if (ring2 === " ") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">&nbsp;</div>
        </>
      );  
    }
  }

  function row3() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring3 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring3 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring3 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring3 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring3 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring3 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring3 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring3 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring3 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring3 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring3 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }else if (ring3 === " ") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">&nbsp;</div>
        </>
      );  
    }
  }

  function row4() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring4 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring4 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring4 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring4 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring4 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring4 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring4 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring4 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring4 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring4 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring4 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
  }

  function row5() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring5 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring5 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring5 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring5 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring5 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring5 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring5 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring5 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring5 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring5 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring5 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
  }

  function row6() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring6 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring6 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring6 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring6 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring6 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring6 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring6 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring6 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring6 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring6 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring6 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
  }

  function row7() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring7 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring7 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring7 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring7 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring7 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring7 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring7 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring7 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring7 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring7 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring7 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
  }

  function row8() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring8 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring8 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring8 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring8 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring8 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring8 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring8 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring8 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring8 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring8 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring8 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
  }

  function row9() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring9 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring9 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring9 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring9 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring9 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring9 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring9 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring9 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring9 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring9 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring9 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
  }

  function row10() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring10 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring10 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring10 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring10 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring10 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring10 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring10 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring10 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring10 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring10 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring10 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
  }

  function row11() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring11 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring11 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring11 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring11 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring11 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring11 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring11 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring11 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring11 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring11 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring11 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
  }

  function row12() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring12 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring12 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring12 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring12 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring12 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring12 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring12 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring12 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring12 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring12 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring12 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
  }

  function row13() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring13 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring13 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring13 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring13 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring13 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring13 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring13 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring13 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring13 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring13 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring13 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
  }

  function row14() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring14 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring14 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring14 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring14 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring14 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring14 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring14 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring14 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring14 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring14 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring14 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
  }

  function row15() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring15 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring15 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring15 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring15 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring15 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring15 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring15 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring15 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring15 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring15 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring15 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    } else if (ring15 === "x") {
      return (
        <>
          <div className="ringEnd">&nbsp;</div>
          <div className="ringEnd">&nbsp;</div>
        </>
      );
    }
  }

  function row16() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring16 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring16 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring16 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring16 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring16 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring16 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring16 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring16 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring16 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring16 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring16 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    } else if (ring16 === "x") {
      return (
        <>
          <div className="ringEnd">&nbsp;</div>
          <div className="ringEnd">&nbsp;</div>
        </>
      );
    }
  }

  function row17() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring17 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring17 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring17 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring17 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring17 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring17 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring17 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring17 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring17 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring17 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring17 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    } else if (ring17 === "x") {
      return (
        <>
          <div className="ringEnd">&nbsp;&nbsp;</div>
          <div className="ringEnd">&nbsp;&nbsp;</div>
        </>
      );
    }
  }

  function row18() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring18 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring18 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring18 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring18 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring18 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring18 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring18 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring18 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring18 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring18 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring18 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
    else if (ring18 === "x") {
      return (
        <>
          <div className="ringEnd">&nbsp;&nbsp;</div>
          <div className="ringEnd">&nbsp;&nbsp;</div>
        </>
      );
    }
  }

  function row19() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd"></div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (spin && ring19 === undefined) {
      return (
        <>
          <div className="ringMoving">0</div>
          <div className="ringMoving">1</div>
          <div className="ringMoving">2</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">3</div>
          <div className="ringMoving">4</div>
          <div className="ringMoving">5</div>
          <div className="ringMoving">6</div>
          <div className="ringMoving">7</div>
          <div className="ringMoving">8</div>
          <div className="ringMoving">9</div>
        </>
      );
    } else if (ring19 === "1") {
      return (
        <>
          <div className="ringEnd">0</div>
          <div className="ringEnd">1</div>
        </>
      );
    } else if (ring19 === "2") {
      return (
        <>
          <div className="ringEnd">1</div>
          <div className="ringEnd">2</div>
        </>
      );
    } else if (ring19 === "3") {
      return (
        <>
          <div className="ringEnd">2</div>
          <div className="ringEnd">3</div>
        </>
      );
    } else if (ring19 === "4") {
      return (
        <>
          <div className="ringEnd">3</div>
          <div className="ringEnd">4</div>
        </>
      );
    } else if (ring19 === "5") {
      return (
        <>
          <div className="ringEnd">4</div>
          <div className="ringEnd">5</div>
        </>
      );
    } else if (ring19 === "6") {
      return (
        <>
          <div className="ringEnd">5</div>
          <div className="ringEnd">6</div>
        </>
      );
    } else if (ring19 === "7") {
      return (
        <>
          <div className="ringEnd">6</div>
          <div className="ringEnd">7</div>
        </>
      );
    } else if (ring19 === "8") {
      return (
        <>
          <div className="ringEnd">7</div>
          <div className="ringEnd">8</div>
        </>
      );
    } else if (ring19 === "9") {
      return (
        <>
          <div className="ringEnd">8</div>
          <div className="ringEnd">9</div>
        </>
      );
    } else if (ring19 === "0") {
      return (
        <>
          <div className="ringEnd">9</div>
          <div className="ringEnd">0</div>
        </>
      );
    }
    else if (ring19 === "x") {
      return (
        <>
          <div className="ringEnd">&nbsp;&nbsp;</div>
          <div className="ringEnd">&nbsp;&nbsp;</div>
        </>
      );
    }
  }

  const getAllPrizes = () => {
    Axios.get(apiurl.Mainurl + apiurl.getPrize)
      .then((res) => {
        setInternet(true)
        setPrize(res.data);
      })
      .catch((error) => {
        setInternet(true)
        console.log(error.response);
      });
  };
  const GetLatestWeek = ()=>{
    Axios.get(apiurl.Mainurl + apiurl.getWeek).then((res) => {
      setInternet(true)
      setGETweek(res.data.reverse());
    })
    .catch((error) => {
      setInternet(false)
      console.log(error.response);
    });
  }

  const GETTimeDraw = () => {
    axios.get(apiurl.Mainurl + apiurl.getLatestDrawDate).then((res) => {
      setIimedraw(res.data.data)
    })
  }

  useEffect(()=>{
    getAllPrizes()
    GetLatestWeek()
    GETTimeDraw()
  }, [])

  const GETUIDWEEK = async (e) => {
    setLoading1(false)
    axios.get(apiurl.Mainurl + apiurl.getWeekwinner + `?week_id=${e}`).then((res) => {
      setGEtAPI_UID(res.data.data)
      setLoading1(true)
      setDisplay(false)
    })
  }

  const [ UIDPRICE, setPriceNumber ] = useState('')
  const PriceUIDNUmber = (e) => {
    setPriceNumber(e)
  }

  const [ NumberBil, setNumberShow ] = useState('')

  const ClickReplay = (play, Closs) => {
    setRedeuce()
    setDisplayNone(false)
    GetAPI_UID.filter((e) => e.prize.title == UIDPRICE).map((item, index) => (
      setTimeout(() => {
        setDisplay(true)
        if(GetAPI_UID.filter((e) => e.prize.title == UIDPRICE).length == (index+1)){
          setTimeout(() => {
            setDisplay(false)
          }, 4000)
        }
        setSpin(true);
        setRing1();
        setRing2();
        setRing3();
        setRing4();
        setRing5();
        setRing6();
        setRing7();
        setRing8();
        setRing9();
        setRing10();
        setRing11();
        setRing12();
        setRing13(); 
        setRing14();
        setRing15();
        setRing16();
        setRing17();
        setRing18();
        setRing19();
        setTimeout(() => {
          
          const splitBill = item.bil_number;
    
          setTimeout(() => {
            const value_rand1 = splitBill[0];
            setRing1(value_rand1);
          }, 200);
          setTimeout(function () {
            const value_rand2 = splitBill[1];
            setRing2(value_rand2);
          }, 300);
          setTimeout(function () {
            const value_rand3 = splitBill[2];
            setRing3(value_rand3);
          }, 400);
          setTimeout(() => {
            setRing4(splitBill[3]);
          }, 500);
          setTimeout(() => {
            setRing5(splitBill[4]);
          }, 600);
          setTimeout(() => {
            setRing6(splitBill[5]);
          }, 700);
          setTimeout(() => {
            setRing7(splitBill[6]);
          }, 800);
          setTimeout(() => {
            setRing8(splitBill[7]);
          }, 900);
          setTimeout(() => {
            setRing9(splitBill[8]);
          }, 1000);
          setTimeout(() => {
            setRing10(splitBill[9]);
          }, 1200);
          setTimeout(() => {
            setRing11(splitBill[10]);
          }, 1400);
          setTimeout(() => {
            setRing12(splitBill[11]);
          }, 1600);
          setTimeout(() => {
            setRing13(splitBill[12]);
          }, 1800);
          setTimeout(() => {
            setRing14(splitBill[13]);
          }, 2000);
          setTimeout(() => {
            setRing15((19 - splitBill.length) > 4 ? 'x' : splitBill[14]);
          }, 2200);
          setTimeout(() => {
            setRing16((19 - splitBill.length) > 3 ? 'x' : splitBill[15]);
          }, 2400);
          setTimeout(() => {
            setRing17((19 - splitBill.length) > 2 ? 'x' : splitBill[16]);
          }, 2600);
          setTimeout(() => {
            setRing18((19 - splitBill.length) > 1 ? 'x' : splitBill[17]);
          }, 2800);
          setTimeout(() => {
            setRing19((19 - splitBill.length) > 0 ? 'x' : splitBill[18]);
          }, 3000);
          setTimeout(() => {
            setNUmberReplay(index)
            setNumberShow(item.bil_number)
            setDisplayNone(true)
          }, 3400)
        

          // setTimeout(() => {
          //   const Toast = Swal.mixin({
          //     toast: true,
          //     position: 'top-end',
          //     showConfirmButton: false,
          //     timer: 4000,
          //     timerProgressBar: true,
          //     didOpen: (toast) => {
          //       toast.addEventListener('mouseenter', Swal.stopTimer)
          //       toast.addEventListener('mouseleave', Swal.resumeTimer)
          //     }
          //   })
            
          //   Toast.fire({
          //     icon: 'success',
          //     title: `Replay ລຳດັບທີ່: #${index+1}`
          //   }, 0)
          // })

        }, 1000);
      }, 8000*(index))
    ))
  }


  const showWinner = () => {
    const Allring =
      ring1 +
      ring2 +
      ring3 +
      ring4 +
      ring5 +
      ring6 +
      ring7 +
      ring8 +
      ring9 +
      ring10 +
      ring11 +
      ring12 +
      ring13 +
      ring14 +
      (ring15 == 'x' ? '' : ring15) +
      (ring16 == 'x' ? '' : ring16) +
      (ring17 == 'x' ? '' : ring17) +
      (ring18 == 'x' ? '' : ring18) +
      (ring19 == 'x' ? '' : ring19);

    if (Allring === NumberBil && Allring !== undefined) {
      return <p className="priceInd">The winner is : {NumberBil}</p>;
    }
  };

  return {
    ring1,
    ring2,
    ring3,
    bill,
    spin,
    prize,
    showWeek,
    GETAPIWEEK,
    GETUIDWEEK,
    row1,
    row2,
    row3,
    row4,
    row5,
    row6,
    row7,
    row8,
    row9,
    row10,
    row11,
    row12,
    row13,
    row14,
    row15,
    row16,
    row17,
    row18,
    row19,
    showWinner,
    TimeDraw,
    INterNet,
    GetAPI_UID,
    NumberBil,
    LoopQnumberDrw,
    ClickReplay,
    PriceUIDNUmber,
    UIDPRICE,
    loading1,
    Display,
    NUmberReplay,
    NumberNone,
  };
};
export default useLuckyDraw;
