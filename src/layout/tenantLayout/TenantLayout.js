import React from 'react'

export function TenantLayout(props) {
    const {children} =props;
    return (
        <div>
            <p>tenant</p>
            {children}
        </div>
    )
}
