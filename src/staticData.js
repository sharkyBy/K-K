export const store = {
  staticData: {
    header: {
      navigation: {
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
        text: {
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
            We are not only engaged in commerce, but also develop IT education in our home country.`



        },

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
            srcImg: './img/Cards/2.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          },
          {
            srcImg: './img/Cards/2.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          },
          {
            srcImg: './img/Cards/2.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          },
          {
            srcImg: './img/Cards/2.png',
            title: 'meniwim webapp',
            p: `Development and support of a web application for an Israeli commercial real 
              estate agent`,
            link: 'menivim.net'
          }
        ]
      },
      contact: {
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
        ]
      },
    },
  },
  staticData_ru: {

  }
}





/*  window.addEventListener('scroll', function () {
  this.pageYOffset == 900 ? console.log(`posY=${this.pageYOffset}`) : console.log(`Top = ${this.pageYOffset}`);
  //  pos();
  position()
});  */

/*  function pos() {
   let elem = document.querySelector('#carousel');
   let block = document.querySelector('#aboutUs')
   console.log(elem, block);
 } */

/* function position() {
 let centerX = document.documentElement.clientWidth / 2;
 let centerY = document.documentElement.clientHeight / 2;
 let aboutUs = document.querySelector('#aboutUs');
 console.log(aboutUs.clientHeight)
 let elem = document.elementFromPoint(centerX, centerY);
 console.log(`element: ${elem.tagName}, centerX: ${centerX}, centerY: ${centerY}`);
 return elem ? elem.style.background = "yellow":elem.style.background='transparent';

} */
