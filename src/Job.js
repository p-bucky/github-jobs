import React from "react";
import "./Job.css";

const Job = ({ job }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <div className="card-title">
            {job.title} - <span>{job.company}</span>
          </div>
          <div className="card-subtitle">
            {new Date(job.created_at).toLocaleDateString()}
          </div>
          <div className="location">{job.location}</div>
          <div className="type">{job.type}</div>
          <div className="how_to_apply">{job.how_to_apply}</div>
        </div>
      </div>
    </div>
  );
};

export default Job;
