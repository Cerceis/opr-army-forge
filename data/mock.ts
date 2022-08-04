import _ from "lodash";
import WebappApiService from "../services/WebappApiService";
import { AppStore } from "./store";

export function addMockData(store: AppStore) {
  if (store.getState().army.gameSystem)
    return;

  store.dispatch({
    type: 'army/setGameSystem',
    payload: 'gf'
  });

  store.dispatch({
    type: 'army/getGameRules/fulfilled',
    payload: gameRules
  });

  const data = WebappApiService.transformArmyBookData(armyBookData, armyBookData.uid);
  store.dispatch({
    type: 'army/getArmyBookData/fulfilled',
    payload: {
      armyBookData: data,
      reset: false
    }
  });

  store.dispatch({
    type: 'army/addUnit',
    payload: data.units.find(x => x.id === "lmZtl0E")
  })

  const selectionId = store.getState().list.units[0].selectionId;

  store.dispatch({
    type: 'army/selectUnit',
    payload: selectionId
  });

  const upgrade = _.flatMap(data.upgradePackages, x => x.sections).find(x => x.uid === "HawCg");
  const option = upgrade.options.find(x => x.id === "tI0qp");

  store.dispatch({
    type: 'army/applyUpgrade',
    payload: {
      unitId: selectionId,
      upgrade,
      option
    }
  });
}

const armyBookData = {
  uid: 'w7qor7b2kuifcyvk',
  enabledGameSystems: [
    2,
    3
  ],
  name: 'Alien Hives',
  hint: '',
  background: 'Throughout the galaxy vast armies of non-sentient alien species seek to devour everything in their path. Alien Hives usually consist of multiple types of evolutionarily advanced species working together in symbiosis. Common forms of Alien Hives include insectoid and reptilian species.\r\n\r\nIt is unclear where the majority of these Alien Hives originate from and what their numbers are. Some even speculate that they might actually be bio-engineered races created by another advanced civilization sent to soften up the Sirius sector before the main battle force arrives.\r\n\r\nTheir armies have a high variety of unit types and as such can attack in many different ways. Some of the most common strategies are large swarms of basic grunts or a focus on large creatures and monsters.\r\n\r\nThese fleets pose a serious threat to all species of the galaxy, but if they bleed we can kill them!',
  armyWideRule: {},
  units: [
    {
      id: 'lmZtl0E',
      cost: 325,
      name: 'Hive Lord',
      size: 1,
      defense: 2,
      quality: 3,
      upgrades: [
        'A1',
        'C1'
      ],
      equipment: [
        {
          id: 'xtKR_',
          name: 'Razor Claws',
          count: 2,
          label: 'Razor Claws',
          attacks: 6,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          originalCount: 2,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'b8cu3',
          name: 'Stomp',
          label: 'Stomp',
          attacks: 4,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'fearless',
          name: 'Fearless',
          rating: ''
        },
        {
          key: 'hero',
          name: 'Hero',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '12'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 0
    },
    {
      id: 'qpW1fhD',
      cost: 120,
      name: 'Snatcher Lord',
      size: 1,
      defense: 4,
      quality: 3,
      upgrades: [],
      equipment: [
        {
          id: 'mlRrP',
          name: 'Heavy Piercing Claws',
          label: 'Heavy Piercing Claws',
          attacks: 6,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            },
            {
              key: 'rending',
              name: 'Rending',
              rating: '',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fast',
          name: 'Fast',
          rating: ''
        },
        {
          key: 'hero',
          name: 'Hero',
          rating: ''
        },
        {
          key: 'psychic',
          name: 'Psychic',
          rating: '1'
        },
        {
          key: 'scout',
          name: 'Scout',
          rating: ''
        },
        {
          key: 'strider',
          name: 'Strider',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '3'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 1
    },
    {
      id: 'jJP5jiL',
      cost: 95,
      name: 'Prime Warrior',
      size: 1,
      defense: 4,
      quality: 4,
      upgrades: [
        'B1',
        'bcxas',
        'C1',
        'mPtwD'
      ],
      equipment: [
        {
          id: 't9DFD',
          name: 'Razor Claws',
          count: 2,
          label: 'Razor Claws',
          attacks: 4,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          originalCount: 2,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fearless',
          name: 'Fearless',
          rating: ''
        },
        {
          key: 'hero',
          name: 'Hero',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '6'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 2
    },
    {
      id: '_LXFoO9',
      cost: 130,
      name: 'Assault Grunts',
      size: 10,
      defense: 5,
      quality: 5,
      upgrades: [
        'D1',
        'F1'
      ],
      equipment: [
        {
          id: 'NHn97',
          name: 'Razor Claws',
          label: 'Razor Claws',
          attacks: 2,
          specialRules: [],
          count: 10,
          originalCount: 10,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fast',
          name: 'Fast',
          rating: ''
        },
        {
          key: 'strider',
          name: 'Strider',
          rating: ''
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 3
    },
    {
      id: 'CMADHYi',
      cost: 130,
      name: 'Shooter Grunts',
      size: 10,
      defense: 5,
      quality: 5,
      upgrades: [
        'D1',
        'E1'
      ],
      equipment: [
        {
          id: 'hPrDD',
          name: 'Bio-Borers',
          label: 'Bio-Borers',
          range: 12,
          attacks: 2,
          specialRules: [],
          count: 10,
          originalCount: 10,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'kCMN7',
          name: 'Razor Claws',
          label: 'Razor Claws',
          attacks: 1,
          specialRules: [],
          count: 10,
          originalCount: 10,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'strider',
          name: 'Strider',
          rating: ''
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 4
    },
    {
      id: 'vuuKwqD',
      cost: 160,
      name: 'Winged Grunts',
      size: 10,
      defense: 5,
      quality: 5,
      upgrades: [
        'D1',
        'E1'
      ],
      equipment: [
        {
          id: '-RxEt',
          name: 'Bio-Borers',
          label: 'Bio-Borers',
          range: 12,
          attacks: 2,
          specialRules: [],
          count: 10,
          originalCount: 10,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'uDgpS',
          name: 'Razor Claws',
          label: 'Razor Claws',
          attacks: 1,
          specialRules: [],
          count: 10,
          originalCount: 10,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'ambush',
          name: 'Ambush',
          rating: ''
        },
        {
          key: 'flying',
          name: 'Flying',
          rating: ''
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 5
    },
    {
      id: '19W7XoU',
      cost: 195,
      name: 'Soul-Snatchers',
      size: 5,
      defense: 4,
      quality: 3,
      upgrades: [
        'G1'
      ],
      equipment: [
        {
          id: '4p3ju',
          name: 'Piercing Claws',
          label: 'Piercing Claws',
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            },
            {
              key: 'rending',
              name: 'Rending',
              rating: '',
              modify: false
            }
          ],
          count: 5,
          originalCount: 5,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fast',
          name: 'Fast',
          rating: ''
        },
        {
          key: 'scout',
          name: 'Scout',
          rating: ''
        },
        {
          key: 'strider',
          name: 'Strider',
          rating: ''
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 6
    },
    {
      id: 'Fvllq03',
      cost: 145,
      name: 'Hive Warriors',
      size: 3,
      defense: 4,
      quality: 4,
      upgrades: [
        'I1',
        'J1'
      ],
      equipment: [
        {
          id: 'Bq_mA',
          name: 'Razor Claws',
          label: 'Razor Claws',
          attacks: 3,
          specialRules: [],
          count: 6,
          originalCount: 6,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fearless',
          name: 'Fearless',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '3'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 7
    },
    {
      id: 'LYBGBaU',
      cost: 180,
      name: 'Hive Guardians',
      size: 3,
      defense: 3,
      quality: 3,
      upgrades: [
        'I1',
        'L1'
      ],
      equipment: [
        {
          id: 'Dq5_s',
          name: 'Razor Claws',
          label: 'Razor Claws',
          attacks: 3,
          specialRules: [],
          count: 6,
          originalCount: 6,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'relentless',
          name: 'Relentless',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '3'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 8
    },
    {
      id: 'rv0FY-K',
      cost: 70,
      name: 'Hive Swarm',
      size: 3,
      defense: 6,
      quality: 6,
      upgrades: [
        'H1'
      ],
      equipment: [
        {
          id: 'd9VJ7',
          name: 'Swarm Attacks',
          label: 'Swarm Attacks',
          attacks: 3,
          specialRules: [
            {
              key: 'poison',
              name: 'Poison',
              rating: '',
              modify: false
            }
          ],
          count: 3,
          originalCount: 3,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fearless',
          name: 'Fearless',
          rating: ''
        },
        {
          key: 'strider',
          name: 'Strider',
          rating: '',
          additional: false
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '3'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 9
    },
    {
      id: 'tLoLwnZ',
      cost: 175,
      name: 'Ravenous Beasts',
      size: 3,
      defense: 4,
      quality: 4,
      upgrades: [
        'I1',
        'K1'
      ],
      equipment: [
        {
          id: 'XYrpI',
          name: 'Razor Claws',
          label: 'Razor Claws',
          attacks: 3,
          specialRules: [],
          count: 6,
          originalCount: 6,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fast',
          name: 'Fast',
          rating: ''
        },
        {
          key: 'strider',
          name: 'Strider',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '3'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 10
    },
    {
      id: 'Zcuz_wH',
      cost: 205,
      name: 'Synapse Floaters',
      size: 3,
      defense: 4,
      quality: 4,
      upgrades: [
        '8R8Jo'
      ],
      equipment: [
        {
          id: 'QjXwA',
          name: 'Psy-Blast',
          label: 'Psy-Blast',
          range: 18,
          attacks: 1,
          specialRules: [
            {
              key: 'blast',
              name: 'Blast',
              rating: '3',
              modify: false
            }
          ],
          count: 3,
          originalCount: 3,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'MJo_W',
          name: 'Psy-Shock',
          label: 'Psy-Shock',
          attacks: 1,
          specialRules: [],
          count: 3,
          originalCount: 3,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'psychic synapse',
          name: 'Psychic Synapse',
          rating: '',
          additional: false
        },
        {
          key: 'stealth',
          name: 'Stealth',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '3'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 11
    },
    {
      id: '_nhe5Po',
      cost: 215,
      name: 'Venom Floaters',
      size: 3,
      defense: 4,
      quality: 4,
      upgrades: [
        '8R8Jo'
      ],
      equipment: [
        {
          id: 'g77St',
          name: 'Whip Limbs',
          label: 'Whip Limbs',
          attacks: 3,
          specialRules: [
            {
              key: 'poison',
              name: 'Poison',
              rating: '',
              modify: false
            }
          ],
          count: 3,
          originalCount: 3,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'shrouding mist',
          name: 'Shrouding Mist',
          rating: '',
          additional: false
        },
        {
          key: 'stealth',
          name: 'Stealth',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '3'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 12
    },
    {
      id: 'nETJZj-',
      cost: 195,
      name: 'Shadow Hunter',
      size: 1,
      defense: 4,
      quality: 3,
      upgrades: [
        'vcLnn',
        'mPtwD'
      ],
      equipment: [
        {
          id: 'TDb3f',
          name: 'Razor Claws',
          count: 2,
          label: 'Razor Claws',
          attacks: 4,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          originalCount: 2,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'ambush',
          name: 'Ambush',
          rating: ''
        },
        {
          key: 'fast',
          name: 'Fast',
          rating: ''
        },
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'stealth',
          name: 'Stealth',
          rating: ''
        },
        {
          key: 'strider',
          name: 'Strider',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '6'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 13
    },
    {
      id: 'YbEEu7h',
      cost: 275,
      name: 'Carnivo-Rex',
      size: 1,
      defense: 2,
      quality: 4,
      upgrades: [
        'A2',
        'B2',
        'C2'
      ],
      equipment: [
        {
          id: 'qMnN_',
          name: 'Razor Claws',
          count: 2,
          label: 'Razor Claws',
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          originalCount: 2,
          type: 'ArmyBookWeapon'
        },
        {
          id: '0Hrqz',
          name: 'Stomp',
          label: 'Stomp',
          attacks: 4,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'TA5T0',
          name: 'Vicious Jaws',
          label: 'Vicious Jaws',
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '4',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'fearless',
          name: 'Fearless',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '12'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 14
    },
    {
      id: 'w1qhVzS',
      cost: 395,
      name: 'Toxico-Rex',
      size: 1,
      defense: 2,
      quality: 4,
      upgrades: [
        'B2'
      ],
      equipment: [
        {
          id: '_VfA-',
          name: 'Acid Spurt',
          label: 'Acid Spurt',
          range: 12,
          attacks: 2,
          specialRules: [
            {
              key: 'blast',
              name: 'Blast',
              rating: '3',
              modify: false
            },
            {
              key: 'poison',
              name: 'Poison',
              rating: '',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'e6lGT',
          name: 'Stomp',
          label: 'Stomp',
          attacks: 4,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'SxBL1',
          name: 'Whip Limbs',
          label: 'Whip Limbs',
          attacks: 9,
          specialRules: [
            {
              key: 'poison',
              name: 'Poison',
              rating: '',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'fearless',
          name: 'Fearless',
          rating: ''
        },
        {
          key: 'shrouding-mist',
          name: 'Shrouding Mist',
          rating: ''
        },
        {
          key: 'stealth',
          name: 'Stealth',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '12'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 15
    },
    {
      id: 'X1N2nRX',
      cost: 355,
      name: 'Psycho-Rex',
      size: 1,
      defense: 2,
      quality: 4,
      upgrades: [
        'A2',
        'B2',
        'D2'
      ],
      equipment: [
        {
          id: 'f7X-z',
          name: 'Heavy Psy-Blast',
          label: 'Heavy Psy-Blast',
          range: 18,
          attacks: 2,
          specialRules: [
            {
              key: 'blast',
              name: 'Blast',
              rating: '3',
              modify: false
            },
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: '_-5N7',
          name: 'Razor Claws',
          count: 2,
          label: 'Razor Claws',
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          originalCount: 2,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'OBJ6r',
          name: 'Stomp',
          label: 'Stomp',
          attacks: 4,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'fearless',
          name: 'Fearless',
          rating: ''
        },
        {
          key: 'psychic',
          name: 'Psychic',
          rating: '2'
        },
        {
          key: 'stealth',
          name: 'Stealth',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '12'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 16
    },
    {
      id: 'ntetDg-',
      cost: 525,
      name: 'Devourer Beast',
      size: 1,
      defense: 2,
      quality: 3,
      upgrades: [
        'A2',
        'E2'
      ],
      equipment: [
        {
          id: 'wkngW',
          name: 'Razor Claws',
          count: 3,
          label: 'Razor Claws',
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          originalCount: 3,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'fu1Gw',
          name: 'Stomp',
          label: 'Stomp',
          attacks: 6,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '2',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'oDvei',
          label: 'Tongue',
          range: 12,
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '2',
              modify: false
            },
            {
              key: 'deadly',
              name: 'Deadly',
              rating: '3',
              modify: false
            },
            {
              key: 'sniper',
              name: 'Sniper',
              rating: '',
              modify: false
            }
          ],
          name: 'Tongue',
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '18'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 17
    },
    {
      id: 'XXealbA',
      cost: 535,
      name: 'Tyrant Beast',
      size: 1,
      defense: 2,
      quality: 3,
      upgrades: [
        'A2',
        'E2',
        'F2'
      ],
      equipment: [
        {
          id: 'Aj5j3',
          name: 'Razor Claws',
          count: 2,
          label: 'Razor Claws',
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          originalCount: 2,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'jZQ6n',
          name: 'Stomp',
          label: 'Stomp',
          attacks: 6,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '2',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'cwsRF',
          name: 'Toxic Spray',
          label: 'Toxic Spray',
          range: 18,
          attacks: 18,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '18'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 18
    },
    {
      id: 'efiZafu',
      cost: 570,
      name: 'Artillery Beast',
      size: 1,
      defense: 2,
      quality: 3,
      upgrades: [
        'A2',
        'E2',
        'G2'
      ],
      equipment: [
        {
          id: 'S_uZT',
          name: 'Razor Claws',
          count: 2,
          label: 'Razor Claws',
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          originalCount: 2,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'lkNWK',
          name: 'Stomp',
          label: 'Stomp',
          attacks: 6,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '2',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          uid: '1IrGu',
          label: 'Shredder Bio-Artillery',
          range: 36,
          attacks: 3,
          specialRules: [
            {
              key: 'blast',
              name: 'Blast',
              rating: '3',
              modify: false
            },
            {
              key: 'rending',
              name: 'Rending',
              rating: '',
              modify: false
            },
            {
              key: 'indirect',
              name: 'Indirect',
              rating: '',
              modify: false
            }
          ],
          name: 'Shredder Bio-Artillery',
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '18'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 19
    },
    {
      id: 'KzCu3EC',
      cost: 645,
      name: 'Spawning Beast',
      size: 1,
      defense: 2,
      quality: 3,
      upgrades: [
        'A2',
        'E2'
      ],
      equipment: [
        {
          id: 'KT0Fl',
          name: 'Razor Claws',
          count: 2,
          label: 'Razor Claws',
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          originalCount: 2,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'eKIoR',
          name: 'Rapid Stinger Cannon',
          label: 'Rapid Stinger Cannon',
          range: 18,
          attacks: 12,
          specialRules: [
            {
              key: 'rending',
              name: 'Rending',
              rating: '',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'M-yTb',
          name: 'Stomp',
          label: 'Stomp',
          attacks: 6,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '2',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'spawn-brood',
          name: 'Spawn Brood',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '18'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 20
    },
    {
      id: 'laQL0iJ',
      cost: 540,
      name: 'Burrower',
      size: 1,
      defense: 2,
      quality: 3,
      upgrades: [
        'A2',
        'E2'
      ],
      equipment: [
        {
          id: 'h3SDI',
          name: 'Razor Claws',
          count: 4,
          label: 'Razor Claws',
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          originalCount: 4,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'NnR4r',
          name: 'Stomp',
          label: 'Stomp',
          attacks: 6,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '2',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'surprise-attack',
          name: 'Surprise Attack',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '18'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 21
    },
    {
      id: 'wCTQj9q',
      cost: 175,
      name: 'Flamer Beast',
      size: 1,
      defense: 2,
      quality: 4,
      upgrades: [
        'A2'
      ],
      equipment: [
        {
          id: '1mdvf',
          name: 'Razor Claws',
          label: 'Razor Claws',
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'wVr2T',
          name: 'Spit Flames',
          label: 'Spit Flames',
          range: 18,
          attacks: 6,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'GZbVa',
          name: 'Stomp',
          label: 'Stomp',
          attacks: 2,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'fearless',
          name: 'Fearless',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '6'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 22
    },
    {
      id: 'CXEkpHT',
      cost: 220,
      name: 'Mortar Beast',
      size: 1,
      defense: 2,
      quality: 4,
      upgrades: [
        'A2'
      ],
      equipment: [
        {
          id: 'M41Jw',
          name: 'Razor Claws',
          label: 'Razor Claws',
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'ce6Q5',
          name: 'Spore Gun',
          label: 'Spore Gun',
          range: 24,
          attacks: 1,
          specialRules: [
            {
              key: 'blast',
              name: 'Blast',
              rating: '9',
              modify: false
            },
            {
              key: 'indirect',
              name: 'Indirect',
              rating: '',
              modify: false
            },
            {
              key: 'spores',
              name: 'Spores',
              rating: '',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'Fb0yy',
          name: 'Stomp',
          label: 'Stomp',
          attacks: 2,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'fearless',
          name: 'Fearless',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '6'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 23
    },
    {
      id: '18VuWgg',
      cost: 190,
      name: 'Invasion Carrier',
      size: 1,
      defense: 2,
      quality: 4,
      upgrades: [
        'H2',
        'I2'
      ],
      equipment: [
        {
          id: 'hguY2',
          name: 'Razor Tendrils',
          label: 'Razor Tendrils',
          attacks: 6,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'ambush',
          name: 'Ambush',
          rating: ''
        },
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'fearless',
          name: 'Fearless',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '6'
        },
        {
          key: 'transport',
          name: 'Transport',
          rating: '11'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 24
    },
    {
      id: 'Jwz4vyd',
      cost: 225,
      name: 'Invasion Artillery',
      size: 1,
      defense: 2,
      quality: 4,
      upgrades: [
        'H2',
        'I2'
      ],
      equipment: [
        {
          id: 'dCMkL',
          name: 'Razor Tendrils',
          label: 'Razor Tendrils',
          attacks: 6,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '1',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'IF7VL',
          name: 'Spore Gun',
          label: 'Spore Gun',
          range: 24,
          attacks: 1,
          specialRules: [
            {
              key: 'blast',
              name: 'Blast',
              rating: '9',
              modify: false
            },
            {
              key: 'indirect',
              name: 'Indirect',
              rating: '',
              modify: false
            },
            {
              key: 'spores',
              name: 'Spores',
              rating: '',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'ambush',
          name: 'Ambush',
          rating: ''
        },
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'fearless',
          name: 'Fearless',
          rating: ''
        },
        {
          key: 'slow',
          name: 'Slow',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '6'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 25
    },
    {
      id: 'kQgZckF',
      cost: 170,
      name: 'Rapacious Beast',
      size: 1,
      defense: 2,
      quality: 4,
      upgrades: [
        'H2',
        'J2'
      ],
      equipment: [
        {
          id: '_qBHA',
          name: 'Caustic Cannon',
          label: 'Caustic Cannon',
          range: 12,
          attacks: 6,
          specialRules: [],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'SxEgz',
          name: 'Stinger Cannon',
          label: 'Stinger Cannon',
          range: 18,
          attacks: 6,
          specialRules: [
            {
              key: 'rending',
              name: 'Rending',
              rating: '',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'aircraft',
          name: 'Aircraft',
          rating: ''
        },
        {
          key: 'fearless',
          name: 'Fearless',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '6'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 26
    },
    {
      id: 'quhdIwF',
      cost: 735,
      name: 'Hive Titan',
      size: 1,
      defense: 2,
      quality: 3,
      upgrades: [
        'K2'
      ],
      equipment: [
        {
          id: 'DRm1u',
          name: 'Titanic Jaws',
          label: 'Titanic Jaws',
          attacks: 3,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '4',
              modify: false
            },
            {
              key: 'deadly',
              name: 'Deadly',
              rating: '6',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        },
        {
          id: 'em51Q',
          name: 'Titanic Stomp',
          label: 'Titanic Stomp',
          attacks: 12,
          specialRules: [
            {
              key: 'ap',
              name: 'AP',
              rating: '2',
              modify: false
            }
          ],
          count: 1,
          originalCount: 1,
          type: 'ArmyBookWeapon'
        }
      ],
      specialRules: [
        {
          key: 'fear',
          name: 'Fear',
          rating: ''
        },
        {
          key: 'regeneration',
          name: 'Regeneration',
          rating: ''
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '24'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 27
    },
    {
      id: 'lWrYpK5',
      cost: 45,
      name: 'Spores',
      size: 3,
      defense: 6,
      quality: 6,
      upgrades: [],
      equipment: [],
      specialRules: [
        {
          key: 'explode',
          name: 'Explode',
          rating: '1'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 28
    },
    {
      id: 'wSkDwle',
      cost: 45,
      name: 'Massive Spore',
      size: 1,
      defense: 6,
      quality: 6,
      upgrades: [],
      equipment: [],
      specialRules: [
        {
          key: 'explode',
          name: 'Explode',
          rating: '3'
        },
        {
          key: 'tough',
          name: 'Tough',
          rating: '3'
        }
      ],
      disabledUpgradeSections: [],
      selectedUpgrades: [],
      sortId: 29
    }
  ],
  upgradePackages: [
    {
      uid: 'A1',
      hint: 'Hive Lord',
      sections: [
        {
          id: 'HV_FrXT',
          uid: 'IQd7evV',
          type: 'replace',
          label: 'Replace any Razor Claws',
          options: [
            {
              uid: 'NdaT1rK',
              cost: -5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Serrated Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Serrated Claws (A3, Blast(3))',
                  range: 0,
                  attacks: 3,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Serrated Claws (A3, Blast(3))',
              isModel: false,
              id: 'NdaT1rK',
              parentSectionId: 'IQd7evV'
            },
            {
              uid: 'yRtCeIH',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Piercing Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Piercing Claws (A6, AP(1), Rending)',
                  range: 0,
                  attacks: 6,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    },
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Piercing Claws (A6, AP(1), Rending)',
              isModel: false,
              id: 'yRtCeIH',
              parentSectionId: 'IQd7evV'
            },
            {
              uid: '09MXOXw',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Whip Limb and Sword Claw',
                  type: 'ArmyBookWeapon',
                  label: 'Whip Limb and Sword Claw (A3, Rending, Deadly(3))',
                  range: 0,
                  attacks: 3,
                  condition: '',
                  specialRules: [
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Whip Limb and Sword Claw (A3, Rending, Deadly(3))',
              isModel: false,
              id: '09MXOXw',
              parentSectionId: 'IQd7evV'
            },
            {
              uid: 'W-WpAeM',
              cost: 20,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Sword Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Sword Claws (A3, AP(2), Deadly(3))',
                  range: 0,
                  attacks: 3,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(2)',
                      modify: false,
                      rating: '2'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Sword Claws (A3, AP(2), Deadly(3))',
              isModel: false,
              id: 'W-WpAeM',
              parentSectionId: 'IQd7evV'
            },
            {
              uid: '09evlke',
              cost: 20,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Smashing Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Smashing Claws (A6, AP(4))',
                  range: 0,
                  attacks: 6,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(4)',
                      modify: false,
                      rating: '4'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Smashing Claws (A6, AP(4))',
              isModel: false,
              id: '09evlke',
              parentSectionId: 'IQd7evV'
            }
          ],
          parentPackageUid: 'A1',
          affects: 'any',
          replaceWhat: [
            'Razor Claws'
          ],
          isCommandGroup: false
        },
        {
          id: 'QNgTkDJ',
          uid: '9ZOE5',
          label: 'Replace any Razor Claws',
          options: [
            {
              uid: 'VpO4tWL',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Heavy Spitter Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Heavy Spitter Gun (24", A2, Blast(3))',
                  range: 24,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Heavy Spitter Gun (24", A2, Blast(3))',
              isModel: false,
              id: 'VpO4tWL',
              parentSectionId: '9ZOE5'
            },
            {
              uid: '6hPac',
              cost: 15,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Rapid Shredder Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Rapid Shredder Gun (18", A6, Rending)',
                  range: 18,
                  attacks: 6,
                  condition: '',
                  specialRules: [
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Rapid Shredder Gun (18", A6, Rending)',
              isModel: false,
              id: '6hPac',
              parentSectionId: '9ZOE5'
            },
            {
              uid: 'izAGnUr',
              cost: 30,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Rapid Heavy Ravager Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Rapid Heavy Ravager Gun (18", A6, AP(2))',
                  range: 18,
                  attacks: 6,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(2)',
                      modify: false,
                      rating: '2'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Rapid Heavy Ravager Gun (18", A6, AP(2))',
              isModel: false,
              id: 'izAGnUr',
              parentSectionId: '9ZOE5'
            },
            {
              uid: 'FdQn9',
              cost: 45,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Heavy Barb Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Heavy Barb Cannon (36", A1, Blast(6), AP(1))',
                  range: 36,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(6)',
                      modify: false,
                      rating: '6'
                    },
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Heavy Barb Cannon (36", A1, Blast(6), AP(1))',
              isModel: false,
              id: 'FdQn9',
              parentSectionId: '9ZOE5'
            },
            {
              uid: 'BjmzM',
              cost: 110,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Heavy Acid Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Heavy Acid Cannon (36", A1, AP(3), Deadly(6), Lock-On)',
                  range: 36,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(6)',
                      modify: false,
                      rating: '6'
                    },
                    {
                      key: 'lock-on',
                      name: 'Lock-On',
                      type: 'ArmyBookRule',
                      label: 'Lock-On',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Heavy Acid Cannon (36", A1, AP(3), Deadly(6), Lock-On)',
              isModel: false,
              id: 'BjmzM',
              parentSectionId: '9ZOE5'
            }
          ],
          parentPackageUid: 'A1',
          type: 'replace',
          affects: 'any',
          replaceWhat: [
            'Razor Claws'
          ],
          isCommandGroup: false
        },
        {
          id: 'rtzgnfJ',
          uid: 'HawCg',
          label: 'Upgrade with any',
          options: [
            {
              uid: '1sUIE',
              cost: 25,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Hive Conduit',
                  type: 'ArmyBookItem',
                  label: 'Hive Conduit (Psychic(1))',
                  content: [
                    {
                      key: 'psychic',
                      name: 'Psychic',
                      type: 'ArmyBookRule',
                      label: 'Psychic(1)',
                      modify: false,
                      rating: '1'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Hive Conduit (Psychic(1))',
              isModel: false,
              id: '1sUIE',
              parentSectionId: 'HawCg'
            },
            {
              uid: 'tI0qp',
              cost: 60,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Recovery',
                  type: 'ArmyBookItem',
                  label: 'Bio-Recovery (Regeneration)',
                  content: [
                    {
                      key: 'regeneration',
                      name: 'Regeneration',
                      type: 'ArmyBookRule',
                      label: 'Regeneration',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Bio-Recovery (Regeneration)',
              isModel: false,
              id: 'tI0qp',
              parentSectionId: 'HawCg'
            },
            {
              uid: 'a7-Dy',
              cost: 95,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Wings',
                  type: 'ArmyBookItem',
                  label: 'Wings (Ambush, Flying)',
                  content: [
                    {
                      key: 'ambush',
                      name: 'Ambush',
                      type: 'ArmyBookRule',
                      label: 'Ambush',
                      modify: false,
                      rating: ''
                    },
                    {
                      key: 'flying',
                      name: 'Flying',
                      type: 'ArmyBookRule',
                      label: 'Flying',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Wings (Ambush, Flying)',
              isModel: false,
              id: 'a7-Dy',
              parentSectionId: 'HawCg'
            }
          ],
          parentPackageUid: 'A1',
          type: 'upgrade',
          select: 'any',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'B1',
      hint: 'Prime Warrior',
      sections: [
        {
          id: 'daoNnCG',
          uid: 'A_Ko4Rk',
          type: 'replace',
          label: 'Replace one Razor Claws',
          options: [
            {
              uid: 'RmyozDO',
              cost: -5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Spitter Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Spitter Gun (24", A1, Blast(3))',
                  range: 24,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Spitter Gun (24", A1, Blast(3))',
              isModel: false,
              id: 'RmyozDO',
              parentSectionId: 'A_Ko4Rk'
            },
            {
              uid: 'WqEowcx',
              cost: 0,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Twin Spine Guns',
                  type: 'ArmyBookWeapon',
                  label: 'Twin Spine Guns (12", A4, AP(1))',
                  range: 12,
                  attacks: 4,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Twin Spine Guns (12", A4, AP(1))',
              isModel: false,
              id: 'WqEowcx',
              parentSectionId: 'A_Ko4Rk'
            },
            {
              uid: 'FJsPG',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Shredder Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Shredder Gun (18", A3, Rending)',
                  range: 18,
                  attacks: 3,
                  condition: '',
                  specialRules: [
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Shredder Gun (18", A3, Rending)',
              isModel: false,
              id: 'FJsPG',
              parentSectionId: 'A_Ko4Rk'
            },
            {
              uid: '9pGbddW',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Heavy Ravager Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Heavy Ravager Gun (18", A3, AP(2))',
                  range: 18,
                  attacks: 3,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(2)',
                      modify: false,
                      rating: '2'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Heavy Ravager Gun (18", A3, AP(2))',
              isModel: false,
              id: '9pGbddW',
              parentSectionId: 'A_Ko4Rk'
            },
            {
              uid: '5_eN5aZ',
              cost: 10,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Barb Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Barb Cannon (30”, A1, Blast(3), AP(1))',
                  range: 30,
                  attacks: 1,
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      rating: '3'
                    },
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      rating: '1'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Barb Cannon (30”, A1, Blast(3), AP(1))',
              isModel: false,
              id: '5_eN5aZ',
              parentSectionId: 'A_Ko4Rk'
            },
            {
              uid: 'cz5t265',
              cost: 30,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Acid Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Acid Cannon (30", A1, AP(3), Deadly(3), Lock-On)',
                  range: 30,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'lock-on',
                      name: 'Lock-On',
                      type: 'ArmyBookRule',
                      label: 'Lock-On',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Acid Cannon (30", A1, AP(3), Deadly(3), Lock-On)',
              isModel: false,
              id: 'cz5t265',
              parentSectionId: 'A_Ko4Rk'
            }
          ],
          parentPackageUid: 'B1',
          affects: 1,
          replaceWhat: [
            'Razor Claws'
          ],
          isCommandGroup: false
        },
        {
          id: 'mjTkWF_',
          uid: 'ijbm7zF',
          type: 'upgrade',
          label: 'Upgrade with any',
          options: [
            {
              uid: 'fn_S9bJ',
              cost: 30,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Recovery',
                  type: 'ArmyBookItem',
                  label: 'Bio-Recovery (Regeneration)',
                  content: [
                    {
                      key: 'regeneration',
                      name: 'Regeneration',
                      type: 'ArmyBookRule',
                      label: 'Regeneration',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Bio-Recovery (Regeneration)',
              isModel: false,
              id: 'fn_S9bJ',
              parentSectionId: 'ijbm7zF'
            },
            {
              uid: 'RS4rKkQ',
              cost: 35,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Wings',
                  type: 'ArmyBookItem',
                  label: 'Wings (Ambush, Flying)',
                  content: [
                    {
                      key: 'ambush',
                      name: 'Ambush',
                      type: 'ArmyBookRule',
                      label: 'Ambush',
                      modify: false,
                      rating: ''
                    },
                    {
                      key: 'flying',
                      name: 'Flying',
                      type: 'ArmyBookRule',
                      label: 'Flying',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Wings (Ambush, Flying)',
              isModel: false,
              id: 'RS4rKkQ',
              parentSectionId: 'ijbm7zF'
            }
          ],
          parentPackageUid: 'B1',
          select: 'any',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'C1',
      hint: 'Specialists',
      sections: [
        {
          id: 'J-i-mLZ',
          uid: 'iiWjuL3',
          type: 'upgrade',
          label: 'Upgrade with any',
          options: [
            {
              uid: 'ykc-B',
              cost: 10,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Hive Protector',
                  type: 'ArmyBookItem',
                  label: 'Hive Protector (Psy-Barrier)',
                  content: [
                    {
                      key: 'psy-barrier',
                      name: 'Psy-Barrier',
                      type: 'ArmyBookRule',
                      label: 'Psy-Barrier',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Hive Protector (Psy-Barrier)',
              isModel: false,
              id: 'ykc-B',
              parentSectionId: 'iiWjuL3'
            },
            {
              uid: 'WbrXk',
              cost: 65,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Brood Leader',
                  type: 'ArmyBookItem',
                  label: 'Brood Leader (Pheromones)',
                  content: [
                    {
                      key: 'pheromones',
                      name: 'Pheromones',
                      type: 'ArmyBookRule',
                      label: 'Pheromones',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Brood Leader (Pheromones)',
              isModel: false,
              id: 'WbrXk',
              parentSectionId: 'iiWjuL3'
            }
          ],
          parentPackageUid: 'C1',
          select: 'any',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'D1',
      hint: 'Grunt Upgrades',
      sections: [
        {
          id: 'VawvJY8',
          uid: '3wJarRx',
          type: 'upgrade',
          label: 'Upgrade all models with any',
          options: [
            {
              uid: '1ewDpNQ',
              cost: 10,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Heavy Bite',
                  type: 'ArmyBookItem',
                  label: 'Heavy Bite (Furious)',
                  content: [
                    {
                      key: 'furious',
                      name: 'Furious',
                      type: 'ArmyBookRule',
                      label: 'Furious',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Heavy Bite (Furious)',
              isModel: false,
              id: '1ewDpNQ',
              parentSectionId: '3wJarRx'
            },
            {
              uid: 'MalPY07',
              cost: 20,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Adrenaline',
                  type: 'ArmyBookItem',
                  label: 'Adrenaline (No Retreat)',
                  content: [
                    {
                      key: 'no-retreat',
                      name: 'No Retreat',
                      type: 'ArmyBookRule',
                      label: 'No Retreat',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Adrenaline (No Retreat)',
              isModel: false,
              id: 'MalPY07',
              parentSectionId: '3wJarRx'
            },
            {
              uid: 'Kz0oZ4M',
              cost: 40,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Toxic Cysts',
                  type: 'ArmyBookItem',
                  label: 'Toxic Cysts (Poison in melee)',
                  content: [
                    {
                      key: 'poison',
                      name: 'Poison',
                      type: 'ArmyBookRule',
                      label: 'Poison in melee',
                      rating: '',
                      condition: 'in melee'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Toxic Cysts (Poison in melee)',
              isModel: false,
              id: 'Kz0oZ4M',
              parentSectionId: '3wJarRx'
            }
          ],
          parentPackageUid: 'D1',
          model: true,
          affects: 'all',
          select: 'any',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'E1',
      hint: 'Grunt Ranged Upgrades',
      sections: [
        {
          id: 'qrEvR3o',
          uid: 'QyRz7ED',
          type: 'replace',
          label: 'Replace any Bio-Borer',
          options: [
            {
              uid: 'WI01jD8',
              cost: 0,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Spiner',
                  type: 'ArmyBookWeapon',
                  label: 'Bio-Spiner (6", A2, AP(1))',
                  range: 6,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Bio-Spiner (6", A2, AP(1))',
              isModel: false,
              id: 'WI01jD8',
              parentSectionId: 'QyRz7ED'
            },
            {
              uid: 'lf5nM',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Ravager',
                  type: 'ArmyBookWeapon',
                  label: 'Bio-Ravager (18", A2)',
                  range: 18,
                  attacks: 2,
                  condition: '',
                  specialRules: [],
                  count: 1
                }
              ],
              label: 'Bio-Ravager (18", A2)',
              isModel: false,
              id: 'lf5nM',
              parentSectionId: 'QyRz7ED'
            }
          ],
          parentPackageUid: 'E1',
          affects: 'any',
          replaceWhat: [
            'Bio-Borer'
          ],
          isCommandGroup: false
        },
        {
          id: 'FQV6ViZ',
          uid: '0yYhyhC',
          type: 'replace',
          label: 'Replace up to two Bio-Borers',
          options: [
            {
              uid: 'KTLQOcc',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Fuser',
                  type: 'ArmyBookWeapon',
                  label: 'Bio-Fuser (6", A1, AP(4), Deadly(3))',
                  range: 6,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(4)',
                      modify: false,
                      rating: '4'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Bio-Fuser (6", A1, AP(4), Deadly(3))',
              isModel: false,
              id: 'KTLQOcc',
              parentSectionId: '0yYhyhC'
            },
            {
              uid: 'ycL039j',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Flamer',
                  type: 'ArmyBookWeapon',
                  label: 'Bio-Flamer (6", A6)',
                  range: 6,
                  attacks: 6,
                  condition: '',
                  specialRules: [],
                  count: 1
                }
              ],
              label: 'Bio-Flamer (6", A6)',
              isModel: false,
              id: 'ycL039j',
              parentSectionId: '0yYhyhC'
            },
            {
              uid: 'mlcBa2f',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Shredder',
                  type: 'ArmyBookWeapon',
                  label: 'Bio-Shredder (9", A3, Rending)',
                  range: 9,
                  attacks: 3,
                  condition: '',
                  specialRules: [
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Bio-Shredder (9", A3, Rending)',
              isModel: false,
              id: 'mlcBa2f',
              parentSectionId: '0yYhyhC'
            },
            {
              uid: 'c9eYKZ1',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Plasma',
                  type: 'ArmyBookWeapon',
                  label: 'Bio-Plasma (12", A1, AP(4))',
                  range: 12,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(4)',
                      modify: false,
                      rating: '4'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Bio-Plasma (12", A1, AP(4))',
              isModel: false,
              id: 'c9eYKZ1',
              parentSectionId: '0yYhyhC'
            },
            {
              uid: '_9KIH',
              cost: 15,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Spiker',
                  type: 'ArmyBookWeapon',
                  label: 'Bio-Spiker (18", A1, AP(1), Sniper)',
                  range: 18,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    },
                    {
                      key: 'sniper',
                      name: 'Sniper',
                      type: 'ArmyBookRule',
                      label: 'Sniper',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Bio-Spiker (18", A1, AP(1), Sniper)',
              isModel: false,
              id: '_9KIH',
              parentSectionId: '0yYhyhC'
            }
          ],
          parentPackageUid: 'E1',
          select: 2,
          replaceWhat: [
            'Bio-Borers'
          ],
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'F1',
      hint: 'Assault Grunts',
      sections: [
        {
          id: 'CP9zIZl',
          uid: 'xwVYFo1',
          type: 'replace',
          label: 'Replace up to two Razor Claws',
          options: [
            {
              uid: '1aR34U3',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Serrated Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Serrated Claws (A1, Blast(3))',
                  range: 0,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Serrated Claws (A1, Blast(3))',
              isModel: false,
              id: '1aR34U3',
              parentSectionId: 'xwVYFo1'
            },
            {
              uid: 'tFhUp',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Piercing Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Piercing Claws (A2, AP(1), Rending)',
                  range: 0,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    },
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Piercing Claws (A2, AP(1), Rending)',
              isModel: false,
              id: 'tFhUp',
              parentSectionId: 'xwVYFo1'
            },
            {
              uid: 'CvENion',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Sword Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Sword Claws (A1, AP(2), Deadly(3))',
                  range: 0,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(2)',
                      modify: false,
                      rating: '2'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Sword Claws (A1, AP(2), Deadly(3))',
              isModel: false,
              id: 'CvENion',
              parentSectionId: 'xwVYFo1'
            },
            {
              uid: 'F_jmu',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Smashing Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Smashing Claws (A2, AP(4))',
                  range: 0,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(4)',
                      modify: false,
                      rating: '4'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Smashing Claws (A2, AP(4))',
              isModel: false,
              id: 'F_jmu',
              parentSectionId: 'xwVYFo1'
            }
          ],
          parentPackageUid: 'F1',
          select: 2,
          replaceWhat: [
            'Razor Claws'
          ],
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'G1',
      hint: 'Soul-Snatchers',
      sections: [
        {
          id: 'Fj1oM11',
          uid: 'An_cSbk',
          type: 'upgrade',
          label: 'Upgrade one model with',
          options: [
            {
              uid: 'ifL1POY',
              cost: 25,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Mind Snatcher',
                  type: 'ArmyBookItem',
                  label: 'Mind Snatcher (Psychic(1))',
                  content: [
                    {
                      key: 'psychic',
                      name: 'Psychic',
                      type: 'ArmyBookRule',
                      label: 'Psychic(1)',
                      rating: '1'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Mind Snatcher (Psychic(1))',
              isModel: false,
              id: 'ifL1POY',
              parentSectionId: 'An_cSbk'
            }
          ],
          parentPackageUid: 'G1',
          model: true,
          affects: 1,
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'H1',
      hint: 'Hive Swarm',
      sections: [
        {
          id: '4fVsMhr',
          uid: '3CsAitE',
          type: 'upgrade',
          label: 'Upgrade all models with any',
          options: [
            {
              uid: 'n7Ibiwk',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Burrow Attack',
                  type: 'ArmyBookItem',
                  label: 'Burrow Attack (Ambush)',
                  content: [
                    {
                      key: 'ambush',
                      name: 'Ambush',
                      type: 'ArmyBookRule',
                      label: 'Ambush',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Burrow Attack (Ambush)',
              isModel: false,
              id: 'n7Ibiwk',
              parentSectionId: '3CsAitE'
            },
            {
              uid: '0izCR',
              cost: 15,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Spine Shooters',
                  type: 'ArmyBookWeapon',
                  label: 'Spine Shooters (12", A4, AP(1))',
                  range: 12,
                  attacks: 4,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Spine Shooters (12", A4, AP(1))',
              isModel: false,
              id: '0izCR',
              parentSectionId: '3CsAitE'
            }
          ],
          parentPackageUid: 'H1',
          model: true,
          affects: 'all',
          select: 'any',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'I1',
      hint: 'Melee Upgrades',
      sections: [
        {
          id: 'quN8GbA',
          uid: 'HcgSsOq',
          type: 'replace',
          label: 'Replace any Razor Claws',
          options: [
            {
              uid: 'jA01cZ4',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Piercing Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Piercing Claws (A3, AP(1), Rending)',
                  attacks: 3,
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      rating: '1'
                    },
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Piercing Claws (A3, AP(1), Rending)',
              isModel: false,
              id: 'jA01cZ4',
              parentSectionId: 'HcgSsOq'
            },
            {
              uid: 'Ji2qnlV',
              cost: 15,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Smashing Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Smashing Claws (A3, AP(4))',
                  attacks: 3,
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(4)',
                      rating: '4'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Smashing Claws (A3, AP(4))',
              isModel: false,
              id: 'Ji2qnlV',
              parentSectionId: 'HcgSsOq'
            },
            {
              uid: 'fgFzC-3',
              cost: 10,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Serrated Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Serrated Claws (A2, Blast(3))',
                  range: 0,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Serrated Claws (A2, Blast(3))',
              isModel: false,
              id: 'fgFzC-3',
              parentSectionId: 'HcgSsOq'
            },
            {
              uid: '8ysJUTI',
              cost: 15,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Whip Limb and Sword Claw',
                  type: 'ArmyBookWeapon',
                  label: 'Whip Limb and Sword Claw (A2, Rending, Deadly(3))',
                  range: 0,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Whip Limb and Sword Claw (A2, Rending, Deadly(3))',
              isModel: false,
              id: '8ysJUTI',
              parentSectionId: 'HcgSsOq'
            },
            {
              uid: 'EfIfo',
              cost: 25,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Sword Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Sword Claws (A2, AP(2), Deadly(3))',
                  range: 0,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(2)',
                      modify: false,
                      rating: '2'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Sword Claws (A2, AP(2), Deadly(3))',
              isModel: false,
              id: 'EfIfo',
              parentSectionId: 'HcgSsOq'
            }
          ],
          parentPackageUid: 'I1',
          affects: 'any',
          replaceWhat: [
            'Razor Claws'
          ],
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'J1',
      hint: 'Hive Warriors',
      sections: [
        {
          id: 'B09T4uO',
          uid: 'S3YuiRt',
          type: 'replace',
          label: 'Any model may replace one Razor Claws',
          options: [
            {
              uid: 'bp4t5LO',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Twin Spine Guns',
                  type: 'ArmyBookWeapon',
                  label: 'Twin Spine Guns (12", A4, AP(1))',
                  range: 12,
                  attacks: 4,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Twin Spine Guns (12", A4, AP(1))',
              isModel: false,
              id: 'bp4t5LO',
              parentSectionId: 'S3YuiRt'
            },
            {
              uid: 'A23zi',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Ravager Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Ravager Gun (18", A3)',
                  range: 18,
                  attacks: 3,
                  condition: '',
                  specialRules: [],
                  count: 1
                }
              ],
              label: 'Ravager Gun (18", A3)',
              isModel: false,
              id: 'A23zi',
              parentSectionId: 'S3YuiRt'
            },
            {
              uid: 'BrBlA',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Spitter Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Spitter Gun (24", A1, Blast(3))',
                  range: 24,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Spitter Gun (24", A1, Blast(3))',
              isModel: false,
              id: 'BrBlA',
              parentSectionId: 'S3YuiRt'
            }
          ],
          parentPackageUid: 'J1',
          attachment: false,
          affects: 'any',
          model: true,
          select: 1,
          replaceWhat: [
            'Razor Claws'
          ],
          isCommandGroup: false
        },
        {
          id: 'kVJ2He5',
          uid: 'fQBmVR8',
          type: 'replace',
          label: 'Replace one Ravager Gun',
          options: [
            {
              uid: 'JNqa1bh',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Shredder Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Shredder Gun (18", A3, Rending)',
                  range: 18,
                  attacks: 3,
                  condition: '',
                  specialRules: [
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Shredder Gun (18", A3, Rending)',
              isModel: false,
              id: 'JNqa1bh',
              parentSectionId: 'fQBmVR8'
            },
            {
              uid: 'yTWp32j',
              cost: 10,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Heavy Ravager Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Heavy Ravager Gun (18", A3, AP(2))',
                  range: 18,
                  attacks: 3,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(2)',
                      modify: false,
                      rating: '2'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Heavy Ravager Gun (18", A3, AP(2))',
              isModel: false,
              id: 'yTWp32j',
              parentSectionId: 'fQBmVR8'
            },
            {
              uid: 'QfBH6eI',
              cost: 10,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Barb Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Barb Cannon (30”, A1, Blast(3), AP(1))',
                  range: 30,
                  attacks: 1,
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      rating: '3'
                    },
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      rating: '1'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Barb Cannon (30”, A1, Blast(3), AP(1))',
              isModel: false,
              id: 'QfBH6eI',
              parentSectionId: 'fQBmVR8'
            },
            {
              uid: '-z72O-h',
              cost: 35,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Acid Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Acid Cannon (30", A1, AP(3), Deadly(3), Lock-On)',
                  range: 30,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'lock-on',
                      name: 'Lock-On',
                      type: 'ArmyBookRule',
                      label: 'Lock-On',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Acid Cannon (30", A1, AP(3), Deadly(3), Lock-On)',
              isModel: false,
              id: '-z72O-h',
              parentSectionId: 'fQBmVR8'
            }
          ],
          parentPackageUid: 'J1',
          affects: 1,
          replaceWhat: [
            'Ravager Gun'
          ],
          isCommandGroup: false
        },
        {
          id: 'Qy4x2bg',
          uid: 'OFogXML',
          type: 'upgrade',
          label: 'Upgrade all models with',
          options: [
            {
              uid: 'pRH6ELq',
              cost: 55,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Wings',
                  type: 'ArmyBookItem',
                  label: 'Wings (Ambush, Flying)',
                  content: [
                    {
                      key: 'ambush',
                      name: 'Ambush',
                      type: 'ArmyBookRule',
                      label: 'Ambush',
                      rating: ''
                    },
                    {
                      key: 'flying',
                      name: 'Flying',
                      type: 'ArmyBookRule',
                      label: 'Flying',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Wings (Ambush, Flying)',
              isModel: false,
              id: 'pRH6ELq',
              parentSectionId: 'OFogXML'
            }
          ],
          parentPackageUid: 'J1',
          model: true,
          affects: 'all',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'K1',
      hint: 'Ravenous Beasts',
      sections: [
        {
          id: 'P28nuLJ',
          uid: '-H2Ty6q',
          type: 'upgrade',
          label: 'Upgrade all models with one',
          options: [
            {
              uid: 'WrcB_YW',
              cost: 30,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Rapid Strike',
                  type: 'ArmyBookItem',
                  label: 'Rapid Strike (Scout)',
                  content: [
                    {
                      key: 'scout',
                      name: 'Scout',
                      type: 'ArmyBookRule',
                      label: 'Scout',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Rapid Strike (Scout)',
              isModel: false,
              id: 'WrcB_YW',
              parentSectionId: '-H2Ty6q'
            },
            {
              uid: '7QQRnwn',
              cost: 30,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Tunnel Attack',
                  type: 'ArmyBookItem',
                  label: 'Tunnel Attack (Ambush)',
                  content: [
                    {
                      key: 'ambush',
                      name: 'Ambush',
                      type: 'ArmyBookRule',
                      label: 'Ambush',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Tunnel Attack (Ambush)',
              isModel: false,
              id: '7QQRnwn',
              parentSectionId: '-H2Ty6q'
            }
          ],
          parentPackageUid: 'K1',
          model: true,
          affects: 'all',
          select: 1,
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'L1',
      hint: 'Hive Guardians',
      sections: [
        {
          id: 'JAv-J0Y',
          uid: 'MjXargB',
          type: 'replace',
          label: 'Any model may replace one Razor Claws',
          options: [
            {
              uid: '5_QlW',
              cost: 25,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Heavy Ravager Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Heavy Ravager Gun (18", A3, AP(2))',
                  range: 18,
                  attacks: 3,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(2)',
                      modify: false,
                      rating: '2'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Heavy Ravager Gun (18", A3, AP(2))',
              isModel: false,
              id: '5_QlW',
              parentSectionId: 'MjXargB'
            },
            {
              uid: '5XxDmHx',
              cost: 30,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Shock Harpoon',
                  type: 'ArmyBookWeapon',
                  label: 'Shock Harpoon (24", A1, AP(2), Deadly(3))',
                  range: 24,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(2)',
                      modify: false,
                      rating: '2'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Shock Harpoon (24", A1, AP(2), Deadly(3))',
              isModel: false,
              id: '5XxDmHx',
              parentSectionId: 'MjXargB'
            },
            {
              uid: 'a-gTK',
              cost: 55,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Skewer Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Skewer Cannon (30", A2, AP(4), Lock-On)',
                  range: 30,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(4)',
                      modify: false,
                      rating: '4'
                    },
                    {
                      key: 'lock-on',
                      name: 'Lock-On',
                      type: 'ArmyBookRule',
                      label: 'Lock-On',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Skewer Cannon (30", A2, AP(4), Lock-On)',
              isModel: false,
              id: 'a-gTK',
              parentSectionId: 'MjXargB'
            }
          ],
          parentPackageUid: 'L1',
          attachment: false,
          affects: 'any',
          model: true,
          select: 1,
          replaceWhat: [
            'Razor Claws'
          ],
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'A2',
      hint: 'Monster Melee Upgrades',
      sections: [
        {
          id: 'xlmMej_',
          uid: 'jGBmYru',
          type: 'replace',
          label: 'Replace any Razor Claws',
          options: [
            {
              uid: 'sCWhs',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Piercing Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Piercing Claws (A3, AP(1), Rending)',
                  range: 0,
                  attacks: 3,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    },
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Piercing Claws (A3, AP(1), Rending)',
              isModel: false,
              id: 'sCWhs',
              parentSectionId: 'jGBmYru'
            },
            {
              uid: 'rUbQqKU',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Serrated Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Serrated Claws (A2, Blast(3))',
                  range: 0,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Serrated Claws (A2, Blast(3))',
              isModel: false,
              id: 'rUbQqKU',
              parentSectionId: 'jGBmYru'
            },
            {
              uid: '2xerz',
              cost: 10,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Smashing Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Smashing Claws (A3, AP(4))',
                  range: 0,
                  attacks: 3,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(4)',
                      modify: false,
                      rating: '4'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Smashing Claws (A3, AP(4))',
              isModel: false,
              id: '2xerz',
              parentSectionId: 'jGBmYru'
            },
            {
              uid: 'H6--4R1',
              cost: 20,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Sword Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Sword Claws (A2, AP(2), Deadly(3))',
                  range: 0,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(2)',
                      modify: false,
                      rating: '2'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Sword Claws (A2, AP(2), Deadly(3))',
              isModel: false,
              id: 'H6--4R1',
              parentSectionId: 'jGBmYru'
            }
          ],
          parentPackageUid: 'A2',
          affects: 'any',
          replaceWhat: [
            'Razor Claws'
          ],
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'B2',
      hint: 'Rex Upgrades',
      sections: [
        {
          id: 'WRg0kax',
          uid: 'BIUzJfJ',
          type: 'upgrade',
          label: 'Upgrade with any',
          options: [
            {
              uid: 'Yo4lJBE',
              cost: 10,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Battering Tusks',
                  type: 'ArmyBookItem',
                  label: 'Battering Tusks (Impact(3))',
                  content: [
                    {
                      key: 'impact',
                      name: 'Impact',
                      type: 'ArmyBookRule',
                      label: 'Impact(3)',
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Battering Tusks (Impact(3))',
              isModel: false,
              id: 'Yo4lJBE',
              parentSectionId: 'BIUzJfJ'
            },
            {
              uid: 'MXrzMcO',
              cost: 60,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Recovery',
                  type: 'ArmyBookItem',
                  label: 'Bio-Recovery (Regeneration)',
                  content: [
                    {
                      key: 'regeneration',
                      name: 'Regeneration',
                      type: 'ArmyBookRule',
                      label: 'Regeneration',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Bio-Recovery (Regeneration)',
              isModel: false,
              id: 'MXrzMcO',
              parentSectionId: 'BIUzJfJ'
            }
          ],
          parentPackageUid: 'B2',
          select: 'any',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'C2',
      hint: 'Carnivo-Rex',
      sections: [
        {
          id: 'Iv496e1',
          uid: 'rr7LRjf',
          type: 'replace',
          label: 'Replace any Razor Claws',
          options: [
            {
              uid: 'zft2LsC',
              cost: 15,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Heavy Spitter Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Heavy Spitter Gun (24", A2, Blast(3))',
                  range: 24,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Heavy Spitter Gun (24", A2, Blast(3))',
              isModel: false,
              id: 'zft2LsC',
              parentSectionId: 'rr7LRjf'
            },
            {
              uid: 'DYWkEnj',
              cost: 35,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Rapid Heavy Ravager Gun',
                  type: 'ArmyBookWeapon',
                  label: 'Rapid Heavy Ravager Gun (18", A6, AP(2))',
                  range: 18,
                  attacks: 6,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(2)',
                      modify: false,
                      rating: '2'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Rapid Heavy Ravager Gun (18", A6, AP(2))',
              isModel: false,
              id: 'DYWkEnj',
              parentSectionId: 'rr7LRjf'
            },
            {
              uid: 'Cjup__q',
              cost: 45,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Heavy Barb Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Heavy Barb Cannon (36”, A1, Blast(6), AP(1))',
                  range: 36,
                  attacks: 1,
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(6)',
                      rating: '6'
                    },
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      rating: '1'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Heavy Barb Cannon (36”, A1, Blast(6), AP(1))',
              isModel: false,
              id: 'Cjup__q',
              parentSectionId: 'rr7LRjf'
            },
            {
              uid: 'yZyk4Ku',
              cost: 95,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Heavy Acid Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Heavy Acid Cannon (36", A1, AP(3), Deadly(6), Lock-On)',
                  range: 36,
                  attacks: 1,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(6)',
                      modify: false,
                      rating: '6'
                    },
                    {
                      key: 'lock-on',
                      name: 'Lock-On',
                      type: 'ArmyBookRule',
                      label: 'Lock-On',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Heavy Acid Cannon (36", A1, AP(3), Deadly(6), Lock-On)',
              isModel: false,
              id: 'yZyk4Ku',
              parentSectionId: 'rr7LRjf'
            }
          ],
          parentPackageUid: 'C2',
          affects: 'any',
          replaceWhat: [
            'Razor Claws'
          ],
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'D2',
      hint: 'Psycho-Rex',
      sections: [
        {
          id: 'HH-VbEN',
          uid: 'FbAFO0W',
          type: 'upgrade',
          label: 'Upgrade with any',
          options: [
            {
              uid: 'eQRQVKR',
              cost: 10,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Hive Protector',
                  type: 'ArmyBookItem',
                  label: 'Hive Protector (Psy-Barrier)',
                  content: [
                    {
                      key: 'psy-barrier',
                      name: 'Psy-Barrier',
                      type: 'ArmyBookRule',
                      label: 'Psy-Barrier',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Hive Protector (Psy-Barrier)',
              isModel: false,
              id: 'eQRQVKR',
              parentSectionId: 'FbAFO0W'
            },
            {
              uid: 'HYhxP6R',
              cost: 65,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Brood Leader',
                  type: 'ArmyBookItem',
                  label: 'Brood Leader (Pheromones)',
                  content: [
                    {
                      key: 'pheromones',
                      name: 'Pheromones',
                      type: 'ArmyBookRule',
                      label: 'Pheromones',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Brood Leader (Pheromones)',
              isModel: false,
              id: 'HYhxP6R',
              parentSectionId: 'FbAFO0W'
            }
          ],
          parentPackageUid: 'D2',
          select: 'any',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'E2',
      hint: 'Large Monster Upgrades',
      sections: [
        {
          id: 'zHpEin5',
          uid: '7DeHecD',
          type: 'upgrade',
          label: 'Upgrade with any',
          options: [
            {
              uid: 'FcullzU',
              cost: 20,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Battering Tusks',
                  type: 'ArmyBookItem',
                  label: 'Battering Tusks (Impact(6))',
                  content: [
                    {
                      key: 'impact',
                      name: 'Impact',
                      type: 'ArmyBookRule',
                      label: 'Impact(6)',
                      rating: '6'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Battering Tusks (Impact(6))',
              isModel: false,
              id: 'FcullzU',
              parentSectionId: '7DeHecD'
            },
            {
              uid: 'd-vSAtb',
              cost: 90,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Recovery',
                  type: 'ArmyBookItem',
                  label: 'Bio-Recovery (Regeneration)',
                  content: [
                    {
                      key: 'regeneration',
                      name: 'Regeneration',
                      type: 'ArmyBookRule',
                      label: 'Regeneration',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Bio-Recovery (Regeneration)',
              isModel: false,
              id: 'd-vSAtb',
              parentSectionId: '7DeHecD'
            }
          ],
          parentPackageUid: 'E2',
          select: 'any',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'F2',
      hint: 'Tyrant Beast',
      sections: [
        {
          id: 'uakKZ0O',
          uid: '52VfpiV',
          type: 'replace',
          label: 'Replace Toxic Spray',
          options: [
            {
              uid: 'Sow7hVH',
              cost: 40,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Pods',
                  type: 'ArmyBookWeapon',
                  label: 'Bio-Pods (24”, A24)',
                  range: 24,
                  attacks: 24,
                  specialRules: [],
                  count: 1
                }
              ],
              label: 'Bio-Pods (24”, A24)',
              isModel: false,
              id: 'Sow7hVH',
              parentSectionId: '52VfpiV'
            },
            {
              uid: 'vdzed-2',
              cost: 135,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Fracture Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Fracture Cannon (30”, A3, AP(3), Deadly(6))',
                  range: 30,
                  attacks: 3,
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(3)',
                      rating: '3'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(6)',
                      rating: '6'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Fracture Cannon (30”, A3, AP(3), Deadly(6))',
              isModel: false,
              id: 'vdzed-2',
              parentSectionId: '52VfpiV'
            }
          ],
          parentPackageUid: 'F2',
          replaceWhat: [
            'Toxic Spray'
          ],
          isCommandGroup: false
        },
        {
          id: 'CYIK4Qg',
          uid: '-KH1Rgc',
          type: 'upgrade',
          label: 'Upgrade with',
          options: [
            {
              uid: 'Ds7fg',
              cost: 45,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Stinger Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Stinger Cannon (18", A6, Rending)',
                  range: 18,
                  attacks: 6,
                  condition: '',
                  specialRules: [
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Stinger Cannon (18", A6, Rending)',
              isModel: false,
              id: 'Ds7fg',
              parentSectionId: '-KH1Rgc'
            }
          ],
          parentPackageUid: 'F2',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'G2',
      hint: 'Artillery Beast',
      sections: [
        {
          id: '2U8pcWO',
          uid: 'tkBr8-k',
          type: 'replace',
          label: 'Replace Shredder Bio-Artillery',
          options: [
            {
              uid: 'YTn2_bV',
              cost: 85,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Spitter Bio-Artillery',
                  type: 'ArmyBookWeapon',
                  label: 'Spitter Bio-Artillery (36", A4, AP(1), Blast(3), Indirect)',
                  range: 36,
                  attacks: 4,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    },
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'indirect',
                      name: 'Indirect',
                      type: 'ArmyBookRule',
                      label: 'Indirect',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Spitter Bio-Artillery (36", A4, AP(1), Blast(3), Indirect)',
              isModel: false,
              id: 'YTn2_bV',
              parentSectionId: 'tkBr8-k'
            },
            {
              uid: 'b2tHbDv',
              cost: 115,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Acid Bio-Artillery',
                  type: 'ArmyBookWeapon',
                  label: 'Acid Bio-Artillery (36”, A3, AP(3), Deadly(3), Indirect)',
                  range: 36,
                  attacks: 3,
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(3)',
                      rating: '3'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      rating: '3'
                    },
                    {
                      key: 'indirect',
                      name: 'Indirect',
                      type: 'ArmyBookRule',
                      label: 'Indirect',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Acid Bio-Artillery (36”, A3, AP(3), Deadly(3), Indirect)',
              isModel: false,
              id: 'b2tHbDv',
              parentSectionId: 'tkBr8-k'
            },
            {
              uid: 'fX8c0oo',
              cost: 145,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Plasma Bio-Artillery',
                  type: 'ArmyBookWeapon',
                  label: 'Plasma Bio-Artillery (36", A3, Blast(3), AP(4), Indirect)',
                  range: 36,
                  attacks: 3,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(4)',
                      modify: false,
                      rating: '4'
                    },
                    {
                      key: 'indirect',
                      name: 'Indirect',
                      type: 'ArmyBookRule',
                      label: 'Indirect',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Plasma Bio-Artillery (36", A3, Blast(3), AP(4), Indirect)',
              isModel: false,
              id: 'fX8c0oo',
              parentSectionId: 'tkBr8-k'
            }
          ],
          parentPackageUid: 'G2',
          replaceWhat: [
            'Shredder Bio-Artillery'
          ],
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'H2',
      hint: 'Monster Regeneration',
      sections: [
        {
          id: '_vNkEEV',
          uid: 'TTxeLw4',
          type: 'upgrade',
          label: 'Upgrade with',
          options: [
            {
              uid: 'VSEm_MG',
              cost: 30,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Recovery',
                  type: 'ArmyBookItem',
                  label: 'Bio-Recovery (Regeneration)',
                  content: [
                    {
                      key: 'regeneration',
                      name: 'Regeneration',
                      type: 'ArmyBookRule',
                      label: 'Regeneration',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Bio-Recovery (Regeneration)',
              isModel: false,
              id: 'VSEm_MG',
              parentSectionId: 'TTxeLw4'
            }
          ],
          parentPackageUid: 'H2',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'I2',
      hint: 'Invasion Monsters',
      sections: [
        {
          id: 'mIBRzxs',
          uid: 'RO6Knn5',
          type: 'upgrade',
          label: 'Upgrade with one',
          options: [
            {
              uid: 'UfsOJuh',
              cost: 30,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Spitter Gun Array',
                  type: 'ArmyBookWeapon',
                  label: 'Spitter Gun Array (24", A2, Blast(3))',
                  range: 24,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Spitter Gun Array (24", A2, Blast(3))',
              isModel: false,
              id: 'UfsOJuh',
              parentSectionId: 'RO6Knn5'
            },
            {
              uid: 'W6LlqTZ',
              cost: 40,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Shredder Gun Array',
                  type: 'ArmyBookWeapon',
                  label: 'Shredder Gun Array (18", A6, Rending)',
                  range: 18,
                  attacks: 6,
                  condition: '',
                  specialRules: [
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Shredder Gun Array (18", A6, Rending)',
              isModel: false,
              id: 'W6LlqTZ',
              parentSectionId: 'RO6Knn5'
            },
            {
              uid: 'F2xDgs6',
              cost: 55,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Barb Cannon Array',
                  type: 'ArmyBookWeapon',
                  label: 'Barb Cannon Array (30", A2, Blast(3), AP(1))',
                  range: 30,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Barb Cannon Array (30", A2, Blast(3), AP(1))',
              isModel: false,
              id: 'F2xDgs6',
              parentSectionId: 'RO6Knn5'
            },
            {
              uid: 'UZXaLy0',
              cost: 100,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Acid Cannon Array',
                  type: 'ArmyBookWeapon',
                  label: 'Acid Cannon Array (30", A2, AP(3), Deadly(3), Lock-On)',
                  range: 30,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'lock-on',
                      name: 'Lock-On',
                      type: 'ArmyBookRule',
                      label: 'Lock-On',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Acid Cannon Array (30", A2, AP(3), Deadly(3), Lock-On)',
              isModel: false,
              id: 'UZXaLy0',
              parentSectionId: 'RO6Knn5'
            }
          ],
          parentPackageUid: 'I2',
          select: 1,
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'J2',
      hint: 'Rapacious Beast',
      sections: [
        {
          id: 'DSewvdD',
          uid: '4Tn-Mgp',
          type: 'replace',
          label: 'Replace Caustic Cannon',
          options: [
            {
              uid: 'UvV-o',
              cost: 35,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Twin Barb Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Twin Barb Cannon (30", A2, Blast(3), AP(1))',
                  range: 30,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Twin Barb Cannon (30", A2, Blast(3), AP(1))',
              isModel: false,
              id: 'UvV-o',
              parentSectionId: '4Tn-Mgp'
            },
            {
              uid: 'qNvC6',
              cost: 80,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Twin Acid Cannon',
                  type: 'ArmyBookWeapon',
                  label: 'Twin Acid Cannon (30", A2, AP(3), Deadly(3), Lock-On)',
                  range: 30,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'lock-on',
                      name: 'Lock-On',
                      type: 'ArmyBookRule',
                      label: 'Lock-On',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Twin Acid Cannon (30", A2, AP(3), Deadly(3), Lock-On)',
              isModel: false,
              id: 'qNvC6',
              parentSectionId: '4Tn-Mgp'
            }
          ],
          parentPackageUid: 'J2',
          replaceWhat: [
            'Caustic Cannon'
          ],
          isCommandGroup: false
        },
        {
          id: 'fiHivyd',
          uid: 'GlJSCqR',
          type: 'upgrade',
          label: 'Upgrade with one',
          options: [
            {
              uid: 'dKJtYO5',
              cost: 45,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Spore Bombs',
                  type: 'ArmyBookWeapon',
                  label: 'Spore Bombs (6”, A2, Blast(9), Spores)',
                  range: 6,
                  attacks: 2,
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(9)',
                      rating: '9'
                    },
                    {
                      key: 'spores',
                      name: 'Spores',
                      type: 'ArmyBookRule',
                      label: 'Spores',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Spore Bombs (6”, A2, Blast(9), Spores)',
              isModel: false,
              id: 'dKJtYO5',
              parentSectionId: 'GlJSCqR'
            },
            {
              uid: 'xAyAJwz',
              cost: 45,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Missile Bugs',
                  type: 'ArmyBookWeapon',
                  label: 'Missile Bugs (36", A2, AP(3), Lock-On)',
                  range: 36,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(3)',
                      modify: false,
                      rating: '3'
                    },
                    {
                      key: 'lock-on',
                      name: 'Lock-On',
                      type: 'ArmyBookRule',
                      label: 'Lock-On',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Missile Bugs (36", A2, AP(3), Lock-On)',
              isModel: false,
              id: 'xAyAJwz',
              parentSectionId: 'GlJSCqR'
            }
          ],
          parentPackageUid: 'J2',
          select: 1,
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'K2',
      hint: 'Hive Titan',
      sections: [
        {
          id: 'Y2JRPXy',
          uid: 'vv8NMAT',
          type: 'upgrade',
          label: 'Upgrade with any',
          options: [
            {
              uid: 'hA3dH1I',
              cost: 70,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Toxic Breath',
                  type: 'ArmyBookWeapon',
                  label: 'Toxic Breath (12”, A12, Poison)',
                  range: 12,
                  attacks: 12,
                  specialRules: [
                    {
                      key: 'poison',
                      name: 'Poison',
                      type: 'ArmyBookRule',
                      label: 'Poison',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Toxic Breath (12”, A12, Poison)',
              isModel: false,
              id: 'hA3dH1I',
              parentSectionId: 'vv8NMAT'
            },
            {
              uid: 'GZON2cY',
              cost: 195,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Explosive Spit',
                  type: 'ArmyBookWeapon',
                  label: 'Explosive Spit (36”, A2, Blast(6), AP(2))',
                  range: 36,
                  attacks: 2,
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(6)',
                      rating: '6'
                    },
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(2)',
                      rating: '2'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Explosive Spit (36”, A2, Blast(6), AP(2))',
              isModel: false,
              id: 'GZON2cY',
              parentSectionId: 'vv8NMAT'
            }
          ],
          parentPackageUid: 'K2',
          select: 'any',
          isCommandGroup: false
        },
        {
          id: 'vvOmNUX',
          uid: '6yYMffa',
          type: 'upgrade',
          label: 'Upgrade with one',
          options: [
            {
              uid: 'gaU0uQT',
              cost: 50,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Acid Blood',
                  type: 'ArmyBookItem',
                  label: 'Acid Blood (Corrosive)',
                  content: [
                    {
                      key: 'corrosive',
                      name: 'Corrosive',
                      type: 'ArmyBookRule',
                      label: 'Corrosive',
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Acid Blood (Corrosive)',
              isModel: false,
              id: 'gaU0uQT',
              parentSectionId: '6yYMffa'
            },
            {
              uid: 'mEygj-Z',
              cost: 65,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Hive Carrier',
                  type: 'ArmyBookItem',
                  label: 'Hive Carrier (Transport(21))',
                  content: [
                    {
                      key: 'transport',
                      name: 'Transport',
                      type: 'ArmyBookRule',
                      label: 'Transport(21)',
                      rating: '21'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Hive Carrier (Transport(21))',
              isModel: false,
              id: 'mEygj-Z',
              parentSectionId: '6yYMffa'
            },
            {
              uid: '-GB2M',
              cost: 95,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Wings',
                  type: 'ArmyBookItem',
                  label: 'Wings (Flying)',
                  content: [
                    {
                      key: 'flying',
                      name: 'Flying',
                      type: 'ArmyBookRule',
                      label: 'Flying',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Wings (Flying)',
              isModel: false,
              id: '-GB2M',
              parentSectionId: '6yYMffa'
            }
          ],
          parentPackageUid: 'K2',
          select: 1,
          isCommandGroup: false
        }
      ]
    },
    {
      uid: '8R8Jo',
      hint: 'Bio-Recovery',
      sections: [
        {
          id: 'MnafI0X',
          uid: 'wN7ub',
          label: 'Upgrade all models with',
          options: [
            {
              uid: 'g2wH6',
              cost: 45,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Bio-Recovery',
                  type: 'ArmyBookItem',
                  label: 'Bio-Recovery (Regeneration)',
                  content: [
                    {
                      key: 'regeneration',
                      name: 'Regeneration',
                      type: 'ArmyBookRule',
                      label: 'Regeneration',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Bio-Recovery (Regeneration)',
              isModel: false,
              id: 'g2wH6',
              parentSectionId: 'wN7ub'
            }
          ],
          parentPackageUid: '8R8Jo',
          type: 'upgrade',
          model: true,
          affects: 'all',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'vcLnn',
      hint: 'Shadow Hunter',
      sections: [
        {
          id: 'l3rdILj',
          uid: 'dsnYX',
          label: 'Upgrade with',
          options: [
            {
              uid: 'NN7wq',
              cost: 20,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  key: 'takedown',
                  name: 'Takedown',
                  type: 'ArmyBookRule',
                  label: 'Takedown',
                  modify: false,
                  rating: '',
                  count: 1
                }
              ],
              label: 'Takedown',
              isModel: false,
              id: 'NN7wq',
              parentSectionId: 'dsnYX'
            }
          ],
          parentPackageUid: 'vcLnn',
          type: 'upgrade',
          isCommandGroup: false
        }
      ]
    },
    {
      uid: 'mPtwD',
      hint: 'Elite Melee Upgrades',
      sections: [
        {
          id: 'j749Wec',
          uid: 'cRc_X',
          label: 'Replace any Razor Claws',
          options: [
            {
              uid: 'vY3rt',
              cost: 0,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Serrated Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Serrated Claws (A2, Blast(3))',
                  range: 0,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'blast',
                      name: 'Blast',
                      type: 'ArmyBookRule',
                      label: 'Blast(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Serrated Claws (A2, Blast(3))',
              isModel: false,
              id: 'vY3rt',
              parentSectionId: 'cRc_X'
            },
            {
              uid: '-MLcD',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Piercing Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Piercing Claws (A4, AP(1), Rending)',
                  range: 0,
                  attacks: 4,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(1)',
                      modify: false,
                      rating: '1'
                    },
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Piercing Claws (A4, AP(1), Rending)',
              isModel: false,
              id: '-MLcD',
              parentSectionId: 'cRc_X'
            },
            {
              uid: '_b5DU',
              cost: 5,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Whip Limb and Sword Claw',
                  type: 'ArmyBookWeapon',
                  label: 'Whip Limb and Sword Claw (A2, Rending, Deadly(3))',
                  range: 0,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'rending',
                      name: 'Rending',
                      type: 'ArmyBookRule',
                      label: 'Rending',
                      modify: false,
                      rating: ''
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Whip Limb and Sword Claw (A2, Rending, Deadly(3))',
              isModel: false,
              id: '_b5DU',
              parentSectionId: 'cRc_X'
            },
            {
              uid: 'juTq6',
              cost: 15,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Sword Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Sword Claws (A2, AP(2), Deadly(3))',
                  range: 0,
                  attacks: 2,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(2)',
                      modify: false,
                      rating: '2'
                    },
                    {
                      key: 'deadly',
                      name: 'Deadly',
                      type: 'ArmyBookRule',
                      label: 'Deadly(3)',
                      modify: false,
                      rating: '3'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Sword Claws (A2, AP(2), Deadly(3))',
              isModel: false,
              id: 'juTq6',
              parentSectionId: 'cRc_X'
            },
            {
              uid: 'fmwQ0',
              cost: 15,
              type: 'ArmyBookUpgradeOption',
              gains: [
                {
                  name: 'Smashing Claws',
                  type: 'ArmyBookWeapon',
                  label: 'Smashing Claws (A4, AP(4))',
                  range: 0,
                  attacks: 4,
                  condition: '',
                  specialRules: [
                    {
                      key: 'ap',
                      name: 'AP',
                      type: 'ArmyBookRule',
                      label: 'AP(4)',
                      modify: false,
                      rating: '4'
                    }
                  ],
                  count: 1
                }
              ],
              label: 'Smashing Claws (A4, AP(4))',
              isModel: false,
              id: 'fmwQ0',
              parentSectionId: 'cRc_X'
            }
          ],
          parentPackageUid: 'mPtwD',
          type: 'replace',
          affects: 'any',
          replaceWhat: [
            'Razor Claws'
          ],
          isCommandGroup: false
        }
      ]
    }
  ],
  specialRules: [
    {
      id: 'HfaHO',
      key: 'no-retreat',
      hint: 'Whenever this unit fails a morale test you must kill one of its models and the morale test counts as passed instead Pheromones: Once per activation, before attacking, pick 2 friendly units within 12” of this model, which may move by up to 3” each.',
      name: 'No Retreat',
      tags: [],
      label: 'No Retreat',
      forUnit: true,
      forWeapon: false,
      hasRating: false,
      description: 'Whenever this unit fails a morale test, you must kill one of its models, and the morale test counts as passed instead.'
    },
    {
      id: 'Lsuv4',
      key: 'psychic-synapse',
      hint: 'This unit counts as having Psychic(1), however only one model in the unit may cast or block spells each round. When the unit tries to cast or block spells, roll as many dice as models with this rule in it, and pick the highest result.',
      name: 'Psychic Synapse',
      tags: [],
      label: 'Psychic Synapse',
      forUnit: true,
      forWeapon: false,
      hasRating: false,
      description: 'Models with this rule count as having Psychic(1), however only one of them in the unit may cast or block spells each round. When casting or blocking spells, roll as many dice as models with this rule in the unit, and pick the highest result.'
    },
    {
      id: 'llcXj',
      key: 'psy-barrier',
      hint: 'This model may block spells as if it had the Psychic(2) special rule. If it is a Psychic then it gets +2 to spell block rolls.',
      name: 'Psy-Barrier',
      tags: [],
      label: 'Psy-Barrier',
      forUnit: true,
      forWeapon: false,
      hasRating: false,
      description: 'This model may block spells as if it had the Psychic(2) special rule. If it is a Psychic then it gets +2 to spell block rolls.'
    },
    {
      id: 'xWBdM',
      key: 'shrouding-mist',
      hint: 'Once per activation, pick 2 friendly units within 6”, which get the Stealth rule next time they are shot at.',
      name: 'Shrouding Mist',
      tags: [],
      label: 'Shrouding Mist',
      forUnit: true,
      forWeapon: false,
      hasRating: false,
      description: 'Once per activation, pick 2 friendly units within 6”, which get the Stealth rule next time they are shot at.'
    },
    {
      id: '3C-IH',
      key: 'corrosive',
      hint: 'Whenever this model takes a wound in melee, the attacker takes 1 hit.',
      name: 'Corrosive',
      tags: [],
      label: 'Corrosive',
      forUnit: true,
      forWeapon: false,
      hasRating: false,
      description: 'Whenever this model takes a wound in melee, the attacker takes 1 hit.'
    },
    {
      id: 'MxNLQ',
      key: 'pheromones',
      hint: 'Once per activation, before attacking, pick 2 friendly units within 12” of this model, which may move by up to 3” each.',
      name: 'Pheromones',
      tags: [],
      label: 'Pheromones',
      forUnit: true,
      forWeapon: false,
      hasRating: false,
      description: 'Once per activation, before attacking, pick one friendly unit within 12” of this model, which may move by up to 6".'
    },
    {
      id: 'cqUmu',
      key: 'spawn-brood',
      hint: 'When this model is activated you may place a unit of 5 Grunts or a unit of 3 Hive Swarms fully within 6” of it.',
      name: 'Spawn Brood',
      tags: [],
      label: 'Spawn Brood',
      forUnit: true,
      forWeapon: false,
      hasRating: false,
      description: 'When this model is activated, you may place a unit of 5 Assault Grunts. 5 Shooter Grunts or 3 Hive Swarms fully within 6” of it.'
    },
    {
      id: 'D7WFa',
      key: 'spores',
      hint: 'If this weapon misses you may place a unit of 3 Spores or 1 Massive Spore 12” away from the target, but the position is decided by your opponent. Note that this new unit can’t be activated on the round in which it is placed.',
      name: 'Spores',
      tags: [],
      label: 'Spores',
      forUnit: true,
      forWeapon: false,
      hasRating: false,
      description: 'If this weapon misses you may place a unit of 3 Spores or 1 Massive Spore 12” away from the target, but the position is decided by your opponent. Note that this new unit can’t be activated on the round in which it is placed.'
    },
    {
      id: 'coJJ6',
      key: 'surprise-attack',
      hint: 'This unit counts as having the Ambush rule and may be deployed up to 1” away from enemy units. Once the unit is deployed roll 4 dice, for each 4+ it deals 3 hits with AP(1) to one enemy unit within 3” (this may target multiple units).',
      name: 'Surprise Attack',
      tags: [],
      label: 'Surprise Attack',
      forUnit: true,
      forWeapon: false,
      hasRating: false,
      description: 'This model counts as having the Ambush rule, and may be deployed up to 1” away from enemy units. Once deployed roll 2 dice, for each 2+ it deals 3 hits with AP(1) to one enemy unit within 3” (this may target multiple units).'
    },
    {
      id: 'q0qzP',
      key: 'explode',
      hint: 'If this model is ever engaged in melee it is immediately killed and the enemy takes X*3 hits. This model automatically passes all morale tests.',
      name: 'Explode',
      tags: [],
      label: 'Explode',
      forUnit: true,
      forWeapon: false,
      hasRating: true,
      description: 'If this model is ever 1" away from an enemy unit, it is immediately killed, and the enemy takes X*3 hits. This model automatically passes all morale tests.'
    },
    {
      id: 'N5RU2',
      key: 'takedown',
      hint: 'When in melee, may pick one model from the enemy unit and roll one die. On a 2+ it takes 1 hit with Deadly(3).',
      name: 'Takedown',
      tags: [],
      label: 'Takedown',
      forUnit: true,
      forWeapon: true,
      hasRating: false,
      description: 'When this model is in melee, may pick one model from the target and roll one die. On a 2+ it takes 1 hit with AP(1) and Deadly(3).'
    }
  ],
  spells: [
    {
      id: 'KRMqK',
      name: 'Terror',
      effect: 'Target 2 enemy units within 12” get -2 to their next morale test.',
      threshold: 4
    },
    {
      id: 'G0b6O',
      name: 'Psychic Blast',
      effect: 'Target enemy unit within 6” takes 1 hit with AP(2) and Deadly(3).',
      threshold: 4
    },
    {
      id: 'wp5FZ',
      name: 'Animate Flora',
      effect: 'Target 2 friendly units within 6” get Flying next time they activate.',
      threshold: 5
    },
    {
      id: '5wvl3',
      name: 'Shriek',
      effect: 'Target 2 enemy units within 6” take 4 hits with AP(1) each.',
      threshold: 5
    },
    {
      id: '4qi6f',
      name: 'Infuse Life',
      effect: 'Target friendly unit within 12” gets Regeneration next time it takes wounds.',
      threshold: 6
    },
    {
      id: 'K6cik',
      name: 'Overwhelm',
      effect: 'Target enemy model within 12” takes 3 hits with AP(4).',
      threshold: 6
    }
  ],
  modifiedAt: '2022-07-07T16:07:24.750Z',
  official: true,
  'public': true,
  versionString: 'v2.50',
  coverImagePath: null,
  coverImageCredit: null,
  isLive: true,
  factionName: null,
  factionRelation: null,
  username: 'onepagerules',
  armyForgeUrl: 'https://army-forge.onepagerules.com/listConfiguration?armyId=w7qor7b2kuifcyvk',
  gameSystemId: 2,
  gameSystemSlug: 'grimdark-future',
  fullname: 'Grimdark Future',
  aberration: 'GF',
  universe: 'Grimdark Future',
  shortname: 'Grimdark Future',
  flavouredUid: 'w7qor7b2kuifcyvk~2'
};

const gameRules = [
  {
    name: 'Aircraft',
    description: 'This model doesn’t physically interact with other models and terrain, can’t seize objectives, and can’t be moved into contact with. Units targeting aircraft get -12” range and -1 to hit rolls. When activated, this model must always move 18”-36” in a straight line (without turning), and if it goes off-table, then its activation ends, and it must be placed on any table edge again.'
  },
  {
    name: 'Ambush',
    description: 'This model may be kept in reserve instead of deploying. At the start of any round after the first, you may place the model anywhere, over 9” away from enemy units. If both player have Ambush, they roll-off to see who deploys first, and then alternate in placing them.'
  },
  {
    name: 'Lock-On',
    description: 'Ignores all negative modifiers to hit rolls and range.'
  },
  {
    name: 'AP',
    description: 'Targets get -X to Defense rolls when blocking hits.'
  },
  {
    name: 'Deadly',
    description: 'Assign each wound to one model, and multiply it by X. Note that these wounds don\'t carry over to other models if the target is killed.'
  },
  {
    name: 'Blast',
    description: 'Ignores cover and multiplies hits by X, but can’t deal more hits than models in the target unit.'
  },
  {
    name: 'Flying',
    description: 'May move through all obstacles, and may ignore terrain effects.'
  },
  {
    name: 'Fearless',
    description: 'Gets +1 to morale tests.'
  },
  {
    name: 'Fear',
    description: 'Always counts as having dealt +D3 wounds when checking who won melee.'
  },
  {
    name: 'Fast',
    description: 'Moves +2” when using Advance and +4” when using Rush/Charge.'
  },
  {
    name: 'Furious',
    description: 'Gets +1 attack with a weapon of your choice when charging.'
  },
  {
    name: 'Hero',
    description: 'May be deployed as part of one friendly unit, which may use its Quality value for morale tests. When taking hits, you must use the unit’s Defense value, until all non-hero models are killed.'
  },
  {
    name: 'Immobile',
    description: 'May only use Hold actions.'
  },
  {
    name: 'Impact',
    description: 'Deals X melee hits when charging (must be in striking range).'
  },
  {
    name: 'Poison',
    description: 'Unmodified results of 6 to hit are multiplied by 3.'
  },
  {
    name: 'Indirect',
    description: 'May target enemies that are not in line of sight, and ignores cover from sight obstructions, but gets -1 to hit rolls when shooting after moving.'
  },
  {
    name: 'Psychic',
    description: 'May cast one spell during its activation, at any point before attacking. Pick a spell and a target in line of sight, and roll D6+X. If the result is equal or higher than the number in brackets, you may resolve the effects. Enemy psychics within 18” and line of sight of the caster may roll D6+X at the same time, and if the result is higher the spell is blocked. Psychics may only either try to cast or try to block a spell each round.'
  },
  {
    name: 'Relentless',
    description: 'For each unmodified roll of 6 to hit when shooting, this model may roll 1 extra attack. This rule doesn’t apply to newly generated attacks.'
  },
  {
    name: 'Rending',
    description: 'Unmodified results of 6 to hit count as having AP(4), and ignore the regeneration rule.'
  },
  {
    name: 'Regeneration',
    description: 'When taking a wound, roll one die. On a 5+ it is ignored.'
  },
  {
    name: 'Scout',
    description: 'This model may be deployed after all other units, and may then move by up to 12”, ignoring terrain. If both of the players have Scout, they roll-off to see who deploys first, and then alternate in placing and moving them.'
  },
  {
    name: 'Slow',
    description: 'Moves -2” when using Advance, and -4” when using Rush/Charge.'
  },
  {
    name: 'Sniper',
    description: 'Shoots at Quality 2+, and may pick one model in a unit as its target, which is resolved as if it’s a unit of 1.'
  },
  {
    name: 'Stealth',
    description: 'Enemies get -1 to hit rolls when shooting at this unit.'
  },
  {
    name: 'Strider',
    description: 'This model may ignore the effects of difficult terrain.'
  },
  {
    name: 'Tough',
    description: 'This model must take X wounds before being killed. If a model with tough joins a unit without it, then it is removed last when the unit takes wounds. Note that you must continue to put wounds on the tough model with most wounds in the unit until it is killed, before starting to put them on the next tough model (heroes must be assigned wounds last).'
  },
  {
    name: 'Transport',
    description: 'May transport up to X other models. Units embark by moving into contact, and may use any action to disembark, but only move by up to 6”. Units may also be deployed inside of a transport. If a unit is inside a transport when it is destroyed, then it takes a dangerous terrain test, is immediately Pinned, and surviving models must be placed within 6” of the transport before it is removed.'
  }
];