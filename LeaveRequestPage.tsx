
import React, { useState } from 'react';
import { Header } from './Header';
import { CalendarIcon, ChevronDownIcon, PlusIcon, MinusIcon } from './icons';
import { ApprovalFlow } from './ApprovalFlow';

export const LeaveRequestPage = ({ onBack }: { onBack: () => void }) => {
    const [period, setPeriod] = useState('AM');

    return (
        <div className="w-full bg-white min-h-screen flex flex-col">
            <Header title="请假申请" onBack={onBack} />
            <main className="flex-grow overflow-y-auto p-4 space-y-6">
                <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                        <span className="text-slate-800 font-medium"><span className="text-red-500 mr-1">*</span>假期类型</span>
                        <div className="flex items-center text-slate-400">
                            选择假期类型
                            <ChevronDownIcon className="w-5 h-5 ml-1" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                        <span className="text-slate-800 font-medium"><span className="text-red-500 mr-1">*</span>请假开始</span>
                        <div className="flex items-center text-slate-800 font-medium">
                            2025-12-19
                            <CalendarIcon className="w-5 h-5 ml-2 text-slate-400" />
                        </div>
                    </div>

                    <div className="flex bg-slate-100 p-1 rounded-lg">
                        <button 
                            onClick={() => setPeriod('AM')}
                            className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${period === 'AM' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-500'}`}
                        >
                            上午
                        </button>
                        <button 
                            onClick={() => setPeriod('PM')}
                            className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${period === 'PM' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-500'}`}
                        >
                            下午
                        </button>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                        <span className="text-slate-800 font-medium"><span className="text-red-500 mr-1">*</span>请假时长</span>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center bg-slate-100 rounded-md px-2 py-1 space-x-3">
                                <MinusIcon className="w-4 h-4 text-slate-400" />
                                <span className="text-slate-800 font-bold w-8 text-center">0</span>
                                <PlusIcon className="w-4 h-4 text-slate-400" />
                            </div>
                            <span className="text-slate-400 text-sm">天</span>
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-3 text-sm h-12 flex items-center">
                        <p className="text-slate-400">起止时间</p>
                    </div>

                    <div className="space-y-3 pt-2">
                        <label className="block text-slate-800 font-medium">
                            <span className="text-red-500 mr-1">*</span>请假理由
                        </label>
                        <textarea 
                            placeholder="请输入请假理由..."
                            className="w-full min-h-[100px] bg-slate-50/50 border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Attachment Upload */}
                    <div className="pt-2">
                        <div className="w-20 h-20 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center group cursor-pointer hover:border-emerald-500 hover:bg-emerald-50/30 transition-all">
                            <PlusIcon className="w-8 h-8 text-slate-300 group-hover:text-emerald-500" />
                        </div>
                    </div>
                </div>

                <ApprovalFlow />
            </main>
            <footer className="p-4 border-t border-slate-100 bg-white">
                <button 
                    onClick={onBack}
                    className="w-full bg-emerald-500 text-white py-3.5 rounded-full font-bold text-lg shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
                >
                    提交
                </button>
            </footer>
        </div>
    );
};
