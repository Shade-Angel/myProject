export const Header = () => {
    return (
        <header style={{
            background: '#4a76a8',
            color: 'white',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <div style={{
                fontSize: '20px',
                fontWeight: 'bold',
            }}>
                Аналог ВКонтакте
            </div>
            <input
                type="textt"
                placeholder="Поиск"
                style={{
                    padding: '5px 10px',
                    borderRadius: '15px',
                    border: 'none',
                    width: '300px'
                }}
            />
            <div style={{
                display: 'flex',
                gap: '15px',
                alignItems: 'center'
            }}>
                <span>Уведомления</span>
                <span>Профиль</span>
            </div>
        </header>
    );
};