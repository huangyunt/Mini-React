import { ReactDOM } from "../react-dom/index";
import { React } from "../react/index";
console.log(React);
// const element = (
//     <div style={{ width: 200, height: 200, color: "red" }}>
//         hello
//         <span
//             onClick={() => {
//                 console.log(111);
//             }}
//         >
//             world!
//         </span>
//         <div>huangyunze</div>
//         <b></b>
//     </div>
// );
// ReactDOM.render(element, document.querySelector("#root"));

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
