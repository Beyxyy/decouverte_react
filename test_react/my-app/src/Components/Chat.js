import React, {useState} from 'react';

const Chat = () => {

 const [message, newChat] = useState([]);

    // if (window.localStorage.getItem("conv")){
    //     newChat(
    //         message=JSON.parse(localStorage.getItem('conv')
    //         ));
    // };
   

    const handleMessage = (e)=>{
        e.preventDefault();
            newChat(
            [...message, {text : document.querySelector('.zone_saisie').value, user : document.querySelector('.zone_user').value }]);
            console.log(JSON.stringify(message));
            // localStorage.setItem('conv', JSON.stringify(message)) ;
    }
    return (
        <div>
            {message.map((message)=>(
                <li key={message.text}>{message.text} <i>ecrit par {message.user}</i></li>
            ))}

            <form>
                <input className="zone_saisie" name='message'>
                </input>
                <input className="zone_user" name='message'>
                </input>
                <button onClick={handleMessage}> envoyer</button>
            </form>
        </div>
    );
};

export default Chat;