import React from "react";

const ReposItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url} alt=''>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

export default ReposItem;
