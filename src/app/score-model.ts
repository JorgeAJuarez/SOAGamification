export interface Score {
    name: string;
    score: number;
    mode: string;
}

export interface ScoreRequest {
    accion:string;
    score: Score|any;
}

export interface ScoreResponse {
    name: string;
    leaderboard: Array<Score>;
}