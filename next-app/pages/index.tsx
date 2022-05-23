import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Acend</title>
        <meta name="description" content="acend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-[80vh] flex">
        <div className="top-[50vh] left-[50vw] m-auto max-w-[500px]">
          <p>Klaytn-covalent unified hackathon</p>
          <p>
            please use the navigation to see the completed parts of this
            project.
          </p>
          <p>
            for demo purposes. the data supplied to this app is from etheruem
            <span className="text-blue-500 hover:underline"> demo.eth </span>
            to enable us have rich data for testing and demo purposes
          </p>
          <p>
            powered by {""}
            <a
              href="https://klaytn.foundation"
              className="text-blue-500 hover:underline"
            >
              Klaytn
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
