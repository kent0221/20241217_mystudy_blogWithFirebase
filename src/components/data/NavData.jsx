/**
 * NavData.jsx
 * -- molecules/Navbar.jsxに渡すpropsの配列
 * -- jsだとコンポーネントを配列データ化できなかったので、jsxと変更した
 */
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export const NavData = [
  {
    id: 0,
    text: 'ホーム',
    icon: <HomeIcon/>,
    path: '/',
    isLogin: true,
    isLogout: true,
  },
  {
    id: 1,
    text: '記事投稿',
    icon: <EditNoteIcon/>,
    path: '/createPost',
    isLogin: true,
    isLogout: true,
  },
  {
    id: 2,
    text: 'ログイン',
    icon: <LoginIcon/>,
    path: '/login',
    isLogin: false,
    isLogout: true,
  },
  {
    id: 3,
    text: 'ログアウト',
    icon: <LogoutIcon/>,
    path: '/logout',
    isLogin: true,
    isLogout: false,
  },
];


