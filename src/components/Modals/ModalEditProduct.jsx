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

const ModalEditProduct = (props) => {
    const [modal, setModal] = useState(false);
  const [newProduct, setnewProduct] = useState(props.product);
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
        await axios.put("http://localhost:3100/api/products/"+props.product.id,{
            name:newProduct.name,
            stock:newProduct.stock,
            categoryId:parseInt(newProduct.categoryId)
        }).then((res)=>{
            props.handleProducts();
            setModal(false)
        }).catch()
        
    }
    
  };
 

  return (
    <>
      <Button color="success" onClick={toggle}>
        Editar
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
                value={newProduct.name}
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
                value={newProduct.stock}
                onChange={({target})=>handleChange(target)}
                placeholder="Ingresa la cantidad actual"
              />
            </FormGroup>
            <FormGroup className="my-2">
              <Label for="Category">Categoria</Label>
              <Input type="select" name="categoryId" id="Category" defaultValue={newProduct.categoryId} onChange={({target})=>handleChange(target)}>
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
            Editar
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalEditProduct
