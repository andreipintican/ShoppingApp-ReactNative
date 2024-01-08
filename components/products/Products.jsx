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
                                    <Text>{item.title}</Text>
                                    {item.images[0] ? (
                                    <Image style={styles.image} source={{ uri: item.images[0] }} />
                                ) : (
                                    <Text>No Image Available</Text>
                                )}
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
        resizeMode: "cover",
        width: 100
    }
});

export default Products