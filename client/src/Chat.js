import React, { useState, useEffect } from "react";
import { addMessage, getMessages } from "./graphql/queries";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const serverMessages = await getMessages();
      setMessages(serverMessages);
    };
    getData();
  }, []);

  const handleSend = async (text) => {
    const message = await addMessage(text);
    setMessages(messages.concat(message));
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Chatting as {user}</h1>
        <MessageList user={user} messages={messages} />
        <MessageInput onSend={(text) => handleSend(text)} />
      </div>
    </section>
  );
};

export default Chat;
