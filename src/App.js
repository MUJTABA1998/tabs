import { useState } from "react";
import "./App.css";
import Company from "./Company";
import jobs from "./data";

const companies = jobs.map((el) => el.company);
console.log(companies);

function App() {
  const [value, setValue] = useState(0);

  const { id, company, title, duties, date, status } = jobs[value];
  return (
    <div className="w-full h-screen">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center w-full gap-24">
          <h1 className="text-3xl font-extrabold tracking-widest text-secondary">
            Experience
          </h1>
          <div className="flex flex-col items-start justify-start gap-10 md:gap-28 md:flex-row">
            <div className="flex flex-row items-start self-center justify-start gap-3  md:self-start md:flex-col">
              {companies.map((company, index) => (
                <h2
                  key={index}
                  className={`text-lg font-extrabold tracking-wider cursor-pointer text-secondary ${
                    index === value &&
                    "text-[#30336b] text-xl transition-all duration-300 ease-in-out"
                  }`}
                  onClick={() => setValue(index)}
                >
                  {company}
                </h2>
              ))}
            </div>
            <Company
              id={id}
              company={company}
              title={title}
              duties={duties}
              date={date}
              status={status}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
