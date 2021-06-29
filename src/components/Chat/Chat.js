import React, {useState, useEffect} from 'react';
// import { useHistory } from 'react-router-dom';
import firebase from '../Firebase';

export default function Chat(){
  const [chats, setChats] = useState([]);
  const [nickname, setNickname] = useState('');
  const [userMsg, setUserMsg] = useState({
    nickname:'',
    message:''
  })
  // const history = useHistory();

  const snapshotToArray = (snapshot) => {
    const returnArr = [];

    snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
}

  useEffect(()=>{
    const fetchData = async () => {
      setNickname(localStorage.getItem('nickname'));
      firebase.database().ref('chat/').on('value', resp => {
        setChats([]);
        setChats(snapshotToArray(resp));
      });
    };

    fetchData();
  }, [])


  useEffect(()=>{
    const fetchData = async () =>{
      setNickname(localStorage.getItem('nickname'));
    };
    fetchData();
  }, [])

  const submitMessage = (e) => {
    e.preventDefault();
    if(userMsg.message){
      const newMsg = userMsg;
      newMsg.nickname = nickname;
      const newMessage = firebase.database().ref('chat/').push();
      newMessage.set(newMsg);
      setUserMsg({
        nickname:'',
        message:''
      })
    }
    
  }

  const onChange = (e) => {
    e.persist();
    setUserMsg({...userMsg, [e.target.name]: e.target.value});
}

  return (
    <section className="chat">
      <ul className="chat__list">
        {
          chats.map(el =>{
            return el.nickname === nickname ? <li key={el.key} className="chat__msg chat__mymsg"><span className="chat__nick">Me</span>{el.message}</li> : <li className="chat__msg chat__anymsg" key={el.key}><span className="chat__nick">{el.nickname}</span>{el.message}</li>
            //  return <li key={el.key}>{el.message}</li>
          })
        }
      </ul>
      <form className="chat__form" onSubmit={submitMessage}>
        <input className="chat__input" type="text" name="message" id="message" value={userMsg.message} onChange={onChange} placeholder="Message"></input>
        <button className="chat__btn">Send</button>
      </form>
    </section>
  )
} 