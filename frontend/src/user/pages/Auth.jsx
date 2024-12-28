import React, { useContext, useState } from "react";
import Card from "@/shared/components/UI/Card";
import Input from "@/shared/components/FormElements/Input";
import Button from "@/shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "@/shared/utils/validators";
import { useForm } from "@/shared/hooks/form-hook";
import "./Auth.css";
import { AuthContext } from "@/shared/context/authContext";
const Auth = () => {
  const auth = useContext(AuthContext);

  const [isLogInMode, setIsLogInMode] = useState(true);

  const [formState, InputHandler, setFromData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const switchModeHandler = () => {
    if (!isLogInMode) {
      setFromData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFromData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLogInMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    auth.logIn();
  };

  return (
    <Card className="authentication">
      <h2>Login required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLogInMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Name:"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={InputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please Enter a valid email address."
          onInput={InputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please Enter a valid password. ( at least 5 characters)"
          onInput={InputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLogInMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLogInMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
};

export default Auth;
