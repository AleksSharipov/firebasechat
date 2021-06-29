import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import firebase from '../Firebase';

export default function Login(){
  const history = useHistory();
  const [userName, setUserName] = useState({nickname: ''});
  const ref = firebase.database().ref('users/');
  
  const onChanges = (e) =>{
    setUserName({...userName, [e.target.name]: e.target.value})
  }



  function handleFormSubmit(e){
    e.preventDefault();
    ref.orderByChild('nickname').equalTo(userName.nickname).once('value', snapshot =>{
      if(snapshot.exists()) {
        localStorage.setItem('nickname', userName.nickname);
        history.push('/chat');
      } else {
        const newUser = firebase.database().ref('users/').push();
        newUser.set(userName);
        localStorage.setItem('nickname', userName.nickname);
        history.push('/chat');
      }
    })
    
    // setUserName('')
  }

  return (
    <section className="login">
      <p className="login__descriptions">Ваше имя для чата:</p>
      <form onSubmit={handleFormSubmit} className="login__form">
        <input className="login__input" type="text" name="nickname" id="nickname" placeholder='Name' onChange={onChanges} value={userName.nickname}></input>
        <button  className="login__btn">Join</button>
      </form>
    </section>
  )
} 