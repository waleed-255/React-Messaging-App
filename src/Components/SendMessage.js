import { useState } from "react";

function SendMessage() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("Umer");

  const send = async () => {
    if (!text) return;
    await fetch("http://localhost:5000/sendmessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sender: name, text: text }),
    });
    setMessages([...messages, name + ": " + text]);
    setText("");
  };

  return (
    <div>
      <h2>Chat</h2>

      {messages.map((m, i) => (
        <p key={i}>{m}</p>
      ))}

      <select value={name} onChange={(e) => setName(e.target.value)}>
        <option value="Umer">Umer</option>
        <option value="Ali">Ali</option>
        <option value="Sara">Sara</option>
      </select>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Message likho"
      />
      <button onClick={send}>Send</button>
    </div>
  );
}

export default SendMessage;