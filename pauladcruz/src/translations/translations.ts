export type Language = 'en' | 'sv';

interface Translations {
  [key: string]: string;
}

type TranslationsMap = {
  [K in Language]: Translations;
};

export const translations: TranslationsMap = {
    en: {
      welcome: "HI!",
      home: "Home",
      about: "About",
      gameOverMessage: "Okay, if you really want to get to know me better I think at this point we should meet up for a coffee!",
      playAgain: "Play Again!",
      finalScore: "Your final score:",
      score: "Score:",
      followMe: "Follow me",
      trueFalseGameTitle: "True or False",
      true: "True",
      false: "False",
      game1Title: "idk lol",
      game3Title: "idk here either lol"
    },
    sv: {
      welcome: "HEJ!",
      home: "Hem",
      about: "Om",
      gameOverMessage: "Okej, om du verkligen vill lära känna mig bättre tycker jag att vi borde träffas på en kaffe vid det här laget!",
      playAgain: "Spela igen!",
      finalScore: "Ditt slutgiltiga resultat:",
      score: "Poäng:",
      followMe: "Följ mig",
      trueFalseGameTitle: "Sant eller Falskt",
      true: "Sant",
      false: "Falskt",
      game1Title: "vene lol",
      game3Title: "vene här heller lol",
    },
  };
  