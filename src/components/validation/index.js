import React, { useContext, useEffect } from "react";
import { useState } from "react";
//Tem que importar o contexto para funcionat
import {EnabledContext} from '../FormComponent'
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
  } from "./validationStyles/validation";


function Validation({ ...restProps}, ref) {
    const [actualName, setActualName] = useState("");
    const {enabled, setEnabled} = useContext(EnabledContext);
    console.log(ref)
    useEffect(
        
        ()=>{
         
        console.log(actualName)
    },[actualName])
  return (
    <Form {...restProps}>
      <FormLabel>Nome</FormLabel>
      <FormName type="text" ref={ref.name} onChange = {({target})=> {setActualName(target.value)}}/>
      <FormLabel>Email</FormLabel>
      <FormEmail type="email" ref={ref.mail} />
      <FormLabel>Confirmar email</FormLabel>
      <FormEmailConfirm type="email" ref={ref.confirmMail} />
      <FormLabel>Senha</FormLabel>
      <FormPassword type="text" ref={ref.password} />
      <FormLabel>Confirmar Senha</FormLabel>
      <FormPasswordConfirm type="text" ref={ref.confirmPassword} />
      <FormSubmit disabled={enabled}>Concluir</FormSubmit>
    </Form>
  );
}


const ForwardedValidation = React.forwardRef(Validation);

export default ForwardedValidation;

// Tarefa é simples, validar os refs lá do index do form, mas usando um arquivo separado. Descobrir como fazer essa transferência de refse e estudar mais
//sobre o forward ref
