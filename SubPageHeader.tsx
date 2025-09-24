import React from 'react';
import { BackIcon } from './icons';

export const SubPageHeader = ({ title, onBack }: { title: string; onBack: () => void; }) => (
    <div className="bg-[#5Fc38f] px-6 pt-6 pb-16 text-white">
        {/* Top Row */}
        <div className="h-9 flex items-center relative">
             <button onClick={onBack} className="absolute left-0 text-white p-2 -ml-2">
                <BackIcon className="w-6 h-6" />
            </button>
            <h1 className="flex-1 text-center text-xl font-bold text-white">
                {title}
            </h1>
        </div>
        {/* Bottom Row - empty placeholder for height consistency */}
        <div className="h-16 mt-8" />
    </div>
);
