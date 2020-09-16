import Head from "next/head";
import { MyLink } from "../components/Link";
import styles from "../../styles/Home.module.css";
import JsonSchema from "../components/JsonSchema";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <MyLink href="todo/[id]" as="todo/1">
            <a className={styles.card}>
              <h3>TODOS</h3>
            </a>
          </MyLink>

          <MyLink href="poke">
            <a className={styles.card}>
              <h3>Poke</h3>
            </a>
          </MyLink>

          <MyLink href="blog">
            <a className={styles.card}>
              <h3>BLOG</h3>
            </a>
          </MyLink>
        </div>
      </main>

      <JsonSchema />
    </div>
  );
}
