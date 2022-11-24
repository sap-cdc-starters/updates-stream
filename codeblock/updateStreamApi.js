import {GigyaContext} from "./gigya";

export function API() {
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