export type ActionLabel = "Cooperate" | "Defect";

export type PayoffMatrix = {
  id: string;
  title: string;
  rows: {
    action: ActionLabel;
    values: [string, string];
  }[];
};

// Normalized from the organizer-provided payoff markdown tables.
export const payoffMatrices: PayoffMatrix[] = [
  {
    id: "matrix-1",
    title: "Environment 01",
    rows: [
      { action: "Cooperate", values: ["3, 3", "0, 5"] },
      { action: "Defect", values: ["5, 0", "1, 1"] },
    ],
  },
  {
    id: "matrix-2",
    title: "Environment 02",
    rows: [
      { action: "Cooperate", values: ["0, 0", "2, 3"] },
      { action: "Defect", values: ["3, 2", "0, 0"] },
    ],
  },
  {
    id: "matrix-3",
    title: "Environment 03",
    rows: [
      { action: "Cooperate", values: ["-1, -1", "-1, 10"] },
      { action: "Defect", values: ["10, -1", "-10, -10"] },
    ],
  },
  {
    id: "matrix-4",
    title: "Environment 04",
    rows: [
      { action: "Cooperate", values: ["1, 1", "5, 0"] },
      { action: "Defect", values: ["0, 5", "3, 3"] },
    ],
  },
  {
    id: "matrix-5",
    title: "Environment 05",
    rows: [
      { action: "Cooperate", values: ["-3, -3", "5, 0"] },
      { action: "Defect", values: ["0, 5", "-1, -1"] },
    ],
  },
];
