import Inventory from "../components/views/Inventory"
import ItemDetails from "../components/views/ItemDetails"

export const routes = [
    {
        path: '',
        component: Inventory
    },
    {
        path: '/itemdetails/:id',
        component: ItemDetails
    }
]