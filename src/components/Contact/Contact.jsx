import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:singhmanish5208@gmail.com" target="_blank" rel="noopener noreferrer">
            <img 
            src={getImageUrl("contact/gmail.svg")}
            alt="Email icon"
            />
          </a>
        </li>

        
        <li className={styles.link}>
        <a href="https://www.linkedin.com/in/manish-singh2/" target="_blank" rel="noopener noreferrer">
          <img 
          src={getImageUrl("contact/linkedin.svg")}
          alt="LinkedIn icon"
          />
        </a>
         
        </li>

        <li className={styles.link}>
        <a href="https://github.com/manees-singh" target="_blank" rel="noopener noreferrer">
          <img 
           src={getImageUrl("contact/github.svg")}
           alt="Github icon" 
           />
        </a>
        </li>

        
      </ul>
    </footer>
  );
};