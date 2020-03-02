const JSON = [
  {
    id: "0001",
    type: "Cake",
    ppu: 0.55,
    butters: {
      id: "00011",
      type: "Butters",
      butter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" }
      ]
    },
    toppings: {
      id: "00012",
      type: "Toppings",
      topping: [
        { id: "5001", type: "None" },
        { id: "5002", type: "Glazed" },
        { id: "5005", type: "Sugar" },
        { id: "5007", type: "Powdered Sugar" },
        { id: "5006", type: "Chocolate with Sprinkles" },
        { id: "5003", type: "Chocolate" },
        { id: "5004", type: "Maple" }
      ]
    }
  },
  {
    id: "0002",
    type: "Raised",
    ppu: 0.55,
    butters: {
      id: "00021",
      type: "Butters",
      butter: [{ id: "1001", type: "Regular" }]
    },
    toppings: {
      id: "00022",
      type: "Toppings",
      topping: [
        { id: "5001", type: "None" },
        { id: "5002", type: "Glazed" },
        { id: "5005", type: "Sugar" },
        { id: "5003", type: "Chocolate" },
        { id: "5004", type: "Maple" }
      ]
    }
  },
  {
    id: "0003",
    type: "Old Fashioned",
    ppu: 0.55,
    butters: {
      id: "00031",
      type: "Butters",
      butter: [
        { id: "1001", type: "None" },
        { id: "1002", type: "Regular" },
        { id: "1003", type: "Chocolate" }
      ]
    }
  }
];

export default JSON;
