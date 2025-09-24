import React from 'react';
import { Header } from './Header';
import { colleagues, departments } from './mockdata';
import type { Colleague } from './types';
import { ChevronRightIcon } from './icons';

const ColleagueListItem = ({ colleague, onViewDetails }: { colleague: Colleague, onViewDetails: () => void }) => (
    <div onClick={onViewDetails} className="flex items-center p-4 cursor-pointer hover:bg-slate-50">
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
    const members = colleagues.filter(c => c.departmentId === departmentId);

    if (!department) {
        return (
            <div className="w-full bg-white min-h-screen">
                <Header title="部门详情" onBack={onBack} />
                <p className="p-4 text-center text-slate-500">未找到该部门。</p>
            </div>
        );
    }

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title={department.name} onBack={onBack} />
            <main>
                <div className="p-4 bg-white border-b border-slate-200">
                    <h2 className="text-lg font-semibold text-slate-800">{department.name} <span className="text-slate-500">({department.memberCount})</span></h2>
                </div>
                <div className="bg-white">
                    <div className="divide-y divide-slate-100">
                        {members.length > 0 ? (
                            members.map(member => (
                                <ColleagueListItem key={member.id} colleague={member} onViewDetails={() => navigateTo('contact-details', { contactId: member.id })} />
                            ))
                        ) : (
                            <p className="p-8 text-center text-slate-500">该部门下暂无成员。</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};