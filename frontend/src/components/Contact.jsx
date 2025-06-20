import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container" style={{ maxWidth: 600, width: '100%', background: '#fff', padding: '72px 32px 32px 32px', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
        <h1 className="heading" style={{ textAlign: 'center', marginBottom: 24 }}>Contact Us</h1>
        <p style={{ textAlign: 'center', marginBottom: 24 }}>
          Have questions or want to make a reservation? Reach out to us!
        </p>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
            <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
          </div>
          <textarea name="message" placeholder="Your Message" rows={4} value={form.message} onChange={handleChange} style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #ccc', marginBottom: 16 }} />
          <button type="submit" style={{ width: '100%', padding: 12, borderRadius: 6, background: '#e65100', color: '#fff', fontWeight: 600, border: 'none', fontSize: 16 }}>Send Message</button>
        </form>
        <div style={{ marginTop: 32, textAlign: 'center', color: '#333' }}>
          <p><b>Address:</b> Punjabi Bagh -110026, New Delhi</p>
          <p><b>Phone:</b> +91-9876543210</p>
          <p><b>Email:</b> info@dipikasrestaurant.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 