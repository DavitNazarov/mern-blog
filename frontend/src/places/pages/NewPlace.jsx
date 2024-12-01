import Input from "@/shared/components/FormElements/Input";
import React from "react";
import "./NewPlace.css";
import { VALIDATOR_REQUIRE } from "@/shared/utils/validators";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        label="Title"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please Enter a valid title."
      />
    </form>
  );
};

export default NewPlace;
