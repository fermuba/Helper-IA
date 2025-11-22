import React from 'react';
import { MESSAGE_TYPES } from '../utils/constants';
import './Message.css';

function Message({ message }) {
  const isUser = message.type === MESSAGE_TYPES.USER;

  return (
    <div className={`message ${isUser ? 'user-message' : 'ai-message'}`}>
      <div className="message-content">
        <p>{message.content}</p>
        
        {!isUser && message.suggestedActions && message.suggestedActions.length > 0 && (
          <div className="suggested-actions">
            <p className="actions-title">Acciones sugeridas:</p>
            {message.suggestedActions.map((action, index) => (
              <button key={index} className="action-btn">
                {action}
              </button>
            ))}
          </div>
        )}

        {!isUser && message.confidence && (
          <div className="confidence-indicator">
            <span className={`confidence ${getConfidenceClass(message.confidence)}`}>
              Confianza: {(message.confidence * 100).toFixed(0)}%
            </span>
          </div>
        )}
      </div>
      
      <div className="message-timestamp">
        {new Date(message.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
}

function getConfidenceClass(confidence) {
  if (confidence >= 0.8) return 'high';
  if (confidence >= 0.6) return 'medium';
  return 'low';
}

export default Message;