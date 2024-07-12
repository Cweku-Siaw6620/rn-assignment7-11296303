{/*import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function ProductCard({image, name, description, price, onAddTOCart}) {

  return (
    <View style={styles.container}>
        <View>
            <Image source={{uri: image}}/>
            <TouchableOpacity onPress={onAddTOCart}>
            <Image source={require("../assets/add_circle.png")}/>
            </TouchableOpacity>
        </View>

        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text>${price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    width:100,
    padding: 10,
    marginBottom: 20,
  },
});
*/}

import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default ProductCard = ({ products, addToCart, onProductPress }) => {

  
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => item.id.toString() + index.toString()}
      style ={{marginBottom:210}}
      renderItem={({ item }) => (
        
          <View style={styles.productContainer}>
            <TouchableOpacity onPress={() => onProductPress(item)}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            </TouchableOpacity>
            <Text style={styles.productName}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.productPrice}>
              {item.price !== undefined ? `$${parseFloat(item.price).toFixed(2)}` : 'N/A'}
            </Text>
            <TouchableOpacity onPress={() => addToCart(item)}>
              <Image source={require("../assets/add_circle.png")} style={{height:40, width:40}}/>
            </TouchableOpacity>
          </View>
        
      )}
      
    />

  );
};

const styles = StyleSheet.create({
  productContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


