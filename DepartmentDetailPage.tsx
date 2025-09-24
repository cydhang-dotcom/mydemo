import React from 'react';
import { SubPageHeader } from './SubPageHeader';
import { colleagues, departments } from './mockdata';
import type { Colleague } from './types';
import { ChevronRightIcon } from './icons';

const ColleagueListItem = ({ colleague, onViewDetails }: { colleague: Colleague, onViewDetails: () => void }) => (
    <div onClick={onViewDetails} className="flex items-center px-4 py-3 cursor-pointer hover:bg-slate-50">
        <div className="w-12 h-12 bg-blue-100 text-blue-600 font-bold text-lg rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            {colleague.avatarText}
        </div>
        <div className="flex-grow">
            <p className="font-bold text-slate-900">{colleague.name}</p>
            <p className="text-sm text-slate-500 mt-1">{colleague.position}</p>
        </div>
        <ChevronRightIcon className="w-5 h-5 text-slate-400" />
    </div>
);


export const DepartmentDetailPage = ({ onBack, navigateTo, departmentId }: { onBack: () => void; navigateTo: (page: string, params: any) => void; departmentId: string; }) => {
    const department = departments.find(d => d.id === departmentId);
    
    if (!department) {
        return (
            <div className="w-full bg-slate-100 min-h-screen flex flex-col">
                <SubPageHeader title="部门详情" onBack={onBack} />
                 <main className="flex-grow -mt-10 px-4 pb-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm text-center text-slate-500">
                        未找到该部门。
                    </div>
                </main>
            </div>
        );
    }
    
    const members = colleagues.filter(c => c.departmentId === departmentId);
    const headKeywords = ['总监', '经理', '主管', '总经理'];
    const departmentHead = members.find(m => headKeywords.some(keyword => m.position.includes(keyword)));
    const regularMembers = members.filter(m => m.id !== departmentHead?.id);

    return (
        <div className="w-full bg-slate-100 min-h-screen flex flex-col">
            <SubPageHeader title={`${department.name} (${department.memberCount})`} onBack={onBack} />
            <main className="flex-grow -mt-10 px-4 pb-4">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {departmentHead && (
                        <>
                            <div className="px-4 pt-4 pb-1">
                                <h3 className="text-sm font-semibold text-slate-500">部门主管</h3>
                            </div>
                            <ColleagueListItem 
                                colleague={departmentHead} 
                                onViewDetails={() => navigateTo('contact-details', { contactId: departmentHead.id })} 
                            />
                        </>
                    )}

                    {regularMembers.length > 0 && (
                        <>
                            <div className={`px-4 pt-4 pb-1 ${departmentHead ? 'border-t border-slate-100' : ''}`}>
                                <h3 className="text-sm font-semibold text-slate-500">部门成员</h3>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {regularMembers.map(member => (
                                    <ColleagueListItem 
                                        key={member.id} 
                                        colleague={member} 
                                        onViewDetails={() => navigateTo('contact-details', { contactId: member.id })} 
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {members.length === 0 && (
                        <p className="p-8 text-center text-slate-500">该部门下暂无成员。</p>
                    )}
                </div>
            </main>
        </div>
    );
};
