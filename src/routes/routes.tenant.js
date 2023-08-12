import { TenantLayout } from "../layout/tenantLayout";
import { HomeTenant,Visit } from "../pages/tenant"; 

const routesTenant =[
    {
        path:"/tenant",
        layout:TenantLayout,
        component:HomeTenant
    },
    {
        path:"/tenant/visit",
        layout:TenantLayout,
        component:Visit
    },
]

export default routesTenant;