import News from "@/components/News/News";
import styles from "./page.module.css";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import Feed from "@/components/Feed/Feed";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.home}>
        <ProfileCard />
        <Feed />
        <News />
      </div>
    </div>
  );
}
