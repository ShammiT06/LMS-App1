import { StyleSheet } from "react-native";

const ProfileStyles = StyleSheet.create({
    safe: {
        flex:1
    },
   container:{
  flex:1,
},
  top:{
  height:150,   // your required height
  justifyContent:'center',
  alignItems:'center',
},
   containerTxt: {
  textAlign: "center",
  justifyContent:"center",
  alignItems:"center",
  color: "#FF6B2C",
  width: 110,
  height: 30,
  fontSize: 20,
  fontWeight: "600",
  marginBottom:20,
  marginTop:50,
},
content:{
    padding:30,
    paddingTop:30,
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
  marginBottom:20,
},
ionicons:{
    borderColor:'#000000',
},
change:{
    padding:10,
},
changetxt:{
    color:'#000',

},
inputfield:{
    marginTop:50,
    alignContent:'center',
    justifyContent:'center',
    padding:30,
},
inputbox:{
    padding:10,
    borderWidth:1,
    borderRadius:10,
},
inputs:{
    padding:10,
},
btn:{
 alignContent:'center',
 justifyContent:'center',
 alignItems:'center',
},
button: {
    width: "70%",
    height: 48,
    marginTop: 10,
    backgroundColor: "#F16F39",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  backbtn:{
    marginLeft:10,
    margintop:20,
  }
})


export default ProfileStyles