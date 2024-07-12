import { StyleSheet,View, Text, Image, ScrollView,TouchableOpacity} from 'react-native';


export default function ProductDetailScreen({route}) {
const {product} = route.params;

  return (
    <>
   <ScrollView style={styles.container}>

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

   <TouchableOpacity style={styles.addToBasketContainer}>
                <Image style={styles.whiteIcon} source={require('./assets/Plus.png')} />
                <Text style={{ color: 'white', fontSize: 18 }}>Add to basket</Text>
                <Image style={styles.whiteIcon} source={require('./assets/Heart.png')} />
            </TouchableOpacity>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding: 20,
  
  },
  header:{
    flexDirection: "row",
    columnGap:10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 40
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
  },
  whiteIcon: {
    tintColor: 'white',
    width: 24,
    height: 24,
},
addToBasketContainer: {
    backgroundColor: 'black',
    height: 50,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
},

});
