import { useState } from "react";

// function App() {
//   const handleOnMouseEnter = () => {
//     console.log("안녕하세요!");
//   };

//   const handleOnMouseLeave = () => {
//     console.log("안녕히가세요!");
//   };

//   return (
//     <div>
//       <p onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
//         여기에 마우스를 올려보세요!
//       </p>
//     </div>
//   );
// }

// function App() {
//   const [message, setMessage] = useState("여기를 주목하세요");

//   const handleOnMouseEnter = () => {
//     setMessage("안녕하세요!");
//   };

//   const handleOnMouseLeave = () => {
//     setMessage("안녕히가세요!");
//   };

//   return (
//     <div>
//       <p onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
//         여기에 마우스를 올려보세요!
//       </p>
//       <div>{message}</div>
//     </div>
//   );
// }

// function App() {
//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     console.log("submit");
//   };

//   const handleLoginInput = (e) => {
//     console.log("id", e.target.value);
//   };

//   const handlePasswordInput = (e) => {
//     console.log("pw", e.target.value);
//   };

//   return (
//     <form onSubmit={handleLoginSubmit}>
//       <label>
//         아이디 :
//         <input type="text" onChange={handleLoginInput} />
//       </label>
//       <br />
//       <label>
//         비밀번호 :
//         <input type="password" onChange={handlePasswordInput} />
//       </label>
//       <button type="submit">로그인</button>
//     </form>
//   );
// }

import Login from "./Login";
import Homepage from "./Homepage";
import Modal from "./Modal";

function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i) => (
    <h1>
      안녕, {name} {i}호
    </h1>
  ));

  return <div>{numComponentsArray}</div>;
}

function App() {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: "1234",
  };

  const [login, setLogin] = useState(false);
  const [modalShow, setModalShow] = useState(true);

  function modalClose() {
    setModalShow(false);
  }

  return (
    <>
      {login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />}
      {modalShow && (
        <Modal modalClose={modalClose}>
          <h2>사용약관에 대해 말씀드리겠습니다</h2>
          <p>lorem</p>
          <a href="#none">더보기</a>
        </Modal>
      )}
      <Hello name="licat" />
    </>
  );
}

export default App;
