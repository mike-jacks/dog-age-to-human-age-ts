export function typeOutText(text: string, setInputPrompt: React.Dispatch<React.SetStateAction<string>>): void {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => setInputPrompt(text.slice(0, i + 1)), 70 * i);
  }
}

export function convertHumanYearsToDogYears(humanAgeInYears: number): number {
  return Math.floor(16 * Math.log(humanAgeInYears) + 31);
}


