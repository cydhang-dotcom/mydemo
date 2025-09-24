import React, { useState } from 'react';
import { featuredContacts, departments, colleagues } from './mockdata';
import { ChevronRightIcon, SearchIcon, UsersIcon } from './icons';
import type { Colleague, Department } from './types';

const FeaturedContactCard = ({ contact, onViewDetails }: { contact: Colleague, onViewDetails: () => void }) => (
    <div onClick={onViewDetails} className="flex items-center p-3 -m-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
        <div className="w-12 h-12 bg-[#5fc38f] text-white font-bold text-lg rounded-full flex items-center justify-center flex-shrink-0">
            {contact.avatarText}
        </div>
        <div className="flex-grow ml-4">
            <p className="font-bold text-slate-900 text-base">{contact.name}</p>
            <p className="text-sm text-slate-500 mt-1">{contact.specialty}</p>
        </div>
        <div className="flex items-center text-slate-400">
             <span className="text-xs mr-3 font-medium text-green-700 bg-green-100 py-1 px-2.5 rounded-md">{contact.position.split(' - ')[1] || '专业顾问'}</span>
             <ChevronRightIcon className="w-5 h-5" />
        </div>
    </div>
);

const DepartmentListItem = ({ department, onViewDetails }: { department: Department, onViewDetails: () => void }) => (
    <div onClick={onViewDetails} className="flex justify-between items-center p-4 cursor-pointer hover:bg-slate-50 first:rounded-t-xl last:rounded-b-xl">
        <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100/60 rounded-lg flex items-center justify-center mr-3">
                <UsersIcon className="w-6 h-6 text-[#5fc38f]" />
            </div>
            <span className="font-semibold text-slate-800">{department.name}</span>
        </div>
        <div className="flex items-center text-slate-500">
            <span className="text-sm">{department.memberCount}</span>
            <ChevronRightIcon className="w-5 h-5 ml-1" />
        </div>
    </div>
);

export const ContactsPage = ({ navigateTo }: { navigateTo: (page: string, params?: any) => void; }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDepartments = departments.filter(d => d.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return (
        <div className="w-full flex flex-col min-h-full bg-slate-100">
            <div className="bg-[#5Fc38f] px-6 pt-6 pb-16 text-white">
                {/* Top Row: Title (mimics company selector height) */}
                <div className="h-9 flex items-center justify-center">
                    <h1 className="text-xl font-bold text-white">通讯录</h1>
                </div>

                {/* Bottom Row: Search Bar (mimics user info section height) */}
                <div className="mt-8 flex items-center h-16">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="w-5 h-5 text-white/70" />
                        </div>
                        <input
                            type="search"
                            placeholder="搜索"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white/20 placeholder-white/70 text-white rounded-lg border-none pl-10 pr-4 py-2 focus:ring-2 focus:ring-white/80"
                        />
                    </div>
                </div>
            </div>
            
            <main className="flex-grow -mt-10 px-4 pb-24 space-y-4">
                {searchTerm === '' && (
                    <div className="bg-white rounded-xl shadow-sm p-5">
                         <h3 className="font-bold text-slate-900 mb-2 text-base">专属服务顾问</h3>
                         <p className="text-sm text-slate-500 mb-4">您的人事与税务专家</p>
                        <div className="space-y-2">
                            {featuredContacts.map(contact => (
                                <FeaturedContactCard key={contact.id} contact={contact} onViewDetails={() => navigateTo('contact-details', { contactId: contact.id })} />
                            ))}
                        </div>
                    </div>
                )}
                
                <div className="bg-white rounded-xl shadow-sm">
                    {searchTerm === '' && <h3 className="font-bold text-slate-900 text-base p-5 pb-2">组织架构</h3>}
                    <div className="divide-y divide-slate-100">
                        {filteredDepartments.map(dept => (
                            <DepartmentListItem key={dept.id} department={dept} onViewDetails={() => navigateTo('department-details', { departmentId: dept.id })} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};