import { useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import {FiMail , FiLock } from 'react-icons/fi'
import { Container , Form , BackgroundImg } from "./style";


export function SignIn(){
    const [ email , SetEmail] = useState("");
    const [ password , SetPassword] = useState("");

    const { signIn } = useAuth();


    function hadleSignIn(){
        signIn({ email , password});
    }

    return(
        <Container>

            <Form>
                <h1>Rocketnotes</h1>
                <p>aplicação para salvar e gerenciar seus links uteis</p>
                <h2>faça seu login

                </h2>
            
            <Input
                placeholder="E-mail"
                type="text"
                icon ={FiMail}
                onChange = {e =>SetEmail(e.target.value)}
            />

            
            <Input
                placeholder="Senha"
                type="password"
                icon ={FiLock}
                onChange = {e =>SetPassword(e.target.value)}

            />

            <Button title="entrar" onClick = {hadleSignIn}/>


                <Link to="/register">
                    Criar conta
                </Link>


            </Form>
             
            <BackgroundImg/>

        </Container>


    )
}

