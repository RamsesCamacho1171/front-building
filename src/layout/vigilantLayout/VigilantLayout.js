import React from 'react'
import { TopMenu } from '../../components/common';
import { SideMenuVigilant } from '../../components/vigilant';
import './VigilantLayout.scss'

export function VigilantLayout(props) {
    const {children}=props;
    return (
        <div className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu title="Building vigilant"/>
      </div>

      <div className="admin-layout__main-content">
        <SideMenuVigilant>{children}</SideMenuVigilant>
      </div>
    </div>
    )
}
