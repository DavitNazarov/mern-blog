import Button from "@/shared/components/FormElements/Button";
import Input from "@/shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "@/shared/utils/validators";
import { useParams } from "react-router-dom";
import "./PlaceForm.css";
import { useForm } from "@/shared/hooks/form-hook";
import { useEffect, useState } from "react";
import NotFound from "@/errors/NotFound";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Somewhere",
    description: "Something",
    imageURL:
      "https://images.unsplash.com/photo-1731331121037-0c9b31455ddd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    address: "address",
    location: {
      lat: 121,
      long: 121,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Somewhere1",
    description: "Something",
    imageURL:
      "https://images.unsplash.com/photo-1731331121037-0c9b31455ddd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    address: "address",
    location: {
      lat: 121,
      long: 121,
    },
    creator: "u2",
  },
];
const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false },
    },
    false
  );
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);
  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: { value: identifiedPlace.title, isValid: true },
          description: { value: identifiedPlace.description, isValid: true },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateHandler = (e) => {
    e.preventDefault();
  };

  if (!identifiedPlace) {
    return <NotFound />;
  }
  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading... </h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title. "
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters.) "
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
