import React from 'react'
import { TopMenu } from '../../components/common';
import './VigilantLayout.scss'

export function VigilantLayout(props) {
    const {children}=props;
    return (
        <div className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu title="Building vigilant"/>
      </div>

      <div className="admin-layout__main-content">
        {/* <SideMenu>{children}</SideMenu> */}
        {children}
      </div>
    </div>
    )
}
