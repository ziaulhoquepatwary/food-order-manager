import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../layout/CustomerLayout";
import CustomerHome from "../pages/customer/CustomerHome";
import ProductDetails from "../components/menu/ProductDetails";
import CartPage from "../pages/customer/CartPage";
import OrderSummary from "../pages/customer/order-summary/OrderSummary";
import PaymentSelection from "../pages/customer/order-summary/PaymentSelection";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/authentications/Login";
import Register from "../pages/authentications/Register";
import CookerLayout from "../layout/CookerLayout";
import CookerDashboard from "../pages/cooker/CookerDashboard";

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
            },
            {
                path: '/payment',
                Component: PaymentSelection
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
        ]
    },
    {
        path: '/cooker',
        Component: CookerLayout,
        children: [
            {
                index: true,
                Component: CookerDashboard
            }
        ]
    }
])