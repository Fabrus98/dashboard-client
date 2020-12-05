import { Link } from 'react-router-dom';

export function MenuComponent({ guilds }) {


    return (
        <div>
            <h1>Hello</h1>
            {guilds.included.map(( guild ) => (
                <div>
                    <li>{guild.name}</li>
                    <Link to={`/dashboard/${guild.id}`}>View Dashboard</Link>
                </div>
            ))}
            {guilds.excluded.map(( guild ) => (
                <div>
                    <li>{guild.name}</li>
                    <a href={`https://discord.com/api/oauth2/authorize?client_id=683480274071584838&permissions=8&scope=bot`}>Invita il Bot</a>
                </div>
            ))}
        </div>
    );
}