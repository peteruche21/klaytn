import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <main className="w-full h-[80vh] flex">
        <div className="top-[50vh] left-[50vw] m-auto max-w-[500px]">
          <p>Klaytn-covalent unified hackathon</p>
          <p>Acend multichain portfolio tracker </p>
          <p>
            <span className="text-blue-500 hover:underline">
              In Development
            </span>
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

export default Portfolio;
