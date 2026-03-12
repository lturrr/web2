import Button from "@/components/Button";
import ButtonAbout from "@/components/ButtonAbout";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    

      <div className="content">
        {/* HEADER секция */}
        <header id="home">
          <div className="text-block">
            {/* <div className="plus">
              <Image 
                src="/icons/checkmark.png" 
                className="header_icon" 
                alt="" 
                width={15} 
                height={15} 
                priority
                aria-hidden="true"
              />
              <span>Доверяет 50+ бизнесов</span>
            </div> */}
            
            <h1 className="header_h1">
              Доминируй в поиске за счет <span style={{ color: 'var(--color-primary)' }}>SEO</span>
            </h1>
            
            <p className="header_p">
              <strong>Увеличиваем поисковый трафик до 500%</strong> и выводим в ТОП-3 по высокочастотным запросам. 
              97% клиентов продлевают договор после первого месяца продвижения.
            </p>
            
            <div className="header_buttons">
              <Button />
              <ButtonAbout />
            </div>
            
            <div className="ochivment">
              <div className="ochivment_column">
                <h3 className="ochivment_title">250%</h3>
                <p className="ochivment_desc">Прирост трафика</p>
              </div>
              <div className="ochivment_column activ">
                <h3 className="ochivment_title activ">97%</h3>
                <p className="ochivment_desc">Клиентов возвращаются</p>
              </div>
              <div className="ochivment_column">
                <h3 className="ochivment_title">4.9/5</h3>
                <p className="ochivment_desc">Рейтинг от клиентов</p>
              </div>
            </div>
          </div>
          
          <div className="image-block">
            <div className="header_cart-big">
              <div 
                className="header_cart-mini" 
                role="img" 
                aria-label="SEO оптимизация и продвижение сайтов"
              />
            </div>
          </div>
        </header>

        {/* Секция достижений */}
        <section className="ochivments_section" id="achievements-section" aria-labelledby="achievements-title">
          <h2 id="achievements-title" className="visually-hidden">
            Наши достижения в SEO продвижении
          </h2>
          <div className="ochivments">
            <div className="ochivment_column centr">
              <div className="card-icon centr">🎯</div>
              <h3 className="ochivment_title">500+</h3>
              <p className="ochivment_desc centr">Довольных клиентов</p>
            </div>
            
            <div className="ochivment_column centr">
              <div className="card-icon centr">🔄</div>
              <h3 className="ochivment_title">2.5М+</h3>
              <p className="ochivment_desc centr">Повторных обращений</p>
            </div>
            
            <div className="ochivment_column centr">
              <div className="card-icon centr">📈</div>
              <h3 className="ochivment_title">4.5M+</h3>
              <p className="ochivment_desc centr">Новых заявок</p>
            </div>
            
            <div className="ochivment_column centr">
              <div className="card-icon centr">⏳</div>
              <h3 className="ochivment_title">8+</h3>
              <p className="ochivment_desc centr">лет работы</p>
            </div>
          </div>
        </section>

        {/* Секция услуг - SEO оптимизация */}
        <section className="servers" id="servers" aria-labelledby="services-title">
          <div className="mini_title centr">
            <span className="mini_title_text">Наши услуги</span>
          </div>
          
          <h2 id="services-title" className="grid-title">
            Комплексные SEO-решения
          </h2>
          
          <p className="servers_desc">
            Внедряем <strong>проверенные стратегии продвижения</strong>, которые гарантированно 
            выводят ваш бизнес в лидеры поисковой выдачи
          </p>

          <div className="grid-section">
            <div className="grid-container">
              <article className="card">
                <div className="card-icon">🔍</div>
                <h3>Keyword Research</h3>
                <p>
                  Глубокий анализ для выбора ключевых слов с низкой конкуренцией 
                  и высоким спросом. Сбор семантического ядра.
                </p>
                <a 
                  href="/services/keyword-research" 
                  className="service-link"
                  style={{ marginTop: 'var(--space-md)', color: 'var(--color-primary)' }}
                >
                  Подробнее →
                </a>
              </article>
              
              <article className="card">
                <div className="card-icon">📝</div>
                <h3>Content Optimization</h3>
                <p>
                  Создание экспертного контента, который нравится людям и поисковикам. 
                  Оптимизация мета-тегов и структуры.
                </p>
                <a 
                  href="/services/content-optimization" 
                  className="service-link"
                  style={{ marginTop: 'var(--space-md)', color: 'var(--color-primary)' }}
                >
                  Подробнее →
                </a>
              </article>
              
              <article className="card">
                <div className="card-icon">🔗</div>
                <h3>Link Building</h3>
                <p>
                  Качественные вечные ссылки с авторитетных площадок. 
                  Только естественные методы продвижения.
                </p>
                <a 
                  href="/services/link-building" 
                  className="service-link"
                  style={{ marginTop: 'var(--space-md)', color: 'var(--color-primary)' }}
                >
                  Подробнее →
                </a>
              </article>

              <article className="card">
                <div className="card-icon">⚙️</div>
                <h3>Technical SEO</h3>
                <p>
                  Полный технический аудит, исправление ошибок, оптимизация 
                  скорости загрузки и мобильной версии.
                </p>
                <a 
                  href="/services/technical-seo" 
                  className="service-link"
                  style={{ marginTop: 'var(--space-md)', color: 'var(--color-primary)' }}
                >
                  Подробнее →
                </a>
              </article>
              
              <article className="card">
                <div className="card-icon">⚡</div>
                <h3>Performance Optimization</h3>
                <p>
                  Оптимизация Core Web Vitals, ускорение загрузки страниц, 
                  настройка кэширования и CDN.
                </p>
                <a 
                  href="/services/performance-optimization" 
                  className="service-link"
                  style={{ marginTop: 'var(--space-md)', color: 'var(--color-primary)' }}
                >
                  Подробнее →
                </a>
              </article>
              
              <article className="card">
                <div className="card-icon">📍</div>
                <h3>Local SEO</h3>
                <p>
                  Продвижение в локальном поиске, оптимизация Google My Business, 
                  Яндекс Карты и 2GIS.
                </p>
                <a 
                  href="/services/local-seo" 
                  className="service-link"
                  style={{ marginTop: 'var(--space-md)', color: 'var(--color-primary)' }}
                >
                  Подробнее →
                </a>
              </article>
            </div>
          </div>

          {/* Тарифные планы */}
          <div className="mini_title centr">
            <span className="mini_title_text">Тарифы</span>
          </div>
          
          <h2 className="grid-title">Прозрачные тарифные планы</h2>
          
          <p className="servers_desc">
            Выберите оптимальный вариант продвижения под ваши задачи и бюджет
          </p>
          
          <div className="grid-section">
            <div className="grid-container">
              <article className="card">
                <div className="card-icon">🚀</div>
                <h3>Базовый</h3>
                <p style={{ color: 'var(--color-primary)', fontSize: 'var(--text-2xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
                  50 000 ₽
                </p>
                <p style={{ marginBottom: 'var(--space-md)' }}>Стартовый пакет для малого бизнеса</p>
                <ul style={{ listStyle: 'none', padding: 0, width: '100%', marginBottom: 'var(--space-lg)' }}>
                  <li style={{ padding: 'var(--space-xs) 0', borderBottom: '1px solid var(--border-card)' }}>✓ Аудит сайта</li>
                  <li style={{ padding: 'var(--space-xs) 0', borderBottom: '1px solid var(--border-card)' }}>✓ 100 ключевых слов</li>
                  <li style={{ padding: 'var(--space-xs) 0', borderBottom: '1px solid var(--border-card)' }}>✓ 5 постов в блог</li>
                  <li style={{ padding: 'var(--space-xs) 0' }}>✓ Ежемесячная отчетность</li>
                </ul>
                <Button className="btn_ghost" style={{ width: '100%' }}>Выбрать тариф</Button>
              </article>

              <article className="card" style={{ borderColor: 'var(--color-primary)', borderWidth: '2px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-12px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  padding: '4px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'bold'
                }}>
                  Самый популярный
                </div>
                <div className="card-icon">💎</div>
                <h3>Оптимальный</h3>
                <p style={{ color: 'var(--color-primary)', fontSize: 'var(--text-2xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
                  90 000 ₽
                </p>
                <p style={{ marginBottom: 'var(--space-md)' }}>Сбалансированное решение для роста</p>
                <ul style={{ listStyle: 'none', padding: 0, width: '100%', marginBottom: 'var(--space-lg)' }}>
                  <li style={{ padding: 'var(--space-xs) 0', borderBottom: '1px solid var(--border-card)' }}>✓ Все из Базового</li>
                  <li style={{ padding: 'var(--space-xs) 0', borderBottom: '1px solid var(--border-card)' }}>✓ 300 ключевых слов</li>
                  <li style={{ padding: 'var(--space-xs) 0', borderBottom: '1px solid var(--border-card)' }}>✓ 15 постов в блог</li>
                  <li style={{ padding: 'var(--space-xs) 0' }}>✓ Ссылочное продвижение</li>
                </ul>
                <Button className="btn_ghost" style={{ width: '100%' }}>Выбрать тариф</Button>
              </article>

              <article className="card">
                <div className="card-icon">👑</div>
                <h3>Максимум</h3>
                <p style={{ color: 'var(--color-primary)', fontSize: 'var(--text-2xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
                  150 000 ₽
                </p>
                <p style={{ marginBottom: 'var(--space-md)' }}>Полный комплекс для лидеров рынка</p>
                <ul style={{ listStyle: 'none', padding: 0, width: '100%', marginBottom: 'var(--space-lg)' }}>
                  <li style={{ padding: 'var(--space-xs) 0', borderBottom: '1px solid var(--border-card)' }}>✓ Все из Оптимального</li>
                  <li style={{ padding: 'var(--space-xs) 0', borderBottom: '1px solid var(--border-card)' }}>✓ 1000+ ключевых слов</li>
                  <li style={{ padding: 'var(--space-xs) 0', borderBottom: '1px solid var(--border-card)' }}>✓ 30 постов в блог</li>
                  <li style={{ padding: 'var(--space-xs) 0' }}>✓ Выделенный менеджер</li>
                </ul>
                <Button className="btn_ghost" style={{ width: '100%' }}>Выбрать тариф</Button>
              </article>
            </div>
          </div>

          {/* Отзывы клиентов */}
          <div className="mini_title centr">
            <span className="mini_title_text">Отзывы</span>
          </div>
          
          <h2 className="grid-title">О нас говорят клиенты</h2>
          
          <p className="servers_desc">
            Более 500 компаний доверили нам свое SEO-продвижение
          </p>
          
          <div className="grid-section">
            <div className="grid-container">
              <article className="card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: 'var(--space-md)', color: '#FFB800' }}>
                  {'★'.repeat(5)}
                </div>
                <blockquote style={{ margin: 0, fontStyle: 'italic', marginBottom: 'var(--space-md)' }}>
                  "За 6 месяцев вышли в ТОП-3 по 25 высокочастотным запросам. 
                  Трафик вырос на 340%, продажи увеличились в 2.5 раза."
                </blockquote>
                <footer style={{ marginTop: 'auto' }}>
                  <strong>Александр Иванов</strong>
                  <p style={{ fontSize: 'var(--text-sm)', margin: '4px 0 0', color: 'var(--text-muted)' }}>
                    CEO, Интернет-магазин ТехноМаркет
                  </p>
                </footer>
              </article>

              <article className="card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: 'var(--space-md)', color: '#FFB800' }}>
                  {'★'.repeat(5)}
                </div>
                <blockquote style={{ margin: 0, fontStyle: 'italic', marginBottom: 'var(--space-md)' }}>
                  "Получили +180% целевых звонков за первый месяц. 
                  Профессиональная команда, четкое понимание задач. Рекомендую!"
                </blockquote>
                <footer style={{ marginTop: 'auto' }}>
                  <strong>Елена Петрова</strong>
                  <p style={{ fontSize: 'var(--text-sm)', margin: '4px 0 0', color: 'var(--text-muted)' }}>
                    Маркетолог, Медицинский центр Здоровье
                  </p>
                </footer>
              </article>

              <article className="card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: 'var(--space-md)', color: '#FFB800' }}>
                  {'★'.repeat(5)}
                </div>
                <blockquote style={{ margin: 0, fontStyle: 'italic', marginBottom: 'var(--space-md)' }}>
                  "Работаем уже 2 года. Стабильно входим в ТОП-5 по всем ключевым запросам. 
                  Окупаемость инвестиций в SEO — 400%."
                </blockquote>
                <footer style={{ marginTop: 'auto' }}>
                  <strong>Дмитрий Соколов</strong>
                  <p style={{ fontSize: 'var(--text-sm)', margin: '4px 0 0', color: 'var(--text-muted)' }}>
                    Владелец, Строительная компания ДомСтрой
                  </p>
                </footer>
              </article>
            </div>
          </div>

          {/* FAQ для SEO */}
          <div className="mini_title centr">
            <span className="mini_title_text">FAQ</span>
          </div>
          
          <h2 className="grid-title">Частые вопросы о SEO</h2>
          
          <div className="grid-section">
            <div className="grid-container" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <details className="card" style={{ cursor: 'pointer' }}>
                <summary style={{ fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
                  Сколько времени нужно, чтобы увидеть результаты?
                </summary>
                <p style={{ marginTop: 'var(--space-sm)' }}>
                  Первые результаты видны через 2-4 недели. Устойчивый рост трафика 
                  начинается с 3-го месяца. Полный вывод в ТОП — 6-8 месяцев.
                </p>
              </details>
              
              <details className="card" style={{ cursor: 'pointer' }}>
                <summary style={{ fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
                  Какие гарантии вы даете?
                </summary>
                <p style={{ marginTop: 'var(--space-sm)' }}>
                  Гарантируем рост позиций и трафика. Прописываем KPI в договоре. 
                  Первый месяц продвижения в рассрочку.
                </p>
              </details>
              
              <details className="card" style={{ cursor: 'pointer' }}>
                <summary style={{ fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
                  Какие методы продвижения вы используете?
                </summary>
                <p style={{ marginTop: 'var(--space-sm)' }}>
                  Только "белые" методы, одобренные поисковыми системами. 
                  Работаем по рекомендациям Google и Яндекс.
                </p>
              </details>
              
              <details className="card" style={{ cursor: 'pointer' }}>
                <summary style={{ fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
                  Нужен ли SEO-аудит перед началом?
                </summary>
                <p style={{ marginTop: 'var(--space-sm)' }}>
                  Да, мы проводим бесплатный аудит для выявления проблем 
                  и оценки потенциала роста вашего сайта.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    
  );
}