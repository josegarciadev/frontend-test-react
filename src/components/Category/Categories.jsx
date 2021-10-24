import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [Category, setCategory] = useState([]);

  const handleCategories = () => {
    axios
      .get("http://localhost:3100/api/categories/")
      .then(({ data }) => {
        console.log(data.data);

        setCategory(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    handleCategories();
  }, []);
  return (
    <div className="container px-5 py-4">
      <table className="table table-striped table-bordered align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
           
          </tr>
        </thead>
        <tbody>
          {Category.length >= 1 &&
            Category.map((value, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{value.id}</th>
                  <td>{value.name}</td>
                  <td>{value.description}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
