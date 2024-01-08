import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";

const productsURL = "https://dummyjson.com/products"

const Products = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(productsURL)
            .then((response) => response.json())
            .then((json) => setData(json.products))
            .catch((error) => alert(error))
            .finally( () => setLoading(false))
    }, [])
    return (
        <View style={styles.container}>
            { isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    numColumns={2}
                    data={data} 
                    keyExtractor={({id}, index) => id}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity style={{ flex: 1, }}>
                                <View style={styles.card}>
                                    <View>
                                        <Text>{item.title}</Text>
                                        {/* <Text>{item.images[0]}</Text> */}
                                        <Image style={styles.image} source={{ uri: "https://cdn.dummyjson.com/product-images/1/1.jpg"}}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    card: {
        margin: 5,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 16,
        alignItems: 'center',
        shadowOpacity: 0.2,
    },
    image: {
        aspectRatio: 1,
        resizeMode: "cover"
    }
});

export default Products