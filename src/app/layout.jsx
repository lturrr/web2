import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Head from "next/head";

// SEO метаданные для всего сайта
export const metadata = {
  metadataBase: new URL('https://seo-agency.ru'),
  title: {
    default: "SEO продвижение и оптимизация сайтов | Агентство №1 в Москве",
    template: "%s | SEO Agency"
  },
  description: "Профессиональное SEO продвижение сайтов. Вывод в ТОП-3, рост трафика до 500%, увеличение продаж. Комплексный аудит, оптимизация контента, ссылочное продвижение. 8 лет опыта, 500+ клиентов.",
  keywords: [
    "seo продвижение", 
    "оптимизация сайтов", 
    "seo агентство", 
    "раскрутка сайта", 
    "поисковое продвижение", 
    "вывод в топ", 
    "seo москва",
    "продвижение сайта цена"
  ],
  authors: [{ name: "SEO Agency", url: "https://seo-agency.ru" }],
  creator: "SEO Agency",
  publisher: "SEO Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph метатеги
  openGraph: {
    title: "SEO продвижение и оптимизация сайтов",
    description: "Профессиональное SEO продвижение. Вывод в ТОП-3, рост трафика до 500%.",
    url: "https://seo-agency.ru",
    siteName: "SEO Agency",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Agency - профессиональное продвижение сайтов",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  
  // Twitter Card метатеги
  twitter: {
    card: "summary_large_image",
    title: "SEO продвижение и оптимизация сайтов",
    description: "Профессиональное SEO продвижение. Вывод в ТОП-3, рост трафика до 500%.",
    images: ["/images/twitter-image.jpg"],
    creator: "@seo_agency",
    site: "@seo_agency",
  },
  
  // Роботы и индексация
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Иконки
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#155DFC',
      },
    ],
  },
  
  // Манифест для PWA
  manifest: 'nextmain/site.webmanifest',
  
  // Верификация для поисковых систем
  verification: {
    google: 'ваш_google_верификационный_код',
    yandex: 'ваш_yandex_верификационный_код',
    other: {
      'msvalidate.01': ['ваш_bing_верификационный_код'],
    },
  },
  
  // Альтернативные языки
  alternates: {
    canonical: 'https://seo-agency.ru',
    languages: {
      'ru-RU': 'https://seo-agency.ru',
    },
  },
  
  // Дополнительные метатеги
  other: {
    'geo.region': 'RU-MOW',
    'geo.placename': 'Moscow',
    'geo.position': '55.755826;37.617299',
    'ICBM': '55.755826, 37.617299',
    'yandex-tableau-widget': 'logo=Logo&color=#155DFC',
  },
};

// Структурированные данные для организации (JSON-LD)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://seo-agency.ru/#organization",
  "name": "SEO Agency",
  "url": "https://seo-agency.ru",
  "logo": {
    "@type": "ImageObject",
    "url": "https://seo-agency.ru/logo.png",
    "width": 180,
    "height": 60
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Москва",
    "addressCountry": "RU"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+7-XXX-XXX-XX-XX",
      "contactType": "customer service",
      "areaServed": "RU",
      "availableLanguage": "Russian"
    }
  ],
  "sameAs": [
    "https://t.me/seo_agency",
    "https://vk.com/seo_agency"
  ]
};

// Структурированные данные для веб-сайта
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://seo-agency.ru/#website",
  "url": "https://seo-agency.ru",
  "name": "SEO Agency",
  "description": "Профессиональное SEO продвижение и оптимизация сайтов",
  "publisher": {
    "@id": "https://seo-agency.ru/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://seo-agency.ru/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Структурированные данные для веб-страницы
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://seo-agency.ru/#webpage",
  "url": "https://seo-agency.ru",
  "name": "SEO продвижение и оптимизация сайтов | SEO Agency",
  "description": "Профессиональное SEO продвижение сайтов. Вывод в ТОП-3, рост трафика до 500%.",
  "inLanguage": "ru",
  "isPartOf": {
    "@id": "https://seo-agency.ru/#website"
  },
  "about": {
    "@id": "https://seo-agency.ru/#organization"
  },
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0]
};

// Хлебные крошки
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://seo-agency.ru/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Главная",
      "item": "https://seo-agency.ru"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="h-full">
      <head>
        {/* Кодировка и совместимость */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Viewport для мобильных устройств */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        
        {/* Цвета темы для мобильных браузеров */}
        <meta name="theme-color" content="#F3FDF6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f1f2a" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
        
        {/* MS Application */}
        <meta name="application-name" content="SEO Agency" />
        <meta name="apple-mobile-web-app-title" content="SEO Agency" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Referrer политика */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* preconnect для внешних ресурсов */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch для ускорения загрузки */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* preload критических ресурсов                        404*/}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* RSS Feed если есть блог */}
        <link rel="alternate" type="application/rss+xml" title="RSS" href="https://seo-agency.ru/rss.xml" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="nextmain/sitemap.xml" />
        
        {/* Структурированные данные */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="h-full antialiased">
        {/* Skip to main content для доступности */}
        <a 
          href="#main-content" 
          className="visually-hidden focus:not-visually-hidden"
          style={{
            position: 'absolute',
            top: 'var(--space-md)',
            left: 'var(--space-md)',
            background: 'var(--color-primary)',
            color: 'white',
            padding: 'var(--space-sm) var(--space-md)',
            borderRadius: 'var(--radius-full)',
            zIndex: 100,
            textDecoration: 'none',
          }}
        >
          Перейти к основному содержанию
        </a>

        {/* Навигация */}
        <NavBar />
        
        {/* Основной контент */}
        <main 
          id="main-content" 
          className="container"
          role="main"
        >
          {children}
        </main>
        
        {/* Подвал */}
        <Footer />
        
        {/* JSON-LD скрипты для страницы (дублируются для гарантии) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
              ...organizationSchema,
              ...websiteSchema,
              ...webPageSchema,
              ...breadcrumbSchema
            }) 
          }}
        />
      </body>
    </html>
  );
}

// Опции для генерации статических параметров
export const generateStaticParams = async () => {
  return [];
};

// Ревалидация страницы каждые 24 часа
export const revalidate = 86400;