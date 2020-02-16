import React from 'react';

export default function AboutUs(props) {
  return (
    <div className='container__aboutUs'>

        <div className='container__aboutUs-text'>
          <h1>ABOUT US</h1>
          <p>
            K&K TEAM is a team of experienced IT specialists, designers and digital marketers.

            <ol>
              <li>Development of chat bots, mobile and web applications;</li>
              <li>Creation of websites on CMS;</li>
              <li>Design of corporate identity, logo and design prototypes;</li>
              <li>Design of advertising materials for social networks and printing.</li>
            </ol>

            Our customer works with a well-coordinated team, not scattered performers. 
            Also thanks to the network of partner companies, the customer reduces the time 
            to search for performers in related areas: hosting, accounting and legal services, 
            SEO-promotion and advertising.            
            We worked with customers from Belarus, Russia, USA, Israel and Qatar. We are not only engaged in commerce, but also develop IT education in our home country.
          </p>
        </div> 

        <div className='container__aboutUs-scopes'>
          scopes
        </div>
        
    </div> 
  )
}