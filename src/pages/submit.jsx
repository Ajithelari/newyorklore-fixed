import React, { useState } from 'react';

function Submit() {
  const [form, setForm] = useState({ name: '', email: '', title: '', body: '' });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let errs = {};
    if (!form.name) errs.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (form.title.length > 80) errs.title = 'Title too long';
    if (form.body.length < 50 || form.body.length > 1000) errs.body = 'Body must be 50–1000 chars';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Simulate POST
    setTimeout(() => {
      setMessage("Thank you—your story is under review.");
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-4">
      <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border" />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input name="title" placeholder="Story Title" onChange={handleChange} className="w-full p-2 border" />
      {errors.title && <p className="text-red-500">{errors.title}</p>}

      <textarea name="body" placeholder="Story Body" onChange={handleChange} className="w-full p-2 border" />
      {errors.body && <p className="text-red-500">{errors.body}</p>}

      <button type="submit" className="bg-[#E91E63] text-white px-4 py-2">Submit</button>
      {message && <p className="text-green-600">{message}</p>}
    </form>
  );
}

export default Submit;
