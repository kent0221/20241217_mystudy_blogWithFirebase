/**
 * LoginContext.js
 */
import { createContext, useContext } from "react";

export const LoginContext = createContext();

// 作成したコンテキストを呼び出すための関数（カスタムフック化）
export const useLoginContext = () => useContext(LoginContext);