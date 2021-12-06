import type { NextPage } from "next";
import Layout from "@components/Layout";
import Image from "next/image";
const Home: NextPage = () => {
  return (
    <Layout pageTitle="Inicio" metaDescription="Hola" currentRoute="a">
      <main className="flex flex-col items-center justify-center ">
        <section
          id="home"
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-center">
            HELLO! <br />
            My name is Diego Cort&eacute;s Fuentes
          </h1>
          <Image
            src="/images/DiegoHome.jpg"
            alt="picture of Diego, creator of the web site"
            width={100}
            height={100}
          />
          <p className="max-w-4xl text-justify">
            I am a Frontend web developer with one and a half years of
            experience making web applications. With experience teaching to
            different levels, from kids to engineering students. I am good at
            team working and with adaptability to different environments and
            changes. I want to collaborate with a team that helps me grow as a
            Web developer and UX specialist.
          </p>
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
          background-color: ;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
