const localStorageKey = "recipes-";

export function saveRecipe(newRecipe, editingName) {
  if (typeof newRecipe !== "object" || newRecipe === null) {
    return false;
  }
  let newName = localStorageKey + newRecipe.name;
  if (!editingName) {
    editingName = newName;
    if (localStorage.getItem(editingName)) {
      return false;
    }
  } else {
    editingName = localStorageKey + editingName;
  }
  if (editingName != newName) {
    deleteRecipe(editingName);
  }
  if (typeof(Storage) !== "undefined") {
    try {
      localStorage.setItem(newName, JSON.stringify(newRecipe));
    }
    catch (e) {
      return false;
    }
    return true;
  }
  return false;
}

export function loadRecipe(name) {
  let recipe = localStorage.getItem(localStorageKey + name);
  if (recipe) {
    return JSON.parse(recipe);
  }
  return false;
}

export function recipeList() {
  let keysList = Object.keys(localStorage);
  let list = [];
  for (let key in keysList) {
    if (keysList[key].startsWith(localStorageKey)) {
      list.push(JSON.parse(localStorage.getItem(keysList[key])));
    }
  }
  return list;
}

export function deleteRecipe(name) {
  if (typeof(Storage) !== "undefined") {
    try {
      localStorage.removeItem(localStorageKey + name);
    }
    catch (e) {
      return false;
    }
    return true;
  }
  return false;
}