import React from 'react'

function Title() {
    console.log("rendering title...")
    return (
        <h2>useCallback hook tutorial</h2>
    )
}

export default React.memo(Title)