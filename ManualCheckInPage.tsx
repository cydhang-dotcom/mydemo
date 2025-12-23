
import React from 'react';
import { Header } from './Header';
import { CalendarIcon, CheckIcon } from './icons';
import { ApprovalFlow } from './ApprovalFlow';

export const ManualCheckInPage = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="w-full bg-white min-h-screen flex flex-col">
            <Header title="补签申请" onBack={onBack} />
            <main className="flex-grow overflow-y-auto p-4 space-y-6">
                {/* Form Sections */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                        <span className="text-slate-800 font-medium">补签日期</span>
                        <div className="flex items-center text-slate-800 font-medium">
                            2025-12-19
                            <CalendarIcon className="w-5 h-5 ml-2 text-slate-400" />
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-3 text-sm">
                        <p className="text-slate-500">
                            周五打卡异常 <span className="ml-2">(上班 <span className="text-red-500">未打卡</span> - 下班 <span className="text-red-500">未打卡</span>)</span>
                        </p>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b border-slate-50">
                        <span className="text-slate-800 font-medium">补签类型</span>
                        <div className="flex space-x-6">
                            <label className="flex items-center cursor-pointer group">
                                <div className="w-5 h-5 rounded border border-emerald-500 bg-emerald-500 flex items-center justify-center mr-2">
                                    <CheckIcon className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm text-slate-700">上班补签</span>
                            </label>
                            <label className="flex items-center cursor-pointer group">
                                <div className="w-5 h-5 rounded border border-emerald-500 bg-emerald-500 flex items-center justify-center mr-2">
                                    <CheckIcon className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm text-slate-700">下班补签</span>
                            </label>
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <label className="block text-slate-800 font-medium">
                            <span className="text-red-500 mr-1">*</span>补签理由
                        </label>
                        <textarea 
                            placeholder="请输入补签理由"
                            className="w-full min-h-[100px] bg-slate-50/50 border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-emerald-500"
                        />
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
