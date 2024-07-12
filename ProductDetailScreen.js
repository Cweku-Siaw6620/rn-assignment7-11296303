import { StyleSheet, Text, Image, ScrollView} from 'react-native';

export default function ProductDetailScreen({route}) {
const {product} = route.params;

  return (
   <ScrollView contentContainerStyle={styles.container}>
        <Image source={{uri: product.image}} style={styles.image}/>
        <Text style={styles.names}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
        
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding: 20,
   alignItems: 'center',
  },
  image:{
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  names:{
    marginTop: 10,
    fontSize: 24,
    fontWeight:"bold",
  },
  price:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff5252',
    textAlign: 'center',
    marginBottom: 20,
  }
});
