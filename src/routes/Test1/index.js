import { useState } from "react";

const Test1 = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  }

  return(
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {userInput}
      </p>
      <input type="text" placeholder="input here" onChange={handleInputChange}/>
    </div>
  )
}

export default Test1;