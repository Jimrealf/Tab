import React from "react";
import { useState } from "react";

export default function Jobs({ jobs }) {
  const [selectedCompany, setSelectedCompany] = useState(jobs[0]);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="content">
      <ul className="people">
        {jobs.map((job) => (
          <li key={job.id}>
            <button
              onClick={() => handleCompanyClick(job)}
              className={
                selectedCompany.company === job.company ? "active" : ""
              }
            >
              {job.company}
            </button>
          </li>
        ))}
      </ul>
      <div className="experience">
        <h1>{selectedCompany.title}</h1>
        <h2>{selectedCompany.company}</h2>
        <h3>{selectedCompany.dates}</h3>
        <ul className="body">
          {selectedCompany.duties.map((duty, index) => (
            <li className="desc" key={index}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="5"
                viewBox="0 0 448 512"
                className="job-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
              </svg>
              <span>{duty}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
