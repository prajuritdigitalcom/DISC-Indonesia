import { DISCAnswer } from "../types";
import { questions } from "../data/questions";

export interface DISCScore {
  D: number;
  I: number;
  S: number;
  C: number;
  [key: string]: number;
}

export function calculateDISCScores(answers: Record<number, DISCAnswer>) {
  const mostScores: DISCScore = { D: 0, I: 0, S: 0, C: 0 };
  const leastScores: DISCScore = { D: 0, I: 0, S: 0, C: 0 };

  questions.forEach((q) => {
    const ans = answers[q.id];
    if (ans) {
      if (ans.mostOptionId) {
        const opt = q.options.find((o) => o.id === ans.mostOptionId);
        if (opt) {
          mostScores[opt.dimension] += 1;
        }
      }
      if (ans.leastOptionId) {
        const opt = q.options.find((o) => o.id === ans.leastOptionId);
        if (opt) {
          leastScores[opt.dimension] += 1;
        }
      }
    }
  });

  const combinedScores: DISCScore = {
    D: mostScores.D - leastScores.D,
    I: mostScores.I - leastScores.I,
    S: mostScores.S - leastScores.S,
    C: mostScores.C - leastScores.C,
  };

  return {
    mostScores,      // Perilaku Publik (Graf 1)
    leastScores,     // Perilaku Asli (Graf 2)
    combinedScores,  // Citra Diri (Graf 3)
  };
}
