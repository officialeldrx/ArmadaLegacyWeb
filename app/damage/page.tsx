'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { PlusCircle, Trash2, RotateCcw, Plus } from 'lucide-react';

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

function useCardGame() {
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
                // If both deck and discard pile are empty, do nothing
                return;
            }
            // Shuffle only the discard pile back into the deck
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

    return { deck, discardPile, sections, addSection, addCard, discardCard, flipFaceDownCard };
}

export default function CardGame() {
    const { deck, discardPile, sections, addSection, addCard, discardCard, flipFaceDownCard } = useCardGame();
    const [newSectionName, setNewSectionName] = useState('');

    const handleAddSection = (e: React.FormEvent) => {
        e.preventDefault();
        if (newSectionName.trim()) {
            addSection(newSectionName.trim());
            setNewSectionName('');
        }
    };

    return (
        <div className="p-4 flex flex-col gap-4 w-full max-w-[1024px]">
            <Card className='w-full'>
                <CardHeader className='flex flex-row items-center justify-center gap-2'>
                    <h2 className="text-3xl">Deck: {deck.length}</h2>
                    <h2 className='text-3xl !-mt-1.5'>|</h2>
                    <h2 className="text-3xl !mt-0">Discard: {discardPile.length}</h2>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleAddSection} className="flex gap-2">
                        <Input
                            type="text"
                            value={newSectionName}
                            onChange={(e) => setNewSectionName(e.target.value)}
                            placeholder="Enter Ship Name"
                            className="flex-grow"
                        />
                        <Button type="submit" className='p-2'>
                            <Plus />
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <div className="space-y-4">
                {sections.map((section) => (
                    <Card key={section.id} className="p-4">
                        <h2 className="text-3xl font-bold mb-2 mr-auto w-full text-center">{section.name}</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 items-center gap-2">
                            {!section.faceDownCards.length && !section.faceUpCards.length && <div className='col-span-2 md:col-span-4 sm:col-span-3'>
                                Press the buttons below to add damage cards
                            </div>}

                            {section.faceDownCards.length > 0 && (
                                <div className="relative">
                                    <Image
                                        src="/cards/back.png"
                                        alt="Face down cards"
                                        width={70}
                                        height={100}
                                        className="w-full h-auto rounded"
                                    />

                                    <div className="absolute -top-1 -right-1 text-white p-2 rounded-full bg-primary shadow">
                                        <div className='w-4 h-4 flex items-center justify-center'>{section.faceDownCards.length}</div>
                                    </div>

                                    <Button
                                        size="sm"
                                        className="absolute -top-1 -left-1 rounded-full p-2 shadow"
                                        onClick={() => flipFaceDownCard(section.id)}
                                    >
                                        <RotateCcw className="h-4 w-4" />
                                    </Button>

                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="absolute -bottom-1 -right-1 rounded-full p-2 shadow"
                                        onClick={() => discardCard(section.id, section.faceDownCards[0].id, false)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            )}

                            {section.faceUpCards.map((card) => (
                                <div key={card.id} className="relative">
                                    <Image
                                        src={card.imageUrl}
                                        alt="Card"
                                        width={70}
                                        height={100}
                                        className="w-full h-auto rounded"
                                    />

                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="absolute -bottom-1 -right-1 rounded-full p-2"
                                        onClick={() => discardCard(section.id, card.id, true)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2 mt-4">
                            <Button variant="destructive" onClick={() => addCard(section.id, true)} className='shadow w-full'>
                                <PlusCircle className="h-4 w-4 mr-2" />
                                Face Up
                            </Button>

                            <Button variant="outline" onClick={() => addCard(section.id, false)} className=' w-full'>
                                <PlusCircle className="h-4 w-4 mr-2" />
                                Face Down
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

