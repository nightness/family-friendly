import { badArabicWords } from "./words/arabic";
import { badChineseWords } from "./words/chinese";
import { badEnglishWords } from "./words/english";
import { badFrenchWords } from "./words/french";
import { badGermanWords } from "./words/german";
import { badIndonesianWords } from "./words/indonesian";
import { badItalianWords } from "./words/italian";
import { badSpanishWords } from "./words/spanish";

export interface FamilyFriendlyOptions {
  allLanguages?: boolean; // Default: false IF any of the below are true, then this is true (by default)
  includeEnglish?: boolean;
  includeArabic?: boolean;
  includeChinese?: boolean;
  includeFrench?: boolean;
  includeGerman?: boolean;
  includeIndonesian?: boolean;
  includeItalian?: boolean;
  includeSpanish?: boolean;
}

// FamilyFriendly class
// This class is used to detect or mask out, bad words in a string
export class FamilyFriendly {
  // The list of bad words
  private badWords: string[];
  private badWordPatterns: RegExp[];

  constructor(options?: FamilyFriendlyOptions) {
    this.badWords = [];
    this.badWordPatterns = [];

    const allFalse =
      options &&
      !options.includeEnglish &&
      !options.includeArabic &&
      !options.includeChinese &&
      !options.includeFrench &&
      !options.includeGerman &&
      !options.includeIndonesian &&
      !options.includeItalian &&
      !options.includeSpanish;

    // If allLanguages is true, then include all languages
    if (allFalse || !options || options?.allLanguages) {
      if (!options) options = {};
      options.includeEnglish = true;
      options.includeArabic = true;
      options.includeChinese = true;
      options.includeFrench = true;
      options.includeGerman = true;
      options.includeIndonesian = true;
      options.includeItalian = true;
      options.includeSpanish = true;
    }

    const allWords = Array.from("[]");

    // If includeEnglish is true, then include the English words
    if (options.includeEnglish) {
      allWords.push(...badEnglishWords);
    }

    // If includeArabic is true, then include the Arabic words
    if (options.includeArabic) {
      allWords.push(...badArabicWords);
    }

    // If includeChinese is true, then include the Chinese words
    if (options.includeChinese) {
      allWords.push(...badChineseWords);
    }

    // If includeFrench is true, then include the French words
    if (options.includeFrench) {
      allWords.push(...badFrenchWords);
    }

    // If includeGerman is true, then include the German words
    if (options.includeGerman) {
      allWords.push(...badGermanWords);
    }

    // If includeIndonesian is true, then include the Indonesian words
    if (options.includeIndonesian) {
      allWords.push(...badIndonesianWords);
    }

    // If includeItalian is true, then include the Italian words
    if (options.includeItalian) {
      allWords.push(...badItalianWords);
    }

    // If includeSpanish is true, then include the Spanish words
    if (options.includeSpanish) {
      allWords.push(...badSpanishWords);
    }

    // Derive bad words from the existing bad words, removing duplicate letters in a word
    const derivedWords: string[] = [];
    for (const word of allWords) {
      const letters = word.split("");
      const uniqueLetters = letters.filter(
        (letter, index) => letters.indexOf(letter) === index
      );
      const stubWord = uniqueLetters.join("");

      // No duplicate letters
      if (allWords.includes(stubWord)) continue;

      // Add the stub word to the list of derived words
      derivedWords.push(stubWord);
    }

    // Add the derived words to the list of all words
    allWords.push(...derivedWords);

    // Flatten the array of bad words and create regex patterns
    this.badWords = allWords.sort((a, b) => b.length - a.length);
    this.badWordPatterns = this.badWords.map(
      (word) => new RegExp(this.createRegexPattern(word), "gi")
    );
  }

  private createRegexPattern(word: string): string {
    const escapeRegExp = (string: string) =>
      string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // Define substitutions
    const substitutions: { [key: string]: string } = {
      a: "[a@4]",
      e: "[e3]",
      i: "[i1!]",
      o: "[o0]",
      s: "[s$5]",
      t: "[t7]",
      b: "[b8]",
      g: "[g6]",
      l: "[l1]",
      q: "[q9]",
      z: "[z2]",
    };

    // Replace each character with its substitutions (if any)
    const pattern = word
      .split("")
      .map((char) => {
        const sub = substitutions[char.toLowerCase()];
        return sub ? sub : escapeRegExp(char);
      })
      .join("");

    // Return the pattern with word boundaries
    return `\\b${pattern}\\b`;
  }

  // Returns true if the string contains a bad word
  public containsBadWord(str: string): boolean {
    for (const badWord of this.badWords) {
      if (str.includes(badWord)) {
        return true;
      }
    }
    return false;
  }

  // Returns a string with bad words masked out
  public maskBadWords(str: string, maskAs: string = "*"): string {
    for (const badWord of this.badWords) {
      str = str.replace(
        new RegExp(this.createRegexPattern(badWord), "gi"),
        maskAs.repeat(badWord.length)
      );
    }
    return str;
  }

  // Like maskBadWords, but replaces the bad word with the provided replacement
  public replaceBadWords(
    str: string,
    replacementWordForABadWord: string = "[CENSORED]"
  ): string {
    for (const badWord of this.badWords) {
      str = str.replace(
        new RegExp(this.createRegexPattern(badWord), "gi"),
        replacementWordForABadWord
      );
    }
    return str;
  }

  public addWords(words: string[]): void {
    words.forEach((word) => {
      this.badWords.push(word);
      this.badWordPatterns.push(
        new RegExp(this.createRegexPattern(word), "gi")
      );
    });
  }

  public removeWords(words: string[]): void {
    words.forEach((word) => {
      const index = this.badWords.indexOf(word);
      if (index > -1) {
        this.badWords.splice(index, 1);
        this.badWordPatterns.splice(index, 1);
      }
    });
  }
}

/*
const familyFriendly = new FamilyFriendly();

const testString = "Don't be an ash0le ashole assh0le asshole";
console.log("Original:", testString);
console.log("Masked:", familyFriendly.maskBadWords(testString));
console.log("Contains bad word:", familyFriendly.containsBadWord(testString));
console.log("Replaced:", familyFriendly.replaceBadWords(testString));
*/
