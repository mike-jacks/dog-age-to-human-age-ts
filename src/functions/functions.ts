/**
 *
 * @param text - Text to be rendered to screen
 * @param setInputPrompt - update rendered text state
 * @param setIsInputDisplayComplete - update when typed text is complete
 */
export function typeOutDisplayText(
  text: string,
  setInputPrompt: React.Dispatch<React.SetStateAction<React.ReactNode>>,
  setIsInputDisplayComplete: React.Dispatch<React.SetStateAction<boolean>>
): void {
  setIsInputDisplayComplete(false); // Start by setting completion to false

  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      setInputPrompt(text.slice(0, i + 1));
    }, 70 * i);
  }

  // Set completion state to true after typing animation ends
  setTimeout(() => setIsInputDisplayComplete(true), 70 * text.length);
}

/**
 *
 * @param dogAgeInHumanYears - Age of dog in human years
 * @param newFormula - boolean toggle to enable a new formula if true, original assignment formula if false
 * @returns - A Number, age in dog equivalent years.
 */
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

export function debounce<T extends (...args: string[]) => void>(func: T, delay: number): T {
  let timeoutId: number | undefined;

  return function (...args: Parameters<T>) {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      func(...args);
    }, delay);
  } as T;
}
