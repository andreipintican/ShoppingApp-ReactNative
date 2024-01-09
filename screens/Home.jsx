import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons"
import styles from "./home.style";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Welcome } from "../components";
import Products from "../components/products/Products";

const Home = () => {
    return (
        <SafeAreaView>
          <View style={styles.appBarWrapper}>
            <View style={styles.appBar}>
                <View style={{alignItems: "flex-end"}}>
                    <View style={styles.cartCount}>
                        <Text style={styles.cartNumber}>0</Text>
                    </View>
                    <TouchableOpacity>
                        <Fontisto name="shopping-bag" size={24}/>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
            <Welcome/>
          {/* <ScrollView style={{marginTop: 10}}> */}
            <Products/>
          {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default Home

const style = StyleSheet.create({})