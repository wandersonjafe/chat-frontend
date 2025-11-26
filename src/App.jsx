import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light"); 

  const handleSend = async () => {
    if (input.trim() === "" || loading) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    const messageToSend = input;
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await response.json();

      const botMessage = {
        text: data.response,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const botMessage = {
        text: "Erro ao conectar com o backend.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className={`chat-wrapper ${theme}`}>
      <div className="chat-container">
        <div className="chat-inner">
          {/* HEADER */}
          <header className="chat-header">
            <h1 className="chat-title">DreamSquad Chat</h1>

            {/* Botão de tema */}
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </header>

          {/* Mensagens */}
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Três pontinhos animados enquanto o bot "digita" */}
            {loading && (
              <div className="chat-message bot-message typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="chat-input-container">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="chat-input"
            />
            <button onClick={handleSend} className="chat-send-btn">
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
