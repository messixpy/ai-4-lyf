import React from "react";
import { content } from "../data";

const SummaryBoxes = () => {
  return (
    <div className="flex flex-col  w-[100%] my-5 ">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-2xl font-semiBold ">Mike Jani</h1>
        <p className="text-gray-600">
          Hi Doctor, Take a look at your patients activities
        </p>
      </div>
      <div className="grid grid-flow-row place-content-around place-items-center my-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {content.layout.gridData.map((item, key) => (
            <div key={key} className="">
              <img src={item.url} alt={`item-${key}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryBoxes;
