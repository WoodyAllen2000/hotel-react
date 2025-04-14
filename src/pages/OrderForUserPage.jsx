import { useContext, useState, useEffect } from "react";
import Header from "../components/common/Header";
import { AuthContext } from "../context/AuthContext";
import "../css/OrderForUserPage.css"; 

const OrderForUserPage = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // TODO
                const response = await fetch('/orders/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userId: user.id }) // 根据后端实际需要传递用户信息，这里假设传递 userId
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setOrders(data); // 后端直接返回订单数组

            } catch (err) {
                console.error("获取订单失败:", err);
            } 
        };

        fetchOrders();

    }, [user]); 

    return (
        <>
            <Header />
            <div className="order-page-container">
                <h1 className="order-page-title">My Orders</h1>

                {orders.length === 0 && (
                    <p className="no-orders-message">You have no order</p>
                )}

                {orders.length > 0 && (
                    <div className="order-list">
                        {orders.map(order => (
                            <div key={order.id} className="order-card"> 
                                <h3>Order Id: {order.id}</h3> 
                                {/* 这里要先确认好order对象的属性 */}
                                <p><strong>checkInDate:</strong> {order.checkInDate ? new Date(order.checkInDate).toLocaleDateString() : 'N/A'}</p>
                                <p><strong>checkOutDate:</strong> {order.checkOutDate ? new Date(order.checkOutDate).toLocaleDateString() : 'N/A'}</p>
                                <p><strong>Price:</strong> ￥{order.totalPrice ? order.totalPrice.toFixed(2) : 'N/A'}</p>
                                {/* 可以继续添加房间类型、订单状态等，后面 order 对象做好了再添加 */}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default OrderForUserPage;