import React, { useEffect } from "react";

const MessageList = ({ messages, user }) => {
  const boxRef = React.createRef();

  useEffect(() => {
    const box = boxRef.current;
    // scroll to bottom to make the last message visible
    box.scrollTo(0, box.scrollHeight);
  });

  const renderMessage = (message) => {
    let tag = "tag";
    if (message.from === user) {
      tag += " is-primary";
    }
    return (
      <tr key={message.id}>
        <td>
          <span className={tag}>{message.from}</span>
        </td>
        <td style={{ paddingLeft: "0.75em" }}>{message.text}</td>
      </tr>
    );
  };

  return (
    <div
      ref={boxRef}
      className="box"
      style={{ height: "50vh", overflowY: "scroll" }}
    >
      <table>
        <tbody>{messages.map((message) => renderMessage(message))}</tbody>
      </table>
    </div>
  );
};

export default MessageList;
