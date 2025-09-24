import React, { useState } from 'react';
import { featuredContacts, departments, colleagues } from './mockdata';
import { ChevronRightIcon, PhoneIcon, SearchIcon, UsersIcon } from './icons';
import type { Colleague, Department } from './types';

const FeaturedContactCard = ({ contact, onViewDetails }: { contact: Colleague, onViewDetails: () => void }) => (
    <div onClick={onViewDetails} className="bg-slate-50 rounded-lg p-4 flex items-center space-x-4 cursor-pointer hover:bg-slate-100 transition-colors">
        <div className="w-12 h-12 bg-blue-500 text-white font-bold text-lg rounded-full flex items-center justify-center flex-shrink-0">
            {contact.avatarText}
        </div>
        <div className="flex-grow">
            <p className="font-bold text-slate-900">{contact.name} <span className="text-sm font-normal text-slate-500 ml-2">{contact.position}</span></p>
            <p className="text-sm text-slate-500 mt-1">{contact.specialty}</p>
        </div>
        <PhoneIcon className="w-6 h-6 text-[#5fc38f]" />
    </div>
);

const DepartmentListItem = ({ department, onViewDetails }: { department: Department, onViewDetails: () => void }) => (
    <div onClick={onViewDetails} className="flex justify-between items-center p-4 cursor-pointer hover:bg-slate-50">
        <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <UsersIcon className="w-6 h-6 text-green-600" />
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
    
    // Simple search for colleagues - not displayed directly but could be used
    const filteredColleagues = colleagues.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.departmentName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full bg-slate-100 min-h-full flex flex-col">
            <header className="bg-white p-4 sticky top-0 z-10 border-b border-slate-200">
                <h1 className="text-xl font-bold text-center text-slate-900">通讯录</h1>
                <div className="mt-4 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                        type="search"
                        placeholder="搜索"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-100 rounded-lg border-none pl-10 pr-4 py-2 text-slate-800 focus:ring-2 focus:ring-[#5fc38f]"
                    />
                </div>
            </header>
            
            <main className="flex-grow overflow-y-auto">
                {searchTerm === '' && (
                    <div className="p-4">
                        <h2 className="text-sm font-semibold text-slate-500 mb-2 px-2">班步人事</h2>
                        <div className="space-y-3">
                            {featuredContacts.map(contact => (
                                <FeaturedContactCard key={contact.id} contact={contact} onViewDetails={() => navigateTo('contact-details', { contactId: contact.id })} />
                            ))}
                        </div>
                    </div>
                )}
                
                <div className="pt-2">
                    {searchTerm === '' && <h2 className="text-sm font-semibold text-slate-500 mb-2 px-6">组织架构</h2>}
                    <div className="bg-white">
                        <div className="divide-y divide-slate-100">
                            {filteredDepartments.map(dept => (
                                <DepartmentListItem key={dept.id} department={dept} onViewDetails={() => navigateTo('department-details', { departmentId: dept.id })} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};