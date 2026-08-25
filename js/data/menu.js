// Rome 1960 Cafe — Menu Data
// Categories and items based on official menu offerings.
// Each item: { id, name, description, image }
// No prices, no cart functionality.

export const menuCategories = [
  {
    id: "coffee",
    name: "Coffee & Hot Drinks",
    icon: "fas fa-mug-hot",
    description: "From traditional Ethiopian espresso to specialty lattes",
    items: [
      {
        id: "coffee-1",
        name: "Ethiopian Espresso",
        description: "Rich, bold single-origin espresso brewed the traditional way",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&h=400&fit=crop"
      },
      {
        id: "coffee-2",
        name: "Macchiato",
        description: "Espresso with a touch of steamed milk foam",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop"
      },
      {
        id: "coffee-3",
        name: "Café Latte",
        description: "Smooth espresso blended with creamy steamed milk",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop"
      },
      {
        id: "coffee-4",
        name: "Caramel Cappuccino",
        description: "Velvety cappuccino drizzled with caramel",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop"
      },
      {
        id: "coffee-5",
        name: "Hot Chocolate",
        description: "Rich, creamy chocolate perfect for any time of day",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600&h=400&fit=crop"
      },
      {
        id: "coffee-6",
        name: "Spiced Tea",
        description: "Aromatic Ethiopian spiced tea blend",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop"
      }
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    icon: "fas fa-pizza-slice",
    description: "Freshly prepared with quality ingredients",
    items: [
      {
        id: "pizza-1",
        name: "Chicken Pizza",
        description: "Tender chicken with mixed vegetables and melted cheese",
        image: "assets/images/pizza-served.jpg"
      },
      {
        id: "pizza-2",
        name: "Vegetable Pizza",
        description: "Garden-fresh vegetables on a crispy crust",
        image: "assets/images/pizza-plate.jpg"
      },
      {
        id: "pizza-3",
        name: "Mixed Pizza",
        description: "A generous combination of meats and vegetables",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop"
      },
      {
        id: "pizza-4",
        name: "Signature Pizza",
        description: "Our special blend of toppings on a perfectly baked crust",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop"
      }
    ]
  },
  {
    id: "chicken",
    name: "Fried Chicken",
    icon: "fas fa-drumstick-bite",
    description: "Crispy, golden fried chicken portions",
    items: [
      {
        id: "chicken-1",
        name: "Crispy Chicken Wings",
        description: "Golden-fried wings with our signature seasoning",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop"
      },
      {
        id: "chicken-2",
        name: "Chicken Combo",
        description: "Crispy chicken pieces served with golden fries",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop"
      },
      {
        id: "chicken-3",
        name: "Fried Chicken Bucket",
        description: "A family-sized bucket of perfectly fried chicken",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&h=400&fit=crop"
      }
    ]
  },
  {
    id: "burgers",
    name: "Burgers & Sandwiches",
    icon: "fas fa-burger",
    description: "Gourmet burgers made with quality beef",
    items: [
      {
        id: "burger-1",
        name: "Classic Beef Burger",
        description: "Juicy beef patty with fresh lettuce, tomato, and our special sauce",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop"
      },
      {
        id: "burger-2",
        name: "Cheese Burger",
        description: "Melted cheese over a perfectly grilled beef patty",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=400&fit=crop"
      },
      {
        id: "burger-3",
        name: "Signature Burger",
        description: "Our special burger with premium toppings and sauces",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&h=400&fit=crop"
      }
    ]
  },
  {
    id: "desserts",
    name: "Ice Cream & Desserts",
    icon: "fas fa-ice-cream",
    description: "Sweet treats and frozen delights",
    items: [
      {
        id: "dessert-1",
        name: "Soft Serve Ice Cream",
        description: "Creamy soft-serve in your choice of flavor",
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&h=400&fit=crop"
      },
      {
        id: "dessert-2",
        name: "Sundae",
        description: "Layers of ice cream with toppings and sauce",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop"
      },
      {
        id: "dessert-3",
        name: "Milkshake",
        description: "Thick, creamy milkshake blended to perfection",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop"
      },
      {
        id: "dessert-4",
        name: "Frappuccino",
        description: "Blended coffee drink topped with whipped cream",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop"
      }
    ]
  },
  {
    id: "drinks",
    name: "Fresh Juices & Drinks",
    icon: "fas fa-glass-water",
    description: "Refreshing cold beverages",
    items: [
      {
        id: "drink-1",
        name: "Fresh Fruit Juice",
        description: "Freshly squeezed seasonal fruit juice",
        image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop"
      },
      {
        id: "drink-2",
        name: "Iced Tea",
        description: "Refreshing chilled tea served over ice",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop"
      }
    ]
  },
  {
    id: "breakfast",
    name: "Breakfast & Snacks",
    icon: "fas fa-egg",
    description: "Light breakfast pastries and quick bites",
    items: [
      {
        id: "breakfast-1",
        name: "Omelette",
        description: "Fluffy eggs cooked to your preference",
        image: "https://images.unsplash.com/photo-1510693206972-df09801ffb4b?w=600&h=400&fit=crop"
      },
      {
        id: "breakfast-2",
        name: "Breakfast Pastry",
        description: "Freshly baked pastries to start your day",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&h=400&fit=crop"
      }
    ]
  }
];
