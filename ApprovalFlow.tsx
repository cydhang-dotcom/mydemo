
import React from 'react';
import { UserCircleIcon } from './icons';

export const ApprovalFlow = () => {
    const steps = [
        {
            title: '部门审批',
            approvers: '杭志平',
        },
        {
            title: '人事审批',
            approvers: '杭志平, 云才网络, 王振东, 傅小燕',
        }
    ];

    return (
        <div className="mt-8">
            <h3 className="text-base font-bold text-slate-900 mb-6">审批流程</h3>
            <div className="relative space-y-8 pl-1">
                {/* Timeline Line */}
                <div className="absolute left-[9px] top-4 bottom-4 w-px bg-slate-100"></div>

                {steps.map((step, index) => (
                    <div key={index} className="relative flex items-start">
                        {/* Timeline Dot with Icon */}
                        <div className="z-10 bg-white pr-2">
                             <div className="w-5 h-5 rounded-full border border-slate-300 bg-white flex items-center justify-center">
                                <div className="w-3 h-3 text-slate-400">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8 7a4 4 0 100-8 4 4 0 000 8z" />
                                        <circle cx="18" cy="9" r="2" />
                                        <path d="M20 13h-4" />
                                    </svg>
                                </div>
                             </div>
                        </div>
                        
                        <div className="ml-3 flex-grow">
                            <p className="text-sm font-medium text-slate-500 mb-2">{step.title}</p>
                            <div className="bg-slate-50 rounded-lg p-3">
                                <p className="text-sm text-slate-800">
                                    <span className="text-slate-400">可审批人：</span>
                                    {step.approvers}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
