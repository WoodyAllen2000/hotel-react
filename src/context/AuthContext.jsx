import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// TODO: BaseUrl

// 判断是否为登录状态
// 将登录状态保存到localStorage，后续可能要改
export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
        if (isLoggedIn) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [isLoggedIn, user]);

    async function login(email, password) {
        try {
            const response = await fetch("/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),
            });

            // 接受数据
            const data = await response.json();

            if (response.ok) {
                // 后端验证后，将用户对象返回到前端
                // TODO: 这里后续再去确认吧
                setUser(data);
                setIsLoggedIn(true);
            } else {
                alert("Something Wrong");
            }

        } catch (error) {
            console.error(error);
        }
    }

    async function signup(name, email, password) {
        try {
            const response = await fetch("auth/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                setUser(data);
                setIsLoggedIn(true);
            } else {
                alert("Something Wrong");
            }
        } catch (error) {
            console.error(error);
        }
    }

    function logout() {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
}
