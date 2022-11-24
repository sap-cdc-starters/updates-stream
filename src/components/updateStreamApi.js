import React from 'react';

import {GigyaRequest, GigyaContext, TestUser, API} from "../theme/ReactLiveScope/gigya";
import {useState} from 'react'
import JsonView from "../theme/ReactLiveScope/gigya/JsonView";

export function UpdatesStreamApi() {

    // const [params, setParams] = useState({query: "select * from changelog limit 40"});

    return (
            <GigyaContext {...TestUser}>
                <GigyaRequest
                    api={"accounts.updates.stream"}
                    query={"select * from changelog limit 40"} >
                    {response =>
                        <GigyaRequest
                            api={"accounts.stream.read"}
                            cursorId={response.nextCursorId}/>
                    }
                </GigyaRequest>
            </GigyaContext>
        
    );
}