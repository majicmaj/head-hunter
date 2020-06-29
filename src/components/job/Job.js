import React from "react";

import "./Job.css";
export default function Job({ listing }) {
  return (
    <div className="Job">
      <p>{listing.title}</p>
      <p>{listing.company}</p>
    </div>
  );
}
