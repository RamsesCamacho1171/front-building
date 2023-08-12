import routesTenant from "./routes.tenant";
import routesVigilant from "./routes.vigilant";
import { Error404, Home } from "../pages";
import { BasicLayout } from "../layout/basicLayout"; 

const routes =[
    ...routesTenant,
    ...routesVigilant,
    {
        path: "/",
        layout: BasicLayout,
        component: Home,
    },
    {
        path: "*",
        layout: BasicLayout,
        component: Error404,
    },
]

export default routes;