declare module "diablorun-data" {
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
        }
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

    export const runewords: {
        [name: string]: string;
    };

    export const recipes: {
        [name: string]: string;
    };
}
