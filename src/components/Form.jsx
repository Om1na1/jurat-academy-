// src/components/Form.jsx
import React, { useState } from 'react';
import '../styles/Form.css';

const API_BASE = process.env.REACT_APP_API_BASE || ''; // например: https://localhost:7196

const Form = () => {
  const [formType, setFormType] = useState('enroll');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // { type: 'success'|'error', text: string }
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Простая проверка
    if (!formData.phone.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', text: 'Пожалуйста, заполните Телефон, Email и Сообщение.' });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus({ type: 'success', text: data.message || 'Сообщение отправлено. Проверьте почту.' });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', text: data.message || 'Не удалось отправить. Попробуйте позже.' });
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Ошибка сети. Проверьте подключение.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="form-section">
      <div className="form-wrapper">
        <div className="form-box">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-radio">
              <label>
                <input
                  type="radio"
                  name="formType"
                  value="enroll"
                  checked={formType === 'enroll'}
                  onChange={() => setFormType('enroll')}
                />
                {' '}Запись в школу
              </label>
              <label style={{ marginLeft: 16 }}>
                <input
                  type="radio"
                  name="formType"
                  value="question"
                  checked={formType === 'question'}
                  onChange={() => setFormType('question')}
                />
                {' '}Задать вопрос
              </label>
            </div>

            <div className="form-group">
              <label>Имя</label>
              <input
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label>Телефон*</label>
              <input
                type="tel"
                name="phone"
                placeholder="Номер телефона"
                value={formData.phone}
                onChange={handleChange}
                required
                inputMode="tel"
                autoComplete="tel"
              />
            </div>

            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Ваш e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label>Сообщение*</label>
              <textarea
                name="message"
                placeholder="Сообщение"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>

            <button type="submit" className="form-submit" disabled={loading}>
              {loading ? 'Отправляем…' : 'ОТПРАВИТЬ СООБЩЕНИЕ'}
            </button>

            {status && <div className={`status-card ${status.type}`}>{status.text}</div>}
          </form>
        </div>

        <div className="form-image">
          <img src="/images/main_form1_img.jpg" alt="Футбол" />
        </div>
      </div>
    </section>
  );
};

export default Form;
