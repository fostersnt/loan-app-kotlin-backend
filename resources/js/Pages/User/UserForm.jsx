// Form.jsx
import React, { useState } from 'react';
import '../../../css/forms.css'
import { User } from 'lucide-react';
import { useForm } from '@inertiajs/react';

export default function UserForm({ onSubmit }) {

  const { data, setData, post, processing, progress, errors, setError } = useForm({
    name: '',
    email: '',
    msisdn: ''
  })

  const onValueChange = (e) => {
    setError(e.target.name, '');
    setData(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("USER DATA === " + JSON.stringify(data));
    post('/dashboard/users/create');
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
          value={data.name}
          onChange={(e) => onValueChange(e)}
          // required
        />
        {errors.name && <div>{errors.name}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          // type="email"
          id="email"
          name="email"
          className="form-control"
          value={data.email}
          onChange={(e) => onValueChange(e)}
          // required
        />
        {errors.email && <div>{errors.email}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="msisdn" className="form-label">MSISDN</label>
        <input
          type="tel"
          id="msisdn"
          name="msisdn"
          className="form-control"
          value={data.msisdn}
          onChange={(e) => onValueChange(e)}
          // required
          // pattern="[0-9]{10,15}"
          placeholder="e.g. 233501234567"
        />
        {errors.msisdn && <div>{errors.msisdn}</div>}
      </div>

      <div className="form-group text-end">
        <button type="submit" className="btn" disabled={processing}>Submit</button>
      </div>
    </form>
  );
}
