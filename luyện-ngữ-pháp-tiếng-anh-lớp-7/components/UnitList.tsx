
import React from 'react';
import type { GrammarUnit } from '../types';

interface UnitListProps {
  units: GrammarUnit[];
  onSelectUnit: (unit: GrammarUnit) => void;
}

const BookOpenIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-500 dark:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);


const UnitList: React.FC<UnitListProps> = ({ units, onSelectUnit }) => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-6 text-slate-700 dark:text-slate-300">Chọn bài học</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {units.map((unit) => (
                <div
                    key={unit.id}
                    onClick={() => onSelectUnit(unit)}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    <BookOpenIcon />
                    <h3 className="text-lg font-semibold mt-4 text-slate-800 dark:text-slate-200">{unit.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{unit.topic}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default UnitList;
