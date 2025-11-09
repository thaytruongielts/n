
import React from 'react';
import type { GrammarUnit, TenseStructureDetail } from '../types';
import Quiz from './Quiz';

interface UnitDetailProps {
  unit: GrammarUnit;
  onBack: () => void;
}

const BackArrowIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const TenseStructureTable: React.FC<{ title: string, data: TenseStructureDetail }> = ({ title, data }) => (
    <div className="mt-6">
        <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">{title}</h4>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400 border-collapse">
                <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                    <tr>
                        <th scope="col" className="px-4 py-3 border border-slate-200 dark:border-slate-600">Loại câu</th>
                        <th scope="col" className="px-4 py-3 border border-slate-200 dark:border-slate-600">Cấu trúc</th>
                        <th scope="col" className="px-4 py-3 border border-slate-200 dark:border-slate-600">Ví dụ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white dark:bg-slate-800">
                        <td className="px-4 py-3 font-medium text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600">Khẳng định</td>
                        <td className="px-4 py-3 border border-slate-200 dark:border-slate-600 font-mono">{data.affirmative.rule}</td>
                        <td className="px-4 py-3 border border-slate-200 dark:border-slate-600 italic">{data.affirmative.example}</td>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-900">
                        <td className="px-4 py-3 font-medium text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600">Phủ định</td>
                        <td className="px-4 py-3 border border-slate-200 dark:border-slate-600 font-mono">{data.negative.rule}</td>
                        <td className="px-4 py-3 border border-slate-200 dark:border-slate-600 italic">{data.negative.example}</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-800">
                        <td className="px-4 py-3 font-medium text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600">Nghi vấn</td>
                        <td className="px-4 py-3 border border-slate-200 dark:border-slate-600 font-mono">{data.interrogative.rule}</td>
                        <td className="px-4 py-3 border border-slate-200 dark:border-slate-600 italic">{data.interrogative.example}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

const renderContent = (unit: GrammarUnit) => {
    switch (unit.content.type) {
        case 'tense':
            return (
                <>
                    <h3 className="text-xl font-bold text-sky-600 dark:text-sky-400 mb-3">Cách dùng</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                        {unit.content.usage.map((item, index) => (
                            <li key={index}>
                                <strong>{item.rule}:</strong> <span className="italic">{item.example}</span>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-xl font-bold text-sky-600 dark:text-sky-400 mt-8 mb-3">Cấu trúc</h3>
                    <TenseStructureTable title="Động từ thường" data={unit.content.structure.verb} />
                    <TenseStructureTable title="Động từ 'to be'" data={unit.content.structure.toBe} />
                </>
            );
        case 'comparison':
             return (
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400 border-collapse">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                            <tr>
                                <th scope="col" className="px-4 py-3 border border-slate-200 dark:border-slate-600">Cấu trúc so sánh</th>
                                <th scope="col" className="px-4 py-3 border border-slate-200 dark:border-slate-600">Ý nghĩa</th>
                                <th scope="col" className="px-4 py-3 border border-slate-200 dark:border-slate-600">Cách dùng</th>
                                <th scope="col" className="px-4 py-3 border border-slate-200 dark:border-slate-600">Ví dụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {unit.content.structures.map((s, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-900'}>
                                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 font-mono">{s.structureType}</td>
                                    <td className="px-4 py-3 border border-slate-200 dark:border-slate-600">{s.meaning}</td>
                                    <td className="px-4 py-3 border border-slate-200 dark:border-slate-600">{s.usage}</td>
                                    <td className="px-4 py-3 border border-slate-200 dark:border-slate-600 italic">{s.example}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                 </div>
            );
        case 'quantifier':
            return (
                <div className="space-y-4">
                    {unit.content.structures.map((s, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg text-sky-700 dark:text-sky-500">{s.quantifier} - <span className="font-medium">{s.meaning}</span></h4>
                            <p className="mt-1 text-slate-600 dark:text-slate-400">{s.usage}</p>
                            <p className="mt-2 text-sm italic text-slate-500 dark:text-slate-500">Ví dụ: {s.example}</p>
                        </div>
                    ))}
                </div>
            );
        case 'preposition':
            return (
                 <div className="space-y-4">
                    {unit.content.structures.map((s, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                            <h4 className="font-bold text-2xl text-sky-700 dark:text-sky-500 font-mono">{s.preposition}</h4>
                            <ul className="mt-2 list-disc list-inside space-y-2">
                                {s.usages.map((u, ui) => (
                                     <li key={ui}>
                                        <span className="text-slate-700 dark:text-slate-300">{u.usage}</span>
                                        <p className="text-sm italic text-slate-500 dark:text-slate-500 ml-4">VD: {u.example}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            );
        case 'gerund-participle':
            const { perfectGerunds, perfectParticipleClauses, comparison } = unit.content;
            return (
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-sky-600 dark:text-sky-400 mb-3">Danh động từ hoàn thành (Perfect Gerunds)</h3>
                        <p className="mb-2">{perfectGerunds.definition}</p>
                        <p className="mb-4"><strong>Cấu trúc:</strong> <code className="font-mono bg-slate-100 dark:bg-slate-700 p-1 rounded">{perfectGerunds.structure}</code></p>
                        <h4 className="font-semibold text-slate-700 dark:text-slate-300">Chức năng:</h4>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            {perfectGerunds.functions.map((f, i) => <li key={i}><strong>{f.role}:</strong> <span className="italic">{f.example}</span></li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-sky-600 dark:text-sky-400 mb-3">Mệnh đề phân từ hoàn thành (Perfect Participle Clauses)</h3>
                        <p className="mb-2">{perfectParticipleClauses.definition}</p>
                        <h4 className="font-semibold text-slate-700 dark:text-slate-300">Chức năng:</h4>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            {perfectParticipleClauses.functions.map((f, i) => <li key={i}><strong>{f.role}:</strong> <span className="italic">{f.example}</span></li>)}
                        </ul>
                    </div>
                </div>
            )
        case 'cleft-sentence':
            const { definition, emphasisTypes } = unit.content;
            return (
                <div className="space-y-6">
                    <p>{definition}</p>
                    {emphasisTypes.map((e, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                             <h4 className="font-bold text-lg text-sky-700 dark:text-sky-500">Nhấn mạnh {e.type}</h4>
                             <div className="mt-2 space-y-1">
                                {e.structure.map((s, si) => <p key={si} className="font-mono text-sm text-slate-600 dark:text-slate-400">{s}</p>)}
                             </div>
                             <p className="mt-2 text-sm italic text-slate-500 dark:text-slate-500">Ví dụ: {e.example}</p>
                        </div>
                    ))}
                </div>
            )
        case 'linking-words':
            return (
                <div className="space-y-6">
                    <p>{unit.content.definition}</p>
                    <p>{unit.content.function}</p>
                    {unit.content.categories.map((c, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg text-sky-700 dark:text-sky-500">{c.category}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{c.description}</p>
                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-center">
                                {c.words.map((w, wi) => (
                                    <div key={wi} className="bg-white dark:bg-slate-700 p-2 rounded-md shadow-sm">
                                        <p className="font-semibold text-slate-800 dark:text-slate-200">{w.word.replace(',...','').replace('...','')}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{w.meaning.replace('...','')}</p>
                                    </div>
                                ))}
                            </div>
                             <p className="mt-3 text-sm italic text-slate-500 dark:text-slate-500">Ví dụ: {c.example}</p>
                        </div>
                    ))}
                </div>
            )
        case 'compound-noun':
            return (
                <div className="space-y-6">
                    <p>{unit.content.definition}</p>
                    <p>{unit.content.function}</p>
                    <div>
                        <h3 className="text-xl font-bold text-sky-600 dark:text-sky-400 mb-3">Cách thành lập</h3>
                         <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                                <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Quy tắc</th>
                                        <th scope="col" className="px-4 py-3">Ví dụ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {unit.content.formationRules.map((r, i) => (
                                        <tr key={i} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700">
                                            <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{r.rule}</td>
                                            <td className="px-4 py-3 font-mono">{r.examples.join(' / ')}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                         </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-sky-600 dark:text-sky-400 mb-3">Các loại danh từ ghép</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            {unit.content.types.map((t, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                                    <h4 className="font-bold text-lg text-sky-700 dark:text-sky-500">{t.type}</h4>
                                    <p className="text-sm mt-1">{t.description}</p>
                                    <p className="text-sm mt-2 font-mono bg-white dark:bg-slate-700 inline-block px-2 py-1 rounded">{t.examples.join(' / ')}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-sky-600 dark:text-sky-400 mb-3">Lưu ý</h3>
                        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                           {unit.content.pluralizationNotes.map((note, i) => <li key={i}>{note}</li>)}
                        </ul>
                    </div>
                </div>
            )
        default:
            return null;
    }
};

const UnitDetail: React.FC<UnitDetailProps> = ({ unit, onBack }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 md:p-8">
        <button
            onClick={onBack}
            className="inline-flex items-center mb-6 text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200 transition-colors"
        >
            <BackArrowIcon />
            Quay lại danh sách
        </button>

        <h2 className="text-3xl font-bold mb-2 text-slate-800 dark:text-slate-200">{unit.title}</h2>
        <p className="text-xl font-semibold text-sky-700 dark:text-sky-500 mb-4">{unit.topic}</p>
        <p className="text-slate-600 dark:text-slate-400 mb-8 prose dark:prose-invert max-w-none">{unit.description}</p>
        
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
            {renderContent(unit)}
        </div>

        {unit.quiz.length > 0 && (
            <div className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-8">
                <h3 className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-6">Bài luyện tập</h3>
                <Quiz questions={unit.quiz} />
            </div>
        )}
    </div>
  );
};

export default UnitDetail;
