import React, { useState } from 'react';
import { Header } from './Header';
import { Modal } from './Modal';
import { ChevronRightIcon, XMarkIcon } from './Icons';
import { employeeInfoSections, contactInfo as mockContactInfo } from './mockdata';
import type { ContactInfo } from './types';

const ContactInfoModalContent = ({ onClose, contactInfo }: { onClose: () => void; contactInfo: ContactInfo }) => (
    <div className="p-5 pb-8">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-900">联系方式</h2>
            <button onClick={onClose} className="p-2 -mr-2 text-slate-500 hover:text-slate-800">
                <XMarkIcon className="w-6 h-6" />
            </button>
        </div>
        <div className="space-y-5">
             <div className="flex justify-between items-center">
                <span className="text-slate-600">移动电话</span>
                <span className="text-slate-900 font-semibold">{contactInfo.mobile}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-slate-600">个人邮箱</span>
                <span className="text-slate-900 font-semibold">{contactInfo.email}</span>
            </div>
             <div className="flex justify-between items-center">
                <label className="text-slate-600 whitespace-nowrap"><span className="text-red-500 mr-1">*</span>目前居住地址</label>
                <input 
                    type="text" 
                    defaultValue={contactInfo.address}
                    className="text-right border-none p-0 focus:ring-0 w-full ml-4 font-semibold text-slate-900"
                />
            </div>
        </div>
        <button className="w-full mt-8 bg-[#5fc38f] text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors">
            保存
        </button>
    </div>
);


export const EmployeeInfoPage = ({ onBack, navigateTo }: { onBack: () => void; navigateTo: (page: string) => void; }) => {
    const [isContactModalOpen, setContactModalOpen] = useState(false);

    const handleItemClick = (item: typeof employeeInfoSections[0]) => {
        if (item.actionType === 'navigate') {
            navigateTo(item.target);
        } else if (item.target === 'contact-info-modal') {
            setContactModalOpen(true);
        }
    };
    
    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="完善员工信息" onBack={onBack} />
            <main className="pt-4">
                <div className="bg-white">
                    <div className="divide-y divide-slate-100">
                    {employeeInfoSections.map(item => (
                        <div key={item.id} onClick={() => handleItemClick(item)} className="flex justify-between items-center p-4 cursor-pointer hover:bg-slate-50">
                            <span className="text-slate-800 font-medium">{item.label}</span>
                            <div className="flex items-center space-x-2">
                                <span className={`text-sm font-semibold px-2 py-0.5 rounded-md ${
                                    item.status === '已完善' 
                                    ? 'bg-blue-100 text-blue-700' 
                                    : 'bg-slate-200 text-slate-600'
                                }`}>
                                    {item.status}
                                </span>
                                <ChevronRightIcon />
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </main>
            <Modal isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)}>
                <ContactInfoModalContent onClose={() => setContactModalOpen(false)} contactInfo={mockContactInfo} />
            </Modal>
        </div>
    );
};