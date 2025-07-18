import React, { useState, useEffect } from 'react';
import { 
  Home, Search, ShoppingBag, User, MessageCircle, Clock, MapPin, 
  Star, Plus, Minus, ChevronRight, Heart, Tag, Bell, CreditCard,
  Check, X, Send, Bot, Loader, Filter, Grid, List, Sparkles
} from 'lucide-react';

const CustomerMobileApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "Hi! I'm John's Pizza AI assistant. How can I help you today?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  // Sample menu data
  const menuItems = [
    { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 12.99, image: '🍕', rating: 4.8, reviews: 145, time: '20-30 min', popular: true },
    { id: 2, name: 'Pepperoni Pizza', category: 'Pizza', price: 14.99, image: '🍕', rating: 4.9, reviews: 234, time: '20-30 min', popular: true },
    { id: 3, name: 'Caesar Salad', category: 'Salads', price: 9.99, image: '🥗', rating: 4.6, reviews: 89, time: '10-15 min' },
    { id: 4, name: 'Pasta Carbonara', category: 'Pasta', price: 13.99, image: '🍝', rating: 4.7, reviews: 156, time: '25-35 min' },
    { id: 5, name: 'Iced Coffee', category: 'Beverages', price: 4.99, image: '☕', rating: 4.5, reviews: 78, time: '5 min' },
    { id: 6, name: 'Chocolate Cake', category: 'Desserts', price: 6.99, image: '🍰', rating: 4.9, reviews: 203, time: '5 min', popular: true },
    { id: 7, name: 'Garlic Bread', category: 'Appetizers', price: 5.99, image: '🥖', rating: 4.7, reviews: 167, time: '10-15 min' },
    { id: 8, name: 'Tiramisu', category: 'Desserts', price: 7.99, image: '🍮', rating: 4.8, reviews: 95, time: '5 min' }
  ];

  const categories = ['all', 'Pizza', 'Pasta', 'Salads', 'Appetizers', 'Desserts', 'Beverages'];

  const businessInfo = {
    name: "John's Pizza",
    rating: 4.7,
    reviews: 1245,
    address: "123 Main Street, Anytown",
    hours: "9:00 AM - 10:00 PM",
    delivery: "Free delivery over $25"
  };

  const promos = [
    { id: 1, title: "Happy Hour", desc: "20% off all pizzas", time: "3-6 PM", color: "bg-orange-500" },
    { id: 2, title: "Family Deal", desc: "2 Large Pizzas + Dessert", price: "$35.99", color: "bg-blue-500" },
    { id: 3, title: "New Customer", desc: "15% off first order", code: "WELCOME15", color: "bg-green-500" }
  ];

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== itemId));
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleFavorite = (itemId) => {
    setFavorites(favorites.includes(itemId)
      ? favorites.filter(id => id !== itemId)
      : [...favorites, itemId]
    );
  };

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = { id: messages.length + 1, type: 'user', text: inputMessage };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate AI response
      setTimeout(() => {
        const responses = [
          "Our most popular pizzas are the Margherita and Pepperoni. Would you like me to add one to your cart?",
          "We're open from 9 AM to 10 PM every day. You can order for pickup or delivery!",
          "I can help you find the perfect meal. Are you looking for something specific?",
          "Our current special is 20% off all pizzas during Happy Hour (3-6 PM)!"
        ];
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          text: responses[Math.floor(Math.random() * responses.length)]
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const placeOrder = () => {
    setShowCart(false);
    setOrderStatus('preparing');
    setCartItems([]);
    
    // Simulate order status updates
    setTimeout(() => setOrderStatus('cooking'), 3000);
    setTimeout(() => setOrderStatus('ready'), 6000);
    setTimeout(() => setOrderStatus('delivering'), 9000);
  };

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 min-h-screen relative">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{businessInfo.name}</h1>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <MapPin className="w-3 h-3 mr-1" />
                <span className="mr-3">{businessInfo.address}</span>
                <Clock className="w-3 h-3 mr-1" />
                <span>{businessInfo.hours}</span>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        {activeTab === 'home' && (
          <div className="px-4 pb-3">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search menu..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {activeTab === 'home' && (
          <div>
            {/* Promo Cards */}
            <div className="px-4 py-4">
              <div className="overflow-x-auto -mx-4 px-4">
                <div className="flex space-x-3">
                  {promos.map(promo => (
                    <div key={promo.id} className={`${promo.color} rounded-lg p-4 text-white min-w-[280px]`}>
                      <h3 className="font-bold text-lg">{promo.title}</h3>
                      <p className="text-sm opacity-90 mt-1">{promo.desc}</p>
                      {promo.time && <p className="text-sm mt-2 font-medium">{promo.time}</p>}
                      {promo.price && <p className="text-xl font-bold mt-2">{promo.price}</p>}
                      {promo.code && (
                        <div className="mt-3 bg-white/20 rounded px-3 py-1 inline-block">
                          <code className="text-sm font-mono">{promo.code}</code>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="px-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  {viewMode === 'grid' ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
                </button>
              </div>
              <div className="flex space-x-2 overflow-x-auto -mx-4 px-4">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 border'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <div className={`px-4 ${viewMode === 'grid' ? 'grid grid-cols-2 gap-4' : 'space-y-3'}`}>
              {filteredItems.map(item => {
                const cartItem = cartItems.find(ci => ci.id === item.id);
                const quantity = cartItem ? cartItem.quantity : 0;
                
                return (
                  <div key={item.id} className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}>
                    <div className={`${viewMode === 'list' ? 'flex items-center p-4 flex-1' : 'p-4'}`}>
                      <div className={`${viewMode === 'list' ? 'flex items-center flex-1' : ''}`}>
                        <div className={`text-4xl mb-2 ${viewMode === 'list' ? 'mr-4 mb-0' : 'text-center'}`}>
                          {item.image}
                        </div>
                        <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                          <div className="flex items-start justify-between">
                            <h3 className="font-medium text-gray-900 flex-1">{item.name}</h3>
                            {item.popular && (
                              <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full flex items-center">
                                <Sparkles className="w-3 h-3 mr-1" />
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="flex items-center mt-1 text-sm text-gray-600">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="ml-1">{item.rating}</span>
                            <span className="mx-1">·</span>
                            <span>{item.reviews} reviews</span>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="font-bold text-lg">${item.price}</span>
                            <button
                              onClick={() => toggleFavorite(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <Heart className={`w-4 h-4 ${favorites.includes(item.id) ? 'fill-current text-red-500' : ''}`} />
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {item.time}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`flex items-center justify-center mt-3 ${viewMode === 'list' ? 'ml-4 mt-0' : ''}`}>
                        {quantity > 0 ? (
                          <div className="flex items-center bg-blue-600 rounded-full">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 text-white hover:bg-blue-700 rounded-l-full"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 text-white font-medium">{quantity}</span>
                            <button
                              onClick={() => addToCart(item)}
                              className="p-2 text-white hover:bg-blue-700 rounded-r-full"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(item)}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Add
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'search' && (
          <div className="px-4 py-4">
            <h2 className="text-xl font-semibold mb-4">Search & Discover</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium mb-2">Recent Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {['Pizza', 'Salad', 'Dessert', 'Coffee'].map(term => (
                    <button key={term} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {term}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium mb-2">Trending Now</h3>
                <div className="space-y-2">
                  {menuItems.filter(item => item.popular).map(item => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{item.image}</span>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">${item.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="p-2 bg-blue-600 text-white rounded-full"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="px-4 py-4">
            <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
            
            {orderStatus && (
              <div className="bg-white rounded-lg p-4 mb-4">
                <h3 className="font-medium mb-3">Current Order</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">Order #12345</span>
                  <span className="text-sm font-medium">ETA: 25 min</span>
                </div>
                
                <div className="relative">
                  <div className="absolute top-3 left-0 right-0 h-1 bg-gray-200 rounded"></div>
                  <div className={`absolute top-3 left-0 h-1 bg-green-500 rounded transition-all duration-500 ${
                    orderStatus === 'preparing' ? 'w-1/4' :
                    orderStatus === 'cooking' ? 'w-1/2' :
                    orderStatus === 'ready' ? 'w-3/4' :
                    'w-full'
                  }`}></div>
                  
                  <div className="relative flex justify-between">
                    {[
                      { status: 'preparing', label: 'Preparing' },
                      { status: 'cooking', label: 'Cooking' },
                      { status: 'ready', label: 'Ready' },
                      { status: 'delivering', label: 'On the way' }
                    ].map((step, index) => (
                      <div key={step.status} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          ['preparing', 'cooking', 'ready', 'delivering'].indexOf(orderStatus) >= index
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-xs mt-2">{step.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">
                  Track Order
                </button>
              </div>
            )}
            
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Past Orders</h3>
              {[
                { id: '#12344', date: 'Yesterday', items: 3, total: 45.97, status: 'Delivered' },
                { id: '#12343', date: 'March 15', items: 2, total: 28.98, status: 'Delivered' },
                { id: '#12342', date: 'March 10', items: 5, total: 67.95, status: 'Delivered' }
              ].map(order => (
                <div key={order.id} className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date} · {order.items} items</p>
                      <p className="text-sm font-medium mt-1">${order.total}</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {order.status}
                    </span>
                  </div>
                  <button className="mt-3 text-blue-600 text-sm font-medium">
                    Order Again
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="px-4 py-4">
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">John Doe</h3>
                  <p className="text-sm text-gray-600">john.doe@email.com</p>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4">
              <h3 className="font-medium mb-3">Loyalty Rewa
