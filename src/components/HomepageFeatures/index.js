import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import  {GigyaContext, GigyaRequest} from "../gigya";

 
function API() {
  return (
      <GigyaContext
          domain="accounts.gigya.com"
          apiKey="3_VL0lfWLluGwf2VZ5niQd4Xx6HFf6hSdYHfHoDMJDF2njekgvaEbnxryRAsaXwZK2"
          accessToken={TestUser.accessToken} >
          <GigyaRequest
              api={"accounts.updates.stream"}
              params={{query: "select * from changelog limit 40"}}>
              {response =>
                  <GigyaRequest
                      api={"accounts.stream.read"}
                      params={{cursorId: response.nextCursorId}}/>
              }
          </GigyaRequest>
      </GigyaContext>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        
        </div>
      </div>
    </section>
  );
}
