import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import { useState } from 'react';
import { api } from '../../services/api';
import { Header } from "../../components/Header"
import { Container , Form } from "./style"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"


export function New(){
    const [links , setLinks ] = useState([]);
    const [newLink , setNewLink] = useState("");


    const [tags , setTags ] = useState([]);
    const [newTag , setNewTag] = useState('');

    const [title , setTitle] = useState([]);
    const [description , setDescription] = useState("")
    
    const navigate = useNavigate();    
    
     


    function handleAddLink(){
        setLinks(prevState  => [...prevState , newLink])
        setNewLink("");
    }


    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }
    function handleAddTag(){
        setTags(prevState => [...prevState , newTag])
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tags  => tags !==deleted ))
    }

    async function handleNewNote(){
        if (!title){
            return alert("digite o titulo da nota")
        }
        if (newTag) {
            return alert("Você deixou uma tag no campo para adicionar , mas não clicou em adicionar , clique para adicionar ou deixe o campo vazio")
        }
        if (newLink) {
            return alert("Você deixou uma link no campo para adicionar , mas não clicou em adicionar , clique para adicionar ou deixe o campo vazio")

        }
        await api.post("/notes" , {
            title,
            description,
            tags,
            links
        })


        alert("nota criada com sucesso")
        navigate("/")

    }
    return(

        <Container>
           <Header/>


           <main>
            <Form>
                <header>
                    <h1>Criar Nota</h1>
                    <Link to="/">Voltar</Link>  
                </header>

                <Input 
                placeholder="Titulo"
                onChange={e => setTitle(e.target.value)}
                
                />
                
                <TextArea 
                placeholder="Observações"
                onChange={e => setDescription(e.target.value)}
                />

                <Section title="Links úteis">

                {   
                    links.map((link , index) => (
                        <NoteItem
                        key={String(index)}
                        value={link}
                        onClick={() => handleRemoveLink(link)}
                    />
                    ))
                }
                
                    <NoteItem
                        isNew
                        placeholder="novo link"
                        value={newLink}
                        onChange={e =>setNewLink(e.target.value)}
                        onClick={handleAddLink}

                    />
                </Section>


                <Section title="Marcadores">

                    <div className="tags">
                    
                    {
                        tags.map((tags, index) => (

                        <NoteItem 
                        key={String(index)}
                        value={tags}
                        onClick={() => handleRemoveTag(tags)}
                        />

                        ))
                     
                    }
                        

                    <NoteItem 
                        isNew
                        placeholder="nova nota"
                        value={newTag}
                        onChange={e =>setNewTag(e.target.value)}
                        onClick={handleAddTag}
                    />

                    </div>
                </Section>

                <Button 
                title="Salvar"
                onClick ={handleNewNote}
                />



            </Form>
           </main>
        </Container>


    )
}