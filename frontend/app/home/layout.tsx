import Navbar from "@/components/Navbar/navbar";
import styles from "./layout.module.css";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.HomePage}>
      <Navbar />
      <div className={styles.children}>{children}</div>
    </section>
  );
}
