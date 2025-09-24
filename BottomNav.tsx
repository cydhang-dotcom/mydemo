import React from 'react';
import { BriefcaseIcon, UsersIcon, UserCircleIcon } from './icons';

// FIX: Export the 'Tab' type so it can be used in other components like App.tsx.
export type Tab = 'daily' | 'contacts' | 'my';

interface BottomNavProps {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

export const BottomNav = ({ activeTab, setActiveTab }: BottomNavProps) => {
    const navItems = [
        { id: 'daily', label: '员工日常', icon: <BriefcaseIcon className="w-6 h-6"/> },
        { id: 'contacts', label: '通讯录', icon: <UsersIcon className="w-6 h-6"/> },
        { id: 'my', label: '我的', icon: <UserCircleIcon className="w-6 h-6"/> },
    ];

    return (
        <nav className="flex-shrink-0 bg-white border-t border-slate-200 flex justify-around text-xs">
            {navItems.map(item => {
                const isActive = activeTab === item.id;
                const itemClasses = `text-center p-2 w-full flex flex-col items-center justify-center space-y-1 cursor-pointer ${
                    isActive ? 'text-[#5Fc38f] bg-green-50/50' : 'text-slate-500 hover:bg-slate-50'
                }`;
                
                return (
                    <div key={item.id} onClick={() => setActiveTab(item.id as Tab)} className={itemClasses}>
                        {item.icon}
                        <p className={isActive ? "font-semibold" : ""}>{item.label}</p>
                    </div>
                );
            })}
        </nav>
    );
};