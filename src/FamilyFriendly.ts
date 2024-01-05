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
  private badWords = new Set<string>();

  constructor(options?: FamilyFriendlyOptions) {
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

    this.badWords = new Set(allWords);
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
  public maskBadWords(str: string, maskAs: string = "🤡"): string {
    for (const badWord of this.badWords) {
      str = str.replaceAll(badWord, maskAs.repeat(badWord.length));
    }
    return str;
  }
}
