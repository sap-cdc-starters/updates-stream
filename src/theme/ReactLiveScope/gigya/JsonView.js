import React from 'react'

export default props => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
        const ReactJson = require('react-json-view').default
        return <ReactJson theme={'flat'}  displayDataTypes={false} indentWidth={10}{...props}  />
    }
    return null
}