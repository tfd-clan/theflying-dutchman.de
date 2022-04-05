import React, { FC, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { Axios } from 'axios';

type submitProps = {
    formData: {}
}


const Submit: FC<submitProps> = ({ formData }) => {
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
            return (<div className='applicationForm'>Deine Bewerbung wurde erfolgreich Eingereicht</div>);
    }

    return (
        <div className='applicationForm'>
            <button onClick={submit}>Absenden</button>
        </div>
    );
}

export default Submit;
