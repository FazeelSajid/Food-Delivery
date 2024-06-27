export const foodCategories = [
    'Burger',
    'Salad',
    'Chinese',
    'Pizza',
    'Drinks',
    'Sushi',
    'Dessert',
    'Steak',
    'Seafood',
    'Pasta',
    'Sandwiches',
    'BBQ',
    'Mexican',
    'Indian',
    'Vegan',
    'Breakfast',
    'Beverages',
    'Soups',
    'Snacks',
    'Healthy',
  ];

 export const ordersArray = [
    {
      id: 'fgrth456',
      status: 'pending',
      totalAmount: 97.67,
      restaurantName: 'Adison',
      date: '23 Sep, 12:00 pm',
      deliveryAddress: 'lorem ipsum dolor sit',
      
      image:
        'https://www.giverecipe.com/wp-content/uploads/2023/01/Air-Fryer-Whole-Chicken-Wings.jpg',
      items: [
        { id: '1', name: 'Chicken Wings', quantity: 2, price: 34 },
        { id: '2', name: 'Ranch Dip', quantity: 1, price: 34 },
        { id: '3', name: 'French Fries', quantity: 3, price: 34 },
      ],
      subtotal: 29.89,
      serviceCharges: 6.0,
      paymentMethod: 'Master card',
      deliveryTime: '40 mins',
      rider: {
        name: 'Sunny Deol',
        avatar:
          'https://www.giverecipe.com/wp-content/uploads/2023/01/Air-Fryer-Whole-Chicken-Wings.jpg',
      },
    },
    {
      id: 'dhyrt123',
      status: 'Completed',
      totalAmount: 85.50,
      restaurantName: 'Burger House',
      deliveryAddress: '123 Main St',
      
      date: '23 Sep, 12:00 pm',
      image:
      'https://foodbyjonister.com/wp-content/uploads/2020/01/MargheritaPizza.jpg',
      items: [
        { id: '1', name: 'Classic Burger', quantity: 1, price: 40 },
        { id: '2', name: 'Cheese Burger', quantity: 1, price: 45.50 },
      ],
      subtotal: 85.50,
      serviceCharges: 0,
      paymentMethod: 'Visa',
      deliveryTime: '30 mins',
      rider: {
        name: 'John Doe',
        avatar:
        'https://foodbyjonister.com/wp-content/uploads/2020/01/MargheritaPizza.jpg'
      },
    },
    {
      id: 'lmno678',
      status: 'Cancelled',
      totalAmount: 60.00,
      restaurantName: 'Pasta Place',
      deliveryAddress: '456 Elm St',
      
      date: '23 Sep, 12:00 pm',
      image:
      'https://spicecravings.com/wp-content/uploads/2021/09/Air-Fryer-Garlic-Bread-3.jpg',
      items: [
        { id: '1', name: 'Spaghetti', quantity: 1, price: 20 },
        { id: '2', name: 'Lasagna', quantity: 1, price: 20 },
        { id: '3', name: 'Garlic Bread', quantity: 2, price: 10 },
      ],
      subtotal: 60.00,
      serviceCharges: 0,
      paymentMethod: 'PayPal',
      deliveryTime: '50 mins',
      rider: {
        name: 'Jane Smith',
        avatar:
        'https://spicecravings.com/wp-content/uploads/2021/09/Air-Fryer-Garlic-Bread-3.jpg'      },
    },
    {
      id: 'pqrs987',
      status: 'pending',
      totalAmount: 120.00,
      restaurantName: 'Sushi World',
      deliveryAddress: '789 Pine St',
      
      date: '23 Sep, 12:00 pm',
      image:
      'https://www.recipetineats.com/wp-content/uploads/2022/09/Fries-with-rosemary-salt_1.jpg?resize=650,813',      items: [
        { id: '1', name: 'Sushi Platter', quantity: 1, price: 60 },
        { id: '2', name: 'Tempura', quantity: 2, price: 30 },
      ],
      subtotal: 120.00,
      serviceCharges: 0,
      paymentMethod: 'Amex',
      deliveryTime: '45 mins',
      rider: {
        name: 'Sam Wilson',
        avatar:
        'https://www.recipetineats.com/wp-content/uploads/2022/09/Fries-with-rosemary-salt_1.jpg?resize=650,813'      },
    },
    {
      id: 'tuvw123',
      status: 'Completed',
      totalAmount: 75.25,
      restaurantName: 'Pizza Palace',
      deliveryAddress: '101 Maple St',
      
      date: '23 Sep, 12:00 pm',
      image:
      'https://thetoastykitchen.com/wp-content/uploads/2020/10/ranch-dip-in-teal-serving-dish.jpg'  ,    items: [
        { id: '1', name: 'Pepperoni Pizza', quantity: 1, price: 25.25 },
        { id: '2', name: 'Veggie Pizza', quantity: 2, price: 50 },
      ],
      subtotal: 75.25,
      serviceCharges: 0,
      paymentMethod: 'Discover',
      deliveryTime: '60 mins',
      rider: {
        name: 'Alex Brown',
        avatar:
        'https://thetoastykitchen.com/wp-content/uploads/2020/10/ranch-dip-in-teal-serving-dish.jpg'      },
    },
  ];
  


 export const promoCodes = [
  {
    discount: '30% OFF',
    code: 'BUY3R',
    expiryDate: '09/23/2023',
  },
  {
    discount: '20% OFF',
    code: 'SAVE20',
    expiryDate: '10/01/2023',
  },
  {
    discount: '50% OFF',
    code: 'HALFPRICE',
    expiryDate: '12/31/2023',
  },
  {
    discount: '15% OFF',
    code: 'WELCOME15',
    expiryDate: '08/15/2023',
  },
  {
    discount: '25% OFF',
    code: 'SUMMER25',
    expiryDate: '07/30/2023',
  },
];
 
 
 export const notificationsArray = [
    {
      "id": "1",
      "title": "Order Confirmed",
      "message": "Your order #12345 has been confirmed and is being prepared.",
      "time": "10:30 am",
      "type": "order"
    },
    {
      "id": "2",
      "title": "Delivery Update",
      "message": "Your order #12345 is out for delivery. Track your order to see the progress.",
      "time": "11:00 pm",
      "type": "delivery"
    },
    {
      "id": "3",
      "title": "Order Delivered",
      "message": "Your order #12345 has been delivered. Enjoy your meal!",
      "time": "11:30 am",
      "type": "successfull"
    },
    {
      "id": "4",
      "title": "New Restaurant Added",
      "message": "Check out the new restaurant 'Tasty Bites' in your area. Special discounts available!",
      "time": "09:00 pm",
      "type": "promotion"
    },
    {
      "id": "6",
      "title": "Reminder",
      "message": "Don't forget to rate your last order from 'Spicy Delight'. Your feedback is valuable to us.",
      "time": "08:00 pm",
      "type": "reminder"
    },
    {
      "id": "5",
      "title": "Discount Offer",
      "message": "Get 20% off on your next order from 'Pizza Hub'. Use code PIZZA20 at checkout.",
      "time": "12:00 am",
      "type": "promotion"
    },
    {
      "id": "7",
      "title": "New Feature",
      "message": "We have introduced live order tracking. Now you can see real-time updates on your order status.",
      "time": "14:00 am",
      "type": "update"
    },
    {
      "id": "8",
      "title": "Referral Bonus",
      "message": "Refer a friend and earn 5 credit when they place their first order. Start referring now!",
      "time": "10:00 pm",
      "type": "promotion"
    },
    {
      "id": "9",
      "title": "Service Alert",
      "message": "Our services will be down for maintenance on May 20th from 2 AM to 4 AM. We apologize for any inconvenience.",
      "time": "16:00 am",
      "type": "alert"
    },
    {
      "id": "10",
      "title": "Special Event",
      "message": "Join our 'Food Fiesta' event this weekend and enjoy exclusive deals and discounts on your favorite meals.",
      "time": "18:00 pm",
      "type": "event"
    }
  ]
  

 export const restaurants = [
     {
      info : {
      id: '1',
      name: 'Addison',
      smallDescription: "A delightful place offering a variety of gourmet dishes from around the world.",
      reviews: '23.5k reviews',
      rating: '4.3',
      timing : '08:00 am - 12:00 pm',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/dsc01939-1638289406.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
      location: "123 Foodie Lane, Flavor Town",
      categories: [
        { id: 1, name: "Appetizers" },
        { id: 2, name: "Main Courses" },
        { id: 3, name: "Desserts" },
        { id: 4, name: "Beverages" }
      ]
    },
      
      food: [
        {
          id: '1',
          title: 'Green Salad',
          restaurant: 'Healthy Bites',
          description: 'A refreshing and healthy green salad made with fresh lettuce, cucumbers, tomatoes, and a light vinaigrette dressing. Perfect as a starter or a light meal.',
          price: 12.50,
          tags: ['Burger', 'Pizza', 'Drinks'],
          image: 'https://www.pikpng.com/pngl/b/50-501422_salad-png-high-quality-image-classification-of-salads.png',
          categoryIds: [1],
          quantity: 1

        },
        {
          id: '2',
          title: 'Chicken Karahi',
          restaurant: 'Spice Hub',
          description: 'A traditional Pakistani dish made with succulent chicken cooked in a rich and spicy tomato-based gravy. Best enjoyed with naan or rice.',
          price: 15.00,
          tags: ['Chicken', 'Spicy', 'Main Course'],
          image: 'https://www.relishthebite.com/wp-content/uploads/2021/02/Chicken_Karahi-4.jpg',
          categoryIds: [2],
          quantity: 1
        },
        {
          id: '3',
          title: 'Margherita Pizza',
          restaurant: 'Italiano Delight',
          description: 'A classic Italian pizza topped with fresh mozzarella, ripe tomatoes, and fragrant basil leaves. Simple yet delicious, perfect for any pizza lover.',
          price: 10.00,
          tags: ['Pizza', 'Cheese', 'Italian'],
          image: 'https://img.kidspot.com.au/eMrx01UA/w643-h428-cfill-q90/kk/2015/03/margherita-pizza-recipe-605903-2.jpg',
          categoryIds: [3],
          quantity: 1
        },
        {
          id: '4',
          title: 'Grilled Sandwich',
          restaurant: 'Snack Shack',
          description: 'A delicious grilled sandwich filled with melted cheese and your choice of ham or turkey. Crispy on the outside and gooey on the inside.',
          price: 8.00,
          tags: ['Sandwich', 'Grilled', 'Snacks'],
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese-sandwich-580x712.jpg',
          categoryIds: [4],
          quantity: 1
        },
        {
          id: '5',
          title: 'Fruit Smoothie',
          restaurant: 'Smoothie Corner',
          description: 'A refreshing and healthy smoothie made with a blend of fresh fruits like strawberries, bananas, and blueberries. Perfect for a quick and nutritious snack.',
          price: 5.50,
          tags: ['Drinks', 'Fruit', 'Healthy'],
          image: 'https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-vertical-1542310073.png?crop=1.00xw:0.667xh;0,0.0897xh&resize=980:*',
          categoryIds: [3],
          quantity: 1
        },
        {
          id: '6',
          title: 'Caesar Salad',
          restaurant: 'Healthy Bites',
          description: 'A classic Caesar salad made with crisp romaine lettuce, creamy Caesar dressing, croutons, and grated Parmesan cheese. A satisfying and healthy meal.',
          price: 11.00,
          tags: ['Salad', 'Healthy'],
          image: 'https://themacphersondiaries.co.nz/wp-content/uploads/2022/11/IMG_2572-1024x683.jpg',
          categoryIds: [2],
          quantity: 1
        },
        {
          id: '7',
          title: 'Taco Fiesta',
          restaurant: 'Mexican Wave',
          description: 'A fiesta of flavors packed into a taco shell. Filled with seasoned meat, fresh veggies, and topped with a spicy salsa. Perfect for a quick and tasty meal.',
          price: 9.00,
          tags: ['Taco', 'Mexican', 'Spicy'],
          image: 'https://www.seriouseats.com/thmb/RKgUYI3hHyM2HeWMF0hyTwQvZXA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150717-Jamaican-Beef-Tacos-Plated-Morgan-Eisenberg-3f389f42235d4c0586034e259aa75393.jpg',
          categoryIds: [1],
          quantity: 1
        },
        {
          id: '8',
          title: 'Sushi Platter',
          restaurant: 'Sushi World',
          description: 'A delectable assortment of sushi rolls including tuna, salmon, and veggie options. Served with soy sauce, wasabi, and pickled ginger. Perfect for sushi lovers.',
          price: 20.00,
          tags: ['Sushi', 'Japanese', 'Seafood'],
          image: 'https://sushidelivery.my/cdn/shop/products/MSPS28_1_600x.jpg?v=1624600821',
          categoryIds: [2],
          quantity: 1
        },
        {
          id: '9',
          title: 'Spaghetti Carbonara',
          restaurant: 'Italiano Delight',
          description: 'A rich and creamy pasta dish made with eggs, cheese, pancetta, and pepper. A comforting Italian classic that is sure to satisfy your pasta cravings.',
          price: 14.50,
          tags: ['Pasta', 'Italian', 'Cheese'],
          image: 'https://www.modernhoney.com/wp-content/uploads/2023/02/Spaghetti-Carbonara-3-crop-720x763.jpg',
          categoryIds: [3],
          quantity: 1
        },
        {
          id: '10',
          title: 'Vegan Buddha Bowl',
          restaurant: 'Vegan Vibes',
          description: 'A nutritious and colorful bowl filled with a variety of veggies, grains, and a delicious tahini dressing. Perfect for a healthy and satisfying meal.',
          price: 13.00,
          tags: ['Vegan', 'Healthy', 'Bowl'],
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25462-580x791.jpg',
          categoryIds: [4],
          quantity: 1
        },
        {
          id: '11',
          title: 'XYZ',
          restaurant: 'Grill Master',
          description: 'Juicy and tender BBQ ribs cooked to perfection and smothered in a rich and flavorful BBQ sauce. Perfect for meat lovers looking for a hearty meal.',
          price: 18.00,
          tags: ['BBQ', 'Meat', 'Main Course'],
          image: 'https://www.barossafinefoods.com.au/glide-cache/containers/main/2020_bff_porkribs_bbq_website-2.jpg/03d880f2ca84b83fdeb147548e7d9b12.jpg',
          categoryIds: [4],
          // quantity: 1
        },
      ],
      deals: [
        {
          id: '1',
          title: 'Green Salad',
          restaurant: 'Healthy Bites',
          description: 'A refreshing and healthy green salad made with fresh lettuce, cucumbers, tomatoes, and a light vinaigrette dressing. Perfect as a starter or a light meal.',
          price: 12.50,
          tags: ['Burger', 'Pizza', 'Drinks'],
          image: 'https://www.pikpng.com/pngl/b/50-501422_salad-png-high-quality-image-classification-of-salads.png',
        },
        {
          id: '2',
          title: 'Chicken Karahi',
          restaurant: 'Spice Hub',
          description: 'A traditional Pakistani dish made with succulent chicken cooked in a rich and spicy tomato-based gravy. Best enjoyed with naan or rice.',
          price: 15.00,
          tags: ['Chicken', 'Spicy', 'Main Course'],
          image: 'https://www.relishthebite.com/wp-content/uploads/2021/02/Chicken_Karahi-4.jpg',
        },
        {
          id: '3',
          title: 'Margherita Pizza',
          restaurant: 'Italiano Delight',
          description: 'A classic Italian pizza topped with fresh mozzarella, ripe tomatoes, and fragrant basil leaves. Simple yet delicious, perfect for any pizza lover.',
          price: 10.00,
          tags: ['Pizza', 'Cheese', 'Italian'],
          image: 'https://img.kidspot.com.au/eMrx01UA/w643-h428-cfill-q90/kk/2015/03/margherita-pizza-recipe-605903-2.jpg',
        },
        {
          id: '4',
          title: 'Grilled Sandwich',
          restaurant: 'Snack Shack',
          description: 'A delicious grilled sandwich filled with melted cheese and your choice of ham or turkey. Crispy on the outside and gooey on the inside.',
          price: 8.00,
          tags: ['Sandwich', 'Grilled', 'Snacks'],
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese-sandwich-580x712.jpg',
        },
        {
          id: '5',
          title: 'Fruit Smoothie',
          restaurant: 'Smoothie Corner',
          description: 'A refreshing and healthy smoothie made with a blend of fresh fruits like strawberries, bananas, and blueberries. Perfect for a quick and nutritious snack.',
          price: 5.50,
          tags: ['Drinks', 'Fruit', 'Healthy'],
          image: 'https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-vertical-1542310073.png?crop=1.00xw:0.667xh;0,0.0897xh&resize=980:*',
        },
        {
          id: '6',
          title: 'Caesar Salad',
          restaurant: 'Healthy Bites',
          description: 'A classic Caesar salad made with crisp romaine lettuce, creamy Caesar dressing, croutons, and grated Parmesan cheese. A satisfying and healthy meal.',
          price: 11.00,
          tags: ['Salad', 'Healthy'],
          image: 'https://themacphersondiaries.co.nz/wp-content/uploads/2022/11/IMG_2572-1024x683.jpg',
        },
        {
          id: '7',
          title: 'Taco Fiesta',
          restaurant: 'Mexican Wave',
          description: 'A fiesta of flavors packed into a taco shell. Filled with seasoned meat, fresh veggies, and topped with a spicy salsa. Perfect for a quick and tasty meal.',
          price: 9.00,
          tags: ['Taco', 'Mexican', 'Spicy'],
          image: 'https://www.seriouseats.com/thmb/RKgUYI3hHyM2HeWMF0hyTwQvZXA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150717-Jamaican-Beef-Tacos-Plated-Morgan-Eisenberg-3f389f42235d4c0586034e259aa75393.jpg',
        },
        {
          id: '8',
          title: 'Sushi Platter',
          restaurant: 'Sushi World',
          description: 'A delectable assortment of sushi rolls including tuna, salmon, and veggie options. Served with soy sauce, wasabi, and pickled ginger. Perfect for sushi lovers.',
          price: 20.00,
          tags: ['Sushi', 'Japanese', 'Seafood'],
          image: 'https://sushidelivery.my/cdn/shop/products/MSPS28_1_600x.jpg?v=1624600821',
        },
        {
          id: '9',
          title: 'Spaghetti Carbonara',
          restaurant: 'Italiano Delight',
          description: 'A rich and creamy pasta dish made with eggs, cheese, pancetta, and pepper. A comforting Italian classic that is sure to satisfy your pasta cravings.',
          price: 14.50,
          tags: ['Pasta', 'Italian', 'Cheese'],
          image: 'https://www.modernhoney.com/wp-content/uploads/2023/02/Spaghetti-Carbonara-3-crop-720x763.jpg',
        },
        {
          id: '10',
          title: 'Vegan Buddha Bowl',
          restaurant: 'Vegan Vibes',
          description: 'A nutritious and colorful bowl filled with a variety of veggies, grains, and a delicious tahini dressing. Perfect for a healthy and satisfying meal.',
          price: 13.00,
          tags: ['Vegan', 'Healthy', 'Bowl'],
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25462-580x791.jpg',
        },
        {
          id: '11',
          title: 'ABC',
          restaurant: 'Grill Master',
          description: 'Juicy and tender BBQ ribs cooked to perfection and smothered in a rich and flavorful BBQ sauce. Perfect for meat lovers looking for a hearty meal.',
          price: 18.00,

          tags: ['BBQ', 'Meat', 'Main Course'],
          image: 'https://www.barossafinefoods.com.au/glide-cache/containers/main/2020_bff_porkribs_bbq_website-2.jpg/03d880f2ca84b83fdeb147548e7d9b12.jpg',
        },
      ]
    },
     {
      info : {
        id: '2',
        name: 'Vespertine',
        smallDescription: "A delightful place offering a variety of gourmet dishes from around the world.",
        reviews: '23.5k reviews',
        timing : '08:00 am - 12:00 pm',
        rating: '4.9',
        image:
          'https://hips.hearstapps.com/hmg-prod/images/birdsong-dining-room-1638458219.jpg?resize=980:*',
      location: "123 Foodie Lane, Flavor Town",
      categories: [
        { id: 1, name: "Appetizers" },
        { id: 2, name: "Main Courses" },
        { id: 3, name: "Desserts" },
        { id: 4, name: "Beverages" },
        { id: 4, name: "Vegan" }
      ]},



      food: [
        {
          id: '1',
          title: 'Green Salad',
          restaurant: 'Healthy Bites',
          description: 'A refreshing and healthy green salad made with fresh lettuce, cucumbers, tomatoes, and a light vinaigrette dressing. Perfect as a starter or a light meal.',
          price: 12.50,
          tags: ['Burger', 'Pizza', 'Drinks'],
          image: 'https://www.pikpng.com/pngl/b/50-501422_salad-png-high-quality-image-classification-of-salads.png',
          categoryIds: [1],
          quantity: 1
        },
        {
          id: '2',
          title: 'Chicken Karahi',
          restaurant: 'Spice Hub',
          description: 'A traditional Pakistani dish made with succulent chicken cooked in a rich and spicy tomato-based gravy. Best enjoyed with naan or rice.',
          price: 15.00,
          tags: ['Chicken', 'Spicy', 'Main Course'],
          image: 'https://www.relishthebite.com/wp-content/uploads/2021/02/Chicken_Karahi-4.jpg',
          categoryIds: [2],
          quantity: 1
        },
        {
          id: '3',
          title: 'Margherita Pizza',
          restaurant: 'Italiano Delight',
          description: 'A classic Italian pizza topped with fresh mozzarella, ripe tomatoes, and fragrant basil leaves. Simple yet delicious, perfect for any pizza lover.',
          price: 10.00,
          tags: ['Pizza', 'Cheese', 'Italian'],
          image: 'https://img.kidspot.com.au/eMrx01UA/w643-h428-cfill-q90/kk/2015/03/margherita-pizza-recipe-605903-2.jpg',
          categoryIds: [3],
          quantity: 1
        },
        {
          id: '4',
          title: 'Grilled Sandwich',
          restaurant: 'Snack Shack',
          description: 'A delicious grilled sandwich filled with melted cheese and your choice of ham or turkey. Crispy on the outside and gooey on the inside.',
          price: 8.00,
          tags: ['Sandwich', 'Grilled', 'Snacks'],
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese-sandwich-580x712.jpg',
          categoryIds: [4],
          quantity: 1
        },
        {
          id: '5',
          title: 'Fruit Smoothie',
          restaurant: 'Smoothie Corner',
          description: 'A refreshing and healthy smoothie made with a blend of fresh fruits like strawberries, bananas, and blueberries. Perfect for a quick and nutritious snack.',
          price: 5.50,
          tags: ['Drinks', 'Fruit', 'Healthy'],
          image: 'https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-vertical-1542310073.png?crop=1.00xw:0.667xh;0,0.0897xh&resize=980:*',
          categoryIds: [5],
          quantity: 1
        },
        {
          id: '6',
          title: 'Caesar Salad',
          restaurant: 'Healthy Bites',
          description: 'A classic Caesar salad made with crisp romaine lettuce, creamy Caesar dressing, croutons, and grated Parmesan cheese. A satisfying and healthy meal.',
          price: 11.00,
          tags: ['Salad', 'Healthy'],
          image: 'https://themacphersondiaries.co.nz/wp-content/uploads/2022/11/IMG_2572-1024x683.jpg',
          categoryIds: [1],
          quantity: 1
        },
        {
          id: '7',
          title: 'Taco Fiesta',
          restaurant: 'Mexican Wave',
          description: 'A fiesta of flavors packed into a taco shell. Filled with seasoned meat, fresh veggies, and topped with a spicy salsa. Perfect for a quick and tasty meal.',
          price: 9.00,
          tags: ['Taco', 'Mexican', 'Spicy'],
          image: 'https://www.seriouseats.com/thmb/RKgUYI3hHyM2HeWMF0hyTwQvZXA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150717-Jamaican-Beef-Tacos-Plated-Morgan-Eisenberg-3f389f42235d4c0586034e259aa75393.jpg',
          categoryIds: [2],
          quantity: 1
        },
        {
          id: '8',
          title: 'Sushi Platter',
          restaurant: 'Sushi World',
          description: 'A delectable assortment of sushi rolls including tuna, salmon, and veggie options. Served with soy sauce, wasabi, and pickled ginger. Perfect for sushi lovers.',
          price: 20.00,
          tags: ['Sushi', 'Japanese', 'Seafood'],
          image: 'https://sushidelivery.my/cdn/shop/products/MSPS28_1_600x.jpg?v=1624600821',
          categoryIds: [3],
          quantity: 1
        },
        {
          id: '9',
          title: 'Spaghetti Carbonara',
          restaurant: 'Italiano Delight',
          description: 'A rich and creamy pasta dish made with eggs, cheese, pancetta, and pepper. A comforting Italian classic that is sure to satisfy your pasta cravings.',
          price: 14.50,
          tags: ['Pasta', 'Italian', 'Cheese'],
          image: 'https://www.modernhoney.com/wp-content/uploads/2023/02/Spaghetti-Carbonara-3-crop-720x763.jpg',
          categoryIds: [4],
          quantity: 1
        },
        {
          id: '10',
          title: 'Vegan Buddha Bowl',
          restaurant: 'Vegan Vibes',
          description: 'A nutritious and colorful bowl filled with a variety of veggies, grains, and a delicious tahini dressing. Perfect for a healthy and satisfying meal.',
          price: 13.00,
          tags: ['Vegan', 'Healthy', 'Bowl'],
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25462-580x791.jpg',
          categoryIds: [5],
          quantity: 1
        },
        {
          id: '11',
          title: 'ABC',
          restaurant: 'Grill Master',
          description: 'Juicy and tender BBQ ribs cooked to perfection and smothered in a rich and flavorful BBQ sauce. Perfect for meat lovers looking for a hearty meal.',
          price: 18.00,
          tags: ['BBQ', 'Meat', 'Main Course'],
          image: 'https://www.barossafinefoods.com.au/glide-cache/containers/main/2020_bff_porkribs_bbq_website-2.jpg/03d880f2ca84b83fdeb147548e7d9b12.jpg',
          categoryIds: [1],
          // quantity: 1
        },
      ],
      deals: [
        {
          id: '1',
          title: 'Green Salad',
          restaurant: 'Healthy Bites',
          description: 'A refreshing and healthy green salad made with fresh lettuce, cucumbers, tomatoes, and a light vinaigrette dressing. Perfect as a starter or a light meal.',
          price: 12.50,
          tags: ['Burger', 'Pizza', 'Drinks'],
          image: 'https://www.pikpng.com/pngl/b/50-501422_salad-png-high-quality-image-classification-of-salads.png',
        },
        {
          id: '2',
          title: 'Chicken Karahi',
          restaurant: 'Spice Hub',
          description: 'A traditional Pakistani dish made with succulent chicken cooked in a rich and spicy tomato-based gravy. Best enjoyed with naan or rice.',
          price: 15.00,
          tags: ['Chicken', 'Spicy', 'Main Course'],
          image: 'https://www.relishthebite.com/wp-content/uploads/2021/02/Chicken_Karahi-4.jpg',
        },
        {
          id: '3',
          title: 'XYZ',
          restaurant: 'Italiano Delight',
          description: 'A classic Italian pizza topped with fresh mozzarella, ripe tomatoes, and fragrant basil leaves. Simple yet delicious, perfect for any pizza lover.',
          price: 10.00,
          tags: ['Pizza', 'Cheese', 'Italian'],
          image: 'https://img.kidspot.com.au/eMrx01UA/w643-h428-cfill-q90/kk/2015/03/margherita-pizza-recipe-605903-2.jpg',
        },
        {
          id: '4',
          title: 'Grilled Sandwich',
          restaurant: 'Snack Shack',
          description: 'A delicious grilled sandwich filled with melted cheese and your choice of ham or turkey. Crispy on the outside and gooey on the inside.',
          price: 8.00,
          tags: ['Sandwich', 'Grilled', 'Snacks'],
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese-sandwich-580x712.jpg',
        },
        {
          id: '5',
          title: 'Fruit Smoothie',
          restaurant: 'Smoothie Corner',
          description: 'A refreshing and healthy smoothie made with a blend of fresh fruits like strawberries, bananas, and blueberries. Perfect for a quick and nutritious snack.',
          price: 5.50,
          tags: ['Drinks', 'Fruit', 'Healthy'],
          image: 'https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-vertical-1542310073.png?crop=1.00xw:0.667xh;0,0.0897xh&resize=980:*',
        },
        {
          id: '6',
          title: 'Caesar Salad',
          restaurant: 'Healthy Bites',
          description: 'A classic Caesar salad made with crisp romaine lettuce, creamy Caesar dressing, croutons, and grated Parmesan cheese. A satisfying and healthy meal.',
          price: 11.00,
          tags: ['Salad', 'Healthy'],
          image: 'https://themacphersondiaries.co.nz/wp-content/uploads/2022/11/IMG_2572-1024x683.jpg',
        },
        {
          id: '7',
          title: 'Taco Fiesta',
          restaurant: 'Mexican Wave',
          description: 'A fiesta of flavors packed into a taco shell. Filled with seasoned meat, fresh veggies, and topped with a spicy salsa. Perfect for a quick and tasty meal.',
          price: 9.00,
          tags: ['Taco', 'Mexican', 'Spicy'],
          image: 'https://www.seriouseats.com/thmb/RKgUYI3hHyM2HeWMF0hyTwQvZXA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150717-Jamaican-Beef-Tacos-Plated-Morgan-Eisenberg-3f389f42235d4c0586034e259aa75393.jpg',
        },
        {
          id: '8',
          title: 'Sushi Platter',
          restaurant: 'Sushi World',
          description: 'A delectable assortment of sushi rolls including tuna, salmon, and veggie options. Served with soy sauce, wasabi, and pickled ginger. Perfect for sushi lovers.',
          price: 20.00,
          tags: ['Sushi', 'Japanese', 'Seafood'],
          image: 'https://sushidelivery.my/cdn/shop/products/MSPS28_1_600x.jpg?v=1624600821',
        },
        {
          id: '9',
          title: 'Spaghetti Carbonara',
          restaurant: 'Italiano Delight',
          description: 'A rich and creamy pasta dish made with eggs, cheese, pancetta, and pepper. A comforting Italian classic that is sure to satisfy your pasta cravings.',
          price: 14.50,
          tags: ['Pasta', 'Italian', 'Cheese'],
          image: 'https://www.modernhoney.com/wp-content/uploads/2023/02/Spaghetti-Carbonara-3-crop-720x763.jpg',
        },
        {
          id: '10',
          title: 'Vegan Buddha Bowl',
          restaurant: 'Vegan Vibes',
          description: 'A nutritious and colorful bowl filled with a variety of veggies, grains, and a delicious tahini dressing. Perfect for a healthy and satisfying meal.',
          price: 13.00,
          tags: ['Vegan', 'Healthy', 'Bowl'],
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25462-580x791.jpg',
        },
        {
          id: '11',
          title: 'BBQ Ribs',
          restaurant: 'Grill Master',
          description: 'Juicy and tender BBQ ribs cooked to perfection and smothered in a rich and flavorful BBQ sauce. Perfect for meat lovers looking for a hearty meal.',
          price: 18.00,
          tags: ['BBQ', 'Meat', 'Main Course'],
          image: 'https://www.barossafinefoods.com.au/glide-cache/containers/main/2020_bff_porkribs_bbq_website-2.jpg/03d880f2ca84b83fdeb147548e7d9b12.jpg',
        },
      ]
    },
     
  ]