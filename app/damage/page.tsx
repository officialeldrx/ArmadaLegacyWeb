'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Checkbox } from "@/components/ui/checkbox";
import Image from 'next/image'
import { Trash2, RotateCcw, Plus, Eye, RefreshCw, Pencil, X, Check } from 'lucide-react';
import { useCardGame, Card as GameCard } from '@/hooks/useCardGame';
import { FaceDownCardsDialog } from '@/components/FaceDownCardsDialog';
import { PeekTopCardsDialog } from '@/components/PeekTopCardsDialog';
import { CritIcon } from '@/components/CritIcon';
import { DamageIcon } from '@/components/DamageIcon';

export default function CardGame() {
    const {
        deck,
        discardPile,
        sections,
        addSection,
        addCard,
        editSection,
        discardCard,
        flipFaceDownCard,
        flipFaceUpCard,
        flipSelectedFaceDownCards,
        peekTopCards,
        pickCardFromTop,
        startNewGame,
        deleteSection,
        closePeekDialog
    } = useCardGame();
    const [newSectionName, setNewSectionName] = useState('');
    const [faceDownDialogOpen, setFaceDownDialogOpen] = useState(false);
    const [peekDialogOpen, setPeekDialogOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState<string | null>(null);
    const [topCards, setTopCards] = useState<GameCard[]>([]);
    const [isGeneralDodonna, setIsGeneralDodonna] = useState(false);
    const [editingSectionId, setEditingSectionId] = useState<string | null>(null);
    const [editingSectionName, setEditingSectionName] = useState('');

    const handleAddSection = (e: React.FormEvent) => {
        e.preventDefault();
        addSection(newSectionName.trim() || 'Ship ' + sections.length);
        setNewSectionName('');
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

    const startEditingSection = (sectionId: string, currentName: string) => {
        setEditingSectionId(sectionId);
        setEditingSectionName(currentName);
    };

    const saveEditedSection = () => {
        if (editingSectionId) {
            editSection(editingSectionId, editingSectionName);
            setEditingSectionId(null);
            setEditingSectionName('');
        }
    };

    const cancelEditingSection = () => {
        setEditingSectionId(null);
        setEditingSectionName('');
    };

    return (
        <div className="p-4 flex flex-col gap-4 w-full max-w-[1024px]">
            <Card className='w-full'>
                <CardHeader className='flex flex-row items-center justify-between gap-2'>
                    <div className="flex items-center gap-2">
                        <h2 className="text-3xl">Deck: {deck.length}</h2>
                        <h2 className='text-3xl !-mt-1.5 text-center'>|</h2>
                        <h2 className="text-3xl !mt-0">Discard: {discardPile.length}</h2>
                    </div>
                    <Button variant="outline" onClick={startNewGame} className="!mt-0">
                        <RefreshCw className="h-4 w-4" />
                    </Button>
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

                    <form onSubmit={handleAddSection} className="flex gap-2 relative">
                        <Input
                            type="text"
                            value={newSectionName}
                            onChange={(e) => setNewSectionName(e.target.value)}
                            placeholder={'Ship ' + sections.length}
                            className="flex-grow rounded-full"
                        />
                        <Button variant="link" className='p-2 right-2 absolute rounded-full'>
                            <Plus className='w-4 h-4' />
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <div className="space-y-4 pb-4">
                {sections.map((section) => (
                    <Card key={section.id} className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            {editingSectionId === section.id ? (
                                <Input
                                    value={editingSectionName}
                                    onChange={(e) => setEditingSectionName(e.target.value)}
                                    style={{ fontFamily: 'var(--title)' }}
                                    className="text-3xl pt-2.5 mr-2 w-fullshadow-none ring-0 focus-visible:ring-0"
                                />
                            ) : (
                                <Input
                                    value={section.name}
                                    readOnly
                                    style={{ fontFamily: 'var(--title)' }}
                                    className="text-3xl pt-2.5 mr-2 w-full px-0 border-transparent shadow-none ring-0 focus-visible:ring-0"
                                />
                            )}
                            <div className="flex gap-2">
                                {editingSectionId === section.id ? (
                                    <>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={saveEditedSection}
                                        >
                                            <Check className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={cancelEditingSection}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => startEditingSection(section.id, section.name)}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => deleteSection(section.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>

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
                                        width={600}
                                        height={836}
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
                                        width={600}
                                        height={836}
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
                                <DamageIcon className="h-6 w-6 mr-2" />
                            </Button>

                            <Button variant="destructive" onClick={() => addCard(section.id, true)} className='shadow w-full'>
                                <CritIcon className="h-6 w-6 mr-2" />
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
                onClose={(cardId: string) => {
                    setPeekDialogOpen(false);
                    closePeekDialog(cardId);
                }}
                cards={topCards}
                onPickCard={handlePickCard}
            />
        </div>
    );
}

