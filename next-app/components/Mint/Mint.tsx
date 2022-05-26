import React, { FC, useState, useRef } from "react";
import useNFTStorage from "../../hooks/useNFTStorage";
import mintTokenWithUri from "../../lib/mint";

interface IProps {
  toggle: { [key: string]: () => void };
}

const Minter: FC<IProps> = ({ toggle }) => {
  const inputFile = useRef(null);
  const [file, setFile] = useState<File>(undefined!);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const storeNFT = useNFTStorage();
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!(file && name && description)) return;
    // upload to ipfs
    const { ipnft, url, data } = await storeNFT(file, name, description);
    console.log(url);
    // mint nft
    const result = await mintTokenWithUri(url);
    console.log(result);
    // clear data
    setFile(undefined!);
    setName("");
    setDescription("");
    // reset input
    e.target.reset();
    // close modal
    toggle.hide();
  };

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span></span>
        <span className=" text-xs font-medium text-blue-700">15%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1 mb-6">
        <div
          className="bg-green-400 h-1 rounded-full"
          style={{ width: "15%" }}
        ></div>
      </div>
      <div className="flex">
        <div className="relative m-auto border rounded">
          <img
            className="w-20 h-20 rounded"
            src={file ? URL.createObjectURL(file) : "/images/blank.jpg"}
            alt="nft image"
          />
          <span
            className="absolute bottom-0 left-16 transform translate-y-1/4 w-7 h-7 bg-blue-500 border-2 border-white rounded-full"
            onClick={() =>
              //@ts-ignore
              file ? setFile(undefined!) : inputFile.current.click()
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 fill-white translate-x-1.5 translate-y-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {file ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              )}
            </svg>
          </span>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name"
            required
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="description"
            required
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <input
            className="hidden"
            ref={inputFile}
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center block m-auto"
          disabled={file && name && description ? false : true}
        >
          Mint
        </button>
      </form>
    </div>
  );
};

export default Minter;
