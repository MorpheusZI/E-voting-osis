// app/app.tsx

import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ nama: '', NISN: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send formData to the server component for validation
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const user = await response.json();

      // Store user data in sessionStorage
      sessionStorage.setItem('user', JSON.stringify(user));

      // Redirect to another page
      // Replace '/dashboard' with the desired URL
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className='flex flex-col gap-8 border rounded-xl shadow-lg shadow-blue-400 px-4 py-5 items-center'>
      <h1 className='block text-3xl'>Evoting Osis</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <label>
            Nama:
          </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
            />
        </div>
        <div>
          <label>
            NISN:
            <input
              type="password"
              name="NISN"
              value={formData.NISN}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
