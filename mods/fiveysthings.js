// i'm expandimg my mod right now (i still need time to learn)

// credit to nouser
behaviors.RADSOLID = [
    "XX|CR:radiation%1|XX",
    "CR:radiation%1|XX|CR:radiation%1",
    "XX|CR:radiation%1|XX"
]

behaviors.DELETEPOWDER = [
    "XX|DL|XX",
    "DL|XX|DL",
    "M2|M1|M2"
]

elements.impurity = {
    color: ["#2d3240", "#2d2e40", "#312d40"],
    behavior: behaviors.LIQUID,
    tempHigh: 100,
    stateHigh: "molten_impurity",
    state: "solid",
};

elements.molten_impurity = {
    color: elements.molten_salt.color,
    behavior: behaviors.MOLTEN,
    tempLow: 100,
    stateLow: "impurity",
    state: "liquid",
    category: "states",
};

elements.frosted_ice = {
    color: "#c3e2f0",
    behavior: behaviors.WALL,
    tempHigh: 5,
    stateHigh: "water",
    temp: -9,
    category: "solids",
    state: "solid",
    density: 1027,
};

elements.packed_ice = {
    color: "#d6ebf5",
    behavior: behaviors.WALL,
    tempHigh: 5,
    stateHigh: "packed_water",
    temp: -26,
    category: "solids",
    state: "solid",
    density: 1257,
};

elements.compressed_ice = {
    color: "#80bbfa",
    behavior: behaviors.WALL,
    tempHigh: 5,
    stateHigh: "compressed_water",
    temp: -79,
    category: "solids",
    state: "solid",
    density: 2007,
};
elements.blue_ice = {
    color: "#3f96f1",
    behavior: behaviors.WALL,
    tempHigh: 5,
    stateHigh: "blue_water",
    temp: -133,
    category: "solidss",
    state: "solid",
    density: 2657,
};

elements.trench_ice = {
    color: "#0070e4",
    behavior: behaviors.WALL,
    tempHigh: 5,
    stateHigh: "trench_water",
    temp: -273,
    category: "solids",
    state: "solid",
    density: 3017,
};

elements.packed_water = {
    color: "#0a5fc7",
    behavior: behaviors.LIQUID,
    tempHigh: 100,
    stateHigh: "steam",
    tempLow: 0,
    stateLow: "packed_ice",
    category: "liquids",
    state: "solid",
    density: 1337,
    viscosity: 22272,
};

elements.compressed_water = {
    color: "#034391",
    behavior: behaviors.LIQUID,
    tempHigh: 100,
    stateHigh: "steam",
    tempLow: 0,
    stateLow: "compressed_ice",
    category: "liquids",
    state: "liquid",
    density: 2087,
    viscosity: 23072,
};

elements.blue_water = {
    color: "#01336f",
    behavior: behaviors.LIQUID,
    tempHigh: 100,
    stateHigh: "steam",
    tempLow: 0,
    stateLow: "blue_ice",
    category: "liquids",
    state: "liquid",
    density: 2737,
    viscosity: 24902,
};

elements.trench_water = {
    color: "#00254d",
    behavior: behaviors.LIQUID_OLD,
    tempHigh: 100,
    stateHigh: "steam",
    tempLow: 0,
    stateLow: "trench_ice",
    category: "liquids",
    state: "liquid",
    density: 3097,
    viscosity: 26502,
};

elements.fake_wood = {
    color: elements.wood.color,
    name: "wood",
    behavior: behaviors.WALL,
    tempHigh: 600,
    stateHigh: "torch",
    tempLow: 0,
    stateLow: "wall",
    category: "solids",
    state: "solid",
    density: 3097,
    viscosity: 26502,
};

elements.gravitite = {
    color: ["#f7adda","#ff80f2","#c421a3","#981a92","#ec32e3","#f062f0"],
    behavior: behaviors.AGPOWDER,
    state: "solid",
    density: 4515,
    tempHigh: 4931,
    stateHigh: "molten_gravitite",
};

elements.molten_gravitite = {
    color: elements.molten_purple_gold.color,
    behavior: [
        "M1|M1|M1",
        "M2|XX|M2",
        "XX|CR:antifire%2.5|XX"
    ],
    state: "liquid",
    density: 4515,
    temp: 4950,
    tempLow: 4931,
    stateLow: "gravitite",
};

elements.destructive_gravitite = {
    color: ["#f78bb8","#ff60d0","#c40081","#980870","#ec10c1","#f040d0"],
    behavior: [    
    "M2|M1|M2",
    "DL|XX|DL",
    "XX|DL|XX"
    ],
    state: "solid",
    density: 4515,
    tempHigh: 4931,
    stateHigh: "molten_gravitite",
};

elements.molten_destructive_gravitite = {
    color: elements.molten_rose_gold.color,
    behavior: [
    "M2|M1|M2",
    "DL|XX|DL",
    "DL|CR:antifire%2.5|DL"
    ],
    state: "liquid",
    density: 4515,
    temp: 4950,
    tempLow: 4931,
    stateLow: "destructive_gravitite",
};


//credit to chem.js
function nuclear_explosion(pixel, p) {
  if (pixel.temp >= 800) {
    transmuteAround(pixel);
    changePixel(pixel, "n_explosion");
    elementCircle(p.x, p.y, 5, "neutron");
  }
  if (Math.random() < 0.1) {
    changePixel(pixel, "lead");
  }
  elementCircle(p.x, p.y, 2, "neutron");
}

elements.solverium = {
    color: ["#2bc7ff","#2e80d9","#0ce9ed","#3a85e0"],
    behavior: behaviors.DELETE,
    tempHigh: 1727,
    stateHigh: "molten_solverium",
    category: "solids",
    state: "solid",
    density: 10723,
    reactions: {
         neutron: { func: nuclear_explosion, temp1: 100 },
      },
};

elements.solverium_scrap = {
    color: ["#3aa6c2","#b8edf1","#83d9e4"],
    behavior: behaviors.DELETEPOWDER,
    tempHigh: 1727,
    stateHigh: "molten_solverium",
    category: "solids",
    state: "solid",
    density: 10723,
    reactions: {
         neutron: { func: nuclear_explosion, temp1: 100 },
      },
};

elements.molten_solverium = {
    color: elements.molten_solder.color,
    behavior: [
        "XX|CR:fire%2.5|XX",
        "M2|DL|M2",
        "M1|M1|M1"
    ],
    tempLow: 1727,
    stateLow: "solverium",
    category: "states",
    state: "liquid",
    density: 10573,
    reactions: {
        "molten_slidium": { elem1: "molten_dull_solverium", elem2: null },
        "antimolten": { elem1: "molten_destructive_gravitite", elem2: null },
    },
};

elements.dull_solverium = {
    color: "#1e83ba",
    behavior: behaviors.WALL,
    tempHigh: 1727,
    stateHigh: "molten_dull_solverium",
    category: "solids",
    state: "solid",
    density: 10723,
};

elements.dull_solverium_scrap = {
    color: ["#1e83ba","#35a1db","#0f92d9"],
    behavior: behaviors.POWDER,
    tempHigh: 1727,
    stateHigh: "molten_dull_solverium",
    category: "solids",
    state: "solid",
    density: 10723,
};

elements.molten_dull_solverium = {
    color: "#5f9cba",
    behavior: behaviors.MOLTEN,
    tempLow: 1727,
    stateLow: "solverium",
    category: "states",
    state: "liquid",
    density: 10573,
    reactions: {
        "molten_slidium": { elem1: "molten_impurity", elem2: null },
        "antimolten": { elem1: "molten_gravitite", elem2: null },
    },
};

elements.slidium = {
    color: "#e60944",
    behavior: behaviors.POWDER,
    tempHigh: 1200,
    stateHigh: "molten_slidium",
    category: "powders",
    state: "solid",
    density: 10407,
};

elements.molten_slidium = {
    color: elements.molten_gold.color,
    behavior: behaviors.MOLTEN,
    tempLow: 1200,
    stateLow: "slidium",
    category: "states",
    state: "liquid",
    density: 10367,
};
