import styles from "./Register.module.css"
import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { useNavigate } from "react-router-dom"


function Register() {

  const [showRegisterPassword, setShowRegisterPassword] = useState(false)
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const navigate = useNavigate()

  function handleRegisterSubmit(e) {
    e.preventDefault()

    console.log("Register Email:", registerEmail)
    console.log("Register Password:", registerPassword)
    
    alert("Registrado com sucesso! Redirecionando para a pagina de login.")
    navigate("/")
  }

  function toggleRegisterPassword() {
    setShowRegisterPassword(!showRegisterPassword)
  }

  return (
    <div className={styles.register_page}>

      <h1 className={styles.expense_title}>
        Expense <span className={styles.star}>★</span> Tracker
      </h1>

      <h2 className={styles.register_title}>
        Register Page
      </h2>

      <form className={styles.register_container} onSubmit={handleRegisterSubmit}>

        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
          required
        />

        <div className={styles.password_wrapper}>

          <input
            className={styles.input}
            type={showRegisterPassword ? "text" : "password"}
            placeholder="Senha"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            required
          />

          <button
            type="button"
            className={styles.eye_button}
            onClick={toggleRegisterPassword}
          >
            {showRegisterPassword ? <FiEye /> : <FiEyeOff />}
          </button>

        </div>

        <button type="submit" className={styles.register_button}>
          Registrar
        </button>

      </form>

    </div>
  )
}

export default Register