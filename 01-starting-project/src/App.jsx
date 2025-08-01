import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx"
import UserInput from "./components/UserInput.jsx"
import { useState } from "react"

function App() {
const [userInput,setUserInput]=useState({
    InıtıalInvasement:10000,
    AnnualInvasement:1200,
    expectedReturn:6,
    duration:10,
})
const inputIsValid = userInput.duration >=1
function handleChange(inputIdentifier,newValue){
    setUserInput(prev=>{
        return{
            ...prev,
            [inputIdentifier]:parseInt(newValue),
        }
    })
}


  return (
    <div>

      <Header />
    <UserInput onChange={handleChange} userInput={userInput}/>
    {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
  {inputIsValid &&
  <Results  input={userInput}/>
}  
    </div>
  )
}

export default App
