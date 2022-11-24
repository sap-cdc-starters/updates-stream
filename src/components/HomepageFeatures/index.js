import React from 'react';
import styles from './styles.module.css';
import {API} from "../updateStreamApi";



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
             <API></API>
        </div>
      </div>
    </section>
  );
}
