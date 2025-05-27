// Form.jsx
import React, { useState } from 'react';
import '../../../css/forms.css'
import { router } from '@inertiajs/react';
import { User } from 'lucide-react';

export default function UserForm({ onSubmit }) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    msisdn: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("USER DATA === " + JSON.stringify(user));
    router.post('/dashboard/users/create', JSON.stringify(user));
    // onSubmit(form); // You can send this to backend via Inertia or fetch
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={user.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="msisdn" className="form-label">MSISDN</label>
        <input
          type="tel"
          id="msisdn"
          name="msisdn"
          className="form-control"
          value={user.msisdn}
          onChange={handleChange}
          required
          pattern="[0-9]{10,15}"
          placeholder="e.g. 233501234567"
        />
      </div>

      <div className="form-group text-end">
        <button type="submit" className="btn">Submit</button>
      </div>
    </form>
  );
}
