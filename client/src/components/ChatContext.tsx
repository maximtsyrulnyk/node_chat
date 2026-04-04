import { createContext, useEffect, useRef, useState } from 'react';

export const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const socketRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL.replace(/^https?:\/\//, '');
    const socketUrl = `ws://${baseUrl}`;

    socketRef.current = new WebSocket(socketUrl);

    socketRef.current.onmessage = (event) => {
      setMessages(prev => [...prev, event.data]);
    };

    return () => socketRef.current?.close();
  }, []);

  const sendMessage = (message: string) => {
    socketRef.current?.send(message);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};