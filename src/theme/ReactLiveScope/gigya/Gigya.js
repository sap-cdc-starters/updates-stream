import React, {useEffect, useState} from "react";
import Fetch, {useFetch} from "./Fetch";
import JsonView from "./JsonView";
import styles from "./styles.module.css";
// import {fromEvent} from "rxjs";

export const TestUser = {
    userKey: undefined,
    userSecret: undefined,
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
            oauth_token: admin.accessToken,
            format:'json'
        };

        Object.keys(params).forEach(k => searchParams[k] = params[k]);
        return {url:`https://${domain}/${api}`, params: searchParams}
    }

    const [request, setRequest] = useState(buildRequest);

    useEffect(() => {
        setRequest(buildRequest())
    }, [api, params]);


    return request;

}


export const GigyaRequest = props => {
    const request = useGigyaApi(props.api, props.params);
    const children = response =>
        props.children ? props.children(response) : <div/>;

    const {response, fetch, responseView, ResponseConsumer} = useFetch(request);

    return <div >
        <a onClick={fetch} >Fetch [{props.api}]</a>
        <JsonView src={props.params} collapsed={true} name="params"/>

        <ResponseConsumer >
         
            <JsonView src={response} collapsed={false} name="result" />
            {response ? children(response) : <div/>}
        </ResponseConsumer>
    </div>


};


export default GigyaRequest;


  