import React from 'react'
import { TopMenu } from '../../components/common';
import './TenantLayout.scss'

export function TenantLayout(props) {
    const {children} =props;
    return (
        <div className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu title="Building tenant"/>
      </div>

      <div className="admin-layout__main-content">
        {/* <SideMenu>{children}</SideMenu> */}
        {children}
      </div>
    </div>
    )
}
