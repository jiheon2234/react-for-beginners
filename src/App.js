import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi:)");
    return function () {
      console.log("bye:(");
    };
  }, []);
  // useEffect(function () {
  //   console.log("hi:)");
  //   return function () {
  //     console.log("bye:(");
  //   };
  // }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   // console.log("i run all the time");
//   useEffect(() => {
//     console.log("I run only once");
//   }, []); //처음에만실행됨
//   useEffect(() => {
//     if (keyword !== "" && keyword.length > 6) {
//       console.log("I run Keyword changes", keyword);
//     }
//   }, [keyword]);

//   useEffect(() => {
//     console.log("I run when 'counter' changes");
//   }, [counter]);

//   useEffect(() => {
//     console.log("i run when counter | keyword changes");
//   }, [counter, keyword]);

//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here...." />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me!!</button>
//     </div>
//   );
// }

export default App;
