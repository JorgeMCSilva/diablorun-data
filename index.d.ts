declare module '@diablorun/diablorun-data' {
  export const areas: {
    [id: string]: {
      act: number;
      name: string;
      town: boolean;
    };
  };

  export const heroes: {
    id: string;
    name: string;
  }[];

  export const itemImages: {
    [baseName: string]: string;
  };

  export const itemSlots: string[];

  export const quests: {
    [id: string]: {
      act: number;
      order: number;
      boss: boolean;
      name: string;
      short_name: string;
    };
  };

  export const stats: {
    [stat: string]: string;
  };

  export const hirelings: {
    [id: string]: string;
  };

  export const skills: {
    [id: string]: string;
  };

  export const levelExperience: number[];

  export const difficulties: string[];

  export const runewords: [
    {
      allowedItems: string;
      isLadder: boolean;
      name: string;
      properties: string[];
      runeword: string;
      runes: string[];
    },
  ];

  export const recipes: {
    [name: string]: string;
  };

  export const fbr: {
    [name: string]: string;
  };

  export const fcr: {
    [name: string]: string;
  };

  export const fhr: {
    [name: string]: string;
  };

  export const acronyms: {
    [name: string]: string;
  };

  export const unids: {
    [name: string]: string[];
  };

  export const uniques: [
    {
      name: string;
      unidItem: string;
      cLevel: number;
      requirements: string[];
      properties: string[];
    },
  ];

  export const setItems: [
    {
      name: string;
      unidItem: string;
      cLevel: number;
      requirements: string[];
      properties: string[];
      setName: string;
    },
  ];

  export const sets: [
    {
      name: string;
      additionalTrigger: string[];
      details: string[];
      items: string[];
    },
  ];

  export const countries: {
    [country: string]: string;
  };

  export const items: [
    {
      properties: string[];
      baseItem: string;
      cLevel?: number;
      is1h?: boolean;
      is2h?: boolean;
      isThrow?: boolean;
      paladinShield?: boolean;
    },
  ];
}
