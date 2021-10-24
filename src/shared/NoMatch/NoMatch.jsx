import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    return (
        <div>
            No se encuentra <Link to='/'>Home</Link>
        </div>
    )
}

export default NoMatch
