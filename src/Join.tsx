import React, { FC, useState} from 'react';
import './App.css';
import Submit from './Submit';

enum step{
    personal,
    usernames,
    contact,
    introduction,
    submit
}

const Join: FC = () => {
    const [formData, setFormData] = useState({});
    const [state, setState] = useState<number>(step.personal);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    }

    function next() {
        setState(state + 1);
    }

    switch (state) {
        case step.personal:
            return (<PersonalData handleChange={handleChange} next={next}/>);
        case step.usernames:
            return (<Usernames handleChange={handleChange} next={next}/>);
        case step.contact:
            return (<ContactData handleChange={handleChange} next={next}/>);
        case step.introduction:
            return (<Introduction handleChange={handleChange} next={next}/>);
        case step.submit:
            return (<Submit formData={formData}></Submit>)
        default:
            return (<div>oh no</div>);
    }
}

type formProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    next: ()=>void
}

const PersonalData: FC<formProps> = ({ handleChange, next }) => {
    return (
        <div className='applicationForm hero-image'>
            <form onSubmit={next} className='form'>
                Hey! <br />
                Schön, dass du Teil von The Flying Dutchman werden willst. Um dich als Mitglied aufnehmen zu können, benötigen wir zuerst ein paar Daten zu deiner Person: <br />
                <label htmlFor="firstname">Vorname:</label><input type="text" name="firstname" id="firstname" onChange={handleChange} required/> <br/>
                <label htmlFor="lastname">Nachname:</label><input type="text" name="lastname" id="lastname" onChange={handleChange} required/> <br />
                <label htmlFor="birthday">Geburtstag:</label><input type="date" name="birthday" id="birthday" onChange={handleChange} required/> <br />
                <input className='next' type="submit"value="Weiter"/>
            </form>
        </div>
    );
}

const Usernames: FC<formProps> = ({handleChange, next}) => {
    return (
        <div className='applicationForm'>
            <form onSubmit={next} className='form'>
                Damit wir dir die richtigen Rollen geben können und auf und dich auf unseren Servern whitelisten, brauchen wir jetzt ein paar deiner Nutzernamen: <br />
                <label htmlFor="tsusername">Teamspeak Nutzername:</label><input type="text" name="tsusername" id="tsusername" onChange={handleChange} required/> <br />
                <label htmlFor="gamertag">Steam Nutzername:</label><input type="text" name="gamertag" id="gamertag" onChange={handleChange} required/> <br />
                <input className='next' type="submit" value="Weiter"/>
            </form>
        </div>
    );
}

const ContactData: FC<formProps> = ({handleChange, next}) => {
    return (
        <div className='applicationForm'>
            <form onSubmit={next} className='form'>
                Hier bräuchten wir deine Kontaktdaten. Schießlich willst du ja auch wissen wann dein Mitglieschaftsantrag bearbeitet wurde. Deine Handynummer ist optional und brauchen wir nur um dich in die The Flying Dutchman Whatsapp Gruppe hinzuzufügen. <br />
                <label htmlFor="email">Email Adresse:</label><input type="email" name="email" id="email" onChange={handleChange} required/><br />
                <label htmlFor="phone">Mobilnummer:</label><input type="tel" name="phone" id="phone" onChange={handleChange} pattern="[+]{1}[0-9]{11,14}"/><br />
                <input className='next' type="submit" value="Weiter"/>
            </form>
        </div>
    );
}

const Introduction: FC<formProps> = ({handleChange, next}) => {
    return (
        <div className='applicationForm'>
            <form onSubmit={next} className='form'>
                Jetzt kannst du dich noch etwas vorstellen und uns überzeugen, das du eine Bereicherung für unseren Clan bist: <br />
                <textarea name="introduction" id="introduction" onChange={handleChange} /> <br />
                <input className='next' type="submit" value="Weiter"/>
            </form>
        </div>
    );
}

export default Join;
