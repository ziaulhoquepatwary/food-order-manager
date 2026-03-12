import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../layout/CustomerLayout";
import CustomerHome from "../pages/customer/CustomerHome";
import ProductDetails from "../components/menu/ProductDetails";
import CartPage from "../pages/customer/CartPage";
import OrderSummary from "../pages/customer/order-summary/OrderSummary";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: CustomerLayout,
        children: [
            {
                index: true,
                Component: CustomerHome,
            },
            {
                path: '/product/:id',
                Component: ProductDetails
            },
            {
                path: '/cart',
                Component: CartPage
            },
            {
                path: '/order-summary',
                Component: OrderSummary
            }
        ]
    }
])