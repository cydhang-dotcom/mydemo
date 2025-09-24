import React from 'react';
import { BackIcon, MoreIcon } from './Icons';

export const Header = ({ title, onBack }: { title: string; onBack: () => void; }) => (
    <header className="bg-white p-4 flex items-center justify-between sticky top-0 z-10 border-b border-slate-200">
        <button onClick={onBack} className="text-slate-600 p-2 -ml-2"><BackIcon /></button>
        <h1 className="text-lg font-semibold text-slate-800">{title}</h1>
        <div className="flex items-center space-x-2 text-slate-600">
            <button className="p-2 -mr-2"><MoreIcon /></button>
        </div>
    </header>
);
