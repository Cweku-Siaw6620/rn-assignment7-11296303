import { useState,useEffect,useContext } from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView,  TouchableOpacity} from 'react-native';



export default function HomeScreen({navigation}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
      setProducts(json); 
      setLoading(false);
    }) 
    .catch(error => {
      console.error(error);
      setLoading(false);
    })
    
  }, [])

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
