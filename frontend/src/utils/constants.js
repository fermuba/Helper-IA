// API Configuration
<<<<<<< HEAD
const ENV = process.env.NODE_ENV || 'development';

export const API_URLS = {
  development: 'http://localhost:3000/api',
  staging: 'https://helper-ia-staging.azurewebsites.net/api',
  production: 'https://helper-ia.azurewebsites.net/api'
};

export const API_BASE_URL = API_URLS[ENV];
=======
// Usar variable de entorno de Vite
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
>>>>>>> 7793451690122b27ed8205e6dcbbdd1ed3dff3f6

export const ENDPOINTS = {
  CHAT: '/api/chat',
  FEEDBACK: '/api/feedback',
  ANALYTICS: '/api/analytics',
  ESCALATION: '/api/escalation',
  HEALTH: '/api/health'
};

// Response Categories
export const CATEGORIES = {
  PASSWORD_RESET: 'PASSWORD_RESET',
  VACATION_INQUIRY: 'VACATION_INQUIRY',
  CERTIFICATE_REQUEST: 'CERTIFICATE_REQUEST',
  POLICY_QUESTION: 'POLICY_QUESTION',
  ESCALATE_TO_HUMAN: 'ESCALATE_TO_HUMAN'
};

// Message Types
export const MESSAGE_TYPES = {
  USER: 'user',
  AI: 'ai',
  SYSTEM: 'system'
};

// Action Types
export const ACTION_TYPES = {
  SEND_MESSAGE: 'SEND_MESSAGE',
  RECEIVE_MESSAGE: 'RECEIVE_MESSAGE',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_CHAT: 'CLEAR_CHAT'
};

// Confidence Thresholds
export const CONFIDENCE_THRESHOLDS = {
  HIGH: 0.8,
  MEDIUM: 0.6,
  LOW: 0.4
};

export default {
  API_BASE_URL,
  ENDPOINTS,
  CATEGORIES,
  MESSAGE_TYPES,
  ACTION_TYPES,
  CONFIDENCE_THRESHOLDS
};