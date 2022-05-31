import React, { FC, useState} from 'react';
import './App.css';
import axios, { Axios } from 'axios';
import { FormData } from './JoinForm';

type submitProps = {
    formData: FormData
    back: () => void
}


const Submit: FC<submitProps> = ({ formData, back }) => {
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    function submit() {
        axios({
             method: "post",
              url: "http://localhost:8080/api/FormHandler.php",
              headers: { "content-type": "application/json" },
              data: formData
        }).then(result => {
            if (result.data.success) {
                setSuccess(result.data.success);
                setError(false);
            } else {
                setError(true);
            }
        }).catch(error => { setError(error.message) });
    }

    if (success) {
        return (
            <div className='application-form'>
                <img src="/img/logo.png" width="50%" height="auto" />
                <p>Deine Bewerbung wurde erfolgreich Eingereicht</p>
            </div>
        );
    }

    return (
        <div className='application-form'>
            <div className='form'>
                Name: {formData.firstname} {formData.lastname} <br />
                Gebutstag: {formData.birthday} <br /> <br />
                Teamspeak: {formData.tsusername} <br />
                Gamertag: {formData.gamertag} <br /> <br />
                E-Mail: {formData.email} <br />
                Handynummer: {formData.phone} <br /> <br />
                Vorstellung: <br /> {formData.introduction} <br /> <br />

                <div className='form-buttons'>
                    <button className='form-button' onClick={back}>Zurück</button>
                    <button className='form-button' onClick={submit}>Absenden</button>
                </div>
            </div>
        </div>
    );
}

export default Submit;
