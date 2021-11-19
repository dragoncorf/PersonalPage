import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Inicio" metaDescription="Hola" currentRoute="a">
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="">HELLO! Work in progress</h1>
        <p>Aaaaaaaaaa</p>
      </main>
      <footer></footer>
    </Layout>
  );
};

export default Home;
