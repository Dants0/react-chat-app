import { useContext } from 'react';
import Context from './Context';
import { UserIcon } from '@heroicons/react/outline';

export default function Message({ msg }) {
    const { user } = useContext(Context);

    const isCurrentUser = user.id === msg.user.id;

    return (
        <li className={`flex justify-${isCurrentUser ? 'end' : 'start'}`}>
            <div
                className={`relative max-w-xl px-4 py-2 text-white bg-${
                    isCurrentUser ? 'cyan' : 'blue'
                }-500 rounded shadow`}
            >
                {!isCurrentUser ? <div className="flex items-center gap-3 decoration-sky-500 md:text-white border-b-2 text-transform: uppercase">
                <UserIcon className="h-6 w-6 text-white" /> {msg.user.name}</div> : null}
                <span>{msg.message}</span>
            </div>
        </li>
    );
}
