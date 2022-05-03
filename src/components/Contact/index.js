import './index.scss';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wvzl0mg',
        'template_4w397ez',
        refForm.current,
        'K5UwNR0Q-M9EznecC'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };
  return (
    <React.Fragment>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Raitis Vilums
          <br />
          Latvia,
          <br />
          Āzenes iela 6, <br />
          Rīga
          <br />
          <span>rvilums80@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[56.95074, 24.083]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[56.95089, 24.0825]}>
              <Popup>Raitis lives here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </React.Fragment>
  );
};

export default Contact;
