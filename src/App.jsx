import { RouterProvider } from 'react-router-dom';
import Chatbot from "./components/chatbot/Chatbot";

import router from './routes/router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Chatbot />
    </>
  );
}

export default App;
