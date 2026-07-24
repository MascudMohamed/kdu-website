import { MessageCircle } from "lucide-react";

export default function ChatbotButton({ onClick }) {
  return (
    <button
      className="chatbot-button"
      onClick={onClick}
      aria-label="Open KDU AI Assistant"
    >
      <MessageCircle size={28} strokeWidth={2.3} />
    </button>
  );
}