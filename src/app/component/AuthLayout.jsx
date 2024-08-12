import React from 'react'

const AuthLayout = (Component) => {
    return () => (
        <div>
            this is an AuthLayout
            <Component />
        </div>
    )
}

export default AuthLayout
