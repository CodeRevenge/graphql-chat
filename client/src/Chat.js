import React, { useState, useEffect } from "react";
import { addMessage, getMessages, onMessageAdded } from "./graphql/queries";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let subscription;
    const getData = async () => {
      const serverMessages = await getMessages();
      setMessages(serverMessages);
      subscription = onMessageAdded((message) => {
        setMessages(messages.concat(message));
      });
    };
    getData();

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [messages]);

  const handleSend = async (text) => {
    await addMessage(text);
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
