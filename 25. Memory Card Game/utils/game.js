var _ = require("lodash");

const InitialGame = (memoryCards) => {
  const { cards } = require("../helper/card");
  cards.forEach((card) => {
    card.isFlipped = false;
  });

  memoryCards = _.shuffle(
    memoryCards.concat(_.cloneDeep(cards), _.cloneDeep(cards))
  );
  return memoryCards;
};

export { InitialGame };
