import React, { useEffect, useRef } from 'react';
import Message from './Message';
import './ChatWindow.css';

function ChatWindow({ messages, loading }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.length === 0 && (
        <div className="welcome-message">
          <h2>👋 ¡Hola!</h2>
          <p>Soy Helper IA, tu asistente virtual de RH.</p>
          <p>¿En qué puedo ayudarte hoy?</p>
          <div className="suggestions">
            <button>🔑 Restablecer contraseña</button>
            <button>🏖️ Consultar vacaciones</button>
            <button>📄 Solicitar constancia</button>
          </div>
        </div>
      )}

      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      {loading && (
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatWindow;