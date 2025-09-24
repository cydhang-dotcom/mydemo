import React, { useState, useMemo } from 'react';
import { Header } from './Header';
import { colleaguesData } from './mockdata';
import { MagnifyingGlassIcon, PhoneIcon } from './Icons';
import type { Colleague } from './types';

const ColleagueItem = ({ colleague }: { colleague: Colleague }) => (
    <div className="flex items-center justify-between py-3">
        <div className="flex items-center">
            <div className="w-11 h-11 bg-slate-200 rounded-full flex items-center justify-center mr-3 font-bold text-slate-600">
                {colleague.avatar}
            </div>
            <div>
                <p className="font-semibold text-slate-900">{colleague.name}</p>
                <p className="text-sm text-slate-500 mt-0.5">{colleague.title} | {colleague.department}</p>
            </div>
        </div>
        <a href={`tel:${colleague.phone}`} className="p-2 text-green-600 hover:bg-green-50 rounded-full">
            <PhoneIcon className="w-5 h-5" />
        </a>
    </div>
);

export const ColleaguesPage = ({ onBack }: { onBack: () => void }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const { filteredAndGrouped, alphabet } = useMemo(() => {
        const filtered = colleaguesData.filter(c => 
            c.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const grouped = filtered.reduce((acc, colleague) => {
            const initial = colleague.initial.toUpperCase();
            if (!acc[initial]) {
                acc[initial] = [];
            }
            acc[initial].push(colleague);
            return acc;
        }, {} as Record<string, Colleague[]>);

        const alphabet = Object.keys(grouped).sort();

        return { filteredAndGrouped: grouped, alphabet };
    }, [searchQuery]);
    
    const handleIndexClick = (letter: string) => {
        const element = document.getElementById(`section-${letter}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full bg-white min-h-screen flex flex-col">
            <Header title="我的同事" onBack={onBack} />
            
            <div className="p-4 border-b border-slate-200 sticky top-[69px] bg-white z-10">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="搜索"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-100 border-none rounded-lg pl-10 pr-4 py-2.5 text-base focus:ring-2 focus:ring-green-500"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <MagnifyingGlassIcon className="w-5 h-5" />
                    </div>
                </div>
            </div>

            <main className="flex-grow flex relative">
                <div className="flex-grow h-[calc(100vh-146px)] overflow-y-auto">
                    {alphabet.map(letter => (
                        <div key={letter} id={`section-${letter}`}>
                            <h2 className="bg-slate-100 text-slate-500 font-semibold text-sm px-4 py-1.5">{letter}</h2>
                            <div className="px-4 divide-y divide-slate-100">
                                {filteredAndGrouped[letter].map(colleague => (
                                    <ColleagueItem key={colleague.id} colleague={colleague} />
                                ))}
                            </div>
                        </div>
                    ))}
                     {alphabet.length === 0 && <p className="text-center text-slate-500 mt-8">没有找到结果</p>}
                </div>

                <div className="absolute right-0 top-0 h-full flex flex-col justify-center pr-1.5 z-20">
                    <div className="flex flex-col items-center space-y-1">
                        {alphabet.map(letter => (
                            <button
                                key={letter}
                                onClick={() => handleIndexClick(letter)}
                                className="text-xs font-bold text-green-600 hover:text-green-800 p-1"
                            >
                                {letter}
                            </button>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};
