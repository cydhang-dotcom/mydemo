import React from 'react';
import { Header } from './Header';
import { servicesData } from './mockdata';
import type { Service, ServiceStatus, ServiceTimelineEvent } from './types';

const timelineStatusStyles: { [key: string]: string } = {
    '处理中': 'text-blue-600 bg-blue-100',
    '添加': 'text-green-600 bg-green-100',
    '完成': 'text-slate-600 bg-slate-100',
};

const statusStyles: { [key in ServiceStatus]: string } = {
    '未处理': 'text-orange-600 bg-orange-100',
    '处理中': 'text-blue-600 bg-blue-100',
    '完成': 'text-slate-600 bg-slate-100'
};

interface TimelineItemProps {
    item: ServiceTimelineEvent;
    isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-4">
            <div>
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 ring-4 ring-white">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
            </div>
            {!isLast && <div className="w-0.5 h-full bg-slate-200"></div>}
        </div>
        <div className={`pb-8 flex-1 ${isLast ? 'pb-0' : ''}`}>
            <div className="flex items-start justify-between">
                <div>
                    <p className="font-bold text-slate-800">{item.title}</p>
                    <p className="text-sm text-slate-500 mt-1">{item.timestamp}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-md flex-shrink-0 ${timelineStatusStyles[item.status]}`}>
                    {item.status}
                </span>
            </div>
            
            {item.description && item.description.length > 0 && (
                <div className="mt-4 text-sm space-y-2 leading-relaxed pl-3 border-l-2 border-slate-100">
                    {item.description.map((line, index) => {
                         if (line.trim() === '社保/公积金' || line.trim() === '工资代发') {
                            return <p key={index} className="font-bold text-slate-900 pt-2 first:pt-0">{line}</p>;
                        }
                        
                        const parts = line.split(':');
                        if (parts.length === 2 && parts[0].trim().length < 15) {
                            return (
                                <div key={index} className="flex items-baseline">
                                    <span className="font-medium text-slate-500 w-24 flex-shrink-0">{parts[0].trim()}:</span>
                                    <span className="text-slate-800 font-semibold">{parts[1].trim()}</span>
                                </div>
                            );
                        }

                        return <p key={index} className="text-slate-700">{line}</p>;
                    })}
                </div>
            )}
        </div>
    </div>
);


export const ServiceDetailsPage = ({ onBack, serviceId }: { onBack: () => void; serviceId: string; }) => {
    const service = servicesData.find(s => s.id === serviceId) as Service;

    if (!service) {
        return (
            <div className="w-full bg-slate-100 min-h-screen">
                <Header title="服务详情" onBack={onBack} />
                <main className="p-4 text-center text-slate-500">
                    Service not found.
                </main>
            </div>
        );
    }
    
    let submissionTime = '-';
    let totalDuration = '-';

    if (service.timeline && service.timeline.length > 0) {
        const startTime = new Date(service.timeline[service.timeline.length - 1].timestamp);
        submissionTime = startTime.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
        
        let diff = 0;

        if (service.status === '完成' && service.timeline.length > 1) {
            const endTime = new Date(service.timeline[0].timestamp);
            diff = endTime.getTime() - startTime.getTime();
        } else if (service.status === '处理中') {
            const now = new Date();
            diff = now.getTime() - startTime.getTime();
        }

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            const durationParts = [];
            if (days > 0) durationParts.push(`${days}天`);
            if (hours > 0) durationParts.push(`${hours}小时`);
            if (minutes > 0 && days === 0) durationParts.push(`${minutes}分钟`);

            totalDuration = durationParts.join('') || '小于1分钟';
        }
    }
    
    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="服务详情" onBack={onBack} />
            <main className="p-4">
                <div className="bg-white rounded-xl shadow-sm">
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-sm text-slate-500">任务类型</p>
                                <p className="font-bold text-slate-900 mt-1 text-2xl truncate">{service.type}</p>
                            </div>
                            <span className={`text-sm font-semibold px-2.5 py-1 rounded-md ${statusStyles[service.status]}`}>
                                {service.status}
                            </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-base">
                            <div>
                                <p className="text-sm text-slate-500">服务对象</p>
                                <p className="font-semibold text-slate-800 mt-1 truncate">{service.target}</p>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">提交时间</p>
                                <p className="font-semibold text-slate-800 mt-1">{submissionTime}</p>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">总耗时</p>
                                <p className="font-semibold text-slate-800 mt-1">{totalDuration}</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100"></div>

                    <div className="p-6">
                        <h3 className="text-lg font-bold text-slate-800 mb-6">服务进度</h3>
                        {service.timeline && service.timeline.length > 0 ? (
                            service.timeline.map((item, index) => (
                                <TimelineItem 
                                    key={item.id} 
                                    item={item} 
                                    isLast={index === service.timeline.length - 1}
                                />
                            ))
                        ) : (
                            <p className="text-center text-slate-500 py-8">暂无服务记录</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};
