import { VigilantLayout } from "../layout/vigilantLayout" 
import { HomeVigilant,Access } from "../pages/vigilant"

const routesVigilant = [
    {
        path:"/vigilant",
        layout:VigilantLayout,
        component:HomeVigilant
    },
    {
        path:"/vigilant/access",
        layout:VigilantLayout,
        component:Access
    },
]

export default routesVigilant