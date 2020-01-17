import { FormControl } from "@angular/forms";

export function restrictedWords(words: string[]) {
  return (control: FormControl) => {
    if (!words || words.length === 0) return null;

    const wordsFound = words.filter(
      word => word && word.length > 0 && control.value.includes(word)
    );

    if (wordsFound && wordsFound.length > 0)
      return {
        restrictedWords: wordsFound.join(",")
      };
    else return null;
  };
}
