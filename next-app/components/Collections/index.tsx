import React, { FC } from "react";
import { formatAddress } from "../../utils";

interface IProps {
  data: { [key: string]: string }[];
}

const Collections: FC<IProps> = ({ data }) => {
  const renderList = (): JSX.Element[] => {
    return data.map((element, index) => {
      return (
        <tr className="bg-white border-b hover:bg-gray-50" key={index}>
          <th scope="row" className="px-5 py-4 text-gray-900 whitespace-nowrap">
            <img
              className="w-10 h-10 rounded"
              src={
                element.genesisNft ? element.genesisNft : "/images/blank.jpg"
              }
              onError={(e) => {
                e.currentTarget.src = "/images/blank.jpg";
              }}
              alt={element.collectionName}
            />
          </th>
          <td className="px-5 py-4">{element.collectionName}</td>
          <td className="px-5 py-4">${element.volume24h}</td>
          <td className="px-5 py-4">${element.marketCap}</td>
          <td className="px-5 py-4">${element.floorPrice}</td>
          <td className="px-5 py-4">
            <a href="#" className="font-medium text-blue-500 hover:underline">
              {formatAddress(element.collectionAddress as string)}
            </a>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg max-h-[122vh]">
        <h5 className="text-xl font-bold leading-none text-gray-900 bg-white p-6">
          Top Collections
        </h5>
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-5 py-3"></th>
              <th scope="col" className="px-5 py-3">
                Collection
              </th>
              <th scope="col" className="px-5 py-3">
                Volume24h
              </th>
              <th scope="col" className="px-5 py-3">
                MarketCap
              </th>
              <th scope="col" className="px-5 py-3">
                FloorPrice
              </th>
              <th scope="col" className="px-5 py-3">
                <span className="sr-only">Address</span>
              </th>
            </tr>
          </thead>
          <tbody>{renderList()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Collections;
