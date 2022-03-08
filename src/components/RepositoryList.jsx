import RepositoryItem from "./RepositoryItem";

function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository="unform1" />
        <RepositoryItem repository="unform2" />
        <RepositoryItem repository="unform3" />
        <RepositoryItem repository="unform4" />
      </ul>
    </section>
  );
}

export default RepositoryList;
