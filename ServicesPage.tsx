import React, { useState } from 'react';
import { Header } from './Header';
import { servicesData } from './mockdata';
import type { ServiceStatus, Service } from './types';

const statusStyles: { [key in ServiceStatus]: { bar: string, tag: string } } = {
    '未处理': { bar: 'bg-orange-500', tag: 'text-orange-600 bg-orange-100' },
    '处理中': { bar: 'bg-blue-500', tag: 'text-blue-600 bg-blue-100' },
    '完成': { bar: 'bg-slate-400', tag: 'text-slate-600 bg-slate-100' }
};

interface ActionButtonProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent) => void;
    variant?: 'primary' | 'secondary' | 'danger';
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, onClick, variant = 'primary' }) => {
    const baseClasses = "px-4 py-1.5 text-sm font-semibold rounded-full transition-colors";
    const variantClasses = {
        primary: "bg-[#5fc38f] text-white hover:bg-green-600",
        secondary: "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50",
        danger: "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100",
    };
    return <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]}`}>{children}</button>;
};

interface ServiceListItemProps {
    service: Service;
    onViewDetails: () => void;
}

const ServiceListItem: React.FC<ServiceListItemProps> = ({ service, onViewDetails }) => {
    const submissionDate = service.timeline.length > 0 ? service.timeline[service.timeline.length - 1].timestamp.split(' ')[0] : null;
    const isNotProcessed = service.status === '未处理';

    return (
        <div className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden flex items-stretch">
            {/* Status Bar */}
            <div className={`w-1.5 flex-shrink-0 ${statusStyles[service.status].bar}`}></div>
            
            <div className="flex-grow p-5 flex flex-col">
                {/* Content Area */}
                <div className="flex-grow">
                    {/* Header */}
                    <div className="flex justify-between items-start gap-4">
                        <h3 className="font-bold text-lg text-slate-800 break-words flex-1">{service.type}</h3>
                        <span className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[service.status].tag}`}>
                            {service.status}
                        </span>
                    </div>

                    {/* Details */}
                    <div className="mt-3 space-y-1">
                        <p className="text-sm text-slate-500">
                            <span className="inline-block w-20">服务对象:</span>
                            <span className="font-semibold text-slate-700">{service.target}</span>
                        </p>
                        {submissionDate && (
                             <p className="text-sm text-slate-500">
                                <span className="inline-block w-20">提交日期:</span>
                                <span className="font-semibold text-slate-700">{submissionDate}</span>
                            </p>
                        )}
                    </div>
                </div>
                
                {/* Actions */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end items-center space-x-3">
                    {isNotProcessed ? (
                        <>
                            <ActionButton onClick={(e) => { e.stopPropagation(); alert('删除服务'); }} variant="danger">删除</ActionButton>
                            <ActionButton onClick={(e) => { e.stopPropagation(); onViewDetails(); }} variant="secondary">查看详情</ActionButton>
                            <ActionButton onClick={(e) => { e.stopPropagation(); alert('去付款'); }} variant="primary">付款</ActionButton>
                        </>
                    ) : (
                        <ActionButton onClick={(e) => { e.stopPropagation(); onViewDetails(); }} variant="secondary">查看详情</ActionButton>
                    )}
                </div>
            </div>
        </div>
    );
};


export const ServicesPage = ({ onBack, navigateTo }: { onBack: () => void; navigateTo: (page: string, params: { serviceId: string }) => void; }) => {
    const tabs: { status: ServiceStatus | '全部', label: string }[] = [
        { status: '未处理', label: '未办理'},
        { status: '处理中', label: '办理中'},
        { status: '完成', label: '完成'},
    ];

    const [activeTab, setActiveTab] = useState<ServiceStatus | '全部'>('未处理');

    const filteredServices = servicesData.filter(service => {
        if (activeTab === '全部') return true;
        return service.status === activeTab;
    });
    
    const inProgressCount = servicesData.filter(s => s.status === '处理中').length;

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="我的服务" onBack={onBack} />
            <div className="bg-white sticky top-16 z-10 border-b border-slate-100">
                <nav className="flex justify-around max-w-md mx-auto">
                    {tabs.map(tab => (
                        <button 
                            key={tab.status}
                            onClick={() => setActiveTab(tab.status)}
                            className={`py-4 text-base font-semibold w-full transition-colors relative border-b-2 ${
                                activeTab === tab.status 
                                ? 'text-[#5fc38f] border-[#5fc38f]' 
                                : 'text-slate-500 hover:text-slate-800 border-transparent'
                            }`}
                        >
                            {tab.label}
                            {tab.status === '处理中' && inProgressCount > 0 && <span className="ml-1.5 text-xs text-white bg-red-500 rounded-full px-1.5 py-0.5">{inProgressCount}</span>}
                        </button>
                    ))}
                </nav>
            </div>
             <main className="p-4">
                {filteredServices.length > 0 ? (
                    filteredServices.map(service => (
                        <ServiceListItem 
                            key={service.id}
                            service={service} 
                            onViewDetails={() => navigateTo('service-details', { serviceId: service.id })}
                        />
                    ))
                ) : (
                    <div className="bg-white rounded-xl shadow-sm">
                        <p className="text-center text-slate-500 py-20">暂无服务记录</p>
                    </div>
                )}
            </main>
        </div>
    );
};
