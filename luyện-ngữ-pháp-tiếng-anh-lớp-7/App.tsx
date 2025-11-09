
import React, { useState, useEffect } from 'react';
import { grammarUnits } from './data/grammarData';
import type { GrammarUnit } from './types';
import UnitList from './components/UnitList';
import UnitDetail from './components/UnitDetail';

const App: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<GrammarUnit | null>(null);

  useEffect(() => {
    if (selectedUnit) {
      window.scrollTo(0, 0);
    }
  }, [selectedUnit]);
  
  const handleSelectUnit = (unit: GrammarUnit) => {
    setSelectedUnit(unit);
  };

  const handleBackToList = () => {
    setSelectedUnit(null);
  };

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-200">
      <header className="bg-white dark:bg-slate-800 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-sky-600 dark:text-sky-400">
            Luyện Ngữ Pháp Tiếng Anh Lớp 7
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">Chương trình Global Success</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {selectedUnit ? (
          <UnitDetail unit={selectedUnit} onBack={handleBackToList} />
        ) : (
          <UnitList units={grammarUnits} onSelectUnit={handleSelectUnit} />
        )}
      </main>
      <footer className="bg-white dark:bg-slate-800 mt-8 py-4 text-center text-slate-500 dark:text-slate-400">
        <p>&copy; 2024 Grammar Practice App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
