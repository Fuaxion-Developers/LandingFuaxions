const services = [
    {
      title: "Páginas Web",
      description:
        "Diseñamos y desarrollamos sitios web adaptados a tu negocio. Ya sea una web corporativa para destacar tu marca, una tienda online para vender tus productos o una landing page para captar clientes, creamos soluciones personalizadas, modernas y optimizadas para ofrecer la mejor experiencia a tus usuarios.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>`,
    },
    {
      title: "SEO (Optimización para motores de búsqueda)",
      description:
        "Aumentamos la visibilidad de tu negocio en Google y otros buscadores. Optimizamos tu sitio web con estrategias SEO avanzadas para mejorar su posicionamiento, atraer tráfico orgánico y convertir visitantes en clientes.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>`,
    },
    {
      title: "Desarrollo de Software a Medida",
      description:
        "Creamos soluciones digitales adaptadas a tus necesidades. Desde plataformas web hasta sistemas internos personalizados, desarrollamos software escalable, seguro y eficiente para optimizar procesos y potenciar tu negocio.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
          </svg>`,
    },
    {
      title: "Diseño UX/UI (Experiencia y usabilidad web)",
      description:
        "Nos enfocamos en el diseño centrado en el usuario, asegurando que tu web no solo se vea bien, sino que también sea intuitiva y fácil de usar. Diseñamos interfaces atractivas y funcionales que mejoran la experiencia del usuario y aumentan la conversión.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#EC4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>`,
    },
    {
      title: "Mantenimiento Web (Actualizaciones y soporte)",
      description:
        "Mantén tu sitio web siempre actualizado, seguro y funcionando sin problemas. Ofrecemos mantenimiento técnico, actualización de contenido y mejoras continuas para garantizar el mejor rendimiento y evitar problemas técnicos.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>`,
    },
    {
      title: "Optimización de Velocidad y Seguridad",
      description:
        "Un sitio web lento o inseguro puede afectar tu negocio. Optimizamos la velocidad de carga para mejorar la experiencia del usuario y posicionamiento en Google, además de reforzar la seguridad para proteger tu web contra ataques y vulnerabilidades.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>`,
    },
  ]
  
  export { services }