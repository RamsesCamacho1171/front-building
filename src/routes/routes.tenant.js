import { TenantLayout } from "../layout/tenantLayout";
import { HomeTenant } from "../pages/tenant";

const routesTenant =[
    {
        path:"/tenant",
        layout:TenantLayout,
        component:HomeTenant
    }
]

export default routesTenant;