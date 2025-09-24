import React from 'react';
import { Header } from './Header';
import { colleagues, featuredContacts } from './mockdata';
import { PhoneIcon, MailIcon } from './icons';

export const ContactDetailPage = ({ onBack, contactId }: { onBack: () => void; contactId: string; }) => {
    const contact = [...colleagues, ...featuredContacts].find(c => c.id === contactId);

    if (!contact) {
        return (
            <div className="w-full bg-white min-h-screen">
                <Header title="联系人详情" onBack={onBack} />
                <p className="p-4 text-center text-slate-500">未找到该联系人。</p>
            </div>
        );
    }
    
    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title={contact.name} onBack={onBack} />
            <main className="p-5 space-y-5">
                <div className="bg-white p-5 rounded-xl shadow-sm">
                    <div className="flex items-center">
                        <div className="w-16 h-16 bg-blue-500 text-white font-bold text-2xl rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            {contact.avatarText}
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-slate-900">{contact.name}</h1>
                            <p className="text-slate-500 mt-1">{contact.position}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm">
                     <div className="divide-y divide-slate-100">
                        <div className="flex justify-between items-center py-4">
                            <span className="text-slate-600">部门</span>
                            <span className="font-semibold text-slate-900 text-right">{contact.departmentName}</span>
                        </div>
                        <a href={`tel:${contact.phone}`} className="flex justify-between items-center py-4 group">
                            <span className="text-slate-600">手机</span>
                            <div className="flex items-center">
                                <span className="font-semibold text-[#5fc38f] group-hover:underline">{contact.phone}</span>
                                <PhoneIcon className="w-5 h-5 text-slate-400 ml-3" />
                            </div>
                        </a>
                        <a href={`mailto:${contact.email}`} className="flex justify-between items-center py-4 group">
                             <span className="text-slate-600">邮箱</span>
                            <div className="flex items-center">
                                <span className="font-semibold text-slate-900 break-all text-right ml-4 group-hover:underline">{contact.email}</span>
                                <MailIcon className="w-5 h-5 text-slate-400 ml-3 flex-shrink-0" />
                            </div>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};