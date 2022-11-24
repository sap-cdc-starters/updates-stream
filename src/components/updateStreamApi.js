import {GigyaRequest, GigyaContext, TestUser} from "../theme/ReactLiveScope/gigya";

export function API() {
    return (
        <GigyaContext>
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