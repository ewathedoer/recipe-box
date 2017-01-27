const localStorageKey = "recipes";

export function saveRecipe(newRecipe, editingName) {
  if (typeof newRecipe !== "object" || newRecipe === null) {
    return false;
  }
  let currentList = recipeList();
  if (editingName) {
    for (let i=0; i<currentList.length; i++) {
      if (editingName === currentList[i].name) {
        currentList[i] = newRecipe;
        break;
      }
    }
  } else {
    for (let i=0; i<currentList.length; i++) {
      if (newRecipe.name === currentList[i].name ) {
        return false;
      } 
    }
    currentList.push(newRecipe); 
  }
  if (typeof(Storage) !== "undefined") {
    try {
      localStorage.setItem(localStorageKey, JSON.stringify(currentList));
    }
    catch (e) {
      return false;
    }
    return true;
  }
  return false;
}

export function loadRecipe(name) {
  let currentList = recipeList();
  for (let i=0; i<currentList.length; i++) {
    if (name == currentList[i].name) {
      return currentList[i];
    } 
  }
  return false;
}

export function recipeList() {
  let list = localStorage.getItem(localStorageKey);
  if (list !== null) {
    return JSON.parse(list);
  } else {
    return [];
  }
}

export function deleteRecipe(name) {
  if (typeof(Storage) !== "undefined") {
    try {
      localStorage.removeItem('name');
    }
    catch (e) {
      return false;
    }
    return true;
  }
  return false;
}