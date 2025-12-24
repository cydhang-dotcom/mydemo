
import React from 'react';
import { ChevronRightIcon } from './icons';

interface ListItemProps {
    label: string;
    value: string;
    hasDetails?: boolean;
    isBold?: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({ label, value, hasDetails, isBold }) => (
    <div className="flex justify-between items-center py-4">
        <span className="text-slate-600 text-base font-medium">{label}</span>
        <div className="flex items-center">
            <span className={`${isBold ? 'font-semibold text-xl text-slate-900' : 'text-slate-800 text-base font-semibold'}`}>{value}</span>
            <div className="w-4 h-4 ml-2 flex-shrink-0">
                {hasDetails && <ChevronRightIcon className="text-slate-300" />}
            </div>
        </div>
    </div>
);
