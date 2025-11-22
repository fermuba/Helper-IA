import React from 'react';
import { useChat } from '../hooks/useChat';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';
import './ChatPage.css';

function ChatPage() {
  const { messages, loading, error, sendMessage, clearChat } = useChat();

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="chat-header">
          <h1>Helper IA 🤖</h1>
          <p>Tu asistente virtual de Recursos Humanos</p>
          <button onClick={clearChat} className="clear-btn">
            Limpiar chat
          </button>
        </div>

        <ChatWindow messages={messages} loading={loading} />
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <MessageInput onSend={sendMessage} disabled={loading} />
      </div>
    </div>
  );
}

export default ChatPage;