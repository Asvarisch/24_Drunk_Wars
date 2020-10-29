export const homePage = 'home';
export const gamePage = 'game';
export const resultPage = 'result';


export const getNewDeckOfCard = () => {
    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


    const getDeck = () => {
        const deck = new Array();

        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < values.length; x++) {
                let card = { value: values[x], suit: suits[i] };
                deck.push(card);
            }
        }
        return deck;
    }
    const cards = getDeck().splice(0);

    const shuffle = (cards) => {
        for (let i = 0; i < 1000; i++) {
            let location1 = Math.floor((Math.random() * cards.length));
            let location2 = Math.floor((Math.random() * cards.length));
            let tmp = cards[location1];

            cards[location1] = cards[location2];
            cards[location2] = tmp;
        }
    }
    shuffle(cards);

    const half = Math.ceil(cards.length / 2);

    return {
        playerDeck: cards.splice(0, half),
        computerDeck: cards.splice(-half)
    }
}




