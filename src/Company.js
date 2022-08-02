import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Company = ({ id, company, title, duties, date, status }) => {
  return (
    <div className="max-w-[700px] flex flex-col items-start justify-start gap-5">
      <h1 className="text-2xl font-semibold tracking-wide text-[#30336b] capitalize">
        {title}
      </h1>
      <h3 className="px-3 py-1 text-xs font-extrabold tracking-widest text-[#30336b] uppercase rounded-sm bg-secondary">
        {company}
      </h3>
      <h3 className="text-gray-500 capitalize text-md">
        {date + ` - ` + status}
      </h3>
      <div className="flex flex-col items-start justify-start gap-7">
        {duties.map((duty, index) => (
          <div className="flex items-center gap-10" key={index}>
            <FaAngleDoubleRight className="text-[30px] text-secondary" />
            <p className="text-sm text-gray-500">{duty}</p>
          </div>
        ))}
      </div>
      {/*<button className="self-center px-10 py-2 mt-10 text-white capitalize rounded-md bg-secondary">
        read more
        </button>*/}
    </div>
  );
};

export default Company;
