import { StyleSheet } from "react-native"

const CareerStyles = StyleSheet.create({
    safe:{
       flex:1,
    },
    top:{
    padding:10,
    },
    heading:{
      fontSize:30,
      fontWeight:'bold',
      marginTop:10,
    },
  container: {
  marginTop: 12,
},

tabRow: {
  flexDirection: "row",
  marginBottom: 0,   // ❗ NO SPACE BELOW TABS
},

tab: {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 14,

  backgroundColor: "#fff",

  borderTopLeftRadius: 14,
  borderTopRightRadius: 14,
},

activeTab: {
  backgroundColor: "#FBEFE8", // SAME AS CARD
},

card: {
  backgroundColor: "#FBEFE8",
  padding: 16,

  // ❗ ONLY bottom corners rounded
  borderBottomLeftRadius: 16,
  borderBottomRightRadius: 16,
},

tabTitle: {
  fontSize: 16,
  fontWeight: "600",
  color: "#000",
},

subText: {
  fontSize: 12,
  color: "#777",
},

desc: {
  fontSize: 14,
  color: "#333",
  lineHeight: 22,
},
category: {
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: 12,
},

categoryItem: {
  width: '50%',          // 👈 2 items per row
  paddingVertical: 14,
  marginBottom: 12,
  borderRadius: 10,
  backgroundColor: '#f2f2f2',
  alignItems: 'center',
},
activeCategory: {
  backgroundColor: '#ffefe5',
  borderColor: '#ff7a00',
}

})

export default CareerStyles