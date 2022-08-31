export const colors = [
  {
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
  {
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  {
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
  },
  {
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#dc2626",
    800: "#dc2626",
    900: "#dc2626",
  },
];

export function generateCSSVariables(index: number) {
	const color = colors.at(index)
	return `:root {
		--primary-100: ${color![100]};
		--primary-200: ${color![200]};
		--primary-300: ${color![300]};
		--primary-400: ${color![400]};
		--primary-500: ${color![500]};
		--primary-600: ${color![600]};
		--primary-700: ${color![700]};
		--primary-800: ${color![800]};
		--primary-900: ${color![900]};
	}`
}
