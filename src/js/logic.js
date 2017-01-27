const localStorageKey = "recipes";

export function saveRecipe(newRecipe, editingName) {
  if (typeof newRecipe !== "object" || newRecipe === null) {
    return false;
  }
  if (!editingName) {
    editingName = newRecipe.name;
    if (localStorage.getItem(editingName)) {
      return false;
    }
  }
  if (editingName != newRecipe.name) {
    deleteRecipe(editingName);
  }
  if (typeof(Storage) !== "undefined") {
    try {
      localStorage.setItem(newRecipe.name, JSON.stringify(newRecipe));
    }
    catch (e) {
      return false;
    }
    return true;
  }
  return false;
}

export function loadRecipe(name) {
  let recipe = localStorage.getItem(name);
  if (recipe) {
    return JSON.parse(recipe);
  }
  return false;
}

export function recipeList() {
  let keysList = Object.keys(localStorage);
  let list = [];
  for (let key in keysList) {
    list.push(JSON.parse(localStorage.getItem(keysList[key])));
  }
  return list;
}

export function deleteRecipe(name) {
  if (typeof(Storage) !== "undefined") {
    try {
      localStorage.removeItem(name);
    }
    catch (e) {
      return false;
    }
    return true;
  }
  return false;
}