var isGW = false;
var gameType = undefined;

var tAutoFactory = (function () {
    "use strict";

    // function to build using the queue list
    function buildFromQueue(FACNAME) {

        if (gameType == "Galactic War") {
            isGW = true;
        }

        engine.call('set_order_state', 'build', 'continuous');

        if (Array.isArray(FACNAME)) {
            for (var i = 0; i < FACNAME.length; i = i + 3) {

                var amount = parseInt(FACNAME[i], 10);

                var type;
                if (isGW == true) {
                    type = FACNAME[i + 1] + ".player";
                } else {
                    type = FACNAME[i + 1];
                }

                var priority = FACNAME[i + 2];

                api.unit.build(type, amount, priority);
            }
        }
    }


    // declaring all units/jsons as their commonly known name

    // MLA ----------------------------------------------------------

    var ENERGY = '/pa/units/land/energy_plant/energy.json',
        ENERGY_ADV = '/pa/units/land/energy_plant_adv/energy_adv.json',
        ENERGY_ADV_2 = '/pa/units/land/energy_plant_adv/energy_adv_2.json',
        ENERGY_ADV_3 = '/pa/units/land/energy_plant_adv/energy_adv_3.json',
        ANT = '/pa/units/land/tank_light_laser/tank_light_laser.json',
        STINGER = '/pa/units/land/bot_aa/bot_aa.json',
        VEHICLE_FAB = '/pa/units/land/fabrication_vehicle/fabrication_vehicle.json',
        SKITTER = '/pa/units/land/land_scout/land_scout.json',
        SPINNER = '/pa/units/land/aa_missile_vehicle/aa_missile_vehicle.json',
        INFERNO = '/pa/units/land/tank_armor/tank_armor.json',
        GRENADIER = '/pa/units/land/bot_grenadier/bot_grenadier.json',
        DOX = '/pa/units/land/assault_bot/assault_bot.json',
        SLAMMER = '/pa/units/land/assault_bot_adv/assault_bot_adv.json',
        GILE = '/pa/units/land/bot_sniper/bot_sniper.json',
        BOT_FAB = '/pa/units/land/fabrication_bot/fabrication_bot.json',
        STITCH = '/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json',
        BLUEHAWK = '/pa/units/land/bot_tactical_missile/bot_tactical_missile.json',
        COLONEL = '/pa/units/land/bot_support_commander/bot_support_commander.json',
        LOCUST = '/pa/units/land/bot_nanoswarm/bot_nanoswarm.json',
        BOOM = '/pa/units/land/bot_bomb/bot_bomb.json',
        SPARK = '/pa/units/land/bot_tesla/bot_tesla.json',
        HUMMINGBIRD = '/pa/units/air/fighter/fighter.json',
        AIR_FAB = '/pa/units/air/fabrication_aircraft/fabrication_aircraft.json',
        FIREFLY = '/pa/units/air/air_scout/air_scout.json',
        BUMBLEBEE = '/pa/units/air/bomber/bomber.json',
        NAVAL_FAB = '/pa/units/sea/fabrication_ship/fabrication_ship.json',
        PIRANHA = '/pa/units/sea/sea_scout/sea_scout.json',
        NARWHAL = '/pa/units/sea/frigate/frigate.json',
        ORCA = '/pa/units/sea/destroyer/destroyer.json',
        BARRACUDA = '/pa/units/sea/attack_sub/attack_sub.json',
        ICARUS = '/pa/units/air/solar_drone/solar_drone.json',
        SOLAR_ARRAY = '/pa/units/orbital/solar_array/solar_array.json',
        PELICAN = '/pa/units/air/transport/transport.json',
        KESTREL = '/pa/units/air/gunship/gunship.json',
        HORSEFLY = '/pa/units/air/strafer/strafer.json',
        ANGEL = '/pa/units/air/support_platform/support_platform.json',
        WYRM = '/pa/units/air/bomber_heavy/bomber_heavy.json',
        HORNET = '/pa/units/air/bomber_adv/bomber_adv.json',
        PHOENIX = '/pa/units/air/fighter_adv/fighter_adv.json',
        KAIJU = '/pa/units/sea/hover_ship/hover_ship.json',
        KRAKEN = '/pa/units/sea/nuclear_sub/nuclear_sub.json',
        STINGRAY = '/pa/units/sea/missile_ship/missile_ship.json',
        LEVIATHAN = '/pa/units/sea/battleship/battleship.json',
        TYPHOON = '/pa/units/sea/drone_carrier/carrier/carrier.json',
        STRYKER = '/pa/units/land/attack_vehicle/attack_vehicle.json',
        DRIFTER = '/pa/units/land/tank_hover/tank_hover.json',
        LEVELER = '/pa/units/land/tank_laser_adv/tank_laser_adv.json',
        STORM = '/pa/units/land/tank_flak/tank_flak.json',
        SHELLER = '/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json',
        VANGUARD = '/pa/units/land/tank_heavy_armor/tank_heavy_armor.json',
        MANHATTAN = '/pa/units/land/tank_nuke/tank_nuke.json',
        ASTRAEUS = '/pa/units/orbital/orbital_lander/orbital_lander.json',
        HERMES = '/pa/units/orbital/orbital_probe/orbital_probe.json',
        AVENGER = '/pa/units/orbital/orbital_fighter/orbital_fighter.json',
        ARTEMIS = '/pa/units/orbital/orbital_railgun/orbital_railgun.json',
        SSX = '/pa/units/orbital/orbital_laser/orbital_laser.json',
        OMEGA = '/pa/units/orbital/orbital_battleship/orbital_battleship.json',
        ORBITAL_FAB = '/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json',
        ADVANCED_BOT_FAB = '/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json',
        ADVANCED_VEHICLE_FAB = '/pa/units/land/fabrication_vehicle_adv/fabrication_vehicle_adv.json',
        ADVANCED_AIR_FAB = '/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json',
        ADVANCED_NAVAL_FAB = '/pa/units/sea/fabrication_ship_adv/fabrication_ship_adv.json',
        BARNACLE = '/pa/units/sea/fabrication_barge/fabrication_barge.json',
        MEND = '/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json',
        ARKYD = '/pa/units/orbital/radar_satellite/radar_satellite.json',
        ADVANCED_RADAR_SATELLITE = '/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json',


        // Unit var and string list needed to convert custom settings

        Unit_List = [
            ENERGY,
            ENERGY_ADV,
            ENERGY_ADV_2,
            ENERGY_ADV_3,
            ANT,
            STINGER,
            VEHICLE_FAB,
            SKITTER,
            SPINNER,
            INFERNO,
            GRENADIER,
            DOX,
            SLAMMER,
            GILE,
            BOT_FAB,
            STITCH,
            BLUEHAWK,
            COLONEL,
            LOCUST,
            BOOM,
            SPARK,
            HUMMINGBIRD,
            AIR_FAB,
            FIREFLY,
            BUMBLEBEE,
            NAVAL_FAB,
            PIRANHA,
            NARWHAL,
            ORCA,
            BARRACUDA,
            ICARUS,
            SOLAR_ARRAY,
            PELICAN,
            KESTREL,
            HORSEFLY,
            ANGEL,
            WYRM,
            HORNET,
            PHOENIX,
            KAIJU,
            KRAKEN,
            STINGRAY,
            LEVIATHAN,
            TYPHOON,
            STRYKER,
            DRIFTER,
            LEVELER,
            STORM,
            SHELLER,
            VANGUARD,
            MANHATTAN,
            ASTRAEUS,
            HERMES,
            AVENGER,
            ARTEMIS,
            SSX,
            OMEGA,
            ORBITAL_FAB,
            ADVANCED_BOT_FAB,
            ADVANCED_VEHICLE_FAB,
            ADVANCED_AIR_FAB,
            ADVANCED_NAVAL_FAB,
            BARNACLE,
            MEND,
            ARKYD,
            ADVANCED_RADAR_SATELLITE
        ],

        String_List = [
            "ENERGY",
            "ENERGY_ADV",
            "ENERGY_ADV_2",
            "ENERGY_ADV_3",
            "ANT",
            "STINGER",
            "VEHICLE_FAB",
            "SKITTER",
            "SPINNER",
            "INFERNO",
            "GRENADIER",
            "DOX",
            "SLAMMER",
            "GILE",
            "BOT_FAB",
            "STITCH",
            "BLUEHAWK",
            "COLONEL",
            "LOCUST",
            "BOOM",
            "SPARK",
            "HUMMINGBIRD",
            "AIR_FAB",
            "FIREFLY",
            "BUMBLEBEE",
            "NAVAL_FAB",
            "PIRANHA",
            "NARWHAL",
            "ORCA",
            "BARRACUDA",
            "ICARUS",
            "SOLAR_ARRAY",
            "PELICAN",
            "KESTREL",
            "HORSEFLY",
            "ANGEL",
            "WYRM",
            "HORNET",
            "PHOENIX",
            "KAIJU",
            "KRAKEN",
            "STINGRAY",
            "LEVIATHAN",
            "TYPHOON",
            "STRYKER",
            "DRIFTER",
            "LEVELER",
            "STORM",
            "SHELLER",
            "VANGUARD",
            "MANHATTAN",
            "ASTRAEUS",
            "HERMES",
            "AVENGER",
            "ARTEMIS",
            "SSX",
            "OMEGA",
            "ORBITAL_FAB",
            "ADVANCED_BOT_FAB",
            "ADVANCED_VEHICLE_FAB",
            "ADVANCED_AIR_FAB",
            "ADVANCED_NAVAL_FAB",
            "BARNACLE",
            "MEND",
            "ARKYD",
            "ADVANCED_RADAR_SATELLITE"
        ],


        // Values that determine if a factory is auto queued
        // If you don't want a factory being auto queued, set to 0

        t1_energy_plant_use = 1,
        t2_energy_plant_use = 1,
        t2_1_energy_plant_use = 1,
        t2_2_energy_plant_use = 1,
        t1_bot_use = 0,
        t2_bot_use = 0,
        t1_veh_use = 0,
        t2_veh_use = 0,
        t1_air_use = 0,
        t2_air_use = 0,
        t1_nav_use = 0,
        t2_nav_use = 0,
        t1_orb_use = 0,
        t2_orb_use = 0,


        // Declaring default queue for each factory

        ENERGY_PLANT = '1,ENERGY,F',
        ENERGY_PLANT_ADV = '1,ENERGY_ADV,F',
        ENERGY_PLANT_ADV_2 = '1,ENERGY_ADV_2,F',
        ENERGY_PLANT_ADV_3 = '1,ENERGY_ADV_3,F',
        BOT_FAC = '5,DOX,F,2,SPARK,F,1,STINGER,F',
        ADVANCED_BOT_FAC = '3,SLAMMER,F,1,BLUEHAWK,F,1,GILE,F',
        VEHICLE_FAC = '3,ANT,F,2,INFERNO,F,1,SPINNER,F,1,SKITTER,F,2,ANT,F',
        ADVANCED_VEHICLE_FAC = '3,LEVELER,F,2,SHELLER,F,3,LEVELER,F,2,SHELLER,F,1,STORM,F',
        AIR_FAC = '1,FIREFLY,T,2,HUMMINGBIRD,F,1,BUMBLEBEE,F,2,HUMMINGBIRD,F',
        ADVANCED_AIR_FAC = '2,PHOENIX,F,2,KESTREL,F,1,HORSEFLY,F',
        NAVAL_FAC = '2,BARRACUDA,F,1,NARWHAL,F,1,ORCA,F',
        ADVANCED_NAVAL_FAC = '1,TYPHOON,T,2,KRAKEN,F,1,LEVIATHAN,F',
        ORBITAL_FACTORY = '10,AVENGER,F,2,ARTEMIS,F',
        ORBITAL_LAUNCHER = '1,AVENGER,F',


        Default_List = [
            ENERGY_PLANT,
            ENERGY_PLANT_ADV,
            ENERGY_PLANT_ADV_2,
            ENERGY_PLANT_ADV_3,
            BOT_FAC,
            ADVANCED_BOT_FAC,
            VEHICLE_FAC,
            ADVANCED_VEHICLE_FAC,
            AIR_FAC,
            ADVANCED_AIR_FAC,
            NAVAL_FAC,
            ADVANCED_NAVAL_FAC,
            ORBITAL_LAUNCHER,
            ORBITAL_FACTORY
        ],


        // Parsing custom settings queues

        SettingsList = [],
        SettingsNameList = ['Seconds Before Activation'],
        numberOfFactorys = 12,

        FactoryList = [
            'Energy_Plant',
            'Advanced_Energy_Plant',
            'Advanced_Energy_Plant_2',
            'Advanced_Energy_Plant_3',
            'Bot_Factory',
            'Advanced_Bot_Factory',
            'Vehicle_Factory',
            'Advanced_Vehicle_Factory',
            'Air_Factory',
            'Advanced_Air_Factory',
            'Naval_Factory',
            'Advanced_Naval_Factory',
            'Orbital_Launcher',
            'Orbital_Factory'
        ];


    // Grabs each setting and splits the string

    for (var i = 0; i < FactoryList.length; i++) {

        SettingsList[i] =
            api.settings.isSet('Autofactory', FactoryList[i], true) == undefined
                ? Default_List[i]
                : api.settings.isSet('Autofactory', FactoryList[i], true);

        if (SettingsList[i].length == 0) {
            SettingsList[i] = SettingsList[i];
        }
        else if (SettingsList[i].length < 6 && SettingsList[i].length !== 0) {
            SettingsList[i] = Default_List[i];
        }

        SettingsList[i] = SettingsList[i].split(',');

        console.log(SettingsList[i]);
    }


    var CurrentTime;

    var StartTime =
        api.settings.isSet('Autofactory', SettingsNameList[0], true) == undefined
            ? "0"
            : api.settings.isSet('Autofactory', SettingsNameList[0], true);

    StartTime = parseInt(StartTime, 10);

    if (!(StartTime > 10)) {
        StartTime = 0;
    }


    function parseBuildQueue(Queue) {

        var localStringList = String_List;
        var Local_Unit_List = Unit_List;

        if (Queue.length == 1 && Queue[0].length == 0) {
            return -1;
        }

        for (var b = 0; b < Queue.length; b++) {

            if (Queue.length % 3 !== 0) {
                console.log("flagged " + Queue + " as for incorrect length");
                Queue = false;
            }

            if (Queue !== false) {

                if (Queue[b] !== "F" &&
                    Queue[b] !== "T" &&
                    b % 3 === 2) {

                    console.log("changed " + Queue[b] + " to default false");
                    Queue[b] = false;
                }


                if (Queue[b] === "T") {
                    Queue[b] = true;
                }

                if (Queue[b] === "F") {
                    Queue[b] = false;
                }


                if (b % 3 === 0) {

                    var defaultAmount = 1;
                    var amount = parseInt(Queue[b], 10);

                    if (isNaN(amount)) {
                        amount = defaultAmount;

                        console.log(
                            "changed " +
                            amount +
                            " to 1 due to it being an invalid amount"
                        );
                    }

                    Queue[b] = Math.abs(amount);
                }


                var validUnit = false;

                if (b % 3 === 1) {

                    for (var i = 0; i < localStringList.length; i++) {

                        if (localStringList[i] === Queue[b]) {

                            Queue[b] = Local_Unit_List[i];
                            validUnit = true;
                        }
                    }

                    if (validUnit === false) {

                        console.log(
                            "flagged " +
                            SettingsList[a] +
                            " for non valid unit"
                        );

                        Queue = false;
                    }
                }
            }
        }

        return Queue;
    }


    // Parses the settings so they are usable

    for (var a = 0; a < SettingsList.length; a++) {
        SettingsList[a] = parseBuildQueue(SettingsList[a]);
    }


    // Parses default queues in case they are needed

    ENERGY_PLANT = parseBuildQueue(ENERGY_PLANT.split(','));
    ENERGY_PLANT_ADV = parseBuildQueue(ENERGY_PLANT_ADV.split(','));
    ENERGY_PLANT_ADV_2 = parseBuildQueue(ENERGY_PLANT_ADV_2.split(','));
    ENERGY_PLANT_ADV_3 = parseBuildQueue(ENERGY_PLANT_ADV_3.split(','));
    BOT_FAC = parseBuildQueue(BOT_FAC.split(','));
    ADVANCED_BOT_FAC = parseBuildQueue(ADVANCED_BOT_FAC.split(','));
    VEHICLE_FAC = parseBuildQueue(VEHICLE_FAC.split(','));
    ADVANCED_VEHICLE_FAC = parseBuildQueue(ADVANCED_VEHICLE_FAC.split(','));
    AIR_FAC = parseBuildQueue(AIR_FAC.split(','));
    ADVANCED_AIR_FAC = parseBuildQueue(ADVANCED_AIR_FAC.split(','));
    NAVAL_FAC = parseBuildQueue(NAVAL_FAC.split(','));
    ADVANCED_NAVAL_FAC = parseBuildQueue(ADVANCED_NAVAL_FAC.split(','));
    ORBITAL_FACTORY = parseBuildQueue(ORBITAL_FACTORY.split(','));
    ORBITAL_LAUNCHER = parseBuildQueue(ORBITAL_LAUNCHER.split(','));


    // Declaring the custom settings

    var ENERGY_PLANT_CUSTOM,
        ENERGY_PLANT_ADV_CUSTOM,
        ENERGY_PLANT_ADV_2_CUSTOM,
        ENERGY_PLANT_ADV_3_CUSTOM,
        BOT_FAC_CUSTOM,
        ADVANCED_BOT_FAC_CUSTOM,
        VEHICLE_FAC_CUSTOM,
        ADVANCED_VEHICLE_FAC_CUSTOM,
        AIR_FAC_CUSTOM,
        ADVANCED_AIR_FAC_CUSTOM,
        NAVAL_FAC_CUSTOM,
        ADVANCED_NAVAL_FAC_CUSTOM,
        ORBITAL_LAUNCHER_CUSTOM,
        ORBITAL_FACTORY_CUSTOM;


    // List of custom settings

    var Custom_List = [
        ENERGY_PLANT_CUSTOM,
        ENERGY_PLANT_ADV_CUSTOM,
        ENERGY_PLANT_ADV_2_CUSTOM,
        ENERGY_PLANT_ADV_3_CUSTOM,
        BOT_FAC_CUSTOM,
        ADVANCED_BOT_FAC_CUSTOM,
        VEHICLE_FAC_CUSTOM,
        ADVANCED_VEHICLE_FAC_CUSTOM,
        AIR_FAC_CUSTOM,
        ADVANCED_AIR_FAC_CUSTOM,
        NAVAL_FAC_CUSTOM,
        ADVANCED_NAVAL_FAC_CUSTOM,
        ORBITAL_LAUNCHER_CUSTOM,
        ORBITAL_FACTORY_CUSTOM
    ];


    for (i = 0; i < FactoryList.length; i++) {
        Custom_List[i] = SettingsList[i];
    }


    tAutoFactory = {};
    tAutoFactory.active = true;


    var AutoFactory_Choice = 'Custom';

    // No longer a need to differentiate due to defaults auto applying
    if (AutoFactory_Choice === 'Custom') {

        // Checking if the queues were valid and leaving as defaults
        // if they are not

        if (Custom_List[0] !== false) {
            ENERGY_PLANT = Custom_List[0];
        }

        if (Custom_List[1] !== false) {
            ENERGY_PLANT_ADV = Custom_List[1];
        }

        if (Custom_List[1] !== false) {
            ENERGY_PLANT_ADV_2 = Custom_List[2];
        }

        if (Custom_List[1] !== false) {
            ENERGY_PLANT_ADV_3 = Custom_List[3];
        }

        if (Custom_List[2] !== false) {
            BOT_FAC = Custom_List[4];
        }

        if (Custom_List[3] !== false) {
            ADVANCED_BOT_FAC = Custom_List[5];
        }

        if (Custom_List[4] !== false) {
            VEHICLE_FAC = Custom_List[6];
        }

        if (Custom_List[5] !== false) {
            ADVANCED_VEHICLE_FAC = Custom_List[7];
        }

        if (Custom_List[6] !== false) {
            AIR_FAC = Custom_List[8];
        }

        if (Custom_List[7] !== false) {
            ADVANCED_AIR_FAC = Custom_List[9];
        }

        if (Custom_List[8] !== false) {
            NAVAL_FAC = Custom_List[10];
        }

        if (Custom_List[9] !== false) {
            ADVANCED_NAVAL_FAC = Custom_List[11];
        }

        if (Custom_List[10] !== false) {
            ORBITAL_LAUNCHER = Custom_List[12];
        }

        if (Custom_List[11] !== false) {
            ORBITAL_FACTORY = Custom_List[13];
        }
    }


    function threshold_parse(id) {
        return (
            (api.settings.isSet('ui', id, true) == undefined
                ? 80
                : api.settings.isSet('ui', id, true)
            ) * 0.01
        );
    }


    var landTime = 200000;
    model.TimeSinceLanding = 0;


    tAutoFactory.update = function (exec_type) {

        gameType == undefined;

        if (gameType == undefined) {
            gameType = model.gameType();
        }

        if (exec_type === undefined) {
            exec_type = 'auto';
        }


        if (
            (
                (exec_type === 'manual' && model.gameOver() == false) ||
                ((exec_type === 'auto') && !model.hasSelection())
            ) &&
            model.maxEnergy() > 0 &&
            model.gameOver() == false
        ) {

            if (
                model.TimeSinceLanding < landTime &&
                model.TimeSinceLanding !== 0
            ) {
                landTime = model.TimeSinceLanding;
            }


            if (
                (
                    model.TimeSinceLanding > (landTime + StartTime) ||
                    StartTime + 240 < model.TimeSinceLanding
                ) &&
                model.paused() === false
            ) {

                // If user hasn't selected anything and we're playing

                var selected_enabled = 0;

                if (tAutoFactory.active) {

                    // All T2 factories are queued before T1
                    // so we can deselect advanced factories
                    // to prevent T1 units being queued in them.


                    if (t2_energy_plant_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();
                            api.select.fromSelectionWithTypeFilter(
                                'Basic',
                                null,
                                true
                            );

                            selected_enabled = 1;
                        }

                        buildFromQueue(ENERGY_PLANT_ADV);
                    }

                                        if (t2_1_energy_plant_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();
                            api.select.fromSelectionWithTypeFilter(
                                'Basic',
                                null,
                                true
                            );

                            selected_enabled = 1;
                        }

                        buildFromQueue(ENERGY_PLANT_ADV_2);
                    }

                                        if (t2_2_energy_plant_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();
                            api.select.fromSelectionWithTypeFilter(
                                'Basic',
                                null,
                                true
                            );

                            selected_enabled = 1;
                        }

                        buildFromQueue(ENERGY_PLANT_ADV_3);
                    }


                    if (t2_bot_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();
                            api.select.fromSelectionWithTypeFilter(
                                'Basic',
                                null,
                                true
                            );

                            selected_enabled = 1;
                        }

                        buildFromQueue(ADVANCED_BOT_FAC);
                    }


                    if (t2_veh_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();
                            api.select.fromSelectionWithTypeFilter(
                                'Basic',
                                null,
                                true
                            );

                            selected_enabled = 1;
                        }

                        buildFromQueue(ADVANCED_VEHICLE_FAC);
                    }


                    if (t2_air_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();
                            api.select.fromSelectionWithTypeFilter(
                                'Basic',
                                null,
                                true
                            );

                            selected_enabled = 1;
                        }

                        buildFromQueue(ADVANCED_AIR_FAC);
                    }


                    if (t2_nav_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();
                            api.select.fromSelectionWithTypeFilter(
                                'Basic',
                                null,
                                true
                            );

                            selected_enabled = 1;
                        }

                        buildFromQueue(ADVANCED_NAVAL_FAC);
                    }


                    if (t2_orb_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();
                            api.select.fromSelectionWithTypeFilter(
                                'Basic',
                                null,
                                true
                            );

                            selected_enabled = 1;
                        }

                        buildFromQueue(ORBITAL_FACTORY);
                    }


                    api.select.allIdleFactories();


                    if (t1_bot_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();

                            selected_enabled = 1;
                        }

                        api.select.fromSelectionWithTypeFilter(
                            'Advanced',
                            null,
                            true
                        );

                        buildFromQueue(BOT_FAC);
                    }


                    if (t1_veh_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();

                            selected_enabled = 1;
                        }

                        api.select.fromSelectionWithTypeFilter(
                            'Advanced',
                            null,
                            true
                        );

                        buildFromQueue(VEHICLE_FAC);
                    }


                    if (t1_energy_plant_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();

                            selected_enabled = 1;
                        }

                        api.select.fromSelectionWithTypeFilter(
                            'Advanced',
                            null,
                            true
                        );

                        buildFromQueue(ENERGY_PLANT);
                    }


                    if (t1_air_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();

                            selected_enabled = 1;
                        }

                        api.select.fromSelectionWithTypeFilter(
                            'Advanced',
                            null,
                            true
                        );

                        buildFromQueue(AIR_FAC);
                    }


                    if (t1_nav_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();

                            selected_enabled = 1;
                        }

                        api.select.fromSelectionWithTypeFilter(
                            'Advanced',
                            null,
                            true
                        );

                        buildFromQueue(NAVAL_FAC);
                    }


                    if (t1_orb_use === 1) {

                        if (selected_enabled === 0) {

                            api.select.allIdleFactories();

                            selected_enabled = 1;
                        }

                        api.select.fromSelectionWithTypeFilter(
                            'Advanced',
                            null,
                            true
                        );

                        buildFromQueue(ORBITAL_LAUNCHER);
                    }


                    if (selected_enabled === 1) {
                        api.select.empty();
                    }
                }
            }
        }

        setTimeout(tAutoFactory.update, 1000);
    };


    return tAutoFactory;

})();



(function () {

    // Handler to get UI toggle status

    handlers.aftoggle = function (payload) {

        if (payload === 'false') {
            tAutoFactory.active = false;
        }
        else if (payload === 'true') {
            tAutoFactory.active = true;
        }
    };


    handlers.AFtime = function (payload) {
        model.TimeSinceLanding = payload;
    };


    // Update every 5 seconds

    setTimeout(tAutoFactory.update, 5000);


    // Visible to knockout

    model.tAutoFactory = tAutoFactory;

})();