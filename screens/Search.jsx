import styles from "./search.style";
import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const Search = () => {
    return (
        <SafeAreaView>
          <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name="search"
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
            </View>
        </SafeAreaView>
    )
}

export default Search