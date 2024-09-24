type Faction = "Empire" | "Republic" | "Separatist" | "Rebel";
type Category = "Ship" | "Squadron" | "Play Material" | "Service";

interface Item {
    type: "Free STL" | "Paid STL" | "Model" | "Card" | "Base Token" | "Product";
    url: string;
    name: string;
}

interface Entity {
    name: string;
    category: Category;
    faction?: Faction[];  // Optional faction field
    image: string;
    items: Item[];
    description?: string;
}

const resources: Entity[] = [
    {
        name: "Acclamator Assault Ship",
        category: "Ship",
        faction: ["Republic"],
        image: "https://cdnb.artstation.com/p/assets/images/images/022/676/681/large/lukasz-jaskolski-acclamator-class-assault-ship.jpg?1576276890",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6670062",
                name: "Armada Legacy",
            },
            {
                type: "Paid STL",
                url: "https://susyard.gumroad.com/l/acclam",
                name: "Slightly Used Space Ships Yard",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/republic-transport-acclama-class-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1469194243",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1473911397",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.shapeways.com/product/9CAWMDNGU/armada-acclamator-assault-ship?optionId=57284170&li=shops",
                name: "Mel Miniatures",
            },
        ],
    },
    {
        name: "Arquitens Light Cruiser",
        category: "Ship",
        faction: ["Empire"],
        image: "https://i.pinimg.com/736x/bd/ae/f8/bdaef8b5cc138592ad69901bcd6266cd.jpg",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:5414852",
                name: "Onil_Creations",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/arquitens-class-cruiser-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1480990779",
                name: "Onil_Creations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1468864267",
                name: "Onil_Creations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1246095666",
                name: "Onil_Creations",
            },
            {
                type: "Product",
                url: "https://www.shapeways.com/product/AQWHP3HW3/armada-clone-wars-200m-arquitens-light-cruiser?optionId=253197191&li=marketplace",
                name: "Mel Miniatures",
            },
            {type: "Model", url: "https://memnochmanufacturing.etsy.com/listing/1441812930", name: "Memnoch Manufacturing " }
        ],
    },
    {
        name: "Consular Cruiser",
        category: "Ship",
        faction: ["Republic"],
        image: "https://diceandcardboard.com/content/images/2021/05/swm34_preview3.jpeg",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6670096",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/c70-class-charger-stl-armada/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1499502341",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.shapeways.com/product/Q59BGLX27/armada-republic-frigate?optionId=59861797&li=shops",
                name: "Mel Miniatures",
            },
        ],
    },
    {
        name: "Pelta Frigate",
        category: "Ship",
        faction: ["Republic", "Rebel"],
        image: "https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/54730029_10157037493628419_5949489741819805696_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=qnkkRhKQaoMQ7kNvgEPCaXl&_nc_ht=scontent-msp1-1.xx&_nc_gid=AjrStbRdUuJXB6viGMimxJ4&oh=00_AYDOaeuRpHRvnsziaNqLmUFABfms5CAqvqxDet2UyFu5nQ&oe=67179FDB",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6683593",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/pelta-class-frigate-stl/",
                name: "Ethan LeRoith",
            },
            {type: "Model", url: "https://pulsefiredgaming.etsy.com/listing/1798809445/republic-pelta-class-frigate-for-star", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "Venator Star Destroyer",
        category: "Ship",
        faction: ["Empire", "Republic"],
        image: "https://artistmonkeys.com/wp-content/uploads/2021/10/Venator-class-Star-Destroyer-1.jpg",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6663283",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/venator-class-star-destroyer-stl-armada/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1532337159",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.shapeways.com/product/K7N8B6ZN9/armada-venator-star-destroyer?optionId=56607638&li=shops",
                name: "Mel Miniatures",
            },
        ],
    },
    {
        name: "Victory Star Destroyer",
        category: "Ship",
        faction: ["Empire", "Republic"],
        image: "https://www.belloflostsouls.net/wp-content/uploads/2021/09/victory-ii-warlord.jpg",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6664810",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://www.etsy.com/listing/1014014910",
                name: "OnilCreations",
            },
            {
                type: "Paid STL",
                url: "https://www.etsy.com/listing/1393751209",
                name: "OnilCreations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1385182066",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1680095596",
                name: "MemnochManufacturing",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1384642148",
                name: "WesJanson3D",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1400054669",
                name: "SabreWorkshop",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1454653704",
                name: "TheShipBuilder",
            },
            {type: "Model", url: "https://memnochmanufacturing.etsy.com/listing/1613705267", name: "Memnoch Manufacturing " },
            {type: "Model", url: "https://memnochmanufacturing.etsy.com/listing/1680095596", name: "Memnoch Manufacturing " }
        ],
    },
    {
        name: "Hardcell Transport",
        category: "Ship",
        faction: ["Separatist"],
        image: "https://preview.redd.it/stat-that-ship-hardcell-class-interstellar-transport-v0-l79shd9tquia1.png?width=640&crop=smart&auto=webp&s=db184dd8ca7155a617b5c7ab5bd7f762c2f52604",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:4329950",
                name: "Onil_Creations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1546152034",
                name: "Pulsefired Gaming",
            },
        ],
    },
    {
        name: "Gozanti Assault Carriers",
        category: "Ship",
        faction: ["Separatist", "Empire"],
        image: "https://lumiere-a.akamaihd.net/v1/images/image_c5bf105d.jpeg?region=0%2C0%2C1920%2C1080",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:5359153",
                name: "cadetvw",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/gozanti-class-cruiser-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Paid STL",
                url: "https://www.etsy.com/listing/1603529632",
                name: "OnilCreations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1547463798",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.shapeways.com/product/QHJ528HEK/armada-c-roc-gozanti-cruiser?optionId=56533018&li=marketplace",
                name: "Mel Miniatures",
            },
        ],
    },
    {
        name: "Munificent Frigate",
        category: "Ship",
        faction: ["Separatist"],
        image: "https://images-cdn.fantasyflightgames.com/filer_public/f0/df/f0df3dca-e532-4e55-afb5-901d2df428f3/swm35_preview2.jpg",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/munificent-class-stl-armada/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1436073824",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.shapeways.com/product/47B638XWE/armada-munificent-frigate?optionId=57256553&li=shops",
                name: "Mel Miniatures",
            },
        ],
    },
    {
        name: "Providence Dreadnaught",
        category: "Ship",
        faction: ["Separatist", "Rebel"],
        image: "https://external-preview.redd.it/btHHeguzPtGu6_pZc1f9Q0tGESI5xtypmwCfzKebAv8.jpg?width=640&crop=smart&auto=webp&s=4d9b81dd01aebe13ffb04345f44ee9f7b44a2877",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:4701011",
                name: "RVBLegend",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/providence-stl-armada/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1453545643",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.shapeways.com/product/HU36CG3JH/armada-providence-destroyer-quot-invisible-hand-quot?optionId=58370224&li=shops",
                name: "Mel Miniatures",
            },
        ],
    },
    {
        name: "Recusant Destroyer",
        category: "Ship",
        faction: ["Separatist"],
        image: "https://external-preview.redd.it/recusant-class-light-destroyer-by-ferenc-patk%C3%B3s-v0-dtxpISb5eFgXtf82CdeHwbRN4g9Rai6eXcJ9JR75PMo.jpg?auto=webp&s=746ec51fa296d0c3b55e7ee36c3d8cad22b04ef6",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/recusant-class-light-destroyer-stlarmada/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1453217219",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.shapeways.com/product/4Q3B6TDN8/armada-recusant-destroyer?optionId=60538935&li=shops",
                name: "Mel Miniatures",
            },
        ],
    },
    // {
    //     name: "Assault Frigate Mark I",
    //     category: "Ship",
    //     faction: ["Rebel"],
    //     image: "",
    //     items: [
    //         {
    //             type: "Free STL",
    //             url: "https://www.thingiverse.com/thing:4748795",
    //             name: "Onil_Creations",
    //         },
    //         {
    //             type: "Free STL",
    //             url: "https://www.thingiverse.com/thing:4700431",
    //             name: "Onil_Creations",
    //         },
    //         {
    //             type: "Product",
    //             url: "https://www.etsy.com/listing/1467667985",
    //             name: "Pulsefired Gaming",
    //         },
    //         {
    //             type: "Product",
    //             url: "https://www.etsy.com/listing/1454377960",
    //             name: "Pulsefired Gaming",
    //         },
    //         {
    //             type: "Product",
    //             url: "https://www.etsy.com/listing/1381161750",
    //             name: "SabreWorkshop",
    //         },
    //         {
    //             type: "Product",
    //             url: "https://www.etsy.com/listing/1392292691",
    //             name: "SabreWorkshop",
    //         },
    //         {
    //             type: "Product",
    //             url: "https://www.etsy.com/listing/1468909921",
    //             name: "TheShipBuilder",
    //         },
    //         {
    //             type: "Product",
    //             url: "https://www.shapeways.com/product/ZW2VWHVMA/armada-assault-frigate-mk-i-type-v?optionId=60727774&li=shops",
    //             name: "Mel Miniatures",
    //         },
    //     ],
    // },
    {
        name: "Assault Frigate Mark II",
        category: "Ship",
        image: "https://lh6.googleusercontent.com/proxy/mim2NZOaCz-v2shMInsrZN9jsiblwJpDMy-KfIWEI857Cfs1FxDpsGRfBuMEDaaf4SExnkaFXwKkyStFcBnJv86aPOyxWZdqMI6uCbmCEE5eyZmXn-VTFJEA",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6683615",
                name: "Armada_Legacy"
            },
            {
                type: "Paid STL",
                url: "https://susyard.gumroad.com/l/ASFMkII",
                name: "Slightly Used Space Ships Yard"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1456488672",
                name: "Pulsefired Gaming"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1468924647",
                name: "TheShipBuilder"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1440338930",
                name: "SabreWorkshop"
            }
        ]
    },
    {
        name: "CR90 Corvette",
        category: "Ship",
        faction: ["Rebel"],
        image: "https://swrpggm.com/wp-content/uploads/2021/02/CorellianCR90_FE.png",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:5193823",
                name: "Onil_Creations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1468878623",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1494711003",
                name: "WesJanson3D",
            },
        ],
    },
    {
        name: "Hammerhead Corvette",
        category: "Ship",
        faction: ["Rebel"],
        image: "https://lumiere-a.akamaihd.net/v1/images/hammerhead-corvette-rogue-update_453ce60b.jpeg?region=154%2C0%2C892%2C502",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:3130988",
                name: "Chieftom22",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1473477129",
                name: "WesJanson3D",
            },
        ],
    },
    {
        name: "MC30c Frigate",
        category: "Ship",
        faction: ["Rebel"],
        image: "https://images-cdn.fantasyflightgames.com/filer_public/ff/3a/ff3abcff-d6ad-4cd1-b38b-e62fd3f01bea/swm12_preview.jpg",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6674551",
                name: "Armada_Legacy",
            },
            {
                type: "Product",
                url: "https://www.shapeways.com/product/VXSKNB3EU/70-mc30c-peg",
                name: "Space Supply Depot",
            },
        ],
    },
    {
        name: "MC75 Profundity",
        category: "Ship",
        faction: ["Rebel"],
        image: "https://pbs.twimg.com/media/FOtla6YWYAYqfFL.jpg:large",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/mc75-class-stl-kopie/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1515344610",
                name: "Pulsefired Gaming",
            },
        ],
    },
    {
        name: "MC80 Home One",
        category: "Ship",
        faction: ["Rebel"],
        image: "https://lumiere-a.akamaihd.net/v1/images/home-one-main_784f4f9b.jpeg?region=207%2C1%2C1606%2C803",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6683582",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://www.etsy.com/listing/1272402470",
                name: "OnilCreations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1454682250",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1388102799",
                name: "SabreWorkshop",
            },
            {type: "Model", url: "https://pulsefiredgaming.etsy.com/listing/1797843457/rebel-mc80-home-one-cruiser-for-star", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "MC80 Liberty",
        category: "Ship",
        faction: ["Rebel"],
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/419fa4cc-f4d6-4a6d-999a-e7c6a5eebd8e/d9axrld-b143ead5-e849-4052-9c37-e3b33bf4c3fa.jpg/v1/fill/w_900,h_735,q_75,strp/mc80_liberty_type_cruiser_by_anthonydevine_d9axrld-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM1IiwicGF0aCI6IlwvZlwvNDE5ZmE0Y2MtZjRkNi00YTZkLTk5OWEtZTdjNmE1ZWViZDhlXC9kOWF4cmxkLWIxNDNlYWQ1LWU4NDktNDA1Mi05YzM3LWUzYjMzYmY0YzNmYS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pDuRoTYLR_6PnSTxTXPTX3mriKMmOkciTpgF5zGd5rA",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6670089",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://www.etsy.com/listing/1286419395",
                name: "OnilCreations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1394201424",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1454682250",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1431024209",
                name: "SabreWorkshop",
            },
        ],
    },
    {
        name: "Nebulon-B Frigate",
        category: "Ship",
        faction: ["Rebel"],
        image: "https://i.pinimg.com/originals/f5/9b/f1/f59bf13217a478239879291ce21fb8c0.jpg",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:5081007",
                name: "Onil_Creations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1454670022",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1453294330",
                name: "SabreWorkshop",
            },
        ],
    },
    {
        name: "GR-75 Transports",
        category: "Ship",
        faction: ["Rebel"],
        image: "https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/116925120_1208753406168014_4251484944394060228_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=CEwKaGzXGD4Q7kNvgEfGUl8&_nc_ht=scontent-msp1-1.xx&_nc_gid=AfhHEdFIU5nC5an1_jfNHa1&oh=00_AYCrK-ch_0djTN6m8nHdo-FAuMduCBeBJIvnDfo_1Be-Wg&oe=6717A7DE",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671437",
                name: "Armada_Legacy",
            },
            {type: "Paid STL", url: "https://cults3d.com/en/3d-model/game/gr-75-rebel-transport-star-wars-armada-miniman13", name: "Tev'an shipyards" },
            {type: "Model", url: "https://pulsefiredgaming.etsy.com/listing/1787232501/gr-75-medium-transport-flotilla-2-ships", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "Starhawk Battleship",
        category: "Ship",
        faction: ["Rebel"],
        image: "https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/76615090_802665896860606_3678306276871241728_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=Uo1xlSCcrPMQ7kNvgFxnLls&_nc_ht=scontent-msp1-1.xx&_nc_gid=AFZ1CgB9-P5281xlnqgyvDp&oh=00_AYDhltZbTGU5zfaeib2Llv7hyMGphfxZeu2l16im55l1nw&oe=6717B622",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:4810652",
                name: "darkgref",
            },
            {
                type: "Product",
                url: "https://www.shapeways.com/product/EQEBWF43A/armada-starhawk-prototype-two-parts",
                name: "Mel Miniatures",
            },
        ],
    },
    {
        name: "Gladiator Star Destroyer",
        category: "Ship",
        faction: ["Empire"],
        image: "https://i.redd.it/til-that-the-gladiator-class-star-destroyer-made-its-first-v0-2wyln99rjicc1.jpg?width=2420&format=pjpg&auto=webp&s=0fe896082b48d2bf9690141954e6495f9903d889",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:4384393",
                name: "R2Printer77",
            },
            {
                type: "Paid STL",
                url: "https://susyard.gumroad.com/l/gladiator",
                name: "Slightly Used Space Ships Yard",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1532642362",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1454740480",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1416875886",
                name: "SabreWorkshop",
            },
        ],
    },
    {
        name: "Imperial Raider",
        category: "Ship",
        faction: ["Empire"],
        image: "https://images-cdn.fantasyflightgames.com/filer_public/67/34/673477de-a4b7-4908-9619-b65db92c5eef/raider-asteroids-art.jpg",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6119208",
                name: "Peacedemo",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/raider-class-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1732832670",
                name: "Pulsefired Gaming",
            },
        ],
    },
    {
        name: "Imperial Star Destroyer",
        category: "Ship",
        faction: ["Empire"],
        image: "https://artistmonkeys.com/wp-content/uploads/2021/09/Star-Destroyer-Empire-in-clouds.jpg",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6664770",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/imperial-star-destroyer-class-i-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/imperial-star-destroyer-class-ii-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Paid STL",
                url: "https://www.etsy.com/listing/1603495246/imperial-sd-pack-presuported",
                name: "OnilCreations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1450832868",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1450851386",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1468897841",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1640872431",
                name: "MemnochManufacturing",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1584961856",
                name: "WesJanson3D",
            },
        ],
    },
    {
        name: "Interdictor",
        category: "Ship",
        faction: ["Empire"],
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/419fa4cc-f4d6-4a6d-999a-e7c6a5eebd8e/daeraxf-a6840b22-0eb3-4db0-ba53-3d5cae3f753d.jpg/v1/fill/w_905,h_443,q_75,strp/star_wars_interdictor_by_anthonydevine_daeraxf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDQzIiwicGF0aCI6IlwvZlwvNDE5ZmE0Y2MtZjRkNi00YTZkLTk5OWEtZTdjNmE1ZWViZDhlXC9kYWVyYXhmLWE2ODQwYjIyLTBlYjMtNGRiMC1iYTUzLTNkNWNhZTNmNzUzZC5qcGciLCJ3aWR0aCI6Ijw9OTA1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Xi5ngP91tbQwJvQVp92E9yIxuRXnumQKkYiSjj_uO-s",
        description: "You may need to select Interdictor from a list of options for some of these links",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:4964733",
                name: "Onil_Creations",
            },
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6664798",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/immobilizer-418-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1413378265/imperial-vindicator-heavy-cruiser",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1473916935",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1417370092",
                name: "SabreWorkshop",
            },
            
        ],
    },
    {
        name: "Onager Star Destroyer",
        category: "Ship",
        faction: ["Empire"],
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/657811c3-939d-4d1e-8fa5-d1adbf999420/ddpy28k-99a447a3-724f-4d35-ac76-3c6591e7304f.jpg/v1/fill/w_1600,h_900,q_75,strp/onager_opens_fire_by_ravendeviant_ddpy28k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNjU3ODExYzMtOTM5ZC00ZDFlLThmYTUtZDFhZGJmOTk5NDIwXC9kZHB5MjhrLTk5YTQ0N2EzLTcyNGYtNGQzNS1hYzc2LTNjNjU5MWU3MzA0Zi5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.OfDGg7gt4u9Ka3XAgs7_8GCUULS0YsIiOPSA15a7IxM",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6683636",
                name: "Armada_Legacy",
            },
        ],
    },
    {
        name: "Super Star Destroyer",
        category: "Ship",
        faction: ["Empire"],
        image: "https://i.pinimg.com/736x/d2/2a/07/d22a07d6210e907f49e60685567fb686.jpg",
        description: "This model is not sized to be used as a huge-sized Armada SSD as of 6/16/2024",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/executor-class-stl-armada/",
                name: "Ethan LeRoith",
            },
        ],
    },
    {
        name: "Belbullab",
        category: "Squadron",
        faction: ["Separatist"],
        image: "https://lumiere-a.akamaihd.net/v1/images/databank_soullessone_01_169_08305d9b.jpeg?region=0%2C0%2C1560%2C878",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671886",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/belbullab-22-stl/",
                name: "Ethan LeRoith",
            },
        ],
    },
    // {
    //   name: "HMP Gunship",
    //   category: "Squadron",
    //   faction: ["Separatist"],
    //   image: "",
    //   description: "",
    //   items: [
    //     {
    //       type: "Free STL",
    //       url: "https://www.thingiverse.com/thing:5365444",
    //       name: "RVBLegend",
    //     },
    //     {
    //       type: "Product",
    //       url: "https://www.etsy.com/listing/1568404510",
    //       name: "TheShipBuilder",
    //     },
    //     {
    //       type: "Product",
    //       url: "https://www.etsy.com/listing/1563569242",
    //       name: "SabreWorkshop",
    //     },
    //   ],
    // },
    {
        name: "Hyena",
        category: "Squadron",
        faction: ["Separatist"],
        image: "https://cdnb.artstation.com/p/assets/images/images/023/663/681/large/darren-tan-xw-hyena-bomber-da-02.jpg?1579937772",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671887",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/hyena-droid-bomber-stl-armada/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1671801950",
                name: "Pulsefired Gaming",
            },
        ],
    },
    // {
    //   name: "Nantex",
    //   category: "Squadron",
    //   faction: ["Separatist"],
    //   image: "",
    //   description: "",
    //   items: [
    //     {
    //       type: "Free STL",
    //       url: "https://www.thingiverse.com/thing:5406474",
    //       name: "Onil_Creations",
    //     },
    //     {
    //       type: "Paid STL",
    //       url: "https://susyard.gumroad.com/l/XW-Nantex",
    //       name: "Slightly Used Space Ships Yard",
    //     },
    //     {
    //       type: "Paid STL",
    //       url: "https://resinengine.com/product/nantex-class-stl/",
    //       name: "Ethan LeRoith",
    //     },
    //     {
    //       type: "Product",
    //       url: "https://www.etsy.com/listing/1231806650",
    //       name: "WesJanson3D",
    //     },
    //     {
    //       type: "Product",
    //       url: "https://www.etsy.com/listing/1668068951",
    //       name: "TheShipBuilder",
    //     },
    //     {
    //       type: "Product",
    //       url: "https://www.etsy.com/listing/1573990353",
    //       name: "SabreWorkshop",
    //     },
    //   ],
    // },
    // {
    //   name: "Rogue Starfighter",
    //   category: "Squadron",
    //   faction: ["Rebel"],
    //   image: "",
    //   description: "",
    //   items: [
    //     {
    //       type: "Paid STL",
    //       url: "https://resinengine.com/product/rouge-class-stl/",
    //       name: "Ethan LeRoith",
    //     },
    //   ],
    // },
    // {
    //   name: "Sith Infiltrator",
    //   category: "Squadron",
    //   faction: ["Separatist"],
    //   image: "",
    //   description: "",
    //   items: [
    //     {
    //       type: "Product",
    //       url: "https://www.etsy.com/listing/1326079471",
    //       name: "WesJanson3D",
    //     },
    //     {
    //       type: "Product",
    //       url: "https://www.etsy.com/listing/1740495999",
    //       name: "TheShipBuilder",
    //     },
    //   ],
    // },
    {
        name: "Tri-fighter",
        category: "Squadron",
        faction: ["Separatist"],
        image: "https://i.pinimg.com/originals/24/4a/ea/244aea8cb4e9587c356fb3a7005453b1.jpg",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671879",
                name: "Armada_Legacy",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1671790824",
                name: "Pulsefired Gaming",
            },
            {type: "Paid STL", url: "https://cults3d.com/en/3d-model/game/driod-tri-fighter-star-wars-armada", name: "Tev'an shipyards" }
        ],
    },
    {
        name: "Vulture",
        category: "Squadron",
        faction: ["Separatist"],
        image: "https://images-cdn.fantasyflightgames.com/filer_public/6e/41/6e41ad0d-332d-40a4-b6fb-a9bb3b6314a2/swz31_preview1.jpg",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671867",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/vulture-droid-stl-armada/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1685983205",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1568420394",
                name: "TheShipBuilder",
            },
        ],
    },
    {
        name: "ARC-170",
        category: "Squadron",
        faction: ["Republic"],
        image: "https://cdnb.artstation.com/p/assets/images/images/014/655/401/large/daniel-jimenez-villalba-arc-170-starfighter.jpg?1544878975&dl=1",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671849",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/arc-170-squadrons-stl-armada/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1691215962",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1307359386",
                name: "WesJanson3D",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1582640707",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1678837378",
                name: "SabreWorkshop",
            },
        ],
    },
    {
        name: "BTL-B Y-wing",
        category: "Squadron",
        faction: ["Republic"],
        image: "https://steamuserimages-a.akamaihd.net/ugc/770613072976639531/99978427DF6F1E43580E53FF07E7BFDF346D2C97/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671834",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/clone-y-wing-stl-armada/",
                name: "Ethan LeRoith",
            },
            {type: "Model", url: "https://www.etsy.com/listing/1778433975/republic-y-wing-starfighter-squadron-6", name: "Pulsefired Gaming" }
        ],
    },
    //   {
    //     name: "Clone Z-95",
    //     category: "Squadron",
    //     faction: ["Republic"],
    //     image: "",
    //     description: "",
    //     items: [
    //       {
    //         type: "Paid STL",
    //         url: "https://resinengine.com/product/z-95-squad-stl/",
    //         name: "Ethan LeRoith",
    //       },
    //       {
    //         type: "Product",
    //         url: "https://www.etsy.com/listing/1705403923",
    //         name: "Pulsefired Gaming",
    //       },
    //       {
    //         type: "Product",
    //         url: "https://www.etsy.com/listing/1224522480",
    //         name: "WesJanson3D",
    //       },
    //       {
    //         type: "Product",
    //         url: "https://www.etsy.com/listing/1568435972",
    //         name: "TheShipBuilder",
    //       },
    //     ],
    //   },
    {
        name: "Delta-7",
        category: "Squadron",
        faction: ["Republic"],
        image: "https://lumiere-a.akamaihd.net/v1/images/delta-7-starfighter_fe9a59bc.jpeg?region=0%2C304%2C1560%2C873",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671837",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/delta-7-aethersprite-class-light-interceptor-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1494709340",
                name: "WesJanson3D",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1597484621",
                name: "TheShipBuilder",
            },
        ],
    },
    //   {
    //     name: "ETA-2",
    //     category: "Squadron",
    //     faction: ["Republic"],
    //     image: "",
    //     description: "",
    //     items: [
    //       {
    //         type: "Paid STL",
    //         url: "https://resinengine.com/product/eta-2-actis-class-interceptor-stl-armada/",
    //         name: "Ethan LeRoith",
    //       },
    //       {
    //         type: "Product",
    //         url: "https://www.etsy.com/listing/1263982126",
    //         name: "WesJanson3D",
    //       },
    //       {
    //         type: "Product",
    //         url: "https://www.etsy.com/listing/1568466620",
    //         name: "TheShipBuilder",
    //       },
    //     ],
    //   },
    //   {
    //     name: "G9 Rigger",
    //     category: "Squadron",
    //     faction: ["Republic"],
    //     image: "",
    //     description: "",
    //     items: [
    //       {
    //         type: "Product",
    //         url: "https://www.etsy.com/listing/1568455888",
    //         name: "TheShipBuilder",
    //       },
    //       {
    //         type: "Product",
    //         url: "https://www.etsy.com/listing/1676131705",
    //         name: "SabreWorkshop",
    //       },
    //     ],
    //   },
    //   {
    //     name: "LAAT/i",
    //     category: "Squadron",
    //     faction: ["Republic"],
    //     image: "",
    //     description: "",
    //     items: [
    //       {
    //         type: "Paid STL",
    //         url: "https://resinengine.com/product/laat-atmo-space-stl/",
    //         name: "Ethan LeRoith",
    //       },
    //       {
    //         type: "Product",
    //         url: "https://www.etsy.com/listing/1671769964",
    //         name: "Pulsefired Gaming",
    //       },
    //       {
    //         type: "Product",
    //         url: "https://www.etsy.com/listing/1585145949",
    //         name: "TheShipBuilder",
    //       },
    //     ],
    //   },
    {
        name: "V-19 Torrent",
        category: "Squadron",
        faction: ["Republic"],
        image: "https://swrpggm.com/wp-content/uploads/2021/04/V19Torrent_Feature.png",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671835",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/v19-torrent-stl-armada/",
                name: "Ethan LeRoith",
            },
        ],
    },
    {
        name: "Jumpmaster",
        category: "Squadron",
        faction: ["Empire"],
        image: "https://midwestscrub.wordpress.com/wp-content/uploads/2019/06/jm5k-1.jpg?w=640",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6613825",
                name: "Rolo2358",
            },
            {type: "Paid STL", url: "https://cults3d.com/en/3d-model/game/jumpmaster-5000-star-wars-armada", name: "Tev'an shipyards" },
            {type: "Model", url: "https://www.etsy.com/listing/1782405534/bounty-hunter-dengars-punishing-one", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "Lambda",
        category: "Squadron",
        faction: ["Empire"],
        image: "https://img.goodfon.com/original/1920x1210/8/ee/mack-sztaba-by-mack-sztaba-maintenance-shattl-t-4a-tipa-liam.jpg",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6617618",
                name: "Rolo2358",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/lambda-stl-kopie/",
                name: "Ethan LeRoith",
            },
            {type: "Model", url: "https://pulsefiredgaming.etsy.com/listing/1798806247/imperial-lambda-class-shuttle-irregular", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "TIE Advanced",
        category: "Squadron",
        faction: ["Empire"],
        image: "https://patricksxwingblog.wordpress.com/wp-content/uploads/2021/07/tie-advanced.jpeg",
        description: "",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/tie-adv-stl/",
                name: "Ethan LeRoith",
            },
        ],
    },
    {
        name: "TIE Bomber",
        category: "Squadron",
        faction: ["Empire"],
        image: "https://i.redd.it/ym7lk3g7znf61.jpg",
        description: "",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/tie-bomber-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1337691499",
                name: "WesJanson3D",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1582548035",
                name: "TheShipBuilder",
            },
        ],
    },
    {
        name: "TIE Defender",
        category: "Squadron",
        faction: ["Empire"],
        image: "https://4.bp.blogspot.com/-NGMKed2cEBg/WEBEr1vNqAI/AAAAAAAAJYQ/--ETvRe0vpob_1v8S-lxzNYtBIjYG-DxwCLcB/s1600/StarWars_TieDefenderPilot_MarkMolnar.jpg",
        description: "",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/tie-defender-stl/",
                name: "Ethan LeRoith",
            },
        ],
    },
    {
        name: "TIE Fighter",
        category: "Squadron",
        faction: ["Empire"],
        image: "https://shadow-squadron.com/wp-content/uploads/2017/08/star-wars-tie-fighter.jpg",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671935",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/tie-ln-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1279852886",
                name: "WesJanson3D",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1568373496",
                name: "TheShipBuilder",
            },
        ],
    },
    {
        name: "TIE Interceptor",
        category: "Squadron",
        faction: ["Empire"],
        image: "https://static.displate.com/380x270/displate/2019-03-25/ee6cb3780922459abb015ca60d78a8b4_065db4fc4d5108a007d96940ff996a12.jpg",
        description: "",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/tie-interceptor-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1315549191",
                name: "WesJanson3D",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1568356202",
                name: "TheShipBuilder",
            },
            {type: "Model", url: "https://pulsefiredgaming.etsy.com/listing/1755019976/tie-interceptor-fighter-squadron-6-for", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "TIE Phantom",
        category: "Squadron",
        faction: ["Empire"],
        image: "https://pm1.aminoapps.com/6212/150d024c2943ac5cfa9f021c5d8f649f00e6a346_hq.jpg",
        description: "No models available at this time",
        items: [],
    },
    {
        name: "VT-49 Decimator",
        category: "Squadron",
        faction: ["Empire"],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdrONBXr2l-2A3UC6ptET7Qqil9xQALndwxX-bP386L_EQT5yKokd4eNQ6n3lyUlQ6eEg712bt2qnzz-k57P3sbvGsC3cf6a1iFmH-RlmAYwltFUs68iX3GbNlkvVGoz3uN0FD6ZTe0Q/s1600/881b4b1689c81ac6bd268ee54c21dece3cf26387_hq.jpg",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671821",
                name: "Armada_Legacy",
            },
        ],
    },
    {
        name: "A-wing",
        category: "Squadron",
        faction: ["Rebel"],
        image: "https://preview.redd.it/concept-art-by-ralph-mcquarrie-of-a-beautiful-blue-a-wing-v0-8e7p9gtpqye81.jpg?width=1080&crop=smart&auto=webp&s=49be5c842a81d6f55e09579aa8e26dfb2d0cfbd0",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/a-wing-squadrons-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1671182299",
                name: "WesJanson3D",
            },
            {type: "Model", url: "https://www.etsy.com/listing/1758632994/rebel-a-wing-starfighter-squadron-6-for", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "B-wing",
        category: "Squadron",
        faction: ["Rebel"],
        image: "https://preview.redd.it/cool-b-wing-artwork-from-blade-squadron-artist-chris-trevas-v0-6bxobldleofb1.png?width=1159&format=png&auto=webp&s=cf96700997e483489dfdce1d588b680757b02fa9",
        description: "",
        items: [
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1638089402",
                name: "WesJanson3D",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1597782561",
                name: "TheShipBuilder",
            },
            {type: "Model", url: "https://pulsefiredgaming.etsy.com/listing/1749454381/rebel-b-wing-starfighter-squadron-6-for", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "E-wing",
        category: "Squadron",
        faction: ["Rebel"],
        image: "https://cdnb.artstation.com/p/assets/images/images/067/786/767/large/angelos-karderinis-e-wing2.jpg?1696248678",
        description: "",
        items: [
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1657929004",
                name: "WesJanson3D",
            },
            {type: "Model", url: "https://pulsefiredgaming.etsy.com/listing/1750351645/new-republic-e-wing-escort-starfighter", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "Lancer Pursuit Craft",
        category: "Squadron",
        faction: ["Rebel"],
        image: "https://diceandcardboard.com/content/images/2022/01/swe16_shadowcaster-1.jpg",
        description: "",
        items: [],
    },
    {
        name: "VCX-100",
        category: "Squadron",
        faction: ["Rebel"],
        image: "https://images-cdn.fantasyflightgames.com/filer_public/58/50/5850f6d1-5ef1-4fdd-8527-b031c31e0b19/preview.jpg",
        description: "No models available at this time",
        items: [],
    },
    {
        name: "X-wing",
        category: "Squadron",
        faction: ["Rebel"],
        image: "https://www.scififantasyhorror.co.uk/wp-content/uploads/2015/09/jerry-vanderstelt-force-awakens-artwork.jpg",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:5406474",
                name: "Onil_Creations",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/x-wing-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1278011943",
                name: "WesJanson3D",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1568427422",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1747779373",
                name: "SabreWorkshop",
            },
        ],
    },
    {
        name: "Y-wing",
        category: "Squadron",
        faction: ["Rebel"],
        image: "https://cdnb.artstation.com/p/assets/images/images/030/766/701/large/brian-j-murphy-y-wing.jpg?1601578240",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671838",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/y-wing-stl/",
                name: "Ethan LeRoith",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1650925013",
                name: "WesJanson3D",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1568450164",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1738179083",
                name: "SabreWorkshop",
            },
            {type: "Model", url: "https://pulsefiredgaming.etsy.com/listing/1764224796/rebel-y-wing-starfighter-squadron-6-for", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "Z-95 Headhunter",
        category: "Squadron",
        faction: ["Rebel"],
        image: "https://preview.redd.it/9e6xjnpoj4901.jpg?width=640&crop=smart&auto=webp&s=8556c5e473a18bc2eaab2ff827d26f37e497ba6a",
        description: "",
        items: [
            {
                type: "Paid STL",
                url: "https://www.etsy.com/listing/1225360570/z-92-headhunter-fighter-stl",
                name: "KDYards",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1286374759",
                name: "WesJanson3D",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1568435972",
                name: "TheShipBuilder",
            },
            {type: "Model", url: "https://pulsefiredgaming.etsy.com/listing/1705403923/republic-clone-z-95-headhunter-fighter", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "Cards",
        category: "Play Material",
        image: "https://images-cdn.fantasyflightgames.com/filer_public/3a/e9/3ae953ab-b569-4862-8be6-35d850aca14b/swm38-box-left500.png",
        description: "",
        items: [
            {
                type: "Product",
                url: "https://www.etsy.com/shop/BensArmadaShipCards",
                name: "BensArmadaShipCards",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/shop/PetersabersWorkshop/",
                name: "PetersabersWorkshop",
            },
        ],
    },
    {
        name: "Base Tokens",
        category: "Play Material",
        image: "https://i.etsystatic.com/22662247/r/il/943ad4/6108405849/il_570xN.6108405849_11bo.jpg",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6703937",
                name: "Armada_Legacy",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/775513516/custom-ship-tokens-for-x-wing-miniatures",
                name: "ExclamationStudios",
            },
            {
                type: "Product", 
                url: "https://www.etsy.com/listing/1784967957/star-wars-armada-compatible-blank-ship", 
                name: "YourArtfulEndeavors" 
            },
            {type: "Product", url: "https://www.etsy.com/ca/listing/1797983185/star-wars-armada-compatible-blank-xlhuge", name: "YourArtfulEndeavors" }
        ],
    },
    {
        name: "Ship Bases",
        category: "Play Material",
        image: "https://makerworld.bblmw.com/makerworld/model/US2eab0548bd86a1/design/2024-08-22_dd0a631da48df.jpg?x-oss-process=image/resize,w_1000/format,webp",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://makerworld.com/en/models/491910",
                name: "spacenavy90",
            },
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:3962836",
                name: "Onil_Creations",
            },
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/utarianmasterblaster/designs",
                name: "UtarianMasterBlaster",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1277708419/ship-support-stands-for-star-wars-armada",
                name: "SabreWorkshop",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1397706175/star-wars-armada-compatible-ship-flight",
                name: "Pulsefired Gaming",
            },
        ],
    },
    {
        name: "Squadron Bases",
        category: "Play Material",
        image: "https://www.belloflostsouls.net/wp-content/uploads/2015/10/armada-squadron.png",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:4695564",
                name: "Onil_Creations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1502117966/squadron-stands-for-star-wars-armada",
                name: "Pulsefired Gaming",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1616262675/squadron-bases-and-pegs-for-star-wars",
                name: "TheShipBuilder",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1463638156/squadron-stands-x3-compatible-with-sw",
                name: "SabreWorkshop",
            },
        ],
    },
    {
        name: "Maneuver Tool",
        category: "Play Material",
        image: "https://m.media-amazon.com/images/I/61g5UUl9TEL._SL1500_.jpg",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:1840168",
                name: "err404",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1720583296/star-wars-armada-maneuver-tool",
                name: "BensArmadaShipCards",
            },
        ],
    },
    {
        name: "Range Rulers",
        category: "Play Material",
        image: "https://images-cdn.fantasyflightgames.com/filer_public/df/39/df39c72d-021e-4cf7-9cb4-c2601012af99/swm01_diagram_firingarcs.png",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:2838884",
                name: "TheAvatar111"
            },
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:3165680",
                name: "Chieftom22"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1734717101/star-wars-armada-range-rulers",
                name: "BensArmadaShipCards"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1720577256/star-wars-armada-distance-rulers",
                name: "BensArmadaShipCards"
            },
            {
                type: "Product",
                url: "https://admiraltatershipshop.etsy.com/listing/703741340/full-set-of-simple-range-and",
                name: "AdmiralTaterShipShop"
            }
        ]
    },
    {
        name: "Speed Dials",
        category: "Play Material",
        image: "https://cdn.svc.asmodee.net/production-amgcom/uploads/2022/06/SWM39-image3@500.png",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:4801892",
                name: "AirborneElmo"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1734712091/armada-speed-dial",
                name: "BensArmadaShipCards"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1168403908/speed-dial-for-star-wars-armada",
                name: "Radvoy"
            },
            {
                type: "Product",
                url: "https://admiraltatershipshop.etsy.com/listing/823060590/magnetic-speed-dial-with-faction-for-sw",
                name: "AdmiralTaterShipShop"
            }
        ]
    },
    {
        name: "Command Dials",
        category: "Play Material",
        image: "https://cdn.svc.asmodee.net/production-amgcom/uploads/2022/06/SWM39-image3@500.png",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:4037763",
                name: "Nihvu"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1734769753/armada-command-dial",
                name: "BensArmadaShipCards"
            }
        ]
    },
    {
        name: "Obstacles",
        category: "Play Material",
        image: "https://ffg-forum-archive.entropicdreams.com/mirrored-images/http%253A%252F%252F2.bp.blogspot.com%252F-Tyxxd41vANM%252FVZbD7u7jmBI%252FAAAAAAAARlY%252FbqeJnKm0mxo%252Fs1600%252FSpaceRocks%25252B-%25252B2.jpg",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6029166",
                name: "SirSamson"
            },
            {
                type: "Paid STL",
                url: "https://www.myminifactory.com/object/3d-print-space-scenery-obstacles-terrain-suitable-for-star-wars-armada-pre-supported-189717",
                name: "Miniature Evolution"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1452714802/neutral-space-station-for-star-wars",
                name: "SabreWorkshop"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1477884935/asteroids-for-star-wars-armada",
                name: "SabreWorkshop"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1569757192/mc-debris-proxy-for-star-wars-armada",
                name: "SabreWorkshop"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1452715768/dust-fields-for-star-wars-armada",
                name: "SabreWorkshop"
            }
        ]
    },
    {
        name: "Tokens",
        category: "Play Material",
        image: "https://i.ebayimg.com/images/g/WuIAAOSw9xxjgCJi/s-l1200.jpg",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:970911",
                name: "err404"
            },
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:970919",
                name: "err404"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1741141415/armada-defense-tokens",
                name: "BensArmadaShipCards"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1741133385/armada-command-tokens",
                name: "BensArmadaShipCards"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1500266318/double-sided-command-and-raid-tokens-set",
                name: "AdmiralTaterShipShop"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1155660213/defence-tokens-for-star-wars-armada-set",
                name: "Radvoy"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1141712162/command-tokens-for-star-wars-armada-set",
                name: "Radvoy"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1155659709/raid-tokens-for-star-wars-armada-set-of",
                name: "Radvoy"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/shop/AdmiralTaterShipShop?ref=seller-platform-mcnav&section_id=27524698",
                name: "AdmiralTaterShipShop"
            }
        ]
    },
    {
        name: "Dice",
        category: "Play Material",
        image: "https://m.media-amazon.com/images/I/71jY5rNClGL._AC_UF894,1000_QL80_.jpg",
        items: [
            {
                type: "Product",
                url: "https://baronofdice.com/products/galactic-armada-premium-dice-set",
                name: "BaronOfDice"
            },
            // {
            //     type: "Product",
            //     url: "https://reddit.com/user/BlacksmithOk6202",
            //     name: "BlacksmithOk6202"
            // }
        ]
    },
    {
        name: "Play Surfaces",
        category: "Play Material",
        image: "https://images-cdn.fantasyflightgames.com/filer_public/6d/9b/6d9ba9a2-7f5a-4b36-833c-cabe97cda0f0/usws32-preview.jpg",
        items: [
            {
                type: "Product",
                url: "https://www.etsy.com/shop/GripMats",
                name: "GripMats"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/966611170/deployment-areas-for-x-wing-armada-and",
                name: "GripMats"
            },
            {
                type: "Product",
                url: "https://www.etsy.com/shop/boardgamegoodies/?etsrc=sdt&section_id=37893068",
                name: "BoardGameGoodies"
            }
        ]
    },
    {
        name: "YT-2400",
        category: "Squadron",
        image: "https://i.redd.it/cfxk9l1b3zqz.jpg",
        items: [
            {
                type: "Product",
                url: "https://www.shapeways.com/product/ZT5QUE48Z/yt2400-armada",
                name: "Colony Castings"
            }
        ]
    },
    {
        name: "YT-1300",
        category: "Squadron",
        image: "https://diceandcardboard.com/content/images/2022/01/swz-a_preview1-1.jpg",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:5405540",
                name: "Onil_Creations"
            },
            {
                type: "Product",
                url: "https://www.shapeways.com/product/XE5ZU2HF9/armada-yt-1300-set-i",
                name: "Mel Miniatures"
            }
        ]
    },
    {
        name: "Aggressor",
        category: "Squadron",
        image: "https://spikeybits.com/wp-content/uploads/2018/12/IG2000-XWM-e1456876264955.jpg",
        items: [
            {type: "Paid STL", url: "https://cults3d.com/en/3d-model/game/aggressor-class-fighter-star-wars-armada", name: "Tev'an shipyards" },
            {type: "Model", url: "https://www.etsy.com/listing/1782402814/bounty-hunter-ig-88s-aggressor-assault", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "Firespray-31",
        category: "Squadron",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-qeIGbwr9Gaxx8ewFkH3Z_UVUNVO42ObS8KoPnAG0YLDEaGK31pR83voQVmycm9q7oPcUO2VOVtiMxnqemCb90iDD_b49CkPHikc7WFEzS4ccMhasN35QKl9GGj0LodA0AlH2JYHXaQ/s280/Slave-1.jpg",
        items: [
            {type: "Paid STL", url: "https://cults3d.com/en/3d-model/game/firespray-31-star-wars-armada", name: "Tev'an shipyards" },
            {type: "Model", url: "https://www.etsy.com/listing/1796604559/bounty-hunter-boba-fetts-slave-1", name: "Pulsefired Gaming" }
        ],
    },
    {
        name: "HWK-290",
        category: "Squadron",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a686adef-a30d-4e01-a848-e061b4ee28f7/dbuhwwz-623128aa-4460-4b82-8f91-2eac88bcd6f2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E2ODZhZGVmLWEzMGQtNGUwMS1hODQ4LWUwNjFiNGVlMjhmN1wvZGJ1aHd3ei02MjMxMjhhYS00NDYwLTRiODItOGY5MS0yZWFjODhiY2Q2ZjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wkwEAFRKz6NpZcovwWMqUYcQOq2CfkV9aUARvpTmpZE",
        items: [],
        description: "No models available at this time"
    },
    {
        name: "Scurrg H-6",
        category: "Squadron",
        image: "https://i.redd.it/just-wanted-to-throw-some-love-to-my-favorite-star-wars-v0-9v8j66yuex8a1.png?width=1906&format=png&auto=webp&s=ac463ff0e10b7838dc629b1a7dd7cc8eac10355a",
        items: [],
        description: "No models available at this time"
    },
    {
        name: "YV-666",
        category: "Squadron",
        image: "https://images-cdn.fantasyflightgames.com/filer_public/d9/2a/d92ac8e1-2021-475e-9316-76a8877735c7/swx31_preview.jpg",
        items: [
            {type: "Paid STL", url: "https://cults3d.com/en/3d-model/game/yv-666-star-wars-armada", name: "Tev'an shipyards" },
            {type: "Model", url: "https://pulsefiredgaming.etsy.com/listing/1782400338/bounty-hunter-bossks-hounds-tooth-yv-666", name: "Pulsefired Gaming" }
        ],
    }
]


export type {
    Faction,
    Category,
    Item,
    Entity
}

export {
    resources
}