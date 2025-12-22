import { StyleSheet } from "react-native";

const GuestStyles = StyleSheet.create({
    safe: {
        flex: 1
    },
    container: {
        marginTop: 2,
        paddingHorizontal: 15,
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15
    },
    containerTxt: {
        fontSize: 20,
        fontFamily: "OutfitRegular"

    },
    loginBtn: {
        width: 108,
        height: 35,
        backgroundColor: "#F3DED4",
        justifyContent: "center",
        borderRadius: 8
    },
    btnTxt: {
        textAlign: "center",
        fontSize: 18,
        fontFamily: "OutfitRegular"
    },
    category: {
        marginTop: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    seeBtn: {
        flexDirection: "row",
        gap: 3,
        color: "#F16F39"
    },
    seeBtnTxt: {
        color: "#F16F39",
        fontFamily: "OutfitRegular",
        fontSize:15,
    },
    categoryTxt:{
        fontFamily:"OutfitSemibold",
        fontSize:18,
    }
})
export default GuestStyles