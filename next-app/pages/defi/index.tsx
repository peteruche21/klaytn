import type { NextPage } from "next";

const Defi: NextPage = () => {
  return (
    <div>
      <main className="w-full h-[80vh] flex">
        <div className="top-[50vh] left-[50vw] m-auto max-w-[500px]">
          <p>Klaytn-covalent unified hackathon</p>
          <p>Acend Defi</p>
          <p>
            <span className="text-blue-500 hover:underline"> coming soon </span>
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

export default Defi;
