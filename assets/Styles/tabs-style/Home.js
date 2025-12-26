import { StyleSheet } from "react-native";

const HomeStyles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fbff",
    padding: 16,
  },

  hello: {
    fontSize: 22,
    fontWeight: "700",
  },

  subText: {
    color: "#777",
    marginBottom: 16,
  },

  /* Offer */
  offerCard: {
    backgroundColor: "#f77c42",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  offerOff: {
    color: "#fff",
    fontWeight: "700",
  },

  offerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 4,
  },

  offerDesc: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 12,
  },

  dots: {
    flexDirection: "row",
  },

  dotActive: {
    width: 18,
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginRight: 6,
  },

  dot: {
    width: 6,
    height: 6,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 6,
    marginRight: 6,
  },

  /* Sections */
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  /* Course Card */
  courseCard: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 16,
    padding: 10,
    elevation: 3,
  },

  courseImg: {
    width: "100%",
    height: 90,
    borderRadius: 12,
    marginBottom: 8,
  },

  courseTitle: {
    fontWeight: "600",
    fontSize: 14,
  },

  comboTitle: {
    fontWeight: "700",
    fontSize: 13,
  },

  price: {
    color: "#ff6b00",
    fontWeight: "700",
    marginVertical: 4,
  },

  lessonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },

  lessonText: {
    fontSize: 12,
    color: "#777",
  },

  progressText: {
    fontSize: 12,
    color: "#ff6b00",
  },

  progressBar: {
    height: 4,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginTop: 6,
  },

  progressFill: {
    width: "40%",
    height: "100%",
    backgroundColor: "#ff6b00",
    borderRadius: 10,
  },
});
 export default HomeStyles;