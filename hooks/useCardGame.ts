'use client'

import { useState, useEffect } from 'react';

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

function shuffleDeck<T>(deck: T[]): T[] {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function useCardGame() {
    const [deck, setDeck] = useState<Card[]>([]);
    const [discardPile, setDiscardPile] = useState<Card[]>([]);
    const [sections, setSections] = useState<Section[]>([]);

    useEffect(() => {
        setDeck(shuffleDeck(initialDeck));
    }, []);

    const addSection = (name: string) => {
        setSections([...sections, { id: Date.now().toString(), name, faceUpCards: [], faceDownCards: [] }]);
    };

    const addCard = (sectionId: string, faceUp: boolean) => {
        if (deck.length === 0) {
            if (discardPile.length === 0) {
                return;
            }
            setDeck(shuffleDeck(discardPile));
            setDiscardPile([]);
            return;
        }

        const [card, ...remainingDeck] = deck;
        setDeck(remainingDeck);

        setSections(sections.map(section =>
            section.id === sectionId
                ? faceUp
                    ? { ...section, faceUpCards: [...section.faceUpCards, { ...card, faceUp: true }] }
                    : { ...section, faceDownCards: [...section.faceDownCards, { ...card, faceUp: false }] }
                : section
        ));
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
                const [flippedCard, ...remainingFaceDownCards] = section.faceDownCards;
                return {
                    ...section,
                    faceUpCards: [...section.faceUpCards, { ...flippedCard, faceUp: true }],
                    faceDownCards: remainingFaceDownCards
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
        return deck.slice(0, count);
    };

    const pickCardFromTop = (cardId: string, sectionId: string, faceUp: boolean) => {
        const cardIndex = deck.findIndex(card => card.id === cardId);
        if (cardIndex === -1) return;

        const [pickedCard, ...remainingCards] = deck.slice(0, 4);
        const newDeck = [...deck.slice(4)];

        setDeck(newDeck);
        setDiscardPile([...discardPile, ...remainingCards]);

        setSections(sections.map(section =>
            section.id === sectionId
                ? faceUp
                    ? { ...section, faceUpCards: [...section.faceUpCards, { ...pickedCard, faceUp: true }] }
                    : { ...section, faceDownCards: [...section.faceDownCards, { ...pickedCard, faceUp: false }] }
                : section
        ));
    };

    return {
        deck,
        discardPile,
        sections,
        addSection,
        addCard,
        discardCard,
        flipFaceDownCard,
        flipFaceUpCard,
        flipSelectedFaceDownCards,
        peekTopCards,
        pickCardFromTop
    };
}

