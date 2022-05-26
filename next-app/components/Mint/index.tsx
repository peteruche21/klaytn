import React, { FC, useState, useEffect } from "react";
import Modal from "../../components/Modal";
import Minter from "./Mint";

const Mint: FC = () => {
  const [modal, setModal] = useState<{ [key: string]: () => void }>({
    toggle: () => {},
  });
  useEffect(() => {
    const flowbite = require("flowbite");
    const targetEl = document.getElementById("default-modal");
    const options = {
      backdropClasses:
        "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    };
    //@ts-ignore
    const modalConstructor = new window.Modal(targetEl, options);
    setModal(modalConstructor);
  }, []);
  return (
    <div className="flex w-full">
      <button
        type="button"
        data-modal-toggle="default-modal"
        className="text-gray-900 bg-white 
    hover:bg-gray-100 border border-gray-200 
    focus:ring-4 focus:outline-none focus:ring-gray-100 
    font-medium rounded-lg text-sm px-5 py-2.5 
    text-center inline-flex items-center ml-auto mr-5
    "
        onClick={() => modal!.toggle()}
      >
        Mint
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      <Modal state={modal} heading="Mint NFT">
        <Minter toggle={modal} />
      </Modal>
    </div>
  );
};

export default Mint;
