import styles from "./navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/home">Home</Link>
        <Link href="/home/direct">Chatroom</Link>
        <Link href="/home/profile">Profile</Link>
        <Link href="/home/osp">Open Source</Link>
        <Link href="/">Logout</Link>
      </div>
    </div>
  );
}
