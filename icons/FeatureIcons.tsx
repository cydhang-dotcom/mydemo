import React from 'react';
import type { IconProps } from './types';

export const WalletIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25-2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m15 6.75h.008v.008H18v-.008z" />
    </svg>
);

export const ReceiptTaxIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75a.75.75 0 01-1.5 0V6h-1.5a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0v-.75h-1.5a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0V9h-1.5a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0v-.75H9a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0v-.75H7.5a.75.75 0 000 1.5h1.5V15a.75.75 0 01-1.5 0v-.75H6a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0V15H4.5a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 014.5 4.5h15A2.25 2.25 0 0121.75 6.75v5.5a2.25 2.25 0 01-2.25 2.25h-1.5v-1.5a.75.75 0 00-1.5 0v1.5h-1.5a.75.75 0 000 1.5h1.5v.75a.75.75 0 011.5 0V18h1.5a.75.75 0 00.75-.75v-5.5a.75.75 0 00-.75-.75H4.5a.75.75 0 00-.75.75v5.5c0 .414.336.75.75.75h1.5v-1.5a.75.75 0 011.5 0v1.5h1.5a.75.75 0 010-1.5H7.5v-.75a.75.75 0 00-1.5 0V12H4.5a.75.75 0 010-1.5h1.5v-.75a.75.75 0 00-1.5 0v.75H3a.75.75 0 010-1.5h1.5v-.75a.75.75 0 00-1.5 0V9H1.5a.75.75 0 010-1.5H3V6.75A.75.75 0 013.75 6H16.5z" />
    </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
    </svg>
);

export const DocumentTextIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" />
    </svg>
);

export const FolderIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
);

export const TicketIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75a.75.75 0 01-1.5 0V6h-1.5a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0v-.75h-1.5a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0V9h-1.5a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0v-.75H9a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0v-.75H7.5a.75.75 0 000 1.5h1.5V15a.75.75 0 01-1.5 0v-.75H6a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0V15H4.5a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 014.5 4.5h15A2.25 2.25 0 0121.75 6.75v5.5a2.25 2.25 0 01-2.25 2.25h-1.5v-1.5a.75.75 0 00-1.5 0v1.5h-1.5a.75.75 0 000 1.5h1.5v.75a.75.75 0 011.5 0V18h1.5a.75.75 0 00.75-.75v-5.5a.75.75 0 00-.75-.75H4.5a.75.75 0 00-.75.75v5.5c0 .414.336.75.75.75h1.5v-1.5a.75.75 0 011.5 0v1.5h1.5a.75.75 0 010-1.5H7.5v-.75a.75.75 0 00-1.5 0V12H4.5a.75.75 0 010-1.5h1.5v-.75a.75.75 0 00-1.5 0v.75H3a.75.75 0 010-1.5h1.5v-.75a.75.75 0 00-1.5 0V9H1.5a.75.75 0 010-1.5H3V6.75A.75.75 0 013.75 6H16.5z" />
    </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.25L21 12V7.5A2.25 2.25 0 0018.75 5.25h-2.25A2.25 2.25 0 0014.25 3H9.75A2.25 2.25 0 007.5 5.25H5.25A2.25 2.25 0 003 7.5v4.5L3.75 14.25M20.25 14.25V18a2.25 2.25 0 01-2.25-2.25H6A2.25 2.25 0 013.75 18v-3.75m16.5 0c0-1.242-.984-2.25-2.25-2.25h-12c-1.242 0-2.25.984-2.25 2.25" />
    </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.5h3.75a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-2.25-2.25H15m0-6.75h.008v.008H15V12.75zm-7.5 0h.008v.008H7.5V12.75zm-3 3.75h.008v.008H4.5v-.008zM9.75 21a.75.75 0 01-.75-.75V18a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5zM12 11.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM12 3.75a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0V4.5a.75.75 0 01.75-.75z" />
    </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 100-2.186m0 2.186v-2.186" />
    </svg>
);

export const DocumentMagnifyingGlassIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-1.5 6.959 6.959a2.25 2.25 0 0 0 3.182 0l2.121-2.121a2.25 2.25 0 0 0 0-3.182L18.5 12.5M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
);

export const ClipboardDocumentCheckIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
    </svg>
);
