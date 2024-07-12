import { StyleSheet,View, Text, Image, ScrollView} from 'react-native';

export default function ProductDetailScreen({route}) {
const {product} = route.params;

  return (
    <>
   <ScrollView style={styles.container}>
        <Image source={{uri: product.image}} style={styles.image}/>
        <Text style={styles.names}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <Text style={styles.material}>MATERIALS</Text>
                <Text style={styles.kind}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>

                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('./assets/Do Not Bleach.png')} />
                        <Text style={{ marginLeft: 20, fontSize: 20 }}>Do not use bleach</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('./assets/Do Not Tumble Dry.png')} />
                        <Text style={{ marginLeft: 20, fontSize: 20 }}>Do not tumble dry</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('./assets/Do Not Wash.png')} />
                        <Text style={{ marginLeft: 20, fontSize: 20 }}>Dry clean with tetrachloroethylene</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 50 }}>
                        <Image source={require('./assets/Iron Low Temperature.png')} />
                        <Text style={{ marginLeft: 20, fontSize: 20 }}>Iron at a maximum of 110ºC/230ºF</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('./assets/Shipping.png')} />
                        <Text style={{ marginLeft: 20, fontSize: 20 }}>Free Flat Rate Shipping</Text>
                    </View>

                    <View style={{ marginBottom: 100, marginLeft: 45 }}>
                        <Text style={{ fontSize: 18, color: '#808080' }}>Estimated to be delivered on</Text>
                        <Text style={{ fontSize: 18, color: '#808080' }}>09/11/2021 - 12/11/2021.</Text>
                    </View>
                </View>
        
        
   </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding: 20,
  
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
    marginBottom: 20,
  },
  material: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 22,
  }

});
