import React from "react";

const MessageInput = ({ onSend }) => {
  const handleKeyPress = ({ key, target }) => {
    if (key === "Enter") {
      onSend(target.value);
      target.value = "";
    }
  };

  return (
    <div className="box">
      <p className="control">
        <input
          className="input"
          type="text"
          placeholder="Say something..."
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </p>
    </div>
  );
};

export default MessageInput;
