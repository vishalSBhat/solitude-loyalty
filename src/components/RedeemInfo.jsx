import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const RedeemInfo = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div
      style={{ color: "red" }}
      className="p-2 row justify-content-center align-items-center"
    >
      <Modal isOpen={modal} toggle={toggle} className="mx-auto my-4">
        <ModalHeader toggle={toggle}>Your Offer is waiting for you</ModalHeader>
        <ModalBody className="p-2">
          <h3>Select a dish :</h3>
          {props.items.map((item, i) => (
            <div key={i} class="form-check">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="optradio" />
                <span>{item}</span>
              </label>
            </div>
          ))}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-md btn-light">Redeem</button>
        </ModalFooter>
      </Modal>
      <div className="col-12 redeem-container">
        <p className="pt-2">{props.info}</p>
        <ul className="list-unstyled px-2 py-0 mt-0">
          {props.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        {props.redeem && (
          <button className="btn btn-sm btn-light mt-3" onClick={toggle}>
            Redeem
          </button>
        )}
      </div>
    </div>
  );
};

export default RedeemInfo;
