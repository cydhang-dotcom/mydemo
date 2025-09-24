import React from 'react';
import { Header } from './Header';
import { personalInfoData } from './mockdata';
import { ChevronDownIcon, CalendarIcon } from './Icons';

const FormRow = ({ label, value, type = 'text' }: { label: string; value: string; type?: 'text' | 'select' | 'date' | 'input' }) => {
    const renderValue = () => {
        switch (type) {
            case 'select':
                return <><span className="text-slate-800 font-medium">{value}</span><ChevronDownIcon className="text-slate-400 ml-2" /></>;
            case 'date':
                return <><span className="text-slate-800 font-medium">{value}</span><CalendarIcon className="w-5 h-5 text-slate-400 ml-2" /></>;
            case 'input':
                 return <input type="text" placeholder="请写入" className="text-right p-0 border-0 focus:ring-0 font-medium text-slate-400 placeholder:text-slate-400 w-full" />;
            default:
                return <span className="text-slate-800 font-medium">{value}</span>;
        }
    };

    return (
        <div className="flex justify-between items-center py-4">
            <span className="text-slate-600 whitespace-nowrap">{label}</span>
            <div className="flex items-center ml-4">{renderValue()}</div>
        </div>
    );
};


export const PersonalInfoPage = ({ onBack }: { onBack: () => void }) => {
    const data = personalInfoData;

    return (
         <div className="w-full bg-slate-100 min-h-screen flex flex-col">
            <Header title="个人信息" onBack={onBack} />
            <main className="flex-grow p-4">
                <div className="bg-white rounded-lg px-4 divide-y divide-slate-100">
                    <FormRow label="籍贯" value={data.nativePlace} />
                    <FormRow label="是否是退伍军人" value={data.isVeteran} type="select" />
                    <FormRow label="婚姻状况" value={data.maritalStatus} type="select" />
                    <FormRow label="是否已育" value={data.hasChildren} type="select" />
                    <FormRow label="户口性质" value={data.householdType} />
                    <FormRow label="户籍地址" value={data.householdAddress} />
                    <FormRow label="是否有居住证" value={data.hasResidencePermit} type="select" />
                    <FormRow label="居住证编号" value={data.residencePermitNumber} type="input" />
                    <FormRow label="血型" value={data.bloodType} type="select" />
                    <FormRow label="首次参加工作时间" value={data.firstWorkDate} type="date" />
                </div>
            </main>
            <footer className="p-4 bg-slate-100">
                <button className="w-full bg-[#5fc38f] text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors">
                    保存
                </button>
            </footer>
        </div>
    );
};