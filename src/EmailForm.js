import React, { useState } from 'react';
import { IoMdSend } from 'react-icons/io';

function EmailForm() {
  // 1. Stato per gestire il valore dell'email
  const [email, setEmail] = useState('');

  // 2. Gestore di eventi per aggiornare lo stato quando l'utente digita nell'input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // 3. Gestore di eventi per gestire l'invio del form
  const handleSubmit = (event) => {
    // 3a. Impedisci il comportamento predefinito di invio del form
    event.preventDefault();

    // 3b. Fai qualcosa con l'email, in questo caso, stampala nella console
    console.log('Email inserita:', email);
  };

  // 4. Renderizza il form
  return (
    <div >
      <form className='chatte_homepage_form' onSubmit={handleSubmit}>
        {/* 5. Label e campo di input per l'email */}
        
        <label className='Chatcloud_Homepage'>
          Non serve il tuo numero di telefono, <br/>
          inserisci la tua e-mail e inizia<br/>
          ad usare chatte.
          </label>
          <input className='Chatcloud_Homepage_Input'
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="scrivi un messaggio..."
          />
        
        
        {/* 6. Bottone di invio del form */}
        <button className='Send_Icon_ChatIcon' type="submit">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
}

export default EmailForm;