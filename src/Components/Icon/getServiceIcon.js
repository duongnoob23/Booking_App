import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

const getServiceIcon = (serviceType, size = 20, color = "#007AFF") => {
  switch (serviceType) {
    case "AMENITY":
      return <Ionicons name="bed-outline" size={size} color={color} />;
    case "BREAKFAST":
      return <Ionicons name="cafe-outline" size={size} color={color} />;
    case "LUNCH":
      return <Ionicons name="fast-food-outline" size={size} color={color} />;
    case "DINNER":
      return <Ionicons name="restaurant-outline" size={size} color={color} />;
    case "BUFFET":
      return <Ionicons name="pizza-outline" size={size} color={color} />;
    case "SPA":
      return <Ionicons name="water-outline" size={size} color={color} />;
    case "TRANSPORT":
      return <Ionicons name="car-outline" size={size} color={color} />;
    case "ROOM":
      return <Ionicons name="home-outline" size={size} color={color} />;
    default:
      return <Ionicons name="help-outline" size={size} color={color} />;
  }
};

export default getServiceIcon;
