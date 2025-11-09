
export interface RuleExample {
  rule: string;
  example: string;
}

export interface TenseStructureDetail {
  affirmative: RuleExample;
  negative: RuleExample;
  interrogative: RuleExample;
}

export interface ComparisonStructure {
  structureType: string;
  meaning: string;
  usage: string;
  structure: string;
  example: string;
}

export interface QuantifierStructure {
  quantifier: string;
  meaning: string;
  usage: string;
  example: string;
}

export interface PrepositionUsage {
    usage: string;
    example: string;
}

export interface PrepositionStructure {
  preposition: 'At' | 'On' | 'In';
  usages: PrepositionUsage[];
}


export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

// Unit 7 Type
export interface GerundParticipleContent {
  type: 'gerund-participle';
  perfectGerunds: {
    definition: string;
    structure: string;
    functions: { role: string; example: string }[];
  };
  perfectParticipleClauses: {
    definition: string;
    functions: { role: string; example: string }[];
  };
  comparison: {
    aspect: string;
    gerund: string;
    participle: string;
  }[];
}

// Unit 8 Type
export interface CleftSentenceContent {
  type: 'cleft-sentence';
  definition: string;
  structure: string;
  emphasisTypes: {
    type: string;
    structure: string[];
    example: string;
  }[];
}

// Unit 9 Type
export interface LinkingWordCategory {
    category: string;
    description: string;
    words: {
        word: string;
        meaning: string;
    }[];
    example: string;
}
export interface LinkingWordsContent {
    type: 'linking-words';
    definition: string;
    function: string;
    categories: LinkingWordCategory[];
}

// Unit 10 Type
export interface CompoundNounContent {
    type: 'compound-noun';
    definition: string;
    function: string;
    formationRules: {
        rule: string;
        examples: string[];
    }[];
    types: {
        type: string;
        description: string;
        examples: string[];
    }[];
    pluralizationNotes: string[];
}


export type GrammarUnitContent = 
  | {
      type: 'tense';
      usage: RuleExample[];
      structure: {
        verb: TenseStructureDetail;
        toBe: TenseStructureDetail;
      };
    }
  | {
      type: 'comparison';
      structures: ComparisonStructure[];
    }
  | {
      type: 'quantifier';
      structures: QuantifierStructure[];
    }
  | {
      type: 'preposition';
      structures: PrepositionStructure[];
    }
  | GerundParticipleContent
  | CleftSentenceContent
  | LinkingWordsContent
  | CompoundNounContent;


export interface GrammarUnit {
  id: number;
  title: string;
  topic: string;
  description: string;
  content: GrammarUnitContent;
  quiz: QuizQuestion[];
}
