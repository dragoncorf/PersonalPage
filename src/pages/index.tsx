import type { NextPage } from "next";
import Layout from "@components/Layout";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Inicio" metaDescription="Hola" currentRoute="a">
      <main className="flex flex-col items-center justify-center ">
        <section id="home">
          <h1 className="">HELLO! Work in progress</h1>
          <p>Aaaaaaaaaa</p>
        </section>
        <section id="skills">
          <h1 className="">Skills</h1>
          <p>Aaaaaaaaaa</p>
        </section>
        <section id="projects">
          <h1 className="">Projects</h1>
          <p>Aaaaaaaaaa</p>
        </section>
        <section id="education">
          <h1 className="">Education</h1>
          <p>Aaaaaaaaaa</p>
        </section>
      </main>
      <footer></footer>
      <style jsx>{`
        main section {
          height: 100vh;
          padding-top: 100px;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
