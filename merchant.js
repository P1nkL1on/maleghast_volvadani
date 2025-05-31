merchants = [
  {
    name: "Mushroom Selling-Woman"
    dialogue: [
      "“…”",
      "“Buy some mushrooms.”",
      "“I don’t sell to losers, so you better win this one.”",
      "“Don’t waste my time.”",
    ],
    items: [
      [1, "Yellow Finger", "Roll 1d6 and halve it. Then, increase one non-necromancer unit’s max HP based on the roll."],
      [1, "Sow Spores", "Your necromancer gains Sow Spores (2 SOUL): Own or allied turn, range 1-3. Effect: Create a wall in range and (4+) splash (target): create adverse terrain under every adjacent unit and (6+) deal 1 toxic damage to those units."],
      [1, "Puffcaps", "Also deploy two walls with your units. They must be adjacent to a unit you control."],
      [2, "Death Bloom", "All your units gain death burst: splash (self): 1 toxic damage"],
      [3, "Toxic Coating", "Choose a necromancer attack. All its damage types now deal piercing toxic damage."],
    ]
  },
  {
    name: "The Rider",
    special: "This battle, all unit attacks have a 6+ effect chance to Obliterate their primary targets on hit.",
    dialogue: [
      "“...”",
      "“...”",
      "“...”",
      "The steed whinnies unsettlingly. The rider says nothing.",
    ],
    items: [
      [1, "Void Feed", "When any of your units obliterate an enemy unit, they gain 1 vitality"],
      [1, "World Scar", "This battle, any foes that are obliterated leave a hazard in the space they vacated"],
      [2, "Obliviate", "Choose a non-necromancer unit. When it slays a unit, it always obliterates them."],
      [3, "Touch of Death", "This battle, your necromancer’s chance to obliterateon hit is 5+."],
      [3, "The Price", "Choose an opposing non-necromancer unit. At the end of round 4, obliterate them."],
    ]
  },
  {
    name: "Big Jon's Discount Zombies",
    dialogue: [
      "“I see the shine of yer coin there. Buyin’ or sellin’?”",
      "“Gimme that saw and I’ll give ye half off! Heh!”",
      "“Been down to the cisterns lately? They’re gettin’ full ta th’ brim.”",
      "He picks his teeth, seemingly ignoring you.",
    ],
    items: [
      [1, "Overstock", "Deploy one extra thrall this battle."],
      [1, "Bonus Bits", "Deploy with three corpses. They must be placed adjacent to a unit you control."],
      [1, "Helpful Hands", "Your necromancer has free movement in spaces occupied by corpses."],
      [2, "Corpse Pillar", "When you deploy, deploy a wall anywhere not adjacent to a unit. When the wall is destroyed, it deals splash (self): 1 damage to all units and creates two corpses in free adjacent spaces."],
      [2, "Midnight Snack", "Your necromancer gains Corpse Feed (6 SOUL): Own turn. Effect: Your necromancer may consume up to three adjacent corpses to restore 1 HP per corpse consumed."],
    ]
  },
  {
    name: "Marat",
    special: "All items have one use, and can be used by the necromancer only by sacrificing a MOVE on turn.",
    dialogue: [
      "“MARAT HAS… GOODS FOR SALE, YES. FINE… WARES.”",
      "Rustling, chittering, the scraping of claw on stone.",
      "“COME CLOSER, YES.”",
      "“MANY GOODS. MANY WARES. TRADE.”",
    ],
    items: [
      [1, "Flame Gem", "Range 2-3. Splash (target): push 1 (4+) and inflict 1 vulnerable."],
      [1, "Obsidian Skull", "Your necromancer teleports 3."],
      [1, "Rings of Mimicry", "Copy three tokens from the opposing necromancer."],
      [1, "Bloodsucking Torc", "Gain 2 strength and 2 vulnerable."],
      [1, "Decanter of Grave Wine", "Drink to clear 1d3+1 tokens of your choice, then take 1 piercing damage."],
    ]
  },
  {
    name: "Yvette",
    special: "Pick any unit, roll 1d6, and modify its stats accordingly for this battle. Rolling a ‘1’ gets you a refund. Effects stack.",
    dialogue: [
      "“Wow, hyoo hyaf a nyasty cough. I recohmmend syurgery right awhway!”",
      "“Have hyoo ever think about what hyoo hwould look liyk whith an cyool new arm or twho?”",
      "“Fyangs. It hyas to be fyangs.”",
      "“No Insyurance? No problem! Is my pyorsonal gyaurant-hee!”",
    ],
    items: [
      [1, "Very Sexy Surgery", "(1): Accident, reduce unit HP by 1, to a minimum of 1. (2-5): increase unit HP by +1 (6): increase unit HP by +2"],
      [1, "Cool Surgery", "(1): Accident, unit reduces MV by 1, (2-5): increase unit MV by +1 (6): Unit always moves with free movement"],
      [1, "Extra Super Surgery", "(1): Accident, unit gains -1D on all attacks. (2-5): Unit ignores cover when attacking (6): Unit gains +1D on all attacks"],
      [1, "Very Nice Surgery", "(1): Accident, unit gains 1 weak at the end of its turn, (2-5): Unit automatically clears one negative token at the end of its turn, (6): Unit is curseproof"],
    ]
  },
  {
    name: "Shady Man",
    special: "Uses headshot and reload from C.A.R.C.A.S.S. Arm any unit with the weapon, granting them a new attack.",
    dialogue: [
      "“Whatta ya buying?”",
      "“Give you that one fully loaded, as a courtesy. Heh, heh.”",
      "He chuckles to himself. It goes on a little too long.",
      "“For your sake, don’t let the thralls at the sniper rifles. Heh, heh, heh!”",
    ],
    items: [
      [1, "Pistol", "Range 2-4. On hit: 1 damage. Headshot: and 1 vulnerable."],
      [1, "Assault Rifle", "Range 2-3, reload. On hit: 1 damage. May fire full auto mode to gain on hit: deal 1 damage again (4+) and again (6+) and again, but take -2D on the attack."],
      [2, "Sniper Rifle", "Range 3-6, reload. Effect: No graze damage. On hit: 1 damage. Headshot: 3 piercing damage."],
      [2, "Shotgun", "Range 2-2, reload. On hit: 2 damage and push 2."],
      [3, "RPG", "Range 3-5. Charge. On hit: 1 damage and splash (target): 1 fire damage and destroy all walls in the splash area. Has only one shot."],
    ]
  },
  {
    name: "The Twins",
    dialogue: [
      "“Make your choice carefully.”",
      "“Coffee reveals much about a man’s soul. Wouldn’t you agree?”",
      "They say nothing but give you a judging look.",
      "“The biscuits are made in-House.”",
    ],
    items: [
      [1, "Biscuit", "Does nothing. Delicious. Strangely nostalgic."],
      [2, "Flat White", "Gain no SOUL from Scions but they gain magic armor."],
      [2, "Black Coffe", "Gain no SOUL from Thralls but they all gain +1 HP."],
      [2, "Single Shot", "Gain no SOUL from Hunters or Horrors, but they gain +1D on attacks and +2 MV."],
      [2, "Cortado", "Gain no SOUL from Freaks but the first time in a turn they generate or remove a token, generate or remove one more token of the same type."],
      [2, "Doppio", "Gain 3 SOUL from Tyrants."],
    ]
  },
  {
    name: "Ear Collector",
    special: "Pick any non-necromancer unit (even your own) and place a bounty on them. One bounty can be placed on a unit at a time.",
    dialogue: [
      "“What goes around, comes around, my sweet.”",
      "“Have you any news from the undercrofts?”",
      "“Market rate is good on ghouls these days. Collectors, of course. Tourists.”",
      "“No time to chat. City business is unrelenting, my dear. Hah!”",
    ],
    items: [
      [1, "Red Mark", "Any unit that slays this unit gains 2 vitality."],
      [1, "Wax Mark", "This unit gains 1 vulnerable after MOVEing or stepping."],
      [2, "Blue Mark", "Reduce unit DF by 2 this battle (min 2+)."],
      [2, "Iron Mark", "This unit is encased in an iron coffin when slain, leaving a wall instead of a corpse. It does not trigger any death effects."],
      [3, "Silver Mark", "This unit grants its SOUL to the attacking side."],
    ]
  },
  {
    name: "The Last Bodega",
    special: "Snacks can be distributed to any unit and eaten by spending a MOVE, consuming the snack. A unit can carry any number of snacks but any unit carrying an uneaten snack drops it in their space, where it can be eaten by any unit standing in that space, even a foe.",
    dialogue: [
      "“UoooooaAAh”",
      "Unearthly rattling emerges from a torn throat.",
      "It sways from side to side, as if distressed.",
      "“ ….CON..DI…mENTS?”",
    ],
    items: [
      [1, "Bodega Coffee", "Clear a negative token, or two if at or below 2 HP."],
      [1, "Mystery Jerky", "Gain 1 strength, or 2 if at or below 2 hp."],
      [2, "Energy Drink", "Step 2, with immunity to hazards and free movement if at or below 2 hp."],
      [2, "Evil Cookie", "Gain 1 SOUL, or 2 SOUL if below half hp."],
      [2, "Onigiri", "Restore 1 HP, or 2 HP if only at 1 HP."],
      [3, "Bacon Egg and Cheese", "Roll 1d6 after using next ACT. If rolling under current HP, restore ACT. Otherwise, restore 1 HP."],
    ]
  },
  {
    name: "Prigenbog, Duke of Hell",
    special: "Play a record that affects all units at the start of any round. Records can be played once, and last for one round. Effects take place immediately and overlap. If the same record is played twice in the same round, double its effects.",
    dialogue: [
      "“YOU INTO DOOM OR WHAT.”",
      "“ABORTED ENTROPY PUT OUT SOME REAL DOGSHIT LAST YEAR, DONT BOTHER WITH IT.”",
      "“THIS SHIT RIGHT HERE RIPS, THIS SHIT WILL STRAIGHT UP INVERT YOUR FUCKING INSIDES.”",
      "“YOU CAN’T KILL THE METAL.”",
    ],
    items: [
      [1, "Dark Fort - Flail to the Face", "ALL units immediately step 1. Alternate ally/foe as if taking turn order."],
      [1, "Vermifuge - Erase the Scourge of Man", "ALL units gain 1 vulnerable and 1 strength."],
      [2, "GORG - Sodomized with Viscera, Skillfucked in the Sewage Pit", "ALL units explode when slain this round, gaining deathburst: deal splash (self): 1 fire damage"],
      [2, "Maat the Destroyer - Spawn of the Innumerable Stars", "ALL units give +1 SOUL this round"],
      [3, "Loch - Skincrawler", "ALL units can move through walls and enemy units this round."],
      [3, "Madness - Oblique Oblivion", "ALL units are unable to attack this round."],
      
    ]
  }
]
