import styles from "./page.module.css";
import Link from "next/link";
export default function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.WeCode}>WeCode</div>
      <div className={styles.loginFormBox}>
        <form className={styles.loginForm}>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button>
            <Link href={"/home"}>Login</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
