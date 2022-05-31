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

export type FormData = {
    firstname: string
    lastname: string
    birthday: string
    tsusername: string
    gamertag: string
    email: string
    phone: string
    introduction: string
}

const JoinForm: FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstname: '',
        lastname: '',
        birthday: '',
        tsusername: '',
        gamertag: '',
        email: '',
        phone: '',
        introduction: '',
    });
    const [state, setState] = useState<number>(step.personal);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    }

    function next() {
        setState(state + 1);
    }

    function back() {
        setState(state - 1);
    }

    switch (state) {
        case step.personal:
            return (<PersonalData handleChange={handleChange} next={next} back={back} formData={formData}/>);
        case step.usernames:
            return (<Usernames handleChange={handleChange} next={next} back={back} formData={formData} />);
        case step.contact:
            return (<ContactData handleChange={handleChange} next={next} back={back} formData={formData} />);
        case step.introduction:
            return (<Introduction handleChange={handleChange} next={next} back={back} formData={formData}/>);
        case step.submit:
            return (<Submit formData={formData} back={back}></Submit>)
        default:
            return (<div>oh no</div>);
    }
}

type formProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    next: () => void
    back: () => void
    formData: FormData
}

const PersonalData: FC<formProps> = ({ handleChange, next, back, formData }) => {
    return (
        <div className='application-form'>
            <form onSubmit={next} className='form'>
                Hey! <br />
                Schön, dass du Teil von The Flying Dutchman werden willst. Um dich als Mitglied aufnehmen zu können, benötigen wir zuerst ein paar Daten zu deiner Person: <br /> <br />
                <label htmlFor="firstname">Vorname:</label><input type="text" name="firstname" id="firstname" onChange={handleChange} value={formData.firstname} required/> <br/>
                <label htmlFor="lastname">Nachname:</label><input type="text" name="lastname" id="lastname" onChange={handleChange} value={formData.lastname} required/> <br />
                <label htmlFor="birthday">Geburtstag:</label><input type="date" name="birthday" id="birthday" onChange={handleChange} value={formData.birthday} required />
                <br /> <br />
                <div className='form-buttons'>
                    <div></div>
                    <input className='form-button next' type="submit"value="Weiter"/>
                </div>
            </form>
        </div>
    );
}

const Usernames: FC<formProps> = ({handleChange, next, back, formData}) => {
    return (
        <div className='application-form'>
            <form onSubmit={next} className='form'>
                Damit wir dir die richtigen Rollen geben können und auf und dich auf unseren Servern whitelisten, brauchen wir jetzt ein paar deiner Nutzernamen: <br /> <br />
                <label htmlFor="tsusername">Teamspeak Nutzername:</label><input type="text" name="tsusername" id="tsusername" onChange={handleChange} value={formData.tsusername} required/> <br />
                <label htmlFor="gamertag">Steam Nutzername:</label><input type="text" name="gamertag" id="gamertag" onChange={handleChange} value={formData.gamertag} required />
                <br /> <br />
                <div className='form-buttons'>
                    <button className='form-button back' onClick={back}>Zurück</button>
                    <input className='form-button next' type="submit" value="Weiter" />
                </div>
            </form>
        </div>
    );
}

const ContactData: FC<formProps> = ({handleChange, next, back, formData}) => {
    return (
        <div className='application-form'>
            <form onSubmit={next} className='form'>
                Hier bräuchten wir deine Kontaktdaten. Schießlich willst du ja auch wissen wann dein Mitglieschaftsantrag bearbeitet wurde. Deine Handynummer ist optional und brauchen wir nur um dich in die The Flying Dutchman Whatsapp Gruppe hinzuzufügen. <br /> <br />
                <label htmlFor="email">Email Adresse:</label><input type="email" name="email" id="email" onChange={handleChange} value={formData.email} required/><br />
                <label htmlFor="phone">Mobilnummer:</label><input type="tel" name="phone" id="phone" onChange={handleChange} value={formData.phone} pattern="[+]{1}[0-9]{11,14}" />
                <br /> <br />
                <div className='form-buttons'>
                    <button className='form-button back' onClick={back}>Zurück</button>
                    <input className='form-button next' type="submit" value="Weiter"/>
                </div>
            </form>
        </div>
    );
}

const Introduction: FC<formProps> = ({handleChange, next, back, formData}) => {
    return (
        <div className='application-form'>
            <form onSubmit={next} className='form'>
                Jetzt kannst du dich noch etwas vorstellen und uns überzeugen, das du eine Bereicherung für unseren Clan bist: <br /> <br />
                <textarea name="introduction" id="introduction" onChange={handleChange} value={formData.introduction}/>
                <br /> <br />
                <div className='form-buttons'>
                    <button className='form-button back' onClick={back}>Zurück</button>
                    <input className='form-button next' type="submit" value="Weiter"/>
                </div>
            </form>
        </div>
    );
}

export default JoinForm;
