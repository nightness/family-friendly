# Family Friendly

Family Friendly is an advanced NPM package designed to offer developers an efficient way to filter profanity across multiple languages in their applications. This package now includes enhanced functionality with the ability to detect and mask profanity by considering common obfuscations and character substitutions that users might employ to bypass filters. With support for multiple languages including English, Arabic, Chinese, French, German, Indonesian, Italian, and Spanish, Family Friendly stands as a comprehensive solution for maintaining a respectful communication environment in your digital space.

## Features

- **Multi-language Support**: Filters profanity in English, Arabic, Chinese, French, German, Indonesian, Italian, and Spanish.
- **Customization**: Choose to include or exclude specific languages based on your application's user base.
- **Advanced Detection**: Recognizes common character substitutions and obfuscations in profanity.
- **Dynamic Word List Management**: Add or remove words from the filter list at runtime.
- **Flexible Profanity Handling**: Detect, mask, or replace profanity within strings.

## Installation

Ensure you have Node.js and npm installed, then run the following command in your project's root directory:

```bash
npm install family-friendly
```

## Usage

### Importing

Start by importing the `FamilyFriendly` class:

```javascript
import { FamilyFriendly } from "family-friendly";
```

### Configuration

Instantiate `FamilyFriendly` with specific language options or use default settings to filter all supported languages:

```javascript
const familyFriendly = new FamilyFriendly({
  includeEnglish: true, // Include English
  includeSpanish: true, // Include Spanish
  // Additional languages as needed
});
```

To filter all supported languages:

```javascript
const familyFriendlyAll = new FamilyFriendly({ allLanguages: true });
// or with no parameters for the same effect
const familyFriendlyDefault = new FamilyFriendly();
```

### Detecting Profanity

Check if a string contains profanity:

```javascript
const hasProfanity = familyFriendly.containsBadWord("Check this text");
console.log(hasProfanity ? "Profanity found!" : "Clean text.");
```

### Masking Profanity

Mask profanity in a string, with optional custom masking character:

```javascript
const maskedText = familyFriendly.maskBadWords("Some text to cleanse", "*");
console.log(maskedText);
```

### Replacing Profanity

Replace profanity in a string with a specified phrase:

```javascript
const cleanText = familyFriendly.replaceBadWords(
  "Text with profanity",
  "[REMOVED]"
);
console.log(cleanText);
```

### Managing Word List

Add or remove words from the filter:

```javascript
// Adding words
familyFriendly.addWords(["newbadword"]);

// Removing words
familyFriendly.removeWords(["notsobad"]);
```

## Support and Contribution

For support, questions, or contributions, feel free to open an issue or pull request on the GitHub repository associated with this package.
