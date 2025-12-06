import React, { useState } from 'react'
import LoginForm from "./LoginForm"



export default function LoginPage() {
   const [inputValue, setInputValue] = useState("")

  return (
<LoginForm inputValue={inputValue} setInputValue={setInputValue}/>

  )
}
