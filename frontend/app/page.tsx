"use client";
import styles from "./page.module.css";
import Login from "./actions/Login";
export default function Page() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.WeCode}>WeCode</div>
      <div className={styles.loginFormBox}>
        <form action={Login} className={styles.loginForm}>
          <input type="text" name="username" placeholder="Username" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
