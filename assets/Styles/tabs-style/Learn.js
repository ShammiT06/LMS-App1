import { StyleSheet } from "react-native"

const LearnStyles = StyleSheet.create({
  safe:{
    flex:1,
  },
  top:{
    flexDirection:'row',
  },
  topic:{
      fontSize:25,
      fontWeight:'bold',
      marginTop:10, 
  },
  categories:{
      flexDirection:'row',
      gap:10,
      justifyContent:'space-around',
      paddingTop:20,
  },
  activeTab: 
  {
  borderBottomWidth: 3,
  borderBottomColor: '#f97325ff',
  paddingBottom: 6,
},
img:{
  width:90,
  height:90,
  marginTop:10,
},
box:{
 bordercolor:'grey',
 borderWidth:1,
 flexDirection:'row',
 padding:5,
 margin:10,
},
boxcontent:{
   flexDirection:'column',
     padding :10,
},
amt:{
  flexDirection:'row',
  paddingTop:5,
  gap:20,
}

})

export default LearnStyles