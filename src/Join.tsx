import React, { FC, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { Axios } from 'axios';

const Join: FC = () => {
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState({});
    const [error, setError] = useState({});

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    }

    function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();

        axios({
            method: "post",
            url: "http://localhost:8080/api/FormHandler.php",
            headers: { "content-type": "application/json" },
            data: formData
        }).then(result => {
            if (result.data.sent) {
                setSuccess(result.data.sent);
                setError(false);
            } else {
                setError(true);
            }
        }).catch(error => { setError(error.message) });
    }

    return (
        <form action='#'>
            Was ist dein Vorname? <input type="text" name="firstname" onChange={handleChange}/> <br />
            Was ist dein Nachname? <input type="text" name="lastname" onChange={handleChange}/> <br />
            Wie ist dein TeamSpeak Nutzername? <input name="tsusername" type="text" onChange={handleChange}/> <br />
            Was ist dein GamerTag? <input type="text" name="gamertag" onChange={handleChange}/> <br />
            Wann wurdest du Geboren? <input type="date" name="birthday" onChange={handleChange}/> <br />
            Stell dich bitte vor: <textarea name="introduction" onChange={handleChange} /> <br />
            Was ist deine Email? <input type="email" name="mail" onChange={handleChange}/>
            <input type="submit" value="submit" onClick={handleSubmit as any}/>
        </form>
    );
}

export default Join;
