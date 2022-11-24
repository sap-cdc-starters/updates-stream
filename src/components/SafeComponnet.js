
import React from 'react';
import ErrorBoundary from '@docusaurus/ErrorBoundary';

export const SafeComponent = ({children}) => (
    <ErrorBoundary
        fallback={({error, tryAgain}) => (
            <div>
                <p>This component crashed because of error: {error.message}.</p>
                <button onClick={tryAgain}>Try Again!</button>
            </div>
        )}>
        {children}
    </ErrorBoundary>
);
