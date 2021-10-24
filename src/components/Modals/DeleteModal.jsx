import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
const DeleteModal = (props) => {
  const handleDelete = async (e) => {
    await axios
      .delete("http://localhost:3100/api/products/" + props.product.id)
      .then((res) => {
        props.handleProducts();
        setModal(false);
      })
      .catch();
  };
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Borrar
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Producto: {props.product.name}</ModalHeader>
        <ModalBody>¿Esta seguro de eliminar este Producto?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e)=>handleDelete(e)}>
            Confimar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteModal;
