import { StyleSheet } from "react-native";


const Browsestyles= StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 14,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
  },

  filterBtn: {
    backgroundColor: "#ff6b00",
    padding: 8,
    borderRadius: 10,
  },

  resultText: {
    marginBottom: 12,
    color: "#666",
  },

  bold: {
    fontWeight: "600",
    color: "#000",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    marginBottom: 14,
    elevation: 3,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },

  cardContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  category: {
    color: "#ff6b00",
    fontSize: 12,
    fontWeight: "600",
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 4,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  price: {
    color: "#ff6b00",
    fontWeight: "700",
    marginRight: 8,
  },

  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
    fontSize: 12,
  },

  bookmark: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});
  export default Browsestyles;