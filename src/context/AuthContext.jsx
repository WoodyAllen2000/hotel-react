import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// TODO: BaseUrl

// 判断是否为登录状态
// 将登录状态保存到localStorage，后续可能要改
export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    function login() {
        setIsLoggedIn(true);
    }

    function logout() {
        setIsLoggedIn(false);
        localStorage.clear();
    }

    return (
        <AuthContext.Provider value={ {isLoggedIn, login, logout} } >
            {children}
        </AuthContext.Provider>
    );
}

// TODO：快速刷新问题，这个文件不是只导出组件