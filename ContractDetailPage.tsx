
import React, { useState } from 'react';
import { Header } from './Header';
import { contractsData } from './mockdata';
import { EyeIcon, EyeOffIcon } from './icons';

interface DetailRowProps {
    label: string;
    value: string;
    subValue?: string;
    showToggle?: boolean;
    isRevealed?: boolean;
    onToggle?: () => void;
}

const DetailRow: React.FC<DetailRowProps> = ({ label, value, subValue, showToggle, isRevealed, onToggle }) => (
    <div className="flex py-4 group">
        <span className="w-24 flex-shrink-0 text-slate-500 text-base">{label}</span>
        <div className="flex-grow flex flex-col items-start min-w-0">
            <div className="flex items-center w-full justify-between">
                <span className="text-slate-800 font-medium text-base truncate pr-2">
                    {showToggle && !isRevealed ? '******' : value}
                </span>
                {showToggle && (
                    <button onClick={onToggle} className="p-1 text-[#5fc38f] hover:bg-emerald-50 rounded-full transition-colors flex-shrink-0">
                        {isRevealed ? <EyeIcon className="w-5 h-5" /> : <EyeOffIcon className="w-5 h-5" />}
                    </button>
                )}
            </div>
            {subValue && <span className="text-slate-400 text-sm mt-1.5 font-normal tracking-wide">{subValue}</span>}
        </div>
    </div>
);

export const ContractDetailPage = ({ onBack, contractId }: { onBack: () => void; contractId: string }) => {
    const contract = contractsData.find(c => c.id === contractId) || contractsData[0];
    const [revealSalary, setRevealSalary] = useState(false);

    // Mock data based on screenshot for visual fidelity
    const details = {
        name: contract.name,
        partyA: "上海云才网络技术有限公司",
        partyATime: "2022-03-15 09:12:38",
        partyB: "杭志平",
        partyBTime: "2022-03-15 09:09:42",
        period: `${contract.periodStart} ~ ${contract.periodEnd || ''}`,
        type: contract.title,
        position: "研发总监",
        salary: "******"
    };

    return (
        <div className="w-full bg-white h-screen flex flex-col">
            <Header title="合同详情" onBack={onBack} />
            
            <main className="flex-grow overflow-y-auto p-4">
                <div className="flex justify-between items-center px-1 mb-6">
                    <h2 className="text-slate-900 font-bold text-lg">合同详情</h2>
                    <span className="bg-[#eff6ff] text-[#3b82f6] text-xs font-bold px-2.5 py-1 rounded-md">
                        {contract.status}
                    </span>
                </div>

                <div className="divide-y divide-slate-100 border-t border-slate-50">
                    <DetailRow label="合同名称" value={details.name} />
                    <DetailRow 
                        label="合同甲方" 
                        value={details.partyA} 
                        subValue={details.partyATime} 
                    />
                    <DetailRow 
                        label="合同乙方" 
                        value={details.partyB} 
                        subValue={details.partyBTime} 
                    />
                    <DetailRow label="合同期限" value={details.period} />
                    <DetailRow label="签订类型" value={details.type} />
                    <DetailRow label="岗位" value={details.position} />
                    <DetailRow 
                        label="合同薪酬" 
                        value={details.salary} 
                        showToggle 
                        isRevealed={revealSalary}
                        onToggle={() => setRevealSalary(!revealSalary)}
                    />
                </div>
            </main>

            <footer className="p-5 border-t border-slate-50 flex-shrink-0">
                <button className="w-full bg-[#5fc38f] text-white py-3.5 rounded-full font-bold text-lg shadow-lg shadow-emerald-500/10 active:scale-95 transition-all">
                    查看合同
                </button>
            </footer>
        </div>
    );
};
