import React, { FC } from "react";
import { formatAddress } from "../../utils";

interface IProps {
  data: { [key: string]: string | null }[];
}

const TransactionsTable: FC<IProps> = ({ data }) => {
  const renderList = (): JSX.Element[] => {
    return data.map((element, index) => {
      return (
        <tr className="bg-white border-b hover:bg-gray-50" key={index}>
          <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
            {element.timestamp}
          </th>
          <td className="px-6 py-4">
            {element.fromLabel !== null
              ? element.fromLabel
              : formatAddress(element.from as string)}
          </td>
          <td className="px-6 py-4">
            {element.toLabel !== null
              ? element.toLabel
              : formatAddress(element.to as string)}
          </td>
          <td className="px-6 py-4">{element.valueUsd}</td>
          <td
            className={
              (element.successful as unknown as boolean)
                ? "px-6 py-4 text-green-600"
                : "px-6 py-4 text-red-600"
            }
          >
            {element.successful ? "success" : "failed"}
          </td>
          <td className="px-6 py-4">
            <a href="#" className="font-medium text-blue-600 hover:underline">
              {formatAddress(element.hash as string)}
            </a>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg max-h-screen">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                From
              </th>
              <th scope="col" className="px-6 py-3">
                To
              </th>
              <th scope="col" className="px-6 py-3">
                Value
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Hash
              </th>
            </tr>
          </thead>
          <tbody>{renderList()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
