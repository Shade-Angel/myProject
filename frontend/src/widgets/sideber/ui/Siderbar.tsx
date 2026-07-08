import { Link } from "react-router-dom";

const menuItems = [
    {path: '/profile', label: 'Моя страница'},
    {path: '/', label: 'Новости'},
    {path: '/messages', label: 'Сообщения'},
    {path: '/friends', label: 'Друзья'},
];

export const SiderBar = () => {
    return (
        <aside style={{
            width: '200px'
        }}>
            <nav>
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        style={{
                            display: 'block',
                            padding: '8px 10 px',
                            color: '#2a5885',
                            textDecoration: 'none',
                            marginBottom: '5px'
                        }}    
                    >
                    </Link>
                ))}
            </nav>
        </aside>
    );
};