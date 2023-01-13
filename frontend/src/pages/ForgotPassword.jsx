import React from "react"
import { useSelector } from "react-redux"

function ForgotPassword() {
  const userLogin = useSelector((state) => state.userLogin)

  const { myName, email, password } = userLogin.userInfo

  console.log(myName, email, password)

  return <div>ForgotPassword</div>
}

export default ForgotPassword
