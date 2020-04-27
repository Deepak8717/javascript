import React from "react";
import Repo from "../components/Repo";

const Repos = ({ repos }) => {
  return (
    <>
      {repos
        .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
        .map((repo) => (
          <Repo repo={repo} key={repo.id} />
        ))}
    </>
  );
};

export default Repos;
