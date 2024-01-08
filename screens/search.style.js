import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const style = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: SIZES.small,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50
     },
     searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.small
     },
     searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
     },
     searchInput: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
     },
     searchBtn: {
       width: 50,
       height: "100%",
       justifyContent: "center",
       alignItems: "center",
       borderRadius: SIZES.medium,
       backgroundColor: COLORS.primary
     }
})

export default style