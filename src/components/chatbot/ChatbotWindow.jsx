import { useState } from "react";
import { X, Bot, Send } from "lucide-react";

export default function ChatbotWindow({
  onClose,
  messages,
  onSend,
}) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    onSend(input);
    setInput("");
  };

  return (
    <div className="chatbot-window">

      <div className="chatbot-header">
        <div className="chatbot-header-left">
          <Bot size={24} />

          <div>
            <h3>KDU AI Assistant</h3>
            <span>Coming Soon</span>
          </div>
        </div>

        <button onClick={onClose}>
          <X size={22} />
        </button>
      </div>

      <div className="chatbot-body">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}

      </div>

      <div className="chatbot-footer">

        <input
          type="text"
          placeholder="Ask anything about KDU..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button onClick={handleSend}>
          <Send size={18} />
        </button>

      </div>

    </div>
  );
}