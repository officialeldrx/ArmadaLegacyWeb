'use client'

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from '@/hooks/useCardGame';
import Image from 'next/image'

interface PeekTopCardsDialogProps {
    isOpen: boolean;
    onClose: () => void;
    cards: Card[];
    onPickCard: (cardId: string) => void;
}

export function PeekTopCardsDialog({ isOpen, onClose, cards, onPickCard }: PeekTopCardsDialogProps) {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);

    const handlePickCard = () => {
        if (selectedCard) {
            onPickCard(selectedCard);
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] flex flex-col h-[80vh]">
                <DialogHeader>
                    <DialogTitle>Pick a card from the top 4</DialogTitle>
                </DialogHeader>
                <div className="flex-grow overflow-y-auto border-t border-b">
                    <div className="grid grid-cols-2 gap-4 p-4">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className={`relative cursor-pointer rounded-lg overflow-hidden ${selectedCard === card.id ? 'ring-2 ring-primary' : ''
                                    }`}
                                onClick={() => setSelectedCard(card.id)}
                            >
                                <Image
                                    src={card.imageUrl}
                                    alt="Card"
                                    width={600}
                                    height={836}
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <DialogFooter className="mt-0">
                    <Button onClick={handlePickCard} disabled={!selectedCard}>
                        Pick Card
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

