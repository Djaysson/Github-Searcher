import { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";

import "../styles/components/repositoryList.scss";

function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/djaysson/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repo) => (
          <RepositoryItem key={repo.name} repository={repo} />
        ))}
      </ul>
    </section>
  );
}

export default RepositoryList;
