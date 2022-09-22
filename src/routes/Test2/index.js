import { useState } from "react";
import Input from "./Input";
import Label from "./Label";

const Test2 = () => {
  const [userInput, setUserInput] = useState("");
  
  const handleInputChange = (input) => {
    setUserInput(input);
  }

  const handleButtonClick = () => {
    setUserInput("");
  }

  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label input={userInput} onClick={handleButtonClick}/>
      </p>
      <Input value={userInput} onChange={handleInputChange}/>
    </div>
  )
}

export default Test2;