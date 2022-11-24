import React from "react";
import GigyaRequest, {GigyaContext, TestUser} from "./Gigya";

const updateStream =
    <GigyaContext
        domain="accounts.gigya.com"
        apiKey="3_VL0lfWLluGwf2VZ5niQd4Xx6HFf6hSdYHfHoDMJDF2njekgvaEbnxryRAsaXwZK2"
        accessToken={TestUser.accessToken} >
        <GigyaRequest
            api={"accounts.updates.stream"}
            params={{query: "select * from changelog limit 300"}}>
            {response =>
                <GigyaRequest
                    api={"accounts.stream.read"}
                    params={{cursorId: response.nextCursorId}}/>
            }
        </GigyaRequest>
    </GigyaContext>


const notifyLogin =
    <GigyaContext
        domain="accounts.gigya.com"
        apiKey="3_VL0lfWLluGwf2VZ5niQd4Xx6HFf6hSdYHfHoDMJDF2njekgvaEbnxryRAsaXwZK2">
        <GigyaRequest
            api={"socialize.notifyLogin"}
            params={{
                providerSessions: JSON.stringify({
                    testnetwork3:
                        {authToken: "eyJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiaXNzdWVkQXQiOiIyMDIxLTEwLTAzVDE4OjA5OjUyIiwiZXhwaXJlc0F0IjoiMjAyMS0xMC0wM1QxOTowOTo1MiIsInRlc3RQcm9maWxlIjoie1wiaWRcIjpcIloybG5lV0YxYlhSbGMzUnpLMnBzZDJJek5EVndaRzltWm5jNGFuTkFiV0ZwYkdsdVlYUnZjaTVqYjIwPVwiLFwiZW1haWxcIjpcImdpZ3lhdW10ZXN0cytqbHdiMzQ1cGRvZmZ3OGpzQG1haWxpbmF0b3IuY29tXCIsXCJuYW1lXCI6XCJmTmFtZV9GclM3WCBmTmFtZV82S1JyRDdsYVwiLFwiZ2VuZGVyXCI6XCJmXCIsXCJmaXJzdE5hbWVcIjpudWxsLFwibWlkZGxlX25hbWVcIjpcImZOYW1lX3dneWc0eVRMXCIsXCJpZHNfZm9yX2J1c2luZXNzXCI6bnVsbCxcIm1hcHBlZF9hcHBzXCI6bnVsbCxcImZyaWVuZHNQcm92aWRlclVpZHNcIjpudWxsLFwiaG9zdHNcIjp7XCJzb2NpYWxpemUuZ2lneWEuY29tXCI6XCJzb2NpYWxpemUuZ2lneWEuY29tXCJ9fSJ9"}
                })
            }}>
            {response =>
                <GigyaRequest
                    api={"socialize.notifyLogin"}
                    params={{authCode: response.cookieValue, authMode: "cookie"}}>
                    {response =>
                        <GigyaRequest
                            api={"socialize.getUserInfo"}
                            params={{
                                login_token: response.login_token,
                                authMode: "cookie",
                                enabledProviders: "*,testnetwork3"
                            }}/>
                    }
                </GigyaRequest>
            }
        </GigyaRequest>
    </GigyaContext>