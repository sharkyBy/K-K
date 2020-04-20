export const store = {
  staticData: {
    header: {
      navigation: {
        pageName: ['mainpage', 'community'],
        page: ['mainpage', 'community'],
        lang: [
          {
            lang: 'ENG',
            id: 'en'
          },
          {
            lang: 'РУС',
            id: 'ru'
          },
        ],
        btnName: 'contact us',
      },

      content: {
        companyLogo: './img/k-and-k-logo.svg',
        partnerLink: 'https://ottolo.com/',
        partnerLogo: './img/partnerLogo.png',
        partnerText: 'exclusive partner in the usa',

      }
    },

    main: { 

      aboutUs: {
        text: [
          {
            title: 'about us',
            p1: `K&K TEAM is a team of experienced IT specialists, designers and digital marketers.\r
            Development of chat bots, mobile and web applications;
            Creation of websites on CMS;
            Design of corporate identity, logo and design prototypes;
            Design of advertising materials for social networks and printing.\r
            Our customer works with a well-coordinated team, not scattered performers.
            Also thanks to the network of partner companies, the customer reduces the 
            time to search for performers in related areas: hosting, accounting and legal 
            services, SEO-promotion and advertising. \r
            We worked with customers from Belarus, Russia, USA, Israel and Qatar.
            We are not only engaged in commerce, but also develop IT education in our home country.`,

            // imgSrc: './img/team.png'
          },
          {
            title: 'web development',
            p1: `Pretium fusce id velit ut tortor pretium viverra suspendisse 
          potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed 
          nisi lacus sed viverra tellus in hac habitasse platea dictumst 
          vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras 
          tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius 
          duis at consectetur lorem donec massa sapien faucibus et molestie ac 
          feugiat sed `,
            btnName:'order development',
            // imgSrc: './img/webDevelopment.png'
          },
          {
            title: 'mobile development',
            p1: `Pretium fusce id velit ut tortor pretium viverra suspendisse 
          potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed 
          nisi lacus sed viverra tellus in hac habitasse platea dictumst 
          vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras 
          tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius 
          duis at consectetur lorem donec massa sapien faucibus et molestie ac 
          feugiat sed `,
          btnName:'order mobile',

            // imgSrc: './img/mobileDevelopment.png'
          },
          {
            title: 'design',
            p1: `Pretium fusce id velit ut tortor pretium viverra suspendisse 
          potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed 
          nisi lacus sed viverra tellus in hac habitasse platea dictumst 
          vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras 
          tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius 
          duis at consectetur lorem donec massa sapien faucibus et molestie ac 
          feugiat sed `,
          btnName:'order design',

            imgSrc: './img/design.png'
          },

        ],
        carousel: {
          imgSrc: [
            './img/team.png',
            './img/webDevelopment.png',
            './img/mobileDevelopment.png',
            './img/design.png'
          ]
        }
      },

      project: {
        cards: [
          {
            srcImg: './img/Cards/1.png',
            title: 'fixline website',
            p: `In two days we developed the design, developed and rolled out the production site
              for car rental service with the driver FixLine, including the mobile version`,
            link: 'fixline.by'
          },
          {
            srcImg: './img/Cards/2.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          },
          {
            srcImg: './img/Cards/3.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          },
          {
            srcImg: './img/Cards/4.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          },
          {
            srcImg: './img/Cards/5.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          },
          {
            srcImg: './img/Cards/6.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          }
        ]
      },
      contact: {
        formName:'callback form',
        method:['Call me', 'Message me'],        
        btnName:'contact me',
        before:'How to contact you?',
        tel:'+375 29 519-80-07',
        mail:'contact@kandk.team' ,
        alert:{
          success:'Data sent',
          noMethodSelected:'No communication method selected',
          invalidPhoneNumber:'Invalid phone number or number does not belong to mobile operators of Belarus',
        },    
        messenger: [
          {
            name: 'telegram',
            link: 'https://telegram.org/',
            src: './img/iconForCall/telegram.png'
          },
          {
            name: 'whatsApp',
            link: 'https://www.whatsapp.com/',
            src: './img/iconForCall/whatsapp.png'
          },
          {
            name: 'viber',
            link: 'https://www.viber.com',
            src: './img/iconForCall/viber.png'
          },
          {
            name: 'call',
            link: 'tel:+375 29 519 80 07',
            src: './img/iconForCall/call.png'
          }
        ],
        contactInfoIcon: [
          {
            name:'vk',
            src:'./img/contactInfoIcon/vk.svg'
          },
          {
            name:'instagram',
            src:'./img/contactInfoIcon/insta.png'
          },
          {
            name:'telegramm',
            src:'./img/contactInfoIcon/telegramm.svg'
          },

        ]
      },
    },
  },

  staticData_ru: {
    header: {
      navigation: {
        pageName: ['главная', 'сообщество'],
        page: ['mainpage', 'community'],
        lang: [
          {
            lang: 'ENG',
            id: 'en'
          },
          {
            lang: 'РУС',
            id: 'ru'
          },


        ],

        btnName: 'связаться с нами',


      },
      content: {
        companyLogo: './img/k-and-k-logo.svg',
        partnerLink: 'https://ottolo.com/',
        partnerLogo: './img/partnerLogo.png',
        partnerText: 'exclusive partner in the usa',

      }
    },

    main: {
      aboutUs: {
        text: [
          {
          title: 'о нас',
          p1: `K&K TEAM — это команда из восьми человек с опытом в сферах ИТ. 
          Разрабатываем веб-приложения, сайты на CMS, мобильные приложения, 
          чат-боты, фирменные стили и логотипы, дизайн-прототипы, рекламные 
          материалы для соцсетей и физических носителей. Сеть проверенных агентов 
          выполняет подрядные работы по проектам. За счёт этого мы сохраняем 
          корпоративное качество исполнения работ, не раздувая бюджет и сроки. 
          Работаем с заказчиками из Беларуси, России, США, Израиля и Катара, 
          готовы к расширению географии. Помимо коммерческой деятельности, 
          развиваем ИТ-образование в родной стране.`,
          btnName:'заказать разработку',
        },
        {
          title: 'веб разработка',
          p1: `K&K TEAM — это команда из восьми человек с опытом в сферах ИТ. 
          Разрабатываем веб-приложения, сайты на CMS, мобильные приложения, 
          чат-боты, фирменные стили и логотипы, дизайн-прототипы, рекламные 
          материалы для соцсетей и физических носителей. Сеть проверенных агентов 
          выполняет подрядные работы по проектам. За счёт этого мы сохраняем 
          корпоративное качество исполнения работ, не раздувая бюджет и сроки. 
          Работаем с заказчиками из Беларуси, России, США, Израиля и Катара, 
          готовы к расширению географии. Помимо коммерческой деятельности, 
          развиваем ИТ-образование в родной стране.`,
          btnName:'заказать разработку',
        },
        {
          title: 'разработка мобильных приложений',
          p1: `K&K TEAM — это команда из восьми человек с опытом в сферах ИТ. 
          Разрабатываем веб-приложения, сайты на CMS, мобильные приложения, 
          чат-боты, фирменные стили и логотипы, дизайн-прототипы, рекламные 
          материалы для соцсетей и физических носителей. Сеть проверенных агентов 
          выполняет подрядные работы по проектам. За счёт этого мы сохраняем 
          корпоративное качество исполнения работ, не раздувая бюджет и сроки. 
          Работаем с заказчиками из Беларуси, России, США, Израиля и Катара, 
          готовы к расширению географии. Помимо коммерческой деятельности, 
          развиваем ИТ-образование в родной стране.`,
          btnName:'заказать разработку',
        },
        {
          title: 'дизайн',
          p1: `K&K TEAM — это команда из восьми человек с опытом в сферах ИТ. 
          Разрабатываем веб-приложения, сайты на CMS, мобильные приложения, 
          чат-боты, фирменные стили и логотипы, дизайн-прототипы, рекламные 
          материалы для соцсетей и физических носителей. Сеть проверенных агентов 
          выполняет подрядные работы по проектам. За счёт этого мы сохраняем 
          корпоративное качество исполнения работ, не раздувая бюджет и сроки. 
          Работаем с заказчиками из Беларуси, России, США, Израиля и Катара, 
          готовы к расширению географии. Помимо коммерческой деятельности, 
          развиваем ИТ-образование в родной стране.`,
          btnName:'заказать дизайн',
        },
        ],
        carousel: {
          imgSrc: [
            './img/team.png',
            './img/webDevelopment.png',
            './img/mobileDevelopment.png',
            './img/design.png'
          ]

        }

      },//aboutUs
      project: {
        cards: [
          {
            srcImg: './img/Cards/1.png',
            title: 'вебстраница fixline',
            p: `За два дня разработали дизайн, сверстали и выкатили в продакшн 
            сайт для сервиса аренды авто с водителем FixLine, включая мобильную 
            версию.`,
            link: 'fixline.by'
          },
          {
            srcImg: './img/Cards/2.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          },
          {
            srcImg: './img/Cards/3.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          },
          {
            srcImg: './img/Cards/4.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          },
          {
            srcImg: './img/Cards/5.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          },
          {
            srcImg: './img/Cards/6.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          }
        ]
      },
      contact: {
        formName:'обратная связь',
        method:['Позвонить', 'Написать' ],        
        btnName:'связаться со мной',
        before:'Как связаться с тобой?',
        tel:'+375 29 519-80-07',
        mail:'contact@kandk.team' , 
        alert:{
          success:'Данные отправлены',
          noMethodSelected:'Не выбран способ связи',
          invalidPhoneNumber:'Неверный номер телефона или  номер не принадлежит операторам сотовой связи РБ',
        },  
        messenger: [
          {
            name: 'telegram',
            link: 'https://telegram.org/',
            src: './img/iconForCall/telegram.png'
          },
          {
            name: 'whatsApp',
            link: 'https://www.whatsapp.com/',
            src: './img/iconForCall/whatsapp.png'
          },
          {
            name: 'viber',
            link: 'https://www.viber.com',
            src: './img/iconForCall/viber.png'
          },
          {
            name: 'call',
            link: 'tel:+375 29 519 80 07',
            src: './img/iconForCall/call.png'
          }
        ],
        contactInfoIcon: [
          {
            name:'vk',
            src:'./img/contactInfoIcon/vk.svg'
          },
          {
            name:'instagram',
            src:'./img/contactInfoIcon/insta.png'
          },
          {
            name:'telegramm',
            src:'./img/contactInfoIcon/telegramm.svg'
          },

        ]
      },

    }
  }
}



