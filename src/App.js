import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";


const App = () => {
  const [value, setValue] = useState("") 

const display = (e) => {
  setValue(value?.concat(e.target?.value))
}
const clear = () => {
  setValue("")
}
const backSpace = () => {
  setValue(value?.slice(0, -1))
  
}

const logic = () => {
  try {
    setValue(Number(eval(value).toString()).toFixed(2))
  } catch (error) { 
    setValue("Invalid Format")
    
  }


}


  return (
    <div class="calc">
    <input type="text" name="input" size="16" id="answer" value={value}/>
    <div class="buttons">
        <button onClick = {clear} class='operator' id='c'>C</button>
        <button value = "%" onClick = {display} class='operator'>%</button>
        <button class='operator' onClick = {backSpace}>&larr;</button>
        <button value = "/" onClick = {display} class='operator'>/</button>
        <button value = "1" onClick = {display}>1</button>
        <button value = "2" onClick = {display}>2</button>
        <button value = "3" onClick = {display}>3</button>
        <button value = "*" onClick = {display} class='operator'>*</button>
        <button value = "4" onClick = {display}>4</button>
        <button value = "5" onClick = {display}>5</button>
        <button value = "6" onClick = {display}>6</button>
        <button value = "-" onClick = {display} class='operator'>-</button>
        <button value = "7" onClick = {display}>7</button>
        <button value = "8" onClick = {display}>8</button>
        <button value = "9" onClick = {display}>9</button>
        <button value = "+" onClick = {display} class='operator'>+</button>
        <button value = "." onClick = {display}>.</button>
        <button value = "0" onClick = {display}>0</button>
        <button value = "" onClick = {display}></button>
        <button class='operator' onClick= {logic}>=</button>

    </div>


</div>
  );
}

export default App;
