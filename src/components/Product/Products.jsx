import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteModal from "../Modals/DeleteModal";
import ModalCreateProduct from "../Modals/ModalCreateProduct";
import ModalEditProduct from "../Modals/ModalEditProduct";
const Products = () => {
  const [Product, setProduct] = useState([]);

  const handleProducts = () => {
    axios
      .get("http://localhost:3100/api/products/")
      .then(({ data }) => {
        console.log(data.data);

        setProduct(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
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
    handleProducts();
    handleCategories();
  }, []);
  return (
    <div className="container px-5 py-4">
      <div className="py-5 d-flex justify-content-center">
           <ModalCreateProduct handleProducts={handleProducts} category={Category}/>
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Stock</th>
            <th scope="col">Categoria</th>
            <th scope="col">Editar</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
          {Product.length >= 1 &&
            Product.map((value, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{value.id}</th>
                  <td>{value.name}</td>
                  <td>{value.stock}</td>
                  <td>{value.category ?value.category.name :'' }</td>
                  <td className='text-center'> <ModalEditProduct handleProducts={handleProducts} category={Category} product={value}/></td>
                  <td className='text-center'> <DeleteModal handleProducts={handleProducts} product={value}/></td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
