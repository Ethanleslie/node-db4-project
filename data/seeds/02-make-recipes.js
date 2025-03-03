const recipes = [
    {recipe_name: 'Broccoli Pesto Pasta'},
    {recipe_name: 'Lemon Chicken'},
    {recipe_name: 'Salmon en Papillote'},
]


const ingredients = [
    {ingredient_name: 'Broccoli', ingredient_unit: 'lbs'},
    {ingredient_name: 'Pesto', ingredient_unit: 'lbs'},
    {ingredient_name: 'Pasta', ingredient_unit: 'lbs'},
    {ingredient_name: 'Lemon', ingredient_unit: 'slices'},
    {ingredient_name: 'Chicken', ingredient_unit: 'kilos'},
    {ingredient_name: 'Salmon', ingredient_unit: 'grams'},
]

const steps = [
    {step_text: 'Heat pan', step_number: 1, recipe_id: 1},
    {step_text: 'Add broccoli', step_number: 2, recipe_id: 1},
    {step_text: 'Add pesto mixed with pasta', step_number: 3, recipe_id: 1},

    {step_text: 'Heat oven', step_number: 1, recipe_id: 2},
    {step_text: 'Put chicken and lemon in oven', step_number: 2, recipe_id: 2},
    {step_text: 'Put in oven at 500 degrees', step_number: 3, recipe_id: 2},

    {step_text: 'Fish a salmon in Bidasoa river', step_number: 1, recipe_id: 3},
    {step_text: 'Cook salmon', step_number: 2, recipe_id: 3},
]



const step_ingredients = [
    {step_id: 2, ingredient_id: 1, quantity: 1 },
    {step_id: 3, ingredient_id: 2, quantity: 1.5 },
    {step_id: 3, ingredient_id: 3, quantity: 2 },

    {step_id: 5, ingredient_id: 4, quantity: 1 },
    {step_id: 5, ingredient_id: 5, quantity: 0.4 },

    {step_id: 7, ingredient_id: 6, quantity: 1 },
]




exports.seed = async function(knex) {
  await knex('recipes').insert(recipes)
  await knex('ingredients').insert(ingredients)
  await knex('steps').insert(steps)
  await knex('step_ingredients').insert(step_ingredients)
}
