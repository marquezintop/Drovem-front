import styled from "styled-components";
import { Input } from 'antd';
import {  CameraOutlined, MailOutlined, UserOutlined, IdcardOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { REACT_APP_API_URL } from "../../api";

export default function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({name: "", photo: "", email: "", cpf: "", classChosen: ""})

    const [classes, setClasses] = useState([])

    useEffect( () => {
       axios.get(`${REACT_APP_API_URL}/getClasses`)
        .then((res) => setClasses(res.data))
        .catch((error) => alert(error.response.data))
    }, [])

    function handleForm(e) {
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function submitForm(e) {
        e.preventDefault();
        try {
            await axios.post(`${REACT_APP_API_URL}/register`, form)
            navigate("/turmas")
        } catch (error) {
            alert(error.response.data);
        }
    }

    return (
    <>
    <RegisterStyled>
        <h1> Cadastro de Estudante</h1>
        <FormStyled>
            <InputStyled placeholder="Nome" 
            prefix={<UserOutlined className="icon"/>}
            type="name"
            name="name"
            required
            value={form.name}
            onChange={handleForm}
            />
            <InputStyled placeholder="Foto de Perfil" 
            prefix={<CameraOutlined  className="icon"/>}
            type="url"
            name="photo"
            required
            value={form.adress}
            onChange={handleForm}
            />
            <InputStyled placeholder="E-mail" 
            prefix={<MailOutlined className="icon"/>}
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleForm}
            />
            <InputStyled placeholder="CPF" 
            prefix={<IdcardOutlined className="icon"/>}
            type="text"
            name="cpf"
            required
            value={form.cpf}
            onChange={handleForm}
            />
            <select name="classChosen" value={form.classChosen} onChange={handleForm}>
                <option value="0">Selecione a turma:</option>
                {classes.map(p => <option value={p.id}>{p.name}</option>)}
            </select>
            <button type="submit" onClick={submitForm}>CADASTRAR</button>
        </FormStyled>
    </RegisterStyled>
    </>
    )
}


const RegisterStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 400px;
    height: 500px;
    margin: auto;
    margin-top: 50px;
    background-color: rgba(32, 32, 36, 0.65);
    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 30px;
        color: #FFFFFF;
        padding: 10px;
    }
    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 15px;
        text-align: center;
        color: #FFFFFF;
    }
    a {
        color: #8257E5;
        text-decoration: underline;
    }
    a:hover {
        cursor: pointer;
        filter: brightness(120%)
    }
`

const FormStyled = styled.form`
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    select {
        width: 318px;
        height: 38px;
        background: rgba(32, 32, 36, 1);
        border-radius: 9px;
        border: none;
        font-weight: 500;
        font-size: 18px;
        color: #DDDADA;
        margin-bottom: 20px;
    }
    select::placeholder {
        font-weight: 500;
        font-size: 18px;
        color: #DDDADA;
    }
    input {
        width: 418px;
        height: 38px;
        background: rgba(32, 32, 36, 0.65);
        border-radius: 9px;
        border: none;
        font-weight: 500;
        font-size: 18px;
        color: #DDDADA;
    }
    input::placeholder {
        font-weight: 500;
        font-size: 18px;
        color: #DDDADA;
    }
    button {
        font-family: 'Poppins', sans-serif;
        width: 318px;
        height: 50px;
        background: #633BBC;
        border: none;
        font-weight: 600;
        font-size: 22px;
        color: #FFFFFF;
        border-radius: 9px;
        margin-bottom: 20px;
        transition: all 0.3s ease-in-out;
    }
    button:hover {
        background-color: #FFFFFF;
        color: #633BBC;
    }
`

const InputStyled = styled(Input)`
    width: 318px;
    height: 38px;
    background: rgba(32, 32, 36, 1);
    border-radius: 9px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    color: #DDDADA;
    margin: auto;
    ::placeholder {
        font-weight: 500;
        font-size: 18px;
        color: #DDDADA;
    }
    input {
        height: 30px;
    }
    :focus-within{
        .icon {
            color: #633BBC;
        }
        filter: brightness(120%)
    }
    :hover {
        .icon {
            color: #633BBC;
        }
        filter: brightness(120%)
    }
`