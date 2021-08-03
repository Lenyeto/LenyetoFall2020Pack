// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	//Remove recipes
	event.remove({output: 'numina:component_wiring', type: 'minecraft:crafting_shaped'});
	event.remove({output: 'numina:component_solar_panel', type: 'minecraft:crafting_shaped'});
	event.remove({output: 'powersuits:vein_miner', type: 'minecraft:crafting_shaped'});
	event.remove({output: 'titanium:gold_gear', type: 'minecraft:crafting_shaped'});
	event.remove({output: 'titanium:iron_gear', type: 'minecraft:crafting_shaped'});
	event.remove({output: 'titanium:diamond_gear', type: 'minecraft:crafting_shaped'});

	//Replace recipe inputs
	//Ingots
	event.replaceInput({}, '#forge:ingots/steel', 'immersiveengineering:ingot_steel');
	event.replaceInput({}, '#forge:ingots/copper', 'thermal:copper_ingot');
	event.replaceInput({}, '#forge:ingots/tin', 'thermal:tin_ingot');
	event.replaceInput({}, '#forge:ingots/lead', 'thermal:lead_ingot');
	event.replaceInput({}, '#forge:ingots/silver', 'thermal:silver_ingot');
	event.replaceInput({}, '#forge:ingots/nickel', 'thermal:nickel_ingot');
	event.replaceInput({}, '#forge:ingots/bronze', 'thermal:bronze_ingot');
	//Storage Blocks

	//Replace recipe outputs
	//Ingots
	event.replaceOutput({}, '#forge:ingots/steel', 'immersiveengineering:ingot_steel');
	event.replaceOutput({}, '#forge:ingots/copper', 'thermal:copper_ingot');
	event.replaceOutput({}, '#forge:ingots/tin', 'thermal:tin_ingot');
	event.replaceOutput({}, '#forge:ingots/lead', 'thermal:lead_ingot');
	event.replaceOutput({}, '#forge:ingots/silver', 'thermal:silver_ingot');
	event.replaceOutput({}, '#forge:ingots/nickel', 'thermal:nickel_ingot');
	event.replaceOutput({}, '#forge:ingots/bronze', 'thermal:bronze_ingot');
	//Storage Blocks
	event.replaceOutput({}, '#forge:storage_blocks/steel', 'immersiveengineering:storage_steel');

	//Immersive Engineering Mineral Deposits
	let data = {
        recipes: [
            {
                ores:[
                    {chance:0.4, output: {item:'astralsorcery:rock_crystal_ore'}}
                ],
                dimensions: ['minecraft:overworld'],
                weight: 5,
                fail_chance: 0.2,
                sample_background: 'minecraft:stone',
                id: 'rock_crystal_mix'
            }
        ]
    };

	//Adding mineral deposit for immersive engineering
    data.recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:mineral_mix';
        const re = event.custom(recipe);
        if (recipe.id) {
            re.id(`immersiveengineering:mineral/${recipe.id}`)
        }
    });

	//Adding recipes for Powersuits
	const newPowersuitsRecipes = [
		{
			output: 'powersuits:powerarmor_head',
			pattern: ['ABA', 'ACA'],
			key: {
				A: '#forge:plates/invar',
				B: 'minecraft:glass',
				C: 'thermal:upgrade_augment_1'
			}
		},
		{
			output: 'powersuits:powerarmor_torso',
			pattern: ['P P', 'PCP', 'PPP'],
			key: {
				P: '#forge:plates/invar',
				C: 'thermal:upgrade_augment_1'
			}
		},
		{
			output: 'powersuits:powerarmor_legs',
			pattern: ['PCP', 'P P', 'P P'],
			key: {
				P: '#forge:plates/invar',
				C: 'thermal:upgrade_augment_1'
			}
		},
		{
			output: 'powersuits:powerarmor_feet',
			pattern: ['P P', 'PCP'],
			key: {
				P: '#forge:plates/invar',
				C: 'thermal:upgrade_augment_1'
			}
		},
		{
			output: 'powersuits:powerfist',
			pattern: [' P ', 'PCP', ' S '],
			key: {
				P: '#forge:plates/invar',
				C: 'thermal:upgrade_augment_1',
				S: 'thermal:redstone_servo'
			}
		},
		{
			output: 'powersuits:plating_leather',
			pattern: ['LL', 'PL', 'LL'],
			key: {
				P: '#forge:plates/iron',
				L: 'minecraft:leather'
			}
		},
		{
			output: 'powersuits:plating_iron',
			pattern: ['LL', 'PL', 'LL'],
			key: {
				P: 'powersuits:plating_leather',
				L: '#forge:plates/iron'
			}
		},
		{
			output: 'powersuits:plating_diamond',
			pattern: ['LL', 'PL', 'LL'],
			key: {
				P: 'powersuits:plating_iron',
				L: 'mekanism:enriched_diamond'
			}
		},
		{
			output: 'powersuits:energy_shield',
			pattern: ['WFW', 'WCW', 'WFW'],
			key: {
				W: '#forge:wires/copper',
				C: 'thermal:upgrade_augment_3',
				F: 'numina:component_field_emitter'
			}
		},
		{
			output: 'numina:component_field_emitter',
			pattern: ['RAR', 'ECE', 'RAR'],
			key: {
				C: 'thermal:upgrade_augment_3',
				E: 'minecraft:ender_pearl',
				R: 'thermal:rf_coil',
				A: 'thermal:area_radius_augment'
			}
		},
		{
			output: 'powersuits:tinkertable',
			pattern: ['HWT', 'RCR'],
			key: {
				C: 'thermal:upgrade_augment_1',
				W: 'thermal:tinker_bench',
				R: 'thermal:rf_coil',
				T: 'refinedstorage:wrench',
				H: 'immersiveengineering:hammer'
			}
		},
		{
			output: 'powersuits:tinkertable',
			pattern: ['HWT', 'RCR'],
			key: {
				C: 'thermal:upgrade_augment_1',
				W: 'thermal:tinker_bench',
				R: 'thermal:rf_coil',
				T: '#forge:tools/wrench',
				H: 'immersiveengineering:hammer'
			}
		},
		{
			output: 'numina:component_laser_emitter',
			pattern: ['GLP', 'LWL', 'BLR'],
			key: {
				G: 'minecraft:glowstone_dust',
				L: 'minecraft:glass',
				W: '#forge:wires/copper',
				P: 'minecraft:green_dye',
				B: 'minecraft:blue_dye',
				R: 'minecraft:red_dye'
			}
		},
		{
			output: 'powersuits:transparent_armor',
			pattern: ['WW', 'HC', 'WW'],
			key: {
				W: '#forge:wires/copper',
				C: 'thermal:upgrade_augment_1',
				H: 'numina:component_laser_emitter'
			}
		},
		{
			output: 'powersuits:generator_solar',
			pattern: ['WCW', 'PSP', 'WCW'],
			key: {
				W: '#forge:wires/copper',
				C: 'thermal:upgrade_augment_2',
				P: '#forge:plates/iron',
				S: 'solarflux:sp_2'
			}
		},
		{
			output: 'powersuits:generator_solar_adv',
			pattern: ['PSP', 'WCW', 'PSP'],
			key: {
				W: '#forge:wires/copper',
				C: 'thermal:upgrade_augment_3',
				P: '#forge:plates/invar',
				S: 'solarflux:sp_4'
			}
		},
		{
			output: 'powersuits:generator_kinetic',
			pattern: ['PAP', 'WCW', 'PAP'],
			key: {
				W: '#forge:wires/copper',
				C: 'thermal:upgrade_augment_1',
				P: '#forge:plates/invar',
				A: 'createaddition:alternator'
			}
		},
		{
			output: 'powersuits:generator_thermal',
			pattern: ['PDP', 'WCW', 'PDP'],
			key: {
				W: '#forge:wires/copper',
				C: 'thermal:upgrade_augment_2',
				P: '#forge:plates/invar',
				D: 'thermal:dynamo_magmatic'
			}
		},
		{
			output: 'powersuits:auto_feeder',
			pattern: [' S ', 'PCP', ' B '],
			key: {
				S: 'simplyjetpacks:leather_strap',
				C: 'thermal:upgrade_augment_2',
				P: '#forge:plates/iron',
				B: 'minecraft:bucket'
			}
		},
		{
			output: 'powersuits:cooling_system',
			pattern: ['BPB', 'PCP', 'BPB'],
			key: {
				C: 'thermal:upgrade_augment_2',
				P: 'create:fluid_pipe',
				B: 'minecraft:water_bucket'
			}
		},
		{
			output: 'powersuits:fluid_tank',
			pattern: ['CT'],
			key: {
				T: 'create:fluid_tank',
				C: 'thermal:upgrade_augment_1',
			}
		},
		{
			output: 'powersuits:fluid_tank',
			pattern: ['CT'],
			key: {
				T: 'evilcraft:dark_tank',
				C: 'thermal:upgrade_augment_1',
			}
		},
		{
			output: 'powersuits:fluid_tank',
			pattern: ['PDP', 'WCW', 'PDP'],
			key: {
				T: 'thermal:fluid_cell',
				C: 'thermal:upgrade_augment_1',
			}
		},
		{
			output: 'powersuits:mob_repulsor',
			pattern: ['W W', 'FCF', 'W W'],
			key: {
				C: 'thermal:upgrade_augment_2',
				F: 'numina:component_field_emitter',
				W: '#forge:wires/copper'
			}
		},
		{
			output: 'powersuits:water_electrolyzer',
			pattern: ['WWW', 'ECE', 'WWW'],
			key: {
				W: '#forge:wires/copper',
				C: 'thermal:upgrade_augment_2',
				E: 'mekanism:electrolytic_core'
			}
		},
		{
			output: 'powersuits:aoe_pick_upgrade',
			pattern: ['CA'],
			key: {
				C: 'thermal:upgrade_augment_2',
				A: 'thermal:area_radius_augment'
			}
		},
		{
			output: 'powersuits:aqua_affinity',
			pattern: ['CB'],
			key: {
				C: 'thermal:upgrade_augment_2',
				B: Item.of('minecraft:enchanted_book', {StoredEnchantments:[{lvl:1,id:"minecraft:aqua_affinity"}]})
			}
		},
		{
			output: 'powersuits:silk_touch',
			pattern: ['CB'],
			key: {
				C: 'thermal:upgrade_augment_3',
				B: Item.of('minecraft:enchanted_book', {StoredEnchantments:[{lvl:1,id:"minecraft:silk_touch"}]})
			}
		},
		{
			output: 'powersuits:fortune',
			pattern: ['CB'],
			key: {
				C: 'thermal:upgrade_augment_3',
				B: Item.of('minecraft:enchanted_book', {StoredEnchantments:[{lvl:3,id:"minecraft:fortune"}]})
			}
		},
	];

	newPowersuitsRecipes.forEach((recipe) => {
		event.remove({output: recipe.output, type: 'minecraft:crafting_shaped'});
		event.shaped(recipe.output, recipe.pattern, recipe.key);
	});
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})