export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  nav__icon: 'skull-crossbones',
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Cosmos',
    description: 'Interesting things I want to check out!',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.answersingenesis.org%2Fimg%2Fcms%2Fcontent%2Fcontentnode%2Fheader_image%2Fcosmos-campaign.jpg&f=1&nofb=1',
  },
  {
    id: 'list-3',
    title: 'Cosmonaut',
    description: 'Interesting things I want to check out!',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.deonandan.com%2Fwordpress%2Fwp-content%2Fuploads%2Fcosmonaut.jpg&f=1&nofb=1',
  },
  {
    id: 'list-4',
    title: 'Sun',
    description: 'Interesting things I want to check out!',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspaceandbeyondbox.com%2Fwp-content%2Fuploads%2F2020%2F09%2Flifecyclesun.jpg&f=1&nofb=1',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-6',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-7',
    listId: 'list-3',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-8',
    listId: 'list-3',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-9',
    listId: 'list-3',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

export const faqData = {
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  h1Content: '<h1>16.8. Egzamin sprawdzający</h1>',
  pContent: 'Minęła już spora część kursu, po której warto sprawdzić swoją wiedzę. W związku z tym zapraszamy Cię do wzięcia udziału w egzaminie sprawdzającym. Zakres materiału na egzaminie nie obejmuje Reacta!<br/>W ramach Twojego pakietu wsparcia w poszukiwaniu pracy, podejście do egzaminu sprawdzającego jest opcjonalne.<br/>Egzamin ten ma na celu sprawdzenie, jaki masz aktualny poziom wiedzy, co nie stanowi już dla Ciebie problemu, a co ewentualnie wymaga powtórzenia.Potraktuj go jako rodzaj treningu, który przygotuje Cię do zdania egzaminu końcowego z jak najlepszym wynikiem.',
  defaultListDescription: '<p>I can do all the things!!!</p>',
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
};

export const infoData = {
  h2Content: '<h2>Info</h2>',
  title: 'Things to do <sup>soon!</sup>',
  defaultListDescription: '<p>I can do all the things!!!</p>',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  pContent: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
};

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;