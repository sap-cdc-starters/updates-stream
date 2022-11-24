import React, {useEffect, useState} from "react";
import Fetch, {useFetch} from "./Fetch";
import buildUrl from "build-url";
import JsonView from "./JsonView";
import styles from "./styles.module.css";
// import {fromEvent} from "rxjs";

export const TestUser = {
    userKey: 'AIvzv0Pv8IFX',
    userSecret: 'e6DgUArTi5mGQgaqqAzPdFNYiWaPNaqu',
    accessToken: 'st2.s.AcbH2Gu9Qg.RYXEQ1_iEed5lAdHbsXrcTumAJ0KVisg9mQNHzlUx2ya2tpC8VzAmjCtqZMneeSd70muPZSVY-rksHM4_O9TDQ.xIMHmMw0e_EUtKQeXO5iQY_iPHki6N4qq0-aMNm_I7Y684JXhplYfQbTTbTM3LY7EHoLlk4vIcta6ZDe23FiFA.sc3'
};
const DomainContext = React.createContext('accounts.us1-st1.gigya.com');
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
            <AdminContext.Consumer>{({userKey, userSecret}) => (
                <SiteContext.Consumer> {(apiKey) =>
                    children({domain, apiKey, userKey, userSecret})}
                </SiteContext.Consumer>
            )}
            </AdminContext.Consumer>
        )}
    </DomainContext.Consumer>
);


function useGigyaApi(api, params) {

    const domain = React.useContext(DomainContext);
    const admin = React.useContext(AdminContext);
    const {apiKey} = React.useContext(SiteContext);

    const buildRequest = () => {
        const searchParams = {
            apiKey: apiKey,
            userKey: admin.userKey,
            secret: admin.userSecret,
            oauth_token: admin.accessToken
        };

        Object.keys(params).forEach(k => searchParams[k] = params[k]);
        return buildUrl(`https://${domain}`, {
            path: api,
            queryParams: searchParams
        });
    }

    const [url, setUrl] = useState(buildRequest);

    useEffect(() => {
        setUrl(buildRequest())
    }, [api, params]);


    return {url};

}


export const GigyaRequest = props => {
    const {url} = useGigyaApi(props.api, props.params);
    const children = response =>
        props.children ? props.children(response) : <div/>;

    const {response, fetch, responseView, ResponseConsumer} = useFetch(url);

    return <div>
        <button onClick={fetch} className={styles.link}>Fetch [{props.api}]</button>
        <JsonView src={props.params} collapsed={true} name="params"/>

        <ResponseConsumer>
            <JsonView src={response} collapsed={true} name="result"/>
            {response ? children(response) : <div/>}
        </ResponseConsumer>
    </div>


};


export default GigyaRequest;



