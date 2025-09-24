import React, { useState } from 'react';
import { Header } from './Header';
import { Modal } from './Modal';
import { PlusIcon, XMarkIcon, CalendarIcon } from './Icons';
import { workExperienceData } from './mockdata';

const AddWorkHistoryModalContent = ({ onClose }: { onClose: () => void }) => {
    const fields = [
        { label: '公司', required: true, type: 'input' },
        { label: '岗位', required: true, type: 'input' },
        { label: '开始时间', required: true, type: 'date' },
        { label: '结束时间', required: true, type: 'date' },
        { label: '证明人', required: false, type: 'input' },
        { label: '联系电话', required: false, type: 'input' },
        { label: '备注', required: false, type: 'input' },
    ];
    
    return (
        <div className="p-5 pb-8">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-slate-900">工作经历</h2>
                <button onClick={onClose} className="p-2 -mr-2 text-slate-500 hover:text-slate-800">
                    <XMarkIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="space-y-4">
                {fields.map(field => (
                    <div key={field.label} className="flex justify-between items-center">
                        <label className="text-slate-600 whitespace-nowrap">
                            {field.required && <span className="text-red-500 mr-1">*</span>}
                            {field.label}
                        </label>
                         <div className="flex items-center w-full ml-4">
                            <input 
                                type="text"
                                placeholder="请写入"
                                className="text-right p-0 border-0 focus:ring-0 font-medium text-slate-900 placeholder:text-slate-400 w-full"
                            />
                            {field.type === 'date' && <CalendarIcon className="w-5 h-5 text-slate-400 ml-2 flex-shrink-0" />}
                        </div>
                    </div>
                ))}
            </div>
             <button className="w-full mt-8 bg-[#5fc38f] text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors">
                保存
            </button>
        </div>
    );
};

export const WorkHistoryPage = ({ onBack }: { onBack: () => void }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="w-full bg-slate-100 min-h-screen flex flex-col">
            <Header title="工作经历" onBack={onBack} />
            <main className="flex-grow p-4">
                <div className="bg-white rounded-lg px-4 divide-y divide-slate-100">
                    {workExperienceData.map(job => (
                        <div key={job.id} className="py-4">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-slate-900">{job.company}</span>
                                <span className="text-sm text-slate-500">{job.startDate} ~ {job.endDate}</span>
                            </div>
                            <p className="text-slate-600 mt-1">{job.position}</p>
                        </div>
                    ))}
                </div>
            </main>
            <footer className="p-4 bg-white border-t border-slate-200 grid grid-cols-2 gap-4">
                <button 
                    onClick={() => setModalOpen(true)}
                    className="w-full border border-green-600 text-green-600 py-3 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors flex items-center justify-center"
                >
                    <PlusIcon className="w-6 h-6 mr-2" />
                    添加工作经历
                </button>
                <button className="w-full bg-[#5fc38f] text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors">
                    保存
                </button>
            </footer>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <AddWorkHistoryModalContent onClose={() => setModalOpen(false)} />
            </Modal>
        </div>
    );
};