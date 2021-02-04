import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Validation from "../validation/index";
import {
  Container,
  Form,
  FormLabel,
  FormName,
  FormPassword,
  FormPasswordConfirm,
  FormEmail,
  FormEmailConfirm,
  FormSubmit,
} from "./FormStyles/formStyles";

export const EnabledContext = createContext();

export default function FormComponent({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FormComponent.Form = function FormComponentForm({ ...restProps }) {
  const [enabled, setEnabled] = useState(true);
  const Name = useRef("aa");
  const Password = useRef("");
  const ConfirmPassword = useRef("");
  const Email = useRef("");
  const ConfirmEmail = useRef("");

  return (
    <EnabledContext.Provider value={{ enabled, setEnabled }}>
      <Validation
        ref={{
          name: Name,
          password: Password,
          confirmPass: ConfirmPassword,
          mail: Email,
          confirmMail: ConfirmEmail,
        }}
      />
      <h1>{Name.current.value}</h1>
    </EnabledContext.Provider>
  );
};

FormComponent.Validation = function FormComponentValidation({
  children,
  Name,
}) {
  return;
};
