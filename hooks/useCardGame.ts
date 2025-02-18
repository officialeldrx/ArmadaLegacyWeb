'use client'

import { useState, useEffect, useRef } from 'react';

export interface Card {
    id: string;
    faceUp: boolean;
    imageUrl: string;
}

export interface Section {
    id: string;
    name: string;
    faceUpCards: Card[];
    faceDownCards: Card[];
}

const initialDeck: Card[] = [
    { id: '1', imageUrl: '/cards/injured_crew.jpg', faceUp: false },
    { id: '2', imageUrl: '/cards/injured_crew.jpg', faceUp: false },
    { id: '3', imageUrl: '/cards/injured_crew.jpg', faceUp: false },
    { id: '4', imageUrl: '/cards/injured_crew.jpg', faceUp: false },
    { id: '5', imageUrl: '/cards/structural_damage.jpg', faceUp: false },
    { id: '6', imageUrl: '/cards/structural_damage.jpg', faceUp: false },
    { id: '7', imageUrl: '/cards/structural_damage.jpg', faceUp: false },
    { id: '8', imageUrl: '/cards/structural_damage.jpg', faceUp: false },
    { id: '9', imageUrl: '/cards/structural_damage.jpg', faceUp: false },
    { id: '10', imageUrl: '/cards/structural_damage.jpg', faceUp: false },
    { id: '11', imageUrl: '/cards/structural_damage.jpg', faceUp: false },
    { id: '12', imageUrl: '/cards/structural_damage.jpg', faceUp: false },
    { id: '13', imageUrl: '/cards/blinded_gunners.jpg', faceUp: false },
    { id: '14', imageUrl: '/cards/blinded_gunners.jpg', faceUp: false },
    { id: '15', imageUrl: '/cards/capacitor_failure.jpg', faceUp: false },
    { id: '16', imageUrl: '/cards/capacitor_failure.jpg', faceUp: false },
    { id: '17', imageUrl: '/cards/comm_noise.jpg', faceUp: false },
    { id: '18', imageUrl: '/cards/comm_noise.jpg', faceUp: false },
    { id: '19', imageUrl: '/cards/compartment_fire.jpg', faceUp: false },
    { id: '20', imageUrl: '/cards/compartment_fire.jpg', faceUp: false },
    { id: '21', imageUrl: '/cards/coolant_discharge.jpg', faceUp: false },
    { id: '22', imageUrl: '/cards/coolant_discharge.jpg', faceUp: false },
    { id: '23', imageUrl: '/cards/crew_panic.jpg', faceUp: false },
    { id: '24', imageUrl: '/cards/crew_panic.jpg', faceUp: false },
    { id: '25', imageUrl: '/cards/damaged_controls.jpg', faceUp: false },
    { id: '26', imageUrl: '/cards/damaged_controls.jpg', faceUp: false },
    { id: '27', imageUrl: '/cards/damaged_munitions.jpg', faceUp: false },
    { id: '28', imageUrl: '/cards/damaged_munitions.jpg', faceUp: false },
    { id: '29', imageUrl: '/cards/depowered_armament.jpg', faceUp: false },
    { id: '30', imageUrl: '/cards/depowered_armament.jpg', faceUp: false },
    { id: '31', imageUrl: '/cards/disengaged_fire_control.jpg', faceUp: false },
    { id: '32', imageUrl: '/cards/disengaged_fire_control.jpg', faceUp: false },
    { id: '33', imageUrl: '/cards/faulty_countermeasures.jpg', faceUp: false },
    { id: '34', imageUrl: '/cards/faulty_countermeasures.jpg', faceUp: false },
    { id: '35', imageUrl: '/cards/life_support_failure.jpg', faceUp: false },
    { id: '36', imageUrl: '/cards/life_support_failure.jpg', faceUp: false },
    { id: '37', imageUrl: '/cards/point-defense_failure.jpg', faceUp: false },
    { id: '38', imageUrl: '/cards/point-defense_failure.jpg', faceUp: false },
    { id: '39', imageUrl: '/cards/power_failure.jpg', faceUp: false },
    { id: '40', imageUrl: '/cards/power_failure.jpg', faceUp: false },
    { id: '41', imageUrl: '/cards/projector_misaligned.jpg', faceUp: false },
    { id: '42', imageUrl: '/cards/projector_misaligned.jpg', faceUp: false },
    { id: '43', imageUrl: '/cards/ruptured_engine.jpg', faceUp: false },
    { id: '44', imageUrl: '/cards/ruptured_engine.jpg', faceUp: false },
    { id: '45', imageUrl: '/cards/shield_failure.jpg', faceUp: false },
    { id: '46', imageUrl: '/cards/shield_failure.jpg', faceUp: false },
    { id: '47', imageUrl: '/cards/targeter_disruption.jpg', faceUp: false },
    { id: '48', imageUrl: '/cards/targeter_disruption.jpg', faceUp: false },
    { id: '49', imageUrl: '/cards/thrust-control_malfunction.jpg', faceUp: false },
    { id: '50', imageUrl: '/cards/thrust-control_malfunction.jpg', faceUp: false },
    { id: '51', imageUrl: '/cards/thruster_fissure.jpg', faceUp: false },
    { id: '52', imageUrl: '/cards/thruster_fissure.jpg', faceUp: false },
];

function shuffleDeck<T>(deck: T[], seed: number): T[] {
    const shuffled = [...deck];
    let currentIndex = shuffled.length, randomIndex;

    // Simple deterministic random number generator
    let localSeed = seed;
    const random = () => {
        localSeed = (localSeed * 1664525 + 1013904223) % 2 ** 32;
        return localSeed / 2 ** 32;
    };

    while (currentIndex != 0) {
        randomIndex = Math.floor(random() * currentIndex);
        currentIndex--;
        [shuffled[currentIndex], shuffled[randomIndex]] = [
            shuffled[randomIndex], shuffled[currentIndex]];
    }

    return shuffled;
}

const getRandomIndex = (max: number) => Math.floor(Math.random() * max);

// Custom hook for persistent state
function usePersistentState<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>, number] {
    const [state, setState] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return initialValue;
        }
    });

    const [seed] = useState(() => Math.floor(Math.random() * 1000000));

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (!isFirstRender.current) {
            try {
                window.localStorage.setItem(key, JSON.stringify(state));
            } catch (error) {
                console.error('Error writing to localStorage:', error);
            }
        } else {
            isFirstRender.current = false;
        }
    }, [key, state]);

    return [state, setState, seed];
}


//TODO when peeking cards with dodana, if there are less than 4 cards in the deck the deck should b
export function useCardGame() {
    const [deck, setDeck, seed] = usePersistentState<Card[]>('deck', shuffleDeck([...initialDeck], 0));
    const [discardPile, setDiscardPile] = usePersistentState<Card[]>('discardPile', []);
    const [sections, setSections] = usePersistentState<Section[]>('sections', []);
    const [peekedCards, setPeekedCards] = useState<Card[]>([]);

    const addSection = (name: string) => {
        setSections([...sections, { id: Date.now().toString(), name, faceUpCards: [], faceDownCards: [] }]);
    };

    const editSection = (id: string, name: string) => {
        setSections((prevSections: Section[]) =>
            prevSections.map((section) =>
                section.id === id ? { ...section, name } : section
            )
        );
    };

    const addCard = (sectionId: string, faceUp: boolean) => {
        if (deck.length === 0 && discardPile.length === 0) {
            return;
        }

        let updatedDeck = [...deck];
        let updatedDiscardPile = [...discardPile];

        if (updatedDeck.length === 0) {
            updatedDeck = shuffleDeck(updatedDiscardPile, seed);
            updatedDiscardPile = [];
        }

        const [card, ...remainingDeck] = updatedDeck;

        const updatedSections = sections.map(section =>
            section.id === sectionId
                ? faceUp
                    ? {
                        ...section,
                        faceUpCards: [...section.faceUpCards, { ...card, faceUp: true }],
                    }
                    : {
                        ...section,
                        faceDownCards: [...section.faceDownCards, { ...card, faceUp: false }],
                    }
                : section
        );

        setDeck(remainingDeck);
        setDiscardPile(updatedDiscardPile);
        setSections(updatedSections);
    };


    const discardCard = (sectionId: string, cardId: string, isFaceUp: boolean) => {
        setSections(sections.map(section => {
            if (section.id === sectionId) {
                if (isFaceUp) {
                    const discardedCard = section.faceUpCards.find(card => card.id === cardId);
                    if (discardedCard) {
                        setDiscardPile([...discardPile, discardedCard]);
                    }
                    return { ...section, faceUpCards: section.faceUpCards.filter(card => card.id !== cardId) };
                } else {
                    const discardedCard = section.faceDownCards.find(card => card.id === cardId);
                    if (discardedCard) {
                        setDiscardPile([...discardPile, discardedCard]);
                    }
                    return { ...section, faceDownCards: section.faceDownCards.filter(card => card.id !== cardId) };
                }
            }
            return section;
        }));
    };

    const flipFaceDownCard = (sectionId: string) => {
        setSections(sections.map(section => {
            if (section.id === sectionId && section.faceDownCards.length > 0) {
                const randomIndex = getRandomIndex(section.faceDownCards.length);
                const flippedCard = section.faceDownCards[randomIndex];
                return {
                    ...section,
                    faceUpCards: [...section.faceUpCards, { ...flippedCard, faceUp: true }],
                    faceDownCards: section.faceDownCards.filter((_, index) => index !== randomIndex)
                };
            }
            return section;
        }));
    };

    const flipFaceUpCard = (sectionId: string, cardId: string) => {
        setSections(sections.map(section => {
            if (section.id === sectionId) {
                const cardToFlip = section.faceUpCards.find(card => card.id === cardId);
                if (cardToFlip) {
                    return {
                        ...section,
                        faceUpCards: section.faceUpCards.filter(card => card.id !== cardId),
                        faceDownCards: [...section.faceDownCards, { ...cardToFlip, faceUp: false }]
                    };
                }
            }
            return section;
        }));
    };

    const flipSelectedFaceDownCards = (sectionId: string, cardIds: string[]) => {
        setSections(sections.map(section => {
            if (section.id === sectionId) {
                const cardsToFlip = section.faceDownCards.filter(card => cardIds.includes(card.id));
                const remainingFaceDownCards = section.faceDownCards.filter(card => !cardIds.includes(card.id));
                return {
                    ...section,
                    faceUpCards: [...section.faceUpCards, ...cardsToFlip.map(card => ({ ...card, faceUp: true }))],
                    faceDownCards: remainingFaceDownCards
                };
            }
            return section;
        }));
    };

    const peekTopCards = (count: number = 4): Card[] => {
        let updatedDeck = [...deck];
        let updatedDiscardPile = [...discardPile];

        if (updatedDeck.length < count) {
            updatedDeck = shuffleDeck([...updatedDeck, ...updatedDiscardPile], seed);
            updatedDiscardPile = [];
        }

        const peekedCards = updatedDeck.slice(0, Math.min(count, updatedDeck.length));
        updatedDeck = updatedDeck.slice(peekedCards.length);

        setDeck(updatedDeck);
        setDiscardPile(updatedDiscardPile);
        setPeekedCards(peekedCards);

        return peekedCards;
    };


    const closePeekDialog = (cardId: string) => {
        console.log(cardId)

        if (peekedCards.length > 0) {
            if (cardId === '') {
                setDeck(prevDeck => {
                    const newDeck = [...peekedCards, ...prevDeck];
                    return shuffleDeck(newDeck, seed);
                });
            }

            setPeekedCards([]);
        }
    };

    const pickCardFromTop = (cardId: string, sectionId: string, faceUp: boolean) => {
        const pickedCardIndex = peekedCards.findIndex(card => card.id === cardId);
        if (pickedCardIndex === -1) return;

        const pickedCard = peekedCards[pickedCardIndex];
        const remainingPeekedCards = peekedCards.filter((_, index) => index !== pickedCardIndex);

        // Add picked card to the section
        setSections(sections.map(section =>
            section.id === sectionId
                ? faceUp
                    ? { ...section, faceUpCards: [...section.faceUpCards, { ...pickedCard, faceUp: true }] }
                    : { ...section, faceDownCards: [...section.faceDownCards, { ...pickedCard, faceUp: false }] }
                : section
        ));

        // Move remaining peeked cards to the discard pile
        setDiscardPile(prevDiscard => [...prevDiscard, ...remainingPeekedCards]);

        // Clear peeked cards
        setPeekedCards([]);
    };

    const startNewGame = () => {
        const newDeck = shuffleDeck([...initialDeck], seed);
        setDeck(newDeck);
        setDiscardPile([]);
        setSections([]);
        setPeekedCards([]);
    };

    const deleteSection = (sectionId: string) => {
        const sectionToDelete = sections.find(section => section.id === sectionId);
        if (sectionToDelete) {
            const cardsToDiscard = [...sectionToDelete.faceUpCards, ...sectionToDelete.faceDownCards];
            setDiscardPile([...discardPile, ...cardsToDiscard]);
        }
        setSections(prevSections => prevSections.filter(section => section.id !== sectionId));
    };

    return {
        deck,
        discardPile,
        sections,
        peekedCards,
        editSection,
        addSection,
        addCard,
        discardCard,
        flipFaceDownCard,
        flipFaceUpCard,
        flipSelectedFaceDownCards,
        peekTopCards,
        pickCardFromTop,
        closePeekDialog,
        startNewGame,
        deleteSection
    };
}

