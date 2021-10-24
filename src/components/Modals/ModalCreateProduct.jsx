import axios from "axios";
import React, { useState } from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const ModalCreateProduct = (props) => {
  const [modal, setModal] = useState(false);
  const [newProduct, setnewProduct] = useState({
      name:'',
      stock:0,
      categoryId:0
  });
  const toggle = () => setModal(!modal);

  const handleChange =(target)=>{
    setnewProduct({
        ...newProduct,
        [target.name]:target.value
    })
  }

  const handleSave = async (e) => {
    e.preventDefault();
    console.log( newProduct)
    if(newProduct.name!=='' && newProduct.stock !== 0 && newProduct.categoryId !==0){
        await axios.post("http://localhost:3100/api/products/",{
            name:newProduct.name,
            stock:newProduct.stock,
            categoryId:newProduct.categoryId
            
        }).then((res)=>{
            props.handleProducts();
            setModal(false)
        }).catch()
        
    }
    
  };

  return (
    <>
      <Button color="primary" onClick={toggle}>
        Agregar
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Categorias</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup className="my-2">
              <Label for="Name">Nombre</Label>
              <Input
                type="text"
                name="name"
                id="Name"
                onChange={({target})=>handleChange(target)}
                placeholder="Ingresa un nombre del producto"
              />
            </FormGroup>
            <FormGroup className="my-2">
              <Label for="Stock">Stock</Label>
              <Input
                type="number"
                name="stock"
                id="Stock"
                onChange={({target})=>handleChange(target)}
                placeholder="Ingresa la cantidad actual"
              />
            </FormGroup>
            <FormGroup className="my-2">
              <Label for="Category">Categoria</Label>
              <Input type="select" name="categoryId" id="Category" defaultValue={'0'} onChange={({target})=>handleChange(target)}>
                    <option  value={'0'}>
                      Seleccionar
                    </option>
                {props.category.map((value, index) => {
                  return (
                    <option key={index} value={value.id}>
                      {value.name}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Agregar
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalCreateProduct;
