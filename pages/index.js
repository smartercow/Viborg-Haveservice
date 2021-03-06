import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Home from "./Home";
export default function App() {
  return (
    <div className="">
      <Head>
        <title>Viborg Haveservice</title>
        <meta name="description" content="Af Peter G" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  );
}
