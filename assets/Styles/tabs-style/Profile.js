import { StyleSheet } from "react-native";

const ProfileStyles = StyleSheet.create({
    safe: {
        flex:1
    },
    container:{
        marginTop:20,
    },
   containerTxt: {
  textAlign: "center",
  justifyContent:"center",
  alignItems:"center",
  color: "#FF6B2C",
  width: 110,
  height: 30,
  fontSize: 20,
  fontWeight: "600", // semibold equivalent
},
content:{
    padding:20,
},
contentTxt:{
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    paddingTop:10,
    fontSize:15,
},
iconBg:{
  borderWidth: 1,
  borderColor: "#000",
  padding: 10,
  borderRadius: 50,
  alignItems: "center",
  justifyContent: "center"
},
profileImg: {
  width: 80,
  height: 80,
  borderRadius: 40,
  resizeMode: 'cover',
},
ionicons:{
    borderColor:'#000000',
    
},
})


export default ProfileStyles