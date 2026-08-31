import { useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatbotWindow from "./ChatbotWindow";
import "./Chatbot.css";

export default function Chatbot() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm the KDU AI Assistant. I'm currently under development. Feel free to send a message and see how the interface works.",
    },
  ]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text,
      },
    ]);

    // Placeholder response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "The KDU AI Assistant is currently under development. Soon I'll answer questions about admissions, scholarships, visa information, student services, and more.",
        },
      ]);
    }, 700);
  };

  return (
    <>
      {open && (
        <ChatbotWindow
          onClose={() => setOpen(false)}
          messages={messages}
          onSend={handleSend}
        />
      )}

      <ChatbotButton
        onClick={() => setOpen(true)}
      />
    </>
  );
}