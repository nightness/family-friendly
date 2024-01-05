import { FamilyFriendly, FamilyFriendlyOptions } from "./FamilyFriendly";

// Mock data for bad words in different languages
const mockEnglishWords = new Set(["badword1", "badword2"]);
const mockArabicWords = new Set(["سيئة1", "سيئة2"]);
const mockChineseWords = new Set(["坏词1", "坏词2"]);
const mockFrenchWords = new Set(["mauvais1", "mauvais2"]);
const mockGermanWords = new Set(["schlecht1", "schlecht2"]);
const mockIndonesianWords = new Set(["buruk1", "buruk2"]);
const mockItalianWords = new Set(["cattivo1", "cattivo2"]);
const mockSpanishWords = new Set(["malo1", "malo2"]);

jest.mock("./words/english", () => ({ badEnglishWords: mockEnglishWords }));
jest.mock("./words/arabic", () => ({ badArabicWords: mockArabicWords }));
jest.mock("./words/chinese", () => ({ badChineseWords: mockChineseWords }));
jest.mock("./words/french", () => ({ badFrenchWords: mockFrenchWords }));
jest.mock("./words/german", () => ({ badGermanWords: mockGermanWords }));
jest.mock("./words/indonesian", () => ({
  badIndonesianWords: mockIndonesianWords,
}));
jest.mock("./words/italian", () => ({ badItalianWords: mockItalianWords }));
jest.mock("./words/spanish", () => ({ badSpanishWords: mockSpanishWords }));

describe("FamilyFriendly", () => {
  const testOptions: FamilyFriendlyOptions = {
    allLanguages: false,
    includeEnglish: true,
    includeArabic: true,
    includeChinese: true,
    includeFrench: true,
    includeGerman: true,
    includeIndonesian: true,
    includeItalian: true,
    includeSpanish: true,
  };

  const ff = new FamilyFriendly(testOptions);

  it("should include all specified languages", () => {
    expect(ff.containsBadWord("badword1")).toBeTruthy();
    expect(ff.containsBadWord("سيئة1")).toBeTruthy();
    expect(ff.containsBadWord("坏词1")).toBeTruthy();
    expect(ff.containsBadWord("mauvais1")).toBeTruthy();
    expect(ff.containsBadWord("schlecht1")).toBeTruthy();
    expect(ff.containsBadWord("buruk1")).toBeTruthy();
    expect(ff.containsBadWord("cattivo1")).toBeTruthy();
    expect(ff.containsBadWord("malo1")).toBeTruthy();
  });

  it("should return true if a string contains a bad word", () => {
    expect(ff.containsBadWord("This sentence has badword1")).toBeTruthy();
  });

  it("should return false if a string does not contain a bad word", () => {
    expect(ff.containsBadWord("This is a clean sentence")).toBeFalsy();
  });

  it("should mask all bad words in a string", () => {
    const testSentence =
      "badword1, سيئة1, 坏词1, mauvais1, schlecht1, buruk1, cattivo1, malo1";
    const masked = ff.maskBadWords(testSentence, "*");
    const expectedMasked = "******* **** *** ****** ********* ********** *****";
    expect(masked).toBe(expectedMasked);
  });

  // Additional tests for individual language options and other scenarios can be added here
});
