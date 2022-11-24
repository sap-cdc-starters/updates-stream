import React, {useEffect, useState} from "react";
import {fromEvent, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators"
import {fromFetch} from 'rxjs/fetch';
import PropTypes from 'prop-types';
import JsonView from "./JsonView";
import styles from './styles.module.css';
import {AsyncResolver} from 'reenhance-components';

function streamFetch(url) { 
    return fromFetch(url, {
        referrerPolicy: "origin",
        credentials:"include",
        mode:"cors"
        
    })
        .pipe(
            switchMap(response => {
                if (response.ok) {
                    // OK return data
                    return response.json();
                } else {
                    // Server is returning a status requiring the client to try something else.
                    return of({error: true, message: `Error ${response.status}`, raw: response});
                }
            }),
            catchError(err => {
                // Network or other error, handle appropriately
                console.error(err);
                return of({error: true, message: err.message})
            }),
            map(response => response));
}

const AlbumsAsyncResolver =
    AsyncResolver('query', { resultCount: 0, results: [] });

const useApiResponse= (url)=>{
    const [request, setRequest] = useState( undefined);
    const [requestId, setRequestId] = useState(0 );

    const fetch = () => {
        setRequest(url );
        setRequestId( requestId+1 );
    };
 
   return useObservable(streamFetch(request), [request, requestId]);
}



 
export function useFetch(url) {

    const [request, setRequest] = useState( );
    const [requestId, setRequestId] = useState(0 );

    const fetch = () => {
        setRequest(url );
        setRequestId( requestId+1 );
    };
  
    const response = useObservable(streamFetch(request), [ request, requestId])


    const ResponseView  =  requestId ?
        <JsonView src={response} collapsed={true}/> : <div /> ;
    
    const ResponseConsumer  = ({children})=> 
        <div>
            { requestId ? children  : <div />} 
        </div>
        
     

    return {
        response,
        fetch,
        ResponseView,
        ResponseConsumer
    }
   
 
}

 function Fetch({children, theme, transformCode, url, FetchLink,...props}) {
 
    const [request, setRequest] = useState( );
    const [requestId, setRequestId] = useState(0 );

    const fetch = () => {
        setRequest(url );
        setRequestId( requestId+1 );
    };
    const fetchEl = React.useRef(null);

    const fetch$ = fromEvent(fetchEl.current, 'onClick');
  
     const response = useObservable(streamFetch(request), [ request, requestId])

   
     const apiResponse  =  requestId ?
         children? children(response) : <div />: <div />;

     return (
            <div>
                {FetchLink? <FetchLink ref={fetchEl} onClick={fetch} /> :
                <button ref={fetchEl}  onClick={fetch} className={styles.link} >Fetch</button>}
                {apiResponse} 
            </div>
            );
            
        /*<ReactJson src={response} /> */

    // });
}

Fetch.propTypes = {
    children: PropTypes.element,
    details: PropTypes.element,
};

Fetch.defaultProps = {
    details: null,
};

const useObservable = (observable, inputs) => {
    const [state, setState] = useState();

    useEffect(() => {
        const sub = observable.subscribe(setState);
        return () => sub.unsubscribe();
    }, inputs);

    return state;
};

useObservable.propTypes = {
    children: PropTypes.element,
    details: PropTypes.element,
};

export default Fetch;


 