import Axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/search";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          style={{
            borderColor: "#007bff",
            color: "#007bff",
            transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#007bff";
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
