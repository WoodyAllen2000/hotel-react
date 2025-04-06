import { createContext, useState } from "react";

export const AuthContext = createContext();

// TODO: BaseUrl

// 判断是否为登录状态
export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login() {
        setIsLoggedIn(true);
    }

    function logout() {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={ {isLoggedIn, login, logout} } >
            {children}
        </AuthContext.Provider>
    );
}

// TODO：快速刷新问题，这个文件不是只导出组件