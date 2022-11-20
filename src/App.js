import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/route';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
