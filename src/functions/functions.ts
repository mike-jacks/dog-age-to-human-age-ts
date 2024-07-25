export function typeOutTextString(text: string, setInputPrompt: React.Dispatch<React.SetStateAction<string>>): void {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => setInputPrompt(text.slice(0, i + 1)), 70 * i);
  }
}

export function typeOutTextComponent(text: string, setInputPrompt: React.Dispatch<React.SetStateAction<React.ReactNode>>): void {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => setInputPrompt(text.slice(0, i + 1)), 70 * i);
  }
}

export function convertHumanYearsToDogYears(dogAgeInHumanYears: number, newFormula: boolean): number {
  if (newFormula) {
    if (dogAgeInHumanYears <= 0) {
      dogAgeInHumanYears = 0;
    }
    switch (dogAgeInHumanYears) {
      case 0:
        return 0;
      case 1:
        return 15;
      case 2:
        return 24;
      default:
        return 24 + (dogAgeInHumanYears - 2) * 5;
    }
  } else {
    return Math.floor(16 * Math.log(dogAgeInHumanYears) + 31);
  }
}
