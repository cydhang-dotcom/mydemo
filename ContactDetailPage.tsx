import React from 'react';
import { colleagues, featuredContacts } from './mockdata';
import { PhoneIcon, MailIcon, BuildingOfficeIcon } from './icons';
import { Header } from './Header';

export const ContactDetailPage = ({ onBack, contactId }: { onBack: () => void; contactId: string; }) => {
    const allContacts = [...colleagues, ...featuredContacts];
    const contact = allContacts.find(c => c.id === contactId);
    const isFeatured = featuredContacts.some(fc => fc.id === contactId);

    if (!contact) {
        return (
             <div className="w-full min-h-screen flex flex-col bg-slate-100">
                <Header title="联系人详情" onBack={onBack} />
                <main className="flex-grow flex items-center justify-center p-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm text-center text-slate-500">
                        未找到该联系人。
                    </div>
                </main>
            </div>
        );
    }

    const avatarClasses = isFeatured
        ? 'bg-[#5fc38f] text-white'
        : 'bg-blue-100 text-blue-600';
    
    return (
        <div className="w-full min-h-screen flex flex-col bg-slate-100">
            <Header title="联系人详情" onBack={onBack} />
            
            <main className="flex-grow p-4">
                <div className="bg-white rounded-xl shadow-sm flex flex-col">
                    {/* Top Info Section */}
                    <div className="flex flex-col items-center text-center p-8">
                        <div className={`w-24 h-24 font-bold text-4xl rounded-full flex items-center justify-center ${avatarClasses}`}>
                            {contact.avatarText}
                        </div>
                        <h1 className="text-2xl font-bold mt-4 text-slate-800">{contact.name}</h1>
                        <p className="text-base text-slate-500 mt-1">{contact.position}</p>
                    </div>

                    {/* Details List */}
                    <div className="px-6 flex-grow">
                        <div className="border-t border-slate-100 divide-y divide-slate-100">
                            <div className="flex justify-between items-center py-4">
                                <div className="flex items-center text-slate-600">
                                    <BuildingOfficeIcon className="w-5 h-5 mr-4 text-slate-400" />
                                    <span>部门</span>
                                </div>
                                <span className="font-semibold text-slate-800">{contact.departmentName}</span>
                            </div>
                            <div className="flex justify-between items-center py-4">
                                <div className="flex items-center text-slate-600">
                                    <PhoneIcon className="w-5 h-5 mr-4 text-slate-400" />
                                    <span>手机</span>
                                </div>
                                <a href={`tel:${contact.phone}`} className="font-semibold text-[#5fc38f]">{contact.phone}</a>
                            </div>
                            <div className="flex justify-between items-center py-4">
                                <div className="flex items-center text-slate-600">
                                    <MailIcon className="w-5 h-5 mr-4 text-slate-400" />
                                    <span>邮箱</span>
                                </div>
                                <a href={`mailto:${contact.email}`} className="font-semibold text-slate-800 break-all text-right ml-4">{contact.email}</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Call Action Section */}
                    <div className="flex-shrink-0 p-6 mt-4">
                        <a href={`tel:${contact.phone}`} className="w-full bg-[#5fc38f] text-white py-3 rounded-lg font-semibold text-base flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30">
                            <PhoneIcon className="w-5 h-5 mr-2" />
                            拨打电话
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};