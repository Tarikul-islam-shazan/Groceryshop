import { View, FlatList, StyleSheet, StatusBar, SafeAreaView,Dimensions } from 'react-native'
import React from 'react'
import { useFetchGroceryProducts } from '../store/apis/firestoreApi'
import { Button, Card, Text } from 'react-native-paper';
import { Col, Grid, Row } from 'react-native-easy-grid';

const demoGroceryUrl ='https://firebasestorage.googleapis.com/v0/b/e-grocery-2d0f1.appspot.com/o/demo-grocery.jpeg?alt=media&token=754936b1-6489-4c9e-88d4-b7259539699e'
const width = Dimensions.get('screen').width/2 - 8
const Home = () => {
  const { data,isLoading,isError } = useFetchGroceryProducts();
  let width = Dimensions.get('screen').width/2 - 8

  type ItemProps = {title: string, price: number, imageUrl: string};
 

const GroceryCard = ({title, price, imageUrl}: ItemProps) => (
  <Card style={[styles.groceryCard, styles.elevation]}>
    <Card.Title title={title} subtitle={`${price} BDT/ 1kg`} style={styles.title}/>
    <Card.Content>

      <Text variant="bodyMedium">1 Kg</Text>
    </Card.Content>
    <Card.Cover source={{ uri: imageUrl ? imageUrl : demoGroceryUrl}}  style={{   
    width: 120,
    height: 100,
    resizeMode: 'center'
  }}/>
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>
);

let content;
if(isLoading){
  content = <Text>Loading...</Text>
} else if(isError){
  content = <Text>Error...</Text>
}else{
  content=  
        <FlatList
          columnWrapperStyle={styles.columnWrapper}
          horizontal={false}
          data={data}
          renderItem={({item}) => 
              <GroceryCard title={item.name} price={item.price} imageUrl={item.imageUrl ? item.imageUrl :''} />}
          keyExtractor={item => item.name}
          numColumns={2}/>
             
}
  return (
    <SafeAreaView style={styles.container}>
      {content}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  groceryCard: {
    flex: 0.5,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    margin: 16,
    width:width, 
    height: 1.5 *width
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  columnWrapper:{
    justifyContent:'space-between'
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
  },
});

export default Home
