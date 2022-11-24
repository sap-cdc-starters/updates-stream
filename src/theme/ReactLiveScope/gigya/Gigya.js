import React, {useEffect, useState} from "react";
import Fetch, {useFetch} from "./Fetch";
import JsonView from "./JsonView";
import styles from "./styles.module.css";
import {SafeComponent} from "@site/src/components/SafeComponnet";
// import {fromEvent} from "rxjs";

export const TestUser = {
    domain: 'accounts.gigya.com',
    accessToken: 'st2.s.AcbHcsserw.-mNj3OQ36Ye7QWplY3-wS67zMUgWYQgjQQGX8g2o9K857KKRg-PMRx2PU5uck-LLM-G4S9EFbVcXBAanhrlmPw.hU_GGEpgkBGlVNO6M_rKgxKK71UmhlFHQpgZ-eEJWJWFjOHRb_RKxGF-6ZDF6c_PPHztLT1rcE_ardylCYYSGg.sc3'
};
const DomainContext = React.createContext('accounts.gigya.com');
const AdminContext = React.createContext(TestUser);

const SiteContext = React.createContext({
    apiKey: '3_VL0lfWLluGwf2VZ5niQd4Xx6HFf6hSdYHfHoDMJDF2njekgvaEbnxryRAsaXwZK2'
});


export const GigyaContext = ({
                                 domain = 'accounts.gigya.com',
                                 apiKey = '3_VL0lfWLluGwf2VZ5niQd4Xx6HFf6hSdYHfHoDMJDF2njekgvaEbnxryRAsaXwZK2',
                                 userKey,
                                 userSecret,
                                 accessToken,
                                 children
                             }) => (
    <div>
        <DomainContext.Provider value={domain}>
            <AdminContext.Provider value={{userKey: userKey, userSecret: userSecret, accessToken: accessToken}}>
                <SiteContext.Provider value={{apiKey: apiKey}}>
                    {children}
                </SiteContext.Provider>
            </AdminContext.Provider>
        </DomainContext.Provider>
    </div>
)

const GigyaContextConsumer = ({children}) => (
    <DomainContext.Consumer>
        {(domain) => (
            <AdminContext.Consumer>{({userKey, userSecret, accessToken}) => (
                <SiteContext.Consumer> {(apiKey) =>
                    children({domain, apiKey, userKey, userSecret, accessToken})}
                </SiteContext.Consumer>
            )}
            </AdminContext.Consumer>
        )}
    </DomainContext.Consumer>
);


function useGigyaApi({domain, api, ...params}) {
    return {url: `https://${domain}/${api}`, params: params};

}


function useGigyaContext() {

    const domain = React.useContext(DomainContext);
    const admin = React.useContext(AdminContext);
    const {apiKey} = React.useContext(SiteContext);
    const userKey = {
        userKey: admin.userKey,
        secret: admin.userSecret,
    };
    return {domain, apiKey, ...userKey, oauth_token: admin.accessToken, format: 'json'};


}

export const GigyaRequest = ({children, ...props}) => {
    const ctx = useGigyaContext();
    const [params, setParams] = useState({...ctx, ...props});
    const request = useGigyaApi(params);

    const safeChildren = response =>
        children ? children(response) : <div/>;

    const {response, fetch, responseView, ResponseConsumer} = useFetch(request);

    return <SafeComponent>
        <div >

            <div style={{padding: '1.5rem' }}>
                <JsonView
                    name={params.api}
                    collapsed={true}
                    src={params}
                    onEdit={({newSrc}) => setParams(newSrc)}
                    onDelete={({newSrc}) => setParams(newSrc)}
                    onAdd={({newSrc}) => setParams(newSrc)}/>

                <button onClick={fetch} style={{  width: '4em' , height: '2rem' }}> >>  </button>
            </div>

            <ResponseConsumer class="grid-item" style={{padding: '1.5rem' }}>
                <JsonView src={response} collapsed={false} name="result" class="grid-item"/>
                {response ? safeChildren(response) : <div/>}
            </ResponseConsumer>
            <br/>

        </div>
    </SafeComponent>

};


export default GigyaRequest;


  