// src/client/components/ChatContext.tsx

import { createContext, useEffect, useRef, useState } from 'react';

export const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const socketRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL.replace(/^https?:\/\//, '');
    const socketUrl = `ws://${baseUrl}`;

    socketRef.current = new WebSocket(socketUrl);

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages(prev => [...prev, data]);
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  return (
    <ChatContext.Provider value={{ messages }}>
      {children}
    </ChatContext.Provider>
  );
};
