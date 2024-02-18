import styles from "./page.module.css";
import Link from "next/link";
function Register() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.WeCode}>WeCode</div>
      <div className={styles.loginFormBox}>
        <form className={styles.loginForm}>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button>
            <Link href={"/home"}>Register</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
