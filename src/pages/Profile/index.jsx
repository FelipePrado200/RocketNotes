import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from "../../Assets/avatar_placeholder.svg"

import { Container , Form , Avatar} from "./style";
import { FiArrowLeft ,FiUser , FiMail , FiLock , FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

import { Link } from 'react-router-dom';


export function Profile(){
    const {user , updateProfile} = useAuth();

    const [name , setName] = useState(user.name);
    const [email , setEmail] = useState(user.email);

    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew , setPasswordNew] = useState();


    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder
    const [avatar , setAvatar] = useState(avatarUrl);
    const [avatarFile , setAvatarFile] = useState(null);

    async function handleUpdate(){
        const updated ={
            name,
            email,
            old_password: passwordOld,
            password: passwordNew,

        }

        const userUpdated = Object.assign( user , updated)
        //return console.log(userUpdated)



        await updateProfile ({user , avatarFile})
    }
    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imgPreview =URL.createObjectURL(file);
        setAvatar(imgPreview)
    }
    return(
        

        <Container>
            <header>
                <Link to="/"><FiArrowLeft></FiArrowLeft></Link>
            </header>


            <Form>
                <Avatar>
                        <img 
                        src={avatar} 
                        />

                        <label htmlFor="avatar">
                            <FiCamera/>

                        <input 
                        id="avatar" 
                        type="file"
                        onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>


                 <Input 
                placeholder="Nome" 
                type="text" 
                icon = {FiUser}
                value ={name}
                onChange = {e=>setName(e.target.value)}
                 />

                 <Input 
                placeholder="E-mail" 
                type="text" 
                icon = {FiMail}
                value ={email}
                onChange = {e=> setEmail(e.target.value)}
                 />

                 <Input 
                placeholder="Senha atual" 
                type="password" 
                icon = {FiLock}
                onChange = {e=> setPasswordOld(e.target.value)}

                 />


                 <Input 
                placeholder="Nova senha" 
                type="password" 
                icon = {FiLock}
                onChange = {e => setPasswordNew(e.target.value)}
                 />
            </Form>

            <Button title="Salvar" onClick={handleUpdate}/>

        </Container>
    )

}