"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ro" | "ru" | "en";

interface Translations {
  nav: {
    home: string;
    services: string;
    team: string;
    contacts: string;
  };
  hero: {
    hello: string;
    kinetotherapy: string;
    yogaPilates: string;
  };
  services: {
    marker: string;
    title: string;
    subtitle: string;
    manualTherapy: string;
    specialized: string;
    subscriptions: string;
    items: {
      adultSession: string;
      adolescentSession: string;
      babySession: string;
      visceralTherapy: string;
      atmTherapy: string;
      lymphaticDrainage: string;
      bronchialDrainage: string;
      schrothGymnastics: string;
      package5: string;
      package10: string;
      yogaMonthly: string;
      pilatesMonthly: string;
    };
  };
  ticker: {
    manualTherapy: string;
    kinetotherapy: string;
    lymphaticDrainage: string;
    bronchialDrainage: string;
    atmTherapy: string;
    visceralTherapy: string;
    schrothGymnastics: string;
    taping: string;
    osteopathy: string;
  };
  team: {
    marker: string;
    title: string;
    subtitle: string;
    yearsExp: string;
    positions: {
      seniorKinetotherapist: string;
      kinetotherapist: string;
      manualTherapist: string;
      yogaInstructor: string;
      pilatesInstructor: string;
      osteopath: string;
    };
  };
  footer: {
    locations: string;
    connect: string;
    center: string;
    liveYoga: string;
    kinetotherapy: string;
    copyright: string;
  };
}

const translations: Record<Language, Translations> = {
  ro: {
    nav: {
      home: "Sus",
      services: "Servicii și prețuri",
      team: "Echipa",
      contacts: "Contacte",
    },
    hero: {
      hello: "Salut",
      kinetotherapy: "Kinetoterapie",
      yogaPilates: "Yoga · Pilates",
    },
    services: {
      marker: "Prețuri",
      title: "Servicii și Tarife",
      subtitle: "Investește în sănătatea ta cu serviciile noastre profesionale de recuperare medicală.",
      manualTherapy: "Terapie Manuală",
      specialized: "Terapii Specializate",
      subscriptions: "Abonamente",
      items: {
        adultSession: "Ședință Adult (60 min)",
        adolescentSession: "Ședință Adolescent (45 min)",
        babySession: "Ședință Baby (30 min)",
        visceralTherapy: "Terapie Viscerală",
        atmTherapy: "Terapie ATM",
        lymphaticDrainage: "Drenaj Limfatic",
        bronchialDrainage: "Drenaj Bronșic",
        schrothGymnastics: "Gimnastică Schroth",
        package5: "Pachet 5 ședințe",
        package10: "Pachet 10 ședințe",
        yogaMonthly: "Abonament Yoga (lunar)",
        pilatesMonthly: "Abonament Pilates (lunar)",
      },
    },
    ticker: {
      manualTherapy: "terapie manuală",
      kinetotherapy: "kinetoterapie",
      lymphaticDrainage: "drenaj limfatic",
      bronchialDrainage: "drenaj bronșic",
      atmTherapy: "terapie ATM",
      visceralTherapy: "terapie viscerală",
      schrothGymnastics: "gimnastică schroth",
      taping: "taping",
      osteopathy: "osteopatie",
    },
    team: {
      marker: "Echipa",
      title: "Specialiștii Noștri",
      subtitle: "O echipă dedicată de profesioniști cu experiență vastă în recuperare medicală și wellness.",
      yearsExp: "Ani Exp.",
      positions: {
        seniorKinetotherapist: "Kinetoterapeut Senior",
        kinetotherapist: "Kinetoterapeut",
        manualTherapist: "Terapeut Manual",
        yogaInstructor: "Instructor Yoga",
        pilatesInstructor: "Instructor Pilates",
        osteopath: "Osteopat",
      },
    },
    footer: {
      locations: "Locații",
      connect: "Conectează-te",
      center: "Centru",
      liveYoga: "Live Yoga",
      kinetotherapy: "Kinetoterapie",
      copyright: "© 2026 Rebalance. Toate drepturile rezervate.",
    },
  },
  ru: {
    nav: {
      home: "Наверх",
      services: "Услуги и цены",
      team: "Команда",
      contacts: "Контакты",
    },
    hero: {
      hello: "Привет",
      kinetotherapy: "Кинетотерапия",
      yogaPilates: "Йога · Пилатес",
    },
    services: {
      marker: "Цены",
      title: "Услуги и Тарифы",
      subtitle: "Инвестируйте в своё здоровье с нашими профессиональными услугами медицинской реабилитации.",
      manualTherapy: "Мануальная Терапия",
      specialized: "Специализированные Терапии",
      subscriptions: "Абонементы",
      items: {
        adultSession: "Сеанс для взрослых (60 мин)",
        adolescentSession: "Сеанс для подростков (45 мин)",
        babySession: "Сеанс для малышей (30 мин)",
        visceralTherapy: "Висцеральная терапия",
        atmTherapy: "ATM терапия",
        lymphaticDrainage: "Лимфодренаж",
        bronchialDrainage: "Бронхиальный дренаж",
        schrothGymnastics: "Гимнастика Шрот",
        package5: "Пакет 5 сеансов",
        package10: "Пакет 10 сеансов",
        yogaMonthly: "Абонемент Йога (месяц)",
        pilatesMonthly: "Абонемент Пилатес (месяц)",
      },
    },
    ticker: {
      manualTherapy: "мануальная терапия",
      kinetotherapy: "кинетотерапия",
      lymphaticDrainage: "лимфодренаж",
      bronchialDrainage: "бронхиальный дренаж",
      atmTherapy: "ATM терапия",
      visceralTherapy: "висцеральная терапия",
      schrothGymnastics: "гимнастика шрот",
      taping: "тейпирование",
      osteopathy: "остеопатия",
    },
    team: {
      marker: "Команда",
      title: "Наши Специалисты",
      subtitle: "Команда преданных профессионалов с обширным опытом в медицинской реабилитации и велнесе.",
      yearsExp: "лет опыта",
      positions: {
        seniorKinetotherapist: "Старший кинетотерапевт",
        kinetotherapist: "Кинетотерапевт",
        manualTherapist: "Мануальный терапевт",
        yogaInstructor: "Инструктор йоги",
        pilatesInstructor: "Инструктор пилатеса",
        osteopath: "Остеопат",
      },
    },
    footer: {
      locations: "Локации",
      connect: "Связаться",
      center: "Центр",
      liveYoga: "Йога онлайн",
      kinetotherapy: "Кинетотерапия",
      copyright: "© 2026 Rebalance. Все права защищены.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services & Prices",
      team: "Team",
      contacts: "Contacts",
    },
    hero: {
      hello: "Hello",
      kinetotherapy: "Kinetotherapy",
      yogaPilates: "Yoga · Pilates",
    },
    services: {
      marker: "Prices",
      title: "Services & Rates",
      subtitle: "Invest in your health with our professional medical recovery services.",
      manualTherapy: "Manual Therapy",
      specialized: "Specialized Therapies",
      subscriptions: "Subscriptions",
      items: {
        adultSession: "Adult Session (60 min)",
        adolescentSession: "Adolescent Session (45 min)",
        babySession: "Baby Session (30 min)",
        visceralTherapy: "Visceral Therapy",
        atmTherapy: "ATM Therapy",
        lymphaticDrainage: "Lymphatic Drainage",
        bronchialDrainage: "Bronchial Drainage",
        schrothGymnastics: "Schroth Gymnastics",
        package5: "5 Sessions Package",
        package10: "10 Sessions Package",
        yogaMonthly: "Yoga Monthly",
        pilatesMonthly: "Pilates Monthly",
      },
    },
    ticker: {
      manualTherapy: "manual therapy",
      kinetotherapy: "kinetotherapy",
      lymphaticDrainage: "lymphatic drainage",
      bronchialDrainage: "bronchial drainage",
      atmTherapy: "ATM therapy",
      visceralTherapy: "visceral therapy",
      schrothGymnastics: "schroth gymnastics",
      taping: "taping",
      osteopathy: "osteopathy",
    },
    team: {
      marker: "Team",
      title: "Our Specialists",
      subtitle: "A dedicated team of professionals with extensive experience in medical recovery and wellness.",
      yearsExp: "Years Exp.",
      positions: {
        seniorKinetotherapist: "Senior Kinetotherapist",
        kinetotherapist: "Kinetotherapist",
        manualTherapist: "Manual Therapist",
        yogaInstructor: "Yoga Instructor",
        pilatesInstructor: "Pilates Instructor",
        osteopath: "Osteopath",
      },
    },
    footer: {
      locations: "Locations",
      connect: "Connect",
      center: "Center",
      liveYoga: "Live Yoga",
      kinetotherapy: "Kinetotherapy",
      copyright: "© 2026 Rebalance. All rights reserved.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ro");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
