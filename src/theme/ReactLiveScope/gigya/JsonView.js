import React from 'react'

export default props => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
        const ReactJson = require('react-json-view').default
        return <ReactJson {...props} theme={'flat'}  />
    }
    return null
}