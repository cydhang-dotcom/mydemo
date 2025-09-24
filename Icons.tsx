import React from 'react';

export const Icon = ({ path, className = "w-6 h-6" }: {path: string, className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

export const BackIcon = () => <Icon path="M15 19l-7-7 7-7" />;
export const MoreIcon = () => <Icon path="M12 5v.01M12 12v.01M12 19v.01M5 12h.01M19 12h.01" />;
// FIX: Added className prop to allow custom styling and fix type errors.
export const EyeIcon = ({ className }: { className?: string }) => <Icon path="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" className={className} />;
// FIX: Safely handle an undefined className prop to prevent an invalid class string.
export const ChevronDownIcon = ({ className }: { className?: string }) => <Icon path="M19 9l-7 7-7-7" className={`h-5 w-5 ${className || ''}`} />;
export const InfoIcon = () => <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>;
export const ChevronRightIcon = ({ className }: { className?: string }) => <Icon path="M9 5l7 7-7 7" className={`w-4 h-4 text-slate-400 ${className || ''}`} />;
export const WalletIcon = () => <Icon path="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />;
export const ReceiptTaxIcon = () => <Icon path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />;
export const ShieldCheckIcon = ({ className }: { className?: string }) => <Icon path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.5-5.5a1 1 0 011.414 0l5.5 5.5A12.02 12.02 0 0017.618 7.984z" className={className} />;
export const DocumentTextIcon = () => <Icon path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />;
export const CalendarIcon = () => <Icon path="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
export const CogIcon = () => <Icon path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066 2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />;
export const UserCircleIcon = ({ className }: { className?: string }) => <Icon path="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" className={className} />;
export const TicketIcon = () => <Icon path="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />;
export const FolderIcon = () => <Icon path="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />;
export const ShareIcon = () => <Icon path="M8.684 13.342C8.862 13.045 9 12.734 9 12.408c0-1.036-.62-1.914-1.5-2.368M8.684 13.342V17.5a2.5 2.5 0 105 0V13.342m-5 0c1.002 0 1.914-.62 2.368-1.5M13 3.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0m-5 15.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" />;
export const BriefcaseIcon = ({ className }: { className?: string }) => <Icon path="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className={className} />;
export const UsersIcon = ({ className }: { className?: string }) => <Icon path="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" className={className} />;
// FIX: Added className prop to allow custom styling and fix type errors.
export const EyeOffIcon = ({ className }: { className?: string }) => <Icon path="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 013.542-5.118m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.953 9.953 0 01-1.562 3.097m-2.222-2.222a3 3 0 00-4.242-4.242M1 1l22 22" className={className} />;
export const PlusCircleIcon = () => <Icon path="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />;
export const MinusCircleIcon = () => <Icon path="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />;
export const HomeIcon = ({ className }: { className?: string }) => <Icon path="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" className={className} />;
export const HeartIcon = ({ className }: { className?: string }) => <Icon path="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" className={className} />;
export const CheckIcon = ({ className }: { className?: string }) => <Icon path="M5 13l4 4L19 7" className={className} />;