import styles from "./search.style";
import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"

const Search = () => {
    return (
        <SafeAreaView>
          <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons 
                        name="camera-outline" 
                        size={SIZES.xLarge}  style={styles.searchIcon}/>
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onPressIn={() => {}}
                        placeholder="What are you looking for ?"
                    />
                </View>
                <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Feather name="search" size={24} 
                        color={COLORS.white}/>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default Search