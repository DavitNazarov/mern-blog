import React, { useState } from "react";
import Card from "@/shared/components/UI/Card";
import Button from "@/shared/components/FormElements/Button";
import "./PlaceItem.css";
import routes from "@/router/constants/routes";
import Modal from "@/shared/components/UI/Modal";
import Map from "@/shared/components/UI/Map";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModel, setShowConfirmModel] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModel(true);
  };
  const cancelDeleteWarningHandler = () => {
    setShowConfirmModel(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModel(false);
    console.log("DELETING...");
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item_modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <Map />
        </div>
      </Modal>
      <Modal
        show={showConfirmModel}
        header="Are you sure?"
        footerClass="place-item_modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteWarningHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Do you really want to delete this place? You won't be able to undo
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title} </h2>
            <h3> {props.address} </h3>
            <p> {props.description} </p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={routes.PlaceId.replace(":placeId", props.id)}>
              EDIT
            </Button>
            <Button danger onClick={showDeleteWarningHandler}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
