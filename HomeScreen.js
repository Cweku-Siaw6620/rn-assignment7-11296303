import { useState,useEffect, } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, } from 'react-native';
import ProductCard from './components/ProductCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CART_ITEMS = 'CART_ITEMS';

export const storeCartItems = async (items) => {
  try {
    await AsyncStorage.setItem(CART_ITEMS, JSON.stringify(items));
  } catch (e) {
    console.error(e);
  }
};

export const getCartItems = async () => {
  try {
    const items = await AsyncStorage.getItem(CART_ITEMS);
    return items ? JSON.parse(items) : [];
  } catch (e) {
    console.error(e);
  }
};


export default function HomeScreen({navigation}) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
     
    const loadCartItems = async () => {
      const items = await getCartItems();
      if (items) {
        setCartItems(items);
      }
    };

    fetchProducts();
    loadCartItems();
  },[])

  const addToCart = async (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    await storeCartItems(updatedCart);
  };
  

  

 return (
    <SafeAreaView style={{ flex: 1 }}>
    
    <View style={styles.header}>
    <TouchableOpacity >
    <Image source={require('./assets/Menu.png')} style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
    <Image source={require('./assets/Logo.png')} style={{ width: 220, height: 90 ,alignSelf: 'center' }} />
    
    <View style={{flexDirection:"row"}}>
       <TouchableOpacity>
     <Image source={require('./assets/Search.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
     </TouchableOpacity>
     <TouchableOpacity>
     <Image source={require('./assets/shopping bag.png')} style={{ width: 24, height: 24 }} />
       </TouchableOpacity>
     </View>
    </View>
    
    <View style={styles.subheader}>
                <Text style={{ fontSize: 24, padding: 10 }}>OUR STORY</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image source={require('./assets/Listview.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('./assets/Filter.png')} style={{ width: 40, height: 24 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
            <ProductCard 
            products={products}
        addToCart={addToCart}
        onProductPress={(product) => navigation.navigate('ProductDetail', { product })}
      />
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    columnGap:10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 40
  },
  subheader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: 10 
  }
});
