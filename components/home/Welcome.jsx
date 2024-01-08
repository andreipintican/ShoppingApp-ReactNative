import { View, Text } from "react-native";
import styles from "./welcome.style";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
const navigation = useNavigation();

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
                    {" "}
                    Find The Most
                </Text>
                <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
                    {" "}
                    Wanted Product
                </Text>
            </View>

            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name="search" size={24} style={styles.searchIcon}/>
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onPressIn={() => navigation.navigate("Search")}
                        placeholder="What are you looking for ?"
                    />
                </View>
            </View>

        </View>
    )
}

export default Welcome