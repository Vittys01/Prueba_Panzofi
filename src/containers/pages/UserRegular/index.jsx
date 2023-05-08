import React, { useState } from 'react';

function UserRegularPage() {
  const [button1Clicks, setButton1Clicks] = useState(0);
  const [button2Clicks, setButton2Clicks] = useState(0);

  function handleButton1Click() {
    setButton1Clicks(button1Clicks + 1);
    fetch('/api/button1-clicks', {
      method: 'POST',
      body: JSON.stringify({ count: button1Clicks + 1 }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error('There was an error sending the button1 clicks:', error);
      });
  }

  function handleButton2Click() {
    setButton2Clicks(button2Clicks + 1);
    fetch('/api/button2-clicks', {
      method: 'POST',
      body: JSON.stringify({ count: button2Clicks + 1 }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error('There was an error sending the button2 clicks:', error);
      });
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-10">
          <img src="/logo.png" alt="Logo" className="h-10 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Mi página de aterrizaje</h1>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-md shadow p-8">
          <p className="text-lg text-gray-600">
            Bienvenido a mi página de aterrizaje. Aquí puedes encontrar toda la información que necesitas sobre nuestro
            producto o servicio.
          </p>
          <div className="mt-8 flex justify-between">
            <button onClick={handleButton1Click} className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Botón 1
            </button>
            <button onClick={handleButton2Click} className="bg-green-500 text-white py-2 px-4 rounded-md">
              Botón 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegularPage;
