/**
 * LoginContext.js
 */
import { createContext, useContext } from "react";

/* ここから、LoginContext.jsに保存する */
export const LoginContext = createContext();

// 作成したコンテキストを呼び出すための関数（カスタムフック化）
export const useLoginContext = () => useContext(LoginContext);
/* ここまで、LoginContext.jsに保存する */