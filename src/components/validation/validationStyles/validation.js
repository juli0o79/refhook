import styled from 'styled-components/macro';

export const Container = styled.div`
    background-color: rgba(232,232,232,0.05);
    width: 80%;
    position: relative;
    margin: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 80px;
    border-radius: 10px;


`;

export const Form = styled.form`
    width: 70%;
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    jusify-content: center;
    align-items: center;
    label{
        color: gray;
        font-weight: bold;
        letter-spacing: 0.5px;
    }
    input{
        background: none;
        border: 1px solid rgba(232,232,232,0.4);
        width: 250px;
        margin-bottom: 5px;
    }


`;

export const FormLabel = styled.label``;

export const FormName = styled.input`
    

`;

export const FormEmail = styled.input``;

export const FormEmailConfirm = styled.input``;

export const FormPassword = styled.input``;

export const FormPasswordConfirm = styled.input``;

export const FormSubmit = styled.button`
    width: 120px;
    height: 30px;
    border-radius: 5px;
    margin-top: 15px;
`;