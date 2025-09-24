import React, { useState } from 'react';
import { Header } from './Header';
import { contractsData, contractTypes } from './mockdata';
import { BuildingOfficeIcon, ChevronRightIcon } from './icons';
import type { Contract } from './types';

const ContractCard = ({ contract }: { contract: Contract }) => (
    <div className="flex-1 ml-6">
        <h3 className="font-semibold text-slate-800">
            {contract.title}
            <span className={`ml-2 ${contract.status === '已签署' ? 'text-green-600' : 'text-slate-500'}`}>
                ({contract.status})
            </span>
        </h3>
        <div className="mt-3 bg-green-50/70 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-green-100/80 transition-colors">
            <div>
                <div className="flex items-center">
                    <p className="font-bold text-slate-900">{contract.name}</p>
                    {contract.tags.map(tag => (
                        <span key={tag} className="ml-2 text-xs font-semibold text-green-700 bg-green-200/80 rounded-full px-2 py-0.5">{tag}</span>
                    ))}
                </div>
                <p className="text-sm text-slate-500 mt-3">{contract.periodStart} 至 {contract.periodEnd || ''}</p>
                <p className="text-sm text-slate-500 mt-1">签订日期 {contract.signingDate}</p>
            </div>
            <ChevronRightIcon />
        </div>
    </div>
);

export const ContractsPage = ({ onBack }: { onBack: () => void }) => {
    const [activeFilter, setActiveFilter] = useState(contractTypes[0]);
    const filteredContracts = contractsData.filter(c => c.type === activeFilter);

    return (
        <div className="w-full bg-white min-h-screen">
            <Header title="合同列表" onBack={onBack} />
            <main className="p-5">
                <div className="flex items-center mb-5">
                    <div className="w-9 h-9 bg-[#5Fc38f] text-white rounded-md flex items-center justify-center mr-3">
                        <BuildingOfficeIcon className="w-5 h-5" />
                    </div>
                    <h2 className="text-slate-800 font-semibold text-base">上海云才网络技术有限公司</h2>
                </div>
                
                <div className="flex items-center space-x-3 mb-6">
                    {contractTypes.map(type => (
                        <button 
                            key={type} 
                            onClick={() => setActiveFilter(type)}
                            className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-colors ${
                                activeFilter === type
                                ? 'bg-green-100 text-green-700'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <div className="relative">
                    {/* Vertical timeline bar */}
                    <div className="absolute left-2.5 top-1 bottom-1 w-0.5 bg-slate-200" aria-hidden="true"></div>

                    <div className="space-y-8">
                        {filteredContracts.map(contract => (
                            <div key={contract.id} className="flex items-start relative">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center z-10"></div>
                                <ContractCard contract={contract} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};