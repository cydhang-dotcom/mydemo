import React from 'react';
import { Header } from './Header';
import { DocumentTextIcon, ChevronRightIcon } from './icons';
import { shareHistoryData } from './mockdata';

export const SharePage = ({ onBack }: { onBack: () => void }) => {
    const shareOptions = [
        { id: 'hr', label: '班步人事分享码' },
        { id: 'service', label: '个人服务分享码' },
    ];

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="分享班步" onBack={onBack} />
            <main className="p-4 space-y-4">
                <div className="bg-white rounded-xl shadow-sm">
                    <div className="divide-y divide-slate-100">
                        {shareOptions.map(option => (
                            <div key={option.id} className="flex justify-between items-center p-4 cursor-pointer hover:bg-slate-50">
                                <div className="flex items-center">
                                    <DocumentTextIcon className="w-6 h-6 text-slate-500 mr-3" />
                                    <span className="text-slate-800 font-medium">{option.label}</span>
                                </div>
                                <ChevronRightIcon />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm">
                    <div className="p-4 border-b border-slate-100">
                        <h3 className="text-slate-800 font-semibold text-base">分享记录</h3>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {shareHistoryData.map(record => (
                            <div key={record.id} className="flex justify-between items-center p-4">
                                <span className="font-medium text-slate-800">{record.name}</span>
                                <div className="text-sm text-slate-500">
                                    <span className="mr-4">{record.date}</span>
                                    <span>{record.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};