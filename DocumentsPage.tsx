import React from 'react';
import { Header } from './Header';
import { documentsData } from './mockdata';
import { DocumentTextIcon } from './icons';
import type { Document } from './types';

const groupDocumentsByCompany = (documents: Document[]) => {
    return documents.reduce((acc, doc) => {
        (acc[doc.company] = acc[doc.company] || []).push(doc);
        return acc;
    }, {} as Record<string, Document[]>);
};

export const DocumentsPage = ({ onBack }: { onBack: () => void }) => {
    const groupedDocuments = groupDocumentsByCompany(documentsData);
    const companies = Object.keys(groupedDocuments);

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="档案包" onBack={onBack} />
            <main className="p-5 space-y-6">
                {companies.map(company => (
                    <div key={company}>
                        <h2 className="text-slate-600 font-semibold mb-3 px-1">{company}</h2>
                        <div className="bg-white rounded-xl shadow-sm">
                            <div className="divide-y divide-slate-100">
                                {groupedDocuments[company].map(doc => (
                                    <div key={doc.id} className="flex items-center justify-between p-4">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                                <DocumentTextIcon className="w-7 h-7 text-[#5fc38f]" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800 text-base">{doc.title}</p>
                                                <p className="text-sm text-slate-500 mt-1">{doc.date}</p>
                                            </div>
                                        </div>
                                        <button className="flex-shrink-0 px-4 py-1.5 text-sm font-semibold text-slate-600 border border-slate-300 rounded-full hover:bg-slate-100 transition-colors">
                                            查看
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};