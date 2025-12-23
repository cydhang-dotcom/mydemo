
import React, { useState } from 'react';
import { Header } from './Header';
import { Modal } from './Modal';
import { 
    ChevronRightIcon, 
    XMarkIcon, 
    UserCircleIcon, 
    IdentificationIcon, 
    WalletIcon, 
    PhoneIcon, 
    UsersIcon, 
    AcademicCapIcon, 
    BriefcaseIcon, 
    BookOpenIcon, 
    FolderIcon 
} from './icons';
import { employeeInfoSections, contactInfo as mockContactInfo } from './mockdata';
import type { ContactInfo } from './types';

const iconMap: Record<string, React.ReactNode> = {
    '个人信息': <UserCircleIcon className="w-6 h-6" />,
    '身份证': <IdentificationIcon className="w-6 h-6" />,
    '银行卡': <WalletIcon className="w-6 h-6" />,
    '联系方式': <PhoneIcon className="w-6 h-6" />,
    '紧急联系人': <UsersIcon className="w-6 h-6" />,
    '教育经历': <AcademicCapIcon className="w-6 h-6" />,
    '工作经历': <BriefcaseIcon className="w-6 h-6" />,
    '培训经历': <BookOpenIcon className="w-6 h-6" />,
    '档案信息': <FolderIcon className="w-6 h-6" />,
};

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
        <div className="w-full bg-[#f8fbfd] min-h-screen">
            <Header title="完善员工信息" onBack={onBack} />
            <main className="p-4">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-50 overflow-hidden">
                    <div className="divide-y divide-slate-50">
                    {employeeInfoSections.map(item => (
                        <div 
                            key={item.id} 
                            onClick={() => handleItemClick(item)} 
                            className="flex justify-between items-center py-5 px-5 cursor-pointer hover:bg-slate-50 transition-colors group active:bg-slate-100"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#5fc38f] flex items-center justify-center transition-all group-hover:scale-105">
                                    {iconMap[item.label] || <UserCircleIcon className="w-6 h-6" />}
                                </div>
                                <span className="text-slate-800 font-bold text-[15px]">{item.label}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full border ${
                                    item.status === '已完善' 
                                    ? 'bg-blue-50 text-blue-600 border-blue-100' 
                                    : 'bg-slate-50 text-slate-400 border-slate-100'
                                }`}>
                                    {item.status}
                                </span>
                                <ChevronRightIcon className="w-4 h-4 text-slate-300 group-hover:text-slate-400 transition-colors" />
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
