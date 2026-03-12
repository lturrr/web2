"use client";

import { useEffect, useState } from "react";

const Popup = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    about_project: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const API_URL = 'http://127.0.0.1:8001/api/newmsg'; // ЗАМЕНИТь URL

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
      resetForm();
    } else {
      setIsClosing(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
        document.body.style.overflow = 'unset';
      }, 400);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const resetForm = () => {
    setFormData({ name: '', phone: '', about_project: '' });
    setErrors({});
    setTouched({});
    setSubmitStatus(null);
  };

  // Валидация имени
  const validateName = (name) => {
    if (!name || name.trim() === '') {
      return 'Имя обязательно для заполнения';
    }
    if (name.trim().length < 2) {
      return 'Имя должно содержать минимум 2 символа';
    }
    if (name.trim().length > 50) {
      return 'Имя не должно превышать 50 символов';
    }
    if (!/^[а-яА-Яa-zA-Z\s-]+$/.test(name)) {
      return 'Имя может содержать только буквы, пробелы и дефис';
    }
    return '';
  };

  // Валидация телефона
  const validatePhone = (phone) => {
    if (!phone || phone.trim() === '') {
      return 'Телефон обязателен для заполнения';
    }
    
    const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    
    if (!phoneRegex.test(phone)) {
      return 'Введите корректный номер телефона';
    }
    
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 11) {
      return 'Номер должен содержать 10-11 цифр';
    }
    
    return '';
  };

  // Валидация всей формы
  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      phone: validatePhone(formData.phone)
    };
    
    Object.keys(newErrors).forEach(key => {
      if (newErrors[key] === '') {
        delete newErrors[key];
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Обработка изменения полей
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    if (touched[id]) {
      let error = '';
      if (id === 'name') error = validateName(value);
      if (id === 'phone') error = validatePhone(value);
      
      setErrors(prev => ({
        ...prev,
        [id]: error
      }));
    }
  };

  // Обработка потери фокуса
  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched(prev => ({
      ...prev,
      [id]: true
    }));

    let error = '';
    if (id === 'name') error = validateName(formData.name);
    if (id === 'phone') error = validatePhone(formData.phone);
    
    setErrors(prev => ({
      ...prev,
      [id]: error
    }));
  };

  // Отправка формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setTouched({
      name: true,
      phone: true
    });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Очищаем данные перед отправкой
    const cleanPhone = formData.phone.replace(/\D/g, '');
    
    // Форматируем телефон в соответствии с ожиданиями API
    let formattedPhone = cleanPhone;
    if (cleanPhone.startsWith('7') || cleanPhone.startsWith('8')) {
      formattedPhone = `+7${cleanPhone.slice(1)}`;
    } else if (!cleanPhone.startsWith('7')) {
      formattedPhone = `+7${cleanPhone}`;
    }

    // Подготавливаем данные для отправки в соответствии с моделью NewmsgItem
    const dataToSend = {
      name: formData.name.trim(),
      phone: formattedPhone,
      about_project: formData.about_project.trim() || "" // Пустая строка, если нет сообщения
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
        mode: 'cors',
        credentials: 'omit',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Ошибка при отправке');
      }

      // Проверяем ответ от API
      if (data.ok === true) {
        setSubmitStatus('success');
        
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        throw new Error('Неожиданный ответ от сервера');
      }

    } catch (error) {
      console.error('Ошибка при отправке:', error);
      
      if (error.message.includes('Failed to fetch')) {
        setSubmitStatus('network-error');
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Закрытие попапа
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      resetForm();
    }, 300);
  };

  // Форматирование телефона
  const formatPhone = (value) => {
    const phoneNumber = value.replace(/\D/g, '');
    
    if (phoneNumber.length === 0) return '';
    
    let formatted = '';
    
    if (phoneNumber.length <= 1) {
      formatted = '+7';
    } else if (phoneNumber.length <= 4) {
      formatted = `+7 (${phoneNumber.slice(1, 4)}`;
    } else if (phoneNumber.length <= 7) {
      formatted = `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}`;
    } else if (phoneNumber.length <= 9) {
      formatted = `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}`;
    } else {
      formatted = `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
    }
    
    return formatted;
  };

  // Обработка изменения телефона с форматированием
  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formatted
    }));

    if (touched.phone) {
      const error = validatePhone(formatted);
      setErrors(prev => ({
        ...prev,
        phone: error
      }));
    }
  };

  // Получение сообщения об ошибке
  const getErrorMessage = () => {
    switch(submitStatus) {
      case 'network-error':
        return 'Ошибка подключения к серверу. Проверьте интернет-соединение.';
      case 'error':
        return 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.';
      default:
        return '';
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`popup-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleClose}
    >
      <div 
        className={`popup-content ${isOpen && !isClosing ? 'active' : ''} ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close" onClick={handleClose}>×</button>
        
        <div className="popup-header">
          <h2>Бесплатная консультация</h2>
          <p>Оставьте свои контакты, и мы свяжемся с вами в ближайшее время</p>
        </div>

        {submitStatus === 'success' ? (
          <div className="popup-success">
            <h3>Спасибо за заявку!</h3>
            <p>Мы свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <form className="popup-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">
                Ваше имя <span className="required">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Иван Иванов"
                className={`form-input ${touched.name && errors.name ? 'error' : ''}`}
                disabled={isSubmitting}
              />
              {touched.name && errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Телефон <span className="required">*</span>
              </label>
              <input 
                type="tel" 
                id="phone" 
                value={formData.phone}
                onChange={handlePhoneChange}
                onBlur={handleBlur}
                placeholder="+7 (999) 999-99-99"
                className={`form-input ${touched.phone && errors.phone ? 'error' : ''}`}
                disabled={isSubmitting}
              />
              {touched.phone && errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="about_project">О проекте (необязательно)</label>
              <textarea 
                id="about_project" 
                rows="3"
                value={formData.about_project}
                onChange={handleChange}
                placeholder="Расскажите о вашем проекте..."
                className="form-input"
                disabled={isSubmitting}
              />
            </div>

            {(submitStatus === 'error' || submitStatus === 'network-error') && (
              <div className="popup-error">
                {getErrorMessage()}
              </div>
            )}

            <button 
              type="submit" 
              className={`popup-submit ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </button>

            <p className="popup-agreement">
              Нажимая кнопку, вы соглашаетесь с 
              <a href="/privacy" className="popup-link"> политикой конфиденциальности</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Popup;