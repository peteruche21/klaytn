import React, { FC } from "react";
import Card from "../Card/Default";

interface IProps {
  data: { logo: string; name: string; url: string }[];
}

const NFTMarkets: FC<IProps> = ({ data }) => {
  const renderList = (): JSX.Element[] => {
    return data.map((element, index) => {
      return (
        <div className="flow-root" key={index}>
          <ul role="list" className="divide-y divide-gray-200">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={element.logo}
                    alt={element.name}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {element.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {element.url}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  <a href={element.url}>
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      );
    });
  };
  return <Card heading="NFT Market Places">{renderList()}</Card>;
};

export default NFTMarkets;
