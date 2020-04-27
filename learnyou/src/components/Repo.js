import React from "react";
import { GoClock, GoStar, GoRepoForked } from "react-icons/go";

const Repo = ({ repo }) => {
  return (
    <div className="my-3">
      <div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-uppercase text-decoration-none font-weight-bold"
        >
          {repo.name}
        </a>
      </div>
      <div className="d-flex align-items-center my-1">
        <div className="mr-3 d-flex align-items-center">
          <GoClock className="mr-1" />
          <small>{`${new Date(repo.updated_at).getFullYear()}/${
            new Date(repo.updated_at).getMonth() + 1
          }/${new Date(repo.updated_at).getDay()}`}</small>
        </div>
        <div className="mr-3 d-flex align-items-center">
          <GoStar className="mr-1" />
          <small>{repo.stargazers_count}</small>
        </div>
        <div className="d-flex align-items-center">
          <GoRepoForked className="mr-1" />
          <small>{repo.forks_count}</small>
        </div>
      </div>
      <div className="text-capitalize">{repo.description}</div>
    </div>
  );
};

export default Repo;
