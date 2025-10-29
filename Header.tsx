import React from 'react';
import { BackIcon } from './icons';

interface HeaderProps {
    title: string;
    onBack: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onBack }) => (
    <header className="grid grid-cols-3 items-center bg-white px-4 h-16 sticky top-0 z-10 border-b border-slate-100 flex-shrink-0">
        <div className="justify-self-start">
            <button onClick={onBack} className="text-slate-600 p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors">
                <BackIcon className="w-6 h-6" />
            </button>
        </div>
        <div className="justify-self-center">
            <h1 className="text-base font-bold text-slate-900 whitespace-nowrap">
                {title}
            </h1>
        </div>
        {/* Empty div to balance the back button and keep the title centered */}
        <div className="justify-self-end w-10"></div>
    </header>
);
