import React, { useRef } from "react";
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wkhx4uy', 'template_hk19h7b', form.current, {
        publicKey: 'p56ttZ13doUXLeh7I',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div className={styles.frame}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>CONTACT US</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input className={styles.formInput} placeholder="Name" type="text" name="user_name" />
              <input className={styles.formInput} placeholder="Email" type="email" name="user_email" />
              <textarea className={styles.formTextarea} placeholder="Message" name="message"></textarea>
              <button type="submit" className={styles.formButton}>Submit</button>
            </form>
          </div>
          <div id="map" className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6267970225545!2d77.03537277528821!3d28.610970775676495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dd375e5a13%3A0x108adaa3abe4bd07!2sNetaji%20Subhas%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1718000812649!5m2!1sen!2sin"
              title="Kalpana Map" width="100%" height="480" style={{ border: 0 }} allowFullScreen loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;