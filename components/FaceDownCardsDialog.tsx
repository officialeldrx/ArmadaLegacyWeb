'use client'

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from '../hooks/useCardGame';
import Image from 'next/image'
import { Checkbox } from "@/components/ui/checkbox"

interface FaceDownCardsDialogProps {
    isOpen: boolean;
    onClose: () => void;
    cards: Card[];
    onFlipCards: (cardIds: string[]) => void;
}

export function FaceDownCardsDialog({ isOpen, onClose, cards, onFlipCards }: FaceDownCardsDialogProps) {
    const [selectedCards, setSelectedCards] = useState<string[]>([]);

    const handleCardSelect = (cardId: string) => {
        setSelectedCards(prev =>
            prev.includes(cardId)
                ? prev.filter(id => id !== cardId)
                : [...prev, cardId]
        );
    };

    const handleFlipCards = () => {
        onFlipCards(selectedCards);
        setSelectedCards([]);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] flex flex-col h-[80vh]">
                <DialogHeader>
                    <DialogTitle>Face Down Cards</DialogTitle>
                </DialogHeader>
                <div className="flex-grow overflow-y-auto border-t border-b">
                    <div className="grid grid-cols-2 gap-4 p-4">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className={`relative cursor-pointer rounded-lg overflow-hidden ${selectedCards.includes(card.id) ? 'ring-2 ring-primary' : ''
                                    }`}
                                onClick={() => handleCardSelect(card.id)}
                            >
                                <Image
                                    src={card.imageUrl}
                                    alt="Card"
                                    width={600}
                                    height={836}
                                    className="w-full h-auto"
                                />
                                <Checkbox
                                    id={`card-${card.id}`}
                                    checked={selectedCards.includes(card.id)}
                                    onCheckedChange={() => handleCardSelect(card.id)}
                                    className="absolute top-2 left-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <DialogFooter className="mt-0">
                    <Button onClick={handleFlipCards} disabled={selectedCards.length === 0}>
                        Flip Selected Cards
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

