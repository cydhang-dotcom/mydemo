import React, { useState } from 'react';
import { featuredContacts, departments, colleagues } from './mockdata';
import { 
    ChevronRightIcon, 
    SearchIcon, 
    UsersIcon, 
    BuildingOfficeIcon,
    MoreIcon,
    BullseyeIcon,
    DiamondIcon,
    UserCircleIcon,
    MinusIcon
} from './icons';
import type { Colleague, Department } from './types';

// FIX: Define props with an interface and use React.FC to correctly type the component,
// which resolves issues with special props like 'key'.
interface FeaturedContactItemProps {
    contact: Colleague;
    navigateTo: (page: string, params: any) => void;
}

const FeaturedContactItem: React.FC<FeaturedContactItemProps> = ({ contact, navigateTo }) => (
    <div onClick={() => navigateTo('contact-details', { contactId: contact.id })} className="flex items-center p-4 cursor-pointer hover:bg-slate-50">
        <div className="w-12 h-12 bg-[#fbe9e0] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <UserCircleIcon className="w-9 h-9 text-[#d8bcae]"/>
        </div>
        <div className="flex-grow">
            <div className="flex items-center flex-wrap">
                <p className="font-semibold text-slate-900 mr-2">{contact.name}</p>
                <div className="flex items-center bg-slate-700 text-white text-[11px] font-semibold rounded px-1.5 py-0.5 shadow-sm">
                    <DiamondIcon className="w-3 h-3 mr-1" />
                    <span>{contact.specialty}</span>
                </div>
            </div>
            <p className="text-sm text-slate-500 mt-1">{contact.position}</p>
        </div>
        <ChevronRightIcon className="w-5 h-5 text-slate-400" />
    </div>
);

// FIX: Define props with an interface and use React.FC to correctly type the component,
// which resolves issues with special props like 'key'.
interface DepartmentListItemProps {
    department: Department;
    navigateTo: (page: string, params?: any) => void;
}

const DepartmentListItem: React.FC<DepartmentListItemProps> = ({ department, navigateTo }) => {
    const hasMembers = department.memberCount > 0;

    return (
        <div 
            onClick={() => hasMembers && navigateTo('department-details', { departmentId: department.id })}
            className={`flex justify-between items-center px-4 py-3.5 ${hasMembers ? 'cursor-pointer hover:bg-slate-50' : 'opacity-60'}`}
        >
            <div className="flex items-center">
                <UsersIcon className="w-8 h-8 text-slate-400 mr-4" />
                <span className={`font-medium ${hasMembers ? 'text-slate-800' : 'text-slate-500'}`}>{department.name} ({department.memberCount})</span>
            </div>
            {hasMembers && <ChevronRightIcon className="w-5 h-5 text-slate-400" />}
        </div>
    );
};


export const ContactsPage = ({ navigateTo }: { navigateTo: (page: string, params?: any) => void; }) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredColleagues = searchTerm 
        ? colleagues.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : [];
    const totalColleagues = colleagues.length;

    return (
        <div className="w-full h-screen flex flex-col bg-slate-100">
            <header className="bg-white px-4 pt-6 pb-4 sticky top-0 z-10 border-b border-slate-100 space-y-4 flex-shrink-0">
                <div className="grid grid-cols-3 items-center h-9">
                     <div className="justify-self-start w-24"></div>
                     <div className="justify-self-center">
                        <h1 className="text-lg font-bold text-slate-900 whitespace-nowrap">通讯录</h1>
                     </div>
                     <div className="justify-self-end">
                        <div className="flex items-center space-x-2 border border-slate-200 rounded-full px-2 py-1">
                            <button className="text-slate-600"><MoreIcon className="w-5 h-5"/></button>
                            <button className="text-slate-600"><MinusIcon className="w-5 h-5"/></button>
                            <button className="text-slate-600"><BullseyeIcon className="w-5 h-5"/></button>
                        </div>
                     </div>
                </div>

                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                        type="search"
                        placeholder="请输入姓名"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-100 placeholder:text-slate-400 text-slate-800 rounded-lg border-none pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-[#5fc38f]"
                    />
                </div>
            </header>
            
            <main className="flex-grow overflow-y-auto p-4">
                {searchTerm ? (
                     <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        {filteredColleagues.length > 0 && (
                            <div className="divide-y divide-slate-100">
                                {filteredColleagues.map(colleague => (
                                    <div key={colleague.id} onClick={() => navigateTo('contact-details', { contactId: colleague.id })} className="flex items-center px-4 py-3 cursor-pointer hover:bg-slate-50">
                                        <div className="w-10 h-10 bg-blue-100 text-blue-600 font-bold text-base rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                            {colleague.avatarText}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-800 text-sm">{colleague.name}</p>
                                            <p className="text-xs text-slate-500 mt-1">{colleague.departmentName}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {filteredColleagues.length === 0 && <p className="text-center text-slate-500 py-10">未找到相关联系人</p>}
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="divide-y divide-slate-100">
                                {featuredContacts.map(contact => (
                                    <FeaturedContactItem key={contact.id} contact={contact} navigateTo={navigateTo} />
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="px-4 py-3 border-b border-slate-100 flex items-center">
                                 <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center mr-3">
                                    <BuildingOfficeIcon className="w-5 h-5 text-[#5fc38f]" />
                                </div>
                                <h2 className="text-slate-800 font-semibold">上海云才网络技术有限公司 <span className="text-slate-500 font-normal">({totalColleagues})</span></h2>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {departments.map(dept => (
                                    <DepartmentListItem 
                                        key={dept.id} 
                                        department={dept}
                                        navigateTo={navigateTo}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};