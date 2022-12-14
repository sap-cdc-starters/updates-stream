import React from 'react'

export default props => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
        const ReactJson = require('react-json-view').default
        return <ReactJson theme={'monokai'}  displayDataNumbers={false} displayDataTypes={false} style={{fontSize: '1.3rem'}} {...props}  />
    }
    return null
}