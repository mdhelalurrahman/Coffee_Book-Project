import toast from "react-hot-toast";

const getAllFavorites = () => {
  const getStoredData = localStorage.getItem("items");
  if (getStoredData) {
    return JSON.parse(getStoredData);
  } else {
    return [];
  }
};

const addFavorite = (coffee) => {
  const favorite = getAllFavorites();
  const isAlreadyExist = favorite.find((item) => item.id == coffee.id);
  if (isAlreadyExist) {
    toast.error("Coffee Already Added");
    return;
  }
  favorite.push(coffee);
  localStorage.setItem("items", JSON.stringify(favorite));
  toast.success("Coffee Added to Favorite");
  return favorite;
};

const removeFavorite = (id) => {
  const favorite = getAllFavorites();
  const remaining = favorite.filter((item) => item.id != id);
  localStorage.setItem("items", JSON.stringify(remaining));
  toast.success("Coffee Removed from Favorite");
};

export {addFavorite, getAllFavorites, removeFavorite};
