import React, { useRef, useState } from "react";
import "./Chatbot.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import send from "../img/material-symbols--send.svg";
import logout from "../img/power_settings_new_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
// import Iframe from "react-iframe";

export default function Chatbot() {
  const activeChat = useRef("");
  const [chat, setChat] = useState("");

  const contacts = [
    {
      name: "Name_1",
      chats: [
        { person: "sender", order: "1", message: "Hi....." },
        { person: "reciver", order: "2", message: "hello" },
        { person: "sender", order: "3", message: "yenla.." },
        { person: "reciver", order: "4", message: ";)" }
      ]
    },
    {
      name: "Name_2", chats: [
        { person: "sender", order: "1", message: "Hi....." },
        { person: "reciver", order: "2", message: "hello" },
        { person: "sender", order: "3", message: "yenla.." },
        { person: "reciver", order: "4", message: ":(" }
      ]
    },
    {
      name: "Name_3", chats: [
        { person: "sender", order: "1", message: "Hi....." },
        { person: "reciver", order: "2", message: "hello" },
        { person: "sender", order: "3", message: "yenla.." },
        { person: "reciver", order: "4", message: "kkhnkt" }
      ]
    },
    {
      name: "Name_4", chats: [
        { person: "sender", order: "1", message: "Hi....." },
        { person: "reciver", order: "2", message: "hello" },
        { person: "sender", order: "3", message: "yenla.." },
        { person: "reciver", order: "4", message: "sger,geg" }
      ]
    },
    {
      name: "Name_5", chats: [
        { person: "sender", order: "1", message: "Hi....." },
        { person: "reciver", order: "2", message: "hello" },
        { person: "sender", order: "3", message: "yenla.." },
        { person: "reciver", order: "4", message: "dgdfgdfg" }
      ]
    },
    {
      name: "Name_6", chats: [
        { person: "sender", order: "1", message: "Hi....." },
        { person: "reciver", order: "2", message: "hello" },
        { person: "sender", order: "3", message: "yenla.." },
        { person: "reciver", order: "4", message: "sfsdf" }
      ]
    },
    {
      name: "Name_7", chats: [
        { person: "sender", order: "1", message: "Hi....." },
        { person: "reciver", order: "2", message: "hello" },
        { person: "sender", order: "3", message: "yenla.." },
        { person: "reciver", order: "4", message: "fasdfas" }
      ]
    }
  ]

  const newContactList = contacts.map((user) => {
    const lastChat = user.chats[user.chats.length - 1];
    return { name: user.name, lastMessage: lastChat ? lastChat.message : null }
  })

  // const mergeSenderReciverChat = [...chat.Chats.sender, ...chat.Chats.reciver];
  // console.log(chat);
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center py-2'>
      <div className='h-100 card-color-primary w-25 px-3 rounded-4 mx-3'>
        <h4 className='text-center px-2 py-2'>Chat</h4>
        <div className='w-100'>
          <input type="text" placeholder='Search' className='search-input card-color-secondary border rounded-5 w-100 px-3 py-1' />
        </div>

        {newContactList.map((user) =>
          <div key={user.name} onClick={() => {
            activeChat.current = user.name;
            const chat = contacts.find((e) => e.name === activeChat.current);
            setChat(chat);
          }} className='cursor-pointer my-3 card-color-secondary rounded-3 px-2 py-1'>
            <div className='w-100'>
              <h6 className='mx-2 my-0'>{user.name}</h6>
            </div>
            <div className='w-100'>
              <p className='mx-2 m-0'>{user.lastMessage}</p>
            </div>
          </div>)}
      </div>


      <div className='w-75 mx-3 h-100'>
        <div className='d-flex justify-content-end align-items-center mb-2'>
          <div className='card-color-secondary d-flex justify-content-center align-items-center py-1 rounded-4'>
            <h2 className='m-0 px-2'>UserName</h2>
            <div className='cursor-pointer card-color-primary mx-2 my-1 p-2 rounded-3'>
              <img src={logout} alt="logout" />
            </div>
          </div>
        </div>
        <div className='chatRightCard d-flex justify-content-between align-items-center flex-column card-color-primary rounded-4'>
          <div className={chat === "" ? 'd-none' : 'card-color-secondary rounded-top-4 w-100'}>
            <h3 className='text-center my-2'>{activeChat.current}</h3>
          </div>
          <div className={chat === "" ? 'd-flex justify-content-center align-items-center flex-column h-100 w-100' : 'd-flex justify-content-start align-items-center flex-column h-100 w-100 py-4'}>
            {chat === "" ? <h1 className='text-center'>Wellcome to chat</h1> :
              <div className='w-100'>
                {chat.chats.map((user) => <div className={user.person === "sender" ? 'sender-message w-100 px-3' : 'reciver-message w-100 px-3'}>
                  <p className='card-color-secondary px-2 py-1 m-0'>{user.message}</p>
                </div>)}
              </div>
            }
          </div>
          <div className={chat === "" ? 'd-none' : 'position-relative w-100 px-2 my-3'}>
            <img src={send} className='cursor-pointer position-absolute top-0 end-0 py-2 px-3' alt='send'></img>
            <input className='message-input border rounded-5 w-100 px-3 py-1' type="text" placeholder='Message' />
          </div>
        </div>
      </div>
    </div>
  )
}
