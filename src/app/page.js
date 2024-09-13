import { Card } from '@/app/components'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      R & C
    </h1>
      
      </main>
      <Card></Card>
    </div>
  );
}
