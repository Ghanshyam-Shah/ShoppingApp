// Auth Stack — Login flow screens
export type AuthStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  PhoneOTP: { phoneNumber: string };
};

// Home Stack
export type HomeStackParamList = {
  HomeMain: undefined;
};

// Product Stack
export type ProductStackParamList = {
  ProductList: { categoryId?: string } | undefined;
  ProductDetail: { productId: string };
  ProductManagement: undefined;
};

// Cart Stack
export type CartStackParamList = {
  CartMain: undefined;
  Checkout: undefined;
  Address: undefined;
  Payment: { orderId: string };
};

// Orders Stack
export type OrderStackParamList = {
  OrderHistory: undefined;
  OrderDetail: { orderId: string };
};

// Profile Stack
export type ProfileStackParamList = {
  ProfileMain: undefined;
  EditProfile: undefined;
};

// Bottom Tab
export type BottomTabParamList = {
  HomeTab: undefined;
  ProductsTab: undefined;
  CartTab: undefined;
  OrdersTab: undefined;
  ProfileTab: undefined;
};

// Drawer
export type DrawerParamList = {
  MainTabs: undefined;
  Notifications: undefined;
  Settings: undefined;
};

// Root Navigator
export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};
