import { useContext } from 'react';
import { ChatContext } from './components/ChatContext';

function App() {
  const { messages, sendMessage } = useContext(ChatContext);

  return (
    <div>
      <h1>Chat</h1>

      <button onClick={() => sendMessage("Hello!")}>
        Send message
      </button>

      {messages.map((msg, i) => (
        <div key={i}>{msg}</div>
      ))}
    </div>
  );
}

export default App;