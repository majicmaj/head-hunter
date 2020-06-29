import React from "react";

import Job from "../job/Job";

export default function Jobs({ listings }) {
  return (
    <div className="Jobs">
      {listings.map(listing => (
        <Job listing={listing} />
      ))}
    </div>
  );
}
