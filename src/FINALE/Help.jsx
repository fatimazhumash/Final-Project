import React, { useState } from "react";
import './Help.css';

const translations = {
  kk: {
    title: 'Қолданушыға көмек',
    welcomeText: 'Біздің Face ID бар ойын-сауық платформасына қош келдіңіз! Мұнда сіз ойын ойнай аласыз, музыка тыңдай аласыз және мультфильм көре аласыз.',
    howToEnterTitle: 'Қалай кіру керек?',
    howToEnterSteps: [
      'Тіркелу немесе аккаунтқа кіру батырмасын басыңыз.',
      'Face ID арқылы аутентификацияны таңдаңыз.',
      'Камераны қосып, бетіңізді экранға бағыттаңыз.',
      'Сәйкестік табылса, жүйе автоматты түрде сізді кіргізеді.'
    ],
    mainSectionsTitle: 'Негізгі бөлімдер:',
    mainSections: [
      'Ойындар: Yandex Games және мини-ойындар.',
      'Музыка: Қазақ, орыс және ағылшын әндері.',
      'Мультфильмдер: 3 тілде онлайн көру.'
    ],
    supportTitle: 'Қолдау қызметі',
    supportText: 'Егер сұрақтарыңыз болса, бізге support@example.com поштасы арқылы жазыңыз. Немесе We.re бөлімiне өтiңiз.'
  },
  ru: {
    title: 'Помощь пользователю',
    welcomeText: 'Добро пожаловать на нашу платформу с Face ID! Здесь вы можете играть, слушать музыку и смотреть мультфильмы.',
    howToEnterTitle: 'Как войти?',
    howToEnterSteps: [
      'Нажмите кнопку регистрации или входа в аккаунт.',
      'Выберите аутентификацию через Face ID.',
      'Включите камеру и направьте лицо на экран.',
      'Если совпадение найдено, система автоматически войдет за вас.'
    ],
    mainSectionsTitle: 'Основные разделы:',
    mainSections: [
      'Игры: Yandex Games и мини-игры.',
      'Музыка: песни на казахском, русском и английском.',
      'Мультфильмы: просмотр онлайн на 3 языках.'
    ],
    supportTitle: 'Служба поддержки',
    supportText: 'Если у вас есть вопросы, напишите нам на почту support@example.com. Или перейдите в раздел We.re.'
  },
  en: {
    title: 'User Help',
    welcomeText: 'Welcome to our Face ID entertainment platform! Here you can play games, listen to music, and watch cartoons.',
    howToEnterTitle: 'How to enter?',
    howToEnterSteps: [
      'Click the register or login button.',
      'Choose Face ID authentication.',
      'Turn on the camera and face the screen.',
      'If a match is found, the system will log you in automatically.'
    ],
    mainSectionsTitle: 'Main sections:',
    mainSections: [
      'Games: Yandex Games and mini-games.',
      'Music: songs in Kazakh, Russian, and English.',
      'Cartoons: watch online in 3 languages.'
    ],
    supportTitle: 'Support service',
    supportText: 'If you have questions, write to us at support@example.com or go to the We.re section.'
  }
};

function Help() {
  const [language, setLanguage] = useState("kk");
  const t = translations[language];

  return (
    <div className="help-container">
      <h1>{t.title}</h1>
      <p>{t.welcomeText}</p>

      <h2>{t.howToEnterTitle}</h2>
      <ol>
        {t.howToEnterSteps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>

      <h2>{t.mainSectionsTitle}</h2>
      <ul>
        {t.mainSections.map((section, idx) => (
          <li key={idx}>{section}</li>
        ))}
      </ul>

      <h2>{t.supportTitle}</h2>
      <p>{t.supportText}</p>

      <div style={{ marginTop: "15px" }}>
        <label>{t.selectLanguage || "Тілді таңдаңыз:"}</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="kk">Қазақша</option>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
}

export default Help;
