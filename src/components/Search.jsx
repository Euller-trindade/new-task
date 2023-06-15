/* eslint-disable react/prop-types */
import { BiSearchAlt } from "react-icons/bi";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <BiSearchAlt size={30} />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar tarefa..."
      />
    </div>
  );
};

export default Search;
