import { useState } from 'react';

export default function Submit() {
  const [form, setForm] = useState({ name: '', email: '', title: '', body: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let e = {};
    if (!form.name) e.name = 'Name required';
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.title || form.title.length > 80) e.title = 'Title max 80 chars';
    if (!form.body || form.body.length < 50 || form.body.length > 1000) e.body = 'Body 50–1000 chars';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    fetch('/api/submit-lore', { method: 'POST', body: JSON.stringify(form) })
      .then(res => res.json())
      .then(() => setSubmitted(true));
  };

  return submitted ? (
    <p>Thank you — your story is under review.</p>
  ) : (
    <form onSubmit={handleSubmit}>
      {['name', 'email', 'title', 'body'].map(field => (
        <div key={field}>
          <label>{field}</label>
          <input
            type={field === 'body' ? 'textarea' : 'text'}
            value={form[field]}
            onChange={e => setForm({ ...form, [field]: e.target.value })}
          />
          {errors[field] && <span style={{ color: 'red' }}>{errors[field]}</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
