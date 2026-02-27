import { CircularNav } from "@/components/circular-nav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <CircularNav />
      </header>

      <h1 className={styles.headline}>
        A_Y<br />QR*
      </h1>
    </main>
  );
}
