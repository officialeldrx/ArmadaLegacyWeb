'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Checkbox } from "@/components/ui/checkbox";
import Image from 'next/image'
import { Trash2, RotateCcw, Plus, Eye } from 'lucide-react';
import { useCardGame, Card as GameCard } from '@/hooks/useCardGame';
import { FaceDownCardsDialog } from '@/components/FaceDownCardsDialog';
import { PeekTopCardsDialog } from '@/components/PeekTopCardsDialog';
import { FaceUpIcon } from '@/components/FaceUpIcon';
import { FaceDownIcon } from '@/components/FaceDownIcon';

export default function CardGame() {
    const {
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
    } = useCardGame();
    const [newSectionName, setNewSectionName] = useState('');
    const [faceDownDialogOpen, setFaceDownDialogOpen] = useState(false);
    const [peekDialogOpen, setPeekDialogOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState<string | null>(null);
    const [topCards, setTopCards] = useState<GameCard[]>([]);
    const [isGeneralDodonna, setIsGeneralDodonna] = useState(false);

    const handleAddSection = (e: React.FormEvent) => {
        e.preventDefault();
        if (newSectionName.trim()) {
            addSection(newSectionName.trim());
            setNewSectionName('');
        }
    };

    const openFaceDownCardsDialog = (sectionId: string) => {
        setCurrentSection(sectionId);
        setFaceDownDialogOpen(true);
    };

    const openPeekTopCardsDialog = () => {
        setTopCards(peekTopCards());
        setPeekDialogOpen(true);
    };

    const handlePickCard = (cardId: string) => {
        if (currentSection) {
            pickCardFromTop(cardId, currentSection, true);
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
                    <div className="flex items-center mb-4 ml-1">
                        <Checkbox
                            id="generalDodonna"
                            checked={isGeneralDodonna}
                            onCheckedChange={(checked) => setIsGeneralDodonna(checked === true)}
                        />
                        <label htmlFor="generalDodonna" className="ml-2 text-sm font-medium">
                            General Dodonna
                        </label>
                    </div>

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

            <div className="space-y-4 pb-4">
                {sections.map((section) => (
                    <Card key={section.id} className="p-4">
                        <h2 className="text-3xl font-bold mb-2 mr-auto w-full text-center">{section.name}</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 items-center gap-4">
                            {!section.faceDownCards.length && !section.faceUpCards.length && (
                                <div className='col-span-2 md:col-span-4 sm:col-span-3'>
                                    Press the buttons below to add damage cards
                                </div>
                            )}

                            {section.faceDownCards.length > 0 && (
                                <div className="relative">
                                    <Image
                                        src="/cards/back.png"
                                        alt="Face down cards"
                                        width={70}
                                        height={100}
                                        className="w-full h-auto rounded-sm"
                                    />
                                    <div className="absolute top-2 right-2 text-white p-2 rounded-full bg-black shadow bg-opacity-70">
                                        <div className='w-4 h-4 flex items-center text-sm justify-center'>{section.faceDownCards.length}</div>
                                    </div>
                                    <div className="absolute inset-x-2 bottom-2 flex justify-between px-2 py-1 bg-black bg-opacity-70 rounded-lg">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="h-6 w-6 p-0"
                                            onClick={() => flipFaceDownCard(section.id)}
                                        >
                                            <RotateCcw className="h-4 w-4 text-white" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="h-6 w-6 p-0"
                                            onClick={() => openFaceDownCardsDialog(section.id)}
                                        >
                                            <Eye className="h-4 w-4 text-white" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="h-6 w-6 p-0"
                                            onClick={() => discardCard(section.id, section.faceDownCards[0].id, false)}
                                        >
                                            <Trash2 className="h-4 w-4 text-white" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {section.faceUpCards.map((card) => (
                                <div key={card.id} className="relative">
                                    <Image
                                        src={card.imageUrl}
                                        alt="Card"
                                        width={70}
                                        height={100}
                                        className="w-full h-auto rounded-sm"
                                    />
                                    <div className="absolute inset-x-2 bottom-2 flex justify-between py-1 px-2 bg-black bg-opacity-70 rounded-lg">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="h-6 w-6 p-0"
                                            onClick={() => flipFaceUpCard(section.id, card.id)}
                                        >
                                            <RotateCcw className="h-4 w-4 text-white" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="h-6 w-6 p-0"
                                            onClick={() => discardCard(section.id, card.id, true)}
                                        >
                                            <Trash2 className="h-4 w-4 text-white" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2 mt-4">
                            <Button variant="outline" onClick={() => addCard(section.id, false)} className='w-full'>
                                <FaceDownIcon className="h-6 w-6 mr-2" />
                            </Button>

                            <Button variant="destructive" onClick={() => addCard(section.id, true)} className='shadow w-full'>
                                <FaceUpIcon className="h-6 w-6 mr-2" />
                            </Button>

                            {isGeneralDodonna && (
                                <Button variant="secondary" onClick={() => {
                                    setCurrentSection(section.id);
                                    openPeekTopCardsDialog();
                                }} className='w-full'>
                                    <Eye className="h-4 w-4 mr-2" />
                                </Button>
                            )}
                        </div>
                    </Card>
                ))}
            </div>

            {currentSection && (
                <FaceDownCardsDialog
                    isOpen={faceDownDialogOpen}
                    onClose={() => setFaceDownDialogOpen(false)}
                    cards={sections.find(s => s.id === currentSection)?.faceDownCards || []}
                    onFlipCards={(cardIds) => flipSelectedFaceDownCards(currentSection, cardIds)}
                />
            )}

            <PeekTopCardsDialog
                isOpen={peekDialogOpen}
                onClose={() => setPeekDialogOpen(false)}
                cards={topCards}
                onPickCard={handlePickCard}
            />
        </div>
    );
}

