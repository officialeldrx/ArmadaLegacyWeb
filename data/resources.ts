type Faction = "Empire" | "Republic" | "Separatist" | "Rebel";
type Category = "Ship" | "Squadron" | "Play Material";

interface Item {
    type: "Free STL" | "Paid STL" | "Product";
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
        image: "",
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
                name: "PulsefiredGaming",
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
        image: "",
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
        ],
    },
    {
        name: "Consular Cruiser",
        category: "Ship",
        faction: ["Republic"],
        image: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6670096",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/c70-class-charger-stl-armada/",
                name: "ResinEngine",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1499502341",
                name: "PulsefiredGaming",
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
        image: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6683593",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/pelta-class-frigate-stl/",
                name: "ResinEngine",
            },
        ],
    },
    {
        name: "Venator Star Destroyer",
        category: "Ship",
        faction: ["Empire", "Republic"],
        image: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6663283",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/venator-class-star-destroyer-stl-armada/",
                name: "ResinEngine",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1532337159",
                name: "PulsefiredGaming",
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
        image: "",
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
                name: "PulsefiredGaming",
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
        ],
    },
    {
        name: "Hardcell Transport",
        category: "Ship",
        faction: ["Separatist"],
        image: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:4329950",
                name: "Onil_Creations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1546152034",
                name: "PulsefiredGaming",
            },
        ],
    },
    {
        name: "Gozanti Assault Carriers",
        category: "Ship",
        faction: ["Separatist", "Empire"],
        image: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:5359153",
                name: "cadetvw",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/gozanti-class-cruiser-stl/",
                name: "ResinEngine",
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
        image: "",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/munificent-class-stl-armada/",
                name: "ResinEngine",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1436073824",
                name: "PulsefiredGaming",
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
        image: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:4701011",
                name: "RVBLegend",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/providence-stl-armada/",
                name: "ResinEngine",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1453545643",
                name: "PulsefiredGaming",
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
        image: "",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/recusant-class-light-destroyer-stlarmada/",
                name: "ResinEngine",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1453217219",
                name: "PulsefiredGaming",
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
    //             name: "PulsefiredGaming",
    //         },
    //         {
    //             type: "Product",
    //             url: "https://www.etsy.com/listing/1454377960",
    //             name: "PulsefiredGaming",
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
        image: "",
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
                name: "PulsefiredGaming"
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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/mc75-class-stl-kopie/",
                name: "ResinEngine",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1515344610",
                name: "PulsefiredGaming",
            },
        ],
    },
    {
        name: "MC80 Home One",
        category: "Ship",
        faction: ["Rebel"],
        image: "",
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
        ],
    },
    {
        name: "MC80 Liberty",
        category: "Ship",
        faction: ["Rebel"],
        image: "",
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
                name: "PulsefiredGaming",
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
        image: "",
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
        name: "Rebel GR-75 Transports",
        category: "Ship",
        faction: ["Rebel"],
        image: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671437",
                name: "Armada_Legacy",
            },
        ],
    },
    {
        name: "Starhawk Battleship",
        category: "Ship",
        faction: ["Rebel"],
        image: "",
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
        image: "",
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
                name: "PulsefiredGaming",
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
        image: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6119208",
                name: "Peacedemo",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/raider-class-stl/",
                name: "ResinEngine",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1732832670",
                name: "PulsefiredGaming",
            },
        ],
    },
    {
        name: "Imperial Star Destroyer",
        category: "Ship",
        faction: ["Empire"],
        image: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6664770",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/imperial-star-destroyer-class-i-stl/",
                name: "ResinEngine",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/imperial-star-destroyer-class-ii-stl/",
                name: "ResinEngine",
            },
            {
                type: "Paid STL",
                url: "https://www.etsy.com/listing/1603495246/imperial-sd-pack-presuported",
                name: "OnilCreations",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1450832868",
                name: "PulsefiredGaming",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1450851386",
                name: "PulsefiredGaming",
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
        image: "",
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
                name: "ResinEngine",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1413378265/imperial-vindicator-heavy-cruiser",
                name: "PulsefiredGaming",
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
        image: "",
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
        image: "",
        description: "This model is not sized to be used as a huge-sized Armada SSD as of 6/16/2024",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/executor-class-stl-armada/",
                name: "ResinEngine",
            },
        ],
    },
    {
        name: "Belbullab",
        category: "Squadron",
        faction: ["Separatist"],
        image: "",
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
                name: "ResinEngine",
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
        image: "",
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
                name: "ResinEngine",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1671801950",
                name: "PulsefiredGaming",
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
    //       name: "ResinEngine",
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
    //       name: "ResinEngine",
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
        image: "",
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
                name: "PulsefiredGaming",
            },
        ],
    },
    {
        name: "Vulture",
        category: "Squadron",
        faction: ["Separatist"],
        image: "",
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
                name: "ResinEngine",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1685983205",
                name: "PulsefiredGaming",
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
        image: "",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6671849",
                name: "Armada_Legacy",
            },
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/arc-170-squadrons-stl-armada/",
                name: "ResinEngine",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1691215962",
                name: "PulsefiredGaming",
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
        name: "Clone Y-wing",
        category: "Squadron",
        faction: ["Republic"],
        image: "",
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
                name: "ResinEngine",
            },
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
    //         name: "ResinEngine",
    //       },
    //       {
    //         type: "Product",
    //         url: "https://www.etsy.com/listing/1705403923",
    //         name: "PulsefiredGaming",
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
        image: "",
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
                name: "ResinEngine",
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
    //         name: "ResinEngine",
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
    //         name: "ResinEngine",
    //       },
    //       {
    //         type: "Product",
    //         url: "https://www.etsy.com/listing/1671769964",
    //         name: "PulsefiredGaming",
    //       },
    //       {
    //         type: "Product",
    //         url: "https://www.etsy.com/listing/1585145949",
    //         name: "TheShipBuilder",
    //       },
    //     ],
    //   },
    {
        name: "V-19",
        category: "Squadron",
        faction: ["Republic"],
        image: "",
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
                name: "ResinEngine",
            },
        ],
    },
    {
        name: "Jumpmaster",
        category: "Squadron",
        faction: ["Empire"],
        image: "",
        description: "",
        items: [
            {
                type: "Free STL",
                url: "https://www.thingiverse.com/thing:6613825",
                name: "Rolo2358",
            },
        ],
    },
    {
        name: "Lambda",
        category: "Squadron",
        faction: ["Empire"],
        image: "",
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
                name: "ResinEngine",
            },
        ],
    },
    {
        name: "TIE Advanced",
        category: "Squadron",
        faction: ["Empire"],
        image: "",
        description: "",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/tie-adv-stl/",
                name: "ResinEngine",
            },
        ],
    },
    {
        name: "TIE Bomber",
        category: "Squadron",
        faction: ["Empire"],
        image: "",
        description: "",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/tie-bomber-stl/",
                name: "ResinEngine",
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
        image: "",
        description: "",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/tie-defender-stl/",
                name: "ResinEngine",
            },
        ],
    },
    {
        name: "TIE Fighter",
        category: "Squadron",
        faction: ["Empire"],
        image: "",
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
                name: "ResinEngine",
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
        image: "",
        description: "",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/tie-interceptor-stl/",
                name: "ResinEngine",
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
        ],
    },
    {
        name: "TIE Phantom",
        category: "Squadron",
        faction: ["Empire"],
        image: "",
        description: "No models available at this time",
        items: [],
    },
    {
        name: "VT-49 Decimator",
        category: "Squadron",
        faction: ["Empire"],
        image: "",
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
        image: "",
        description: "",
        items: [
            {
                type: "Paid STL",
                url: "https://resinengine.com/product/a-wing-squadrons-stl/",
                name: "ResinEngine",
            },
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1671182299",
                name: "WesJanson3D",
            },
        ],
    },
    {
        name: "B-wing",
        category: "Squadron",
        faction: ["Rebel"],
        image: "",
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
        ],
    },
    {
        name: "E-wing",
        category: "Squadron",
        faction: ["Rebel"],
        image: "",
        description: "",
        items: [
            {
                type: "Product",
                url: "https://www.etsy.com/listing/1657929004",
                name: "WesJanson3D",
            },
        ],
    },
    {
        name: "Lancer Pursuit Craft",
        category: "Squadron",
        faction: ["Rebel"],
        image: "",
        description: "",
        items: [],
    },
    {
        name: "VCX-100",
        category: "Squadron",
        faction: ["Rebel"],
        image: "",
        description: "No models available at this time",
        items: [],
    },
    {
        name: "X-wing",
        category: "Squadron",
        faction: ["Rebel"],
        image: "",
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
                name: "ResinEngine",
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
        image: "",
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
                name: "ResinEngine",
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
        ],
    },
    {
        name: "Z-95",
        category: "Squadron",
        faction: ["Rebel"],
        image: "",
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
        ],
    },
    {
        name: "Cards",
        category: "Play Material",
        image: "",
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
        image: "",
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
        ],
    },
    {
        name: "Ship Bases",
        category: "Play Material",
        image: "",
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
                name: "PulsefiredGaming",
            },
        ],
    },
    {
        name: "Squadron Bases",
        category: "Play Material",
        image: "",
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
                name: "PulsefiredGaming",
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
        name: "Movement Tools",
        category: "Play Material",
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
        items: [
            {
                type: "Product",
                url: "https://baronofdice.com/products/galactic-armada-premium-dice-set",
                name: "BaronOfDice"
            },
            {
                type: "Product",
                url: "https://reddit.com/user/BlacksmithOk6202",
                name: "BlacksmithOk6202"
            }
        ]
    },
    {
        name: "Play Surfaces",
        category: "Play Material",
        image: "",
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
        name: "Round Counter",
        category: "Play Material",
        image: "",
        items: [
            {
                type: "Product",
                url: "https://admiraltatershipshop.etsy.com/listing/710592105/updated-magnetic-acrylic-round-counter",
                name: "AdmiralTaterShipShop"
            }
        ]
    },
    {
        name: "YT-2400",
        category: "Squadron",
        image: "",
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
        image: "",
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
        image: "",
        items: [],
        description: "No models available at this time"
    },
    {
        name: "Firespray-31",
        category: "Squadron",
        image: "",
        items: [],
        description: "No models available at this time"
    },
    {
        name: "HWK-290",
        category: "Squadron",
        image: "",
        items: [],
        description: "No models available at this time"
    },
    {
        name: "Scurrg H-6",
        category: "Squadron",
        image: "",
        items: [],
        description: "No models available at this time"
    },
    {
        name: "YV-666",
        category: "Squadron",
        image: "",
        items: [],
        description: "No models available at this time"
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