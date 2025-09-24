import React from 'react';
import { BackIcon, MoreIcon, BullseyeIcon } from './icons';

export const Header = ({ title, onBack }: { title: string; onBack: () => void; }) => (
    <header className="grid grid-cols-3 items-center bg-white px-4 h-16 sticky top-0 z-10 border-b border-slate-100">
        {/* Left section */}
        <div className="justify-self-start">
             <button onClick={onBack} className="text-slate-600 p-2 -ml-2">
                <BackIcon className="w-6 h-6" />
            </button>
        </div>

        {/* Center section */}
        <div className="justify-self-center">
             <h1 className="text-base font-bold text-slate-900 whitespace-nowrap">
                {title}
            </h1>
        </div>

        {/* Right section */}
        <div className="justify-self-end">
            <div className="flex items-center space-x-1 bg-slate-100 border border-slate-200/90 rounded-full p-1">
                <button className="p-1 text-slate-600 hover:bg-slate-200 rounded-full transition-colors">
                    <MoreIcon className="w-5 h-5"/>
                </button>
                <div className="w-px h-4 bg-slate-200/90"></div> {/* Separator */}
                <button className="p-1 text-slate-600 hover:bg-slate-200 rounded-full transition-colors">
                    <BullseyeIcon className="w-5 h-5"/>
                </button>
            </div>
        </div>
    </header>
);