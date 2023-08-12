import React from 'react'
import { TopMenu } from '../../components/common';
import { SideMenuTenant } from '../../components/tenant';
import './TenantLayout.scss'

export function TenantLayout(props) {
    const {children} =props;
    return (
        <div className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu title="Building tenant"/>
      </div>

      <div className="admin-layout__main-content">
        <SideMenuTenant>{children}</SideMenuTenant>
      </div>
    </div>
    )
}
