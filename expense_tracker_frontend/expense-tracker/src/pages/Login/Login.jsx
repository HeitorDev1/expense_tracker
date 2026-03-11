import styles from "./Login.module.css"
import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"

function Login() {

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    console.log("Email:", email)
    console.log("Senha:", password)
  }

  function togglePassword() {
    setShowPassword(!showPassword)
  }

  return (
    <div className={styles.login_page}>

      <h1 className={styles.expense_title}>
        Expense <span className={styles.star}>★</span> Tracker
      </h1>

      <h2 className={styles.login_title}>
        Login Page
      </h2>

      <form className={styles.input_container} onSubmit={handleSubmit}>

        <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />

        <div className={styles.password_wrapper}>
          <input
              className={styles.input}
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />

          <button
              type="button"
              className={styles.eye_button}
              onClick={togglePassword}
          >
              {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>

        <a className={styles.register} href="/Register">
            Registre-se
        </a>

        <button type="submit" className={styles.login_button}>  
            Entrar
        </button>

      </form>

    </div>
  )
}

export default Login