import React from 'react';
import styles from './styles.module.css';
import {UpdatesStreamApi} from "../updateStreamApi";



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
             <UpdatesStreamApi></UpdatesStreamApi>
        </div>
      </div>
    </section>
  );
}
