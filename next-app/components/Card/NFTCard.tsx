import React, { FC } from "react";
import { formatAddress } from "../../utils";

interface IProps {
  name: string;
  address: string;
  image: string;
  tokenId: string;
  transferFunc?: () => void;
}

const NFTCard = ({
  name,
  address,
  image,
  tokenId,
  transferFunc,
}: IProps): JSX.Element => {
  return (
    <div className="max-w-xs bg-white rounded-lg border border-gray-200 drop-shadow-[0_10px_10px_rgba(0,0,35,0.25)] w-[250px] h-[350px]">
      <img
        src={image ? image : "/images/blank.jpg"}
        alt={name}
        onError={(e) => {
          e.currentTarget.src = "/images/blank.jpg";
        }}
        className="rounded-t-xl w-full h-[250px]"
      />
      <div className="flex items-center space-x-2 p-2">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {formatAddress(address)}
          </p>
          <p className="text-sm text-gray-500 truncate">{name}</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900">
          {" #"}
          {tokenId.length > 9 ? `${tokenId.slice(0, 7)}...` : tokenId}
        </div>
      </div>
      <hr />
      {/* <a
        href="#"
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        <svg
          className="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a> */}
    </div>
  );
};

export default NFTCard;
