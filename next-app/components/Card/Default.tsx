import React, { FC, ReactNode } from "react";

interface ICard {
  heading?: string;
  children?: ReactNode;
}

const Card: FC<ICard> = ({ heading, children }) => {
  return (
    <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900">
          {heading}
        </h5>
      </div>
      {children}
    </div>
  );
};

export default Card;
