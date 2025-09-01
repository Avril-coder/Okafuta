export const locations = [
  {
    region: "Khomas",
    towns: [
      {
        name: "Windhoek",
        pickupPoints: ["Okafuta HQ - Windhoek", "Wernhil Park Information Desk", "The Grove Mall Centre Management"],
      },
    ],
  },
  {
    region: "Erongo",
    towns: [
      {
        name: "Swakopmund",
        pickupPoints: ["Okafuta Branch - Swakopmund", "Platz am Meer Centre Management"],
      },
      {
        name: "Walvis Bay",
        pickupPoints: ["Dunes Mall Information Desk"],
      },
    ],
  },
  {
    region: "Oshana",
    towns: [
      {
        name: "Ongwediva",
        pickupPoints: ["Partner Store - Ongwediva", "Oshana Mall Centre Management"],
      },
      {
        name: "Oshakati",
        pickupPoints: ["Gwashamba Mall Information Desk"],
      },
    ],
  },
];

// Flatten the data for easier use in the combobox
export const flattenedLocations = locations.flatMap(region =>
  region.towns.flatMap(town =>
    town.pickupPoints.map(point => ({
      value: `${point}, ${town.name}, ${region.region}`.toLowerCase(),
      label: `${point}, ${town.name}, ${region.region}`,
    }))
  )
);