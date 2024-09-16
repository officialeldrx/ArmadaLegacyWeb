"use client"

import React, { useState, useMemo, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Faction, Category, Item, Entity, resources } from '@/data/resources'
import Image from 'next/image'
import { ChevronDown, Search } from "lucide-react"

// Basic MultiSelect component
function MultiSelect({ options, selected, onChange, placeholder }: { options: any, selected: any, onChange: any, placeholder: any }) {
    const [isOpen, setIsOpen] = useState(false)
    const ref: any = useRef(null)

    const handleToggle = (value: any) => {
        const updatedSelection = selected.includes(value)
            ? selected.filter((item: any) => item !== value)
            : [...selected, value]
        onChange(updatedSelection)
    }

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref])

    return (
        <div className="relative flex-1" ref={ref}>
            <button
                onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 text-left bg-card border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between min-w-full gap-2"
            >
                <span>{selected.length > 0 ? `${selected.length} selected` : placeholder}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            <div className={`absolute z-10 mt-1 bg-card border rounded-md shadow-lg ${isOpen ? "block" : "invisible"} min-w-fit w-full`}>
                {options.map((option: any) => (
                    <label key={option.value} className="flex items-center px-4 py-2 text-nowrap">
                        <input
                            type="checkbox"
                            checked={selected.includes(option.value)}
                            onChange={() => handleToggle(option.value)}
                            className="mr-2"
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    )
}

export function FilteredTable() {
    const [typeFilters, setTypeFilters] = useState<string[]>([])
    const [categoryFilters, setCategoryFilters] = useState<string[]>([])
    const [factionFilters, setFactionFilters] = useState<string[]>([])
    const [searchFilter, setSearchFilter] = useState<string>("")

    const typeOptions = useMemo(() => {
        const types = new Set<string>()
        resources.forEach(entity => entity.items.forEach(item => types.add(item.type)))
        return Array.from(types).map(type => ({ label: type, value: type }))
    }, [])

    const categoryOptions = useMemo(() => {
        const categories = new Set<string>()
        resources.forEach(entity => {
            if (entity.category) categories.add(entity.category)
        })
        return Array.from(categories).map(category => ({ label: category, value: category }))
    }, [])

    const factionOptions = useMemo(() => {
        const factions = new Set<string>()
        resources.forEach(entity => {
            if (entity.faction) entity.faction.forEach(f => factions.add(f))
        })
        return Array.from(factions).map(faction => ({ label: faction, value: faction }))
    }, [])

    const filteredEntities = useMemo(() => {
        // Filter entities based on the given filters
        const filtered = resources.filter(entity => {
            const matchesCategory = categoryFilters.length === 0 || (entity.category && categoryFilters.includes(entity.category));
            const matchesFaction = factionFilters.length === 0 || (entity.faction && entity.faction.some(f => factionFilters.includes(f)));
            const matchesExpansion = !searchFilter || entity.name.toUpperCase().indexOf(searchFilter.toUpperCase()) > -1;
            const matchesType = typeFilters.length === 0 || entity.items.some(item => typeFilters.includes(item.type));
            return matchesCategory && matchesFaction && matchesExpansion && matchesType;
        });

        // Sort entities alphabetically by name
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
    }, [typeFilters, categoryFilters, factionFilters, searchFilter]);


    return (
        <div className="flex flex-col h-full space-y-4 max-w-[1024px] w-full">
            <div className="flex gap-4 flex-wrap">
                <div className="relative w-full flex-3">
                    <Input
                        placeholder="Search..."
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        className="w-full pl-8 pr-4 py-2 h-fit text-base bg-card"
                    />
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
                <MultiSelect
                    options={typeOptions}
                    selected={typeFilters}
                    onChange={setTypeFilters}
                    placeholder="Type"
                />

                <MultiSelect
                    options={categoryOptions}
                    selected={categoryFilters}
                    onChange={setCategoryFilters}
                    placeholder="Category"
                />

                <MultiSelect
                    options={factionOptions}
                    selected={factionFilters}
                    onChange={setFactionFilters}
                    placeholder="Faction"
                />
            </div>
            <div className="flex-grow overflow-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredEntities.map((entity) => (
                        <div key={entity.name} className="border rounded-lg shadow-sm bg-card">
                            <div className="mb-4">
                                <div className="font-bold text-2xl px-4 pt-2 pb-1">{entity.name}</div>
                                {entity.image ? <img src={entity.image} alt="" style={{width: '100%', height: 280, objectFit: 'cover'}}/> : null}
                                <div className="text-gray-600 px-4 pt-2">Category: {entity.category}</div>
                                <div className={`text-gray-600 px-4 ${!entity.faction ? 'hidden' : ''}`}>Faction: {entity.faction?.join(", ") || "N/A"}</div>
                                <div className={`text-gray-600 px-4 ${!entity.description ? 'hidden' : ''}`}>Note: {entity.description}</div>
                                {/* <div className="text-gray-600">Expansion: {entity.expansion || "N/A"}</div> */}
                            </div>

                            {["Free STL", "Paid STL", "Product"].map((type) => {
                                const itemsOfType = entity.items.filter((item) => item.type === type);
                                if (itemsOfType.length === 0) return null;

                                return (
                                    <div key={`${entity.name}-${type}`} className="mb-2 px-4">
                                        <div className="font-semibold mb-1">{type}</div>
                                        {itemsOfType.map((item, index) => (
                                            <div key={index}>
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-500 cursor-pointer block"
                                                >
                                                    - {item.name}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}