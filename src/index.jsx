import { ReactDOM } from "../react-dom/index";
import { React } from "../react/index";
console.log(React);
const element = (
    <div style={{width: 200, height: 200, backgrountColor: "red"}}>
        hello<span onClick={()=>{}}>world!</span>
        <div>huangyunze</div>
        <b></b>
    </div>
);
ReactDOM.render(element, document.querySelector('#root'));
console.log(element);
console.log(JSON.stringify(element));
const temp = () => {};
console.log(temp.toString());
