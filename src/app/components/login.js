import styles from '../page.module.css'

export default function Login() {
  return (
    <div className={styles.login}>
      <h3>Login</h3>
      <label>Username:<input type='text'></input></label>
      <label>Password:<input type='password'></input></label>
    </div>
  )
}