export const klasse = {
  magier: {
    hp: 50,
    mp: 100,
    atk: 10,
    Range: 2,
  },
  krieger: {
    hp: 100,
    mp: 50,
    atk: 20,
    Range: 1,
  },
  bogenschütze: {
    hp: 75,
    mp: 75,
    atk: 15,
    Range: 3,
  },
};

export const player = { name: "player", klasse: undefined };

export const enemy = { name: "enemy", klasse: bogenschütze };
