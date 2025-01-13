elements.r74n = {
    color: "#00ffff",
    behavior: behaviors.POWDER,
    category: "r74n",
    viscosity: 74,
    state: "powder",
    density: 74,
};
elements.r74n.reactions.water = { "elem1":null, "elem2":"r74n_water" };

elements.r74n_water = {
    color: "#009999",
    behavior: behaviors.LIQUID,
    category: "r74n",
    viscosity: 74,
    state: "liquid",
    density: 74,
}
