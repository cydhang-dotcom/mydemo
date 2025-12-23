
import React from 'react';
import { Header } from './Header';
import { 
    ChevronRightIcon, 
    ClipboardDocumentCheckIcon, 
    DocumentTextIcon, 
    CalendarIcon 
} from './icons';

export const ApplySelectionPage = ({ onBack, navigateTo }: { onBack: () => void; navigateTo: (page: string) => void }) => {
    const options = [
        { id: 'manual-checkin', name: '补签申请', icon: <CalendarIcon className="w-6 h-6" />, desc: '考勤异常、漏打卡补录' },
        { id: 'business-trip', name: '公出申请', icon: <ClipboardDocumentCheckIcon className="w-6 h-6" />, desc: '外出办公、出差审批' },
        { id: 'leave-request', name: '请假申请', icon: <DocumentTextIcon className="w-6 h-6" />, desc: '年假、病假、事假申请' },
    ];

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="请假公出" onBack={onBack} />
            <main className="p-4 space-y-4">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="divide-y divide-slate-100">
                        {options.map(opt => (
                            <div 
                                key={opt.id} 
                                onClick={() => navigateTo(opt.id)}
                                className="flex items-center p-5 cursor-pointer hover:bg-slate-50 transition-colors"
                            >
                                <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mr-4">
                                    {opt.icon}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-slate-800 text-base">{opt.name}</h3>
                                    <p className="text-xs text-slate-400 mt-1">{opt.desc}</p>
                                </div>
                                <ChevronRightIcon className="text-slate-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};
