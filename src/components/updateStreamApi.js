import React from 'react';

import {GigyaRequest, GigyaContext, TestUser} from "../theme/ReactLiveScope/gigya";
import {useState} from 'react'
import JsonView from "../theme/ReactLiveScope/gigya/JsonView";

export function API() {

    const [params, setParams] = useState({query: "select * from changelog limit 40"});

    return (
        <div>

            <GigyaContext {...TestUser}>
                <JsonView src={{...TestUser, ...params} }
                          onEdit={({newSrc})=> setParams(newSrc)} 
                          onDelete={({newSrc})=> setParams(newSrc)} 
                          onAdd={({newSrc})=> setParams(newSrc)}   />

                <GigyaRequest
                    api={"accounts.updates.stream"}
                    params={params}>
                    {response =>
                        <GigyaRequest
                            api={"accounts.stream.read"}
                            params={{cursorId: response.nextCursorId}}/>
                    }
                </GigyaRequest>
            </GigyaContext>
        </div>
    );
}