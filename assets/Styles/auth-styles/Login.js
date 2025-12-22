import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "600",
  },
  ipFields: {
    width: "100%",
    maxWidth: 420,          
    alignSelf: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  email: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#F16F39",
    borderRadius: 10,
  },

  password: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#F16F39",
    borderRadius: 10,
  },

  pass: {
    flex: 1,
    fontSize: 14,
  },
  button: {
    width: "100%",
    height: 48,
    marginTop: 20,
    backgroundColor: "#F16F39",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  Forgot: {
    marginTop: 15,
    alignItems: "center",
  },

  forgotText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },

  resetText: {
    fontSize: 14,
    color: "#F16F39",
    marginTop: 6,
    textAlign: "center",
  },
  optional: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  leftLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  btnContainer: {
    marginTop: 20,
  },

  apple: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#F8EDE7",
    paddingVertical: 12,
    borderRadius: 10,
    width: "100%",
    marginVertical: 10,
  },

  google: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#F8EDE7",
    paddingVertical: 12,
    borderRadius: 10,
    width: "100%",
  },

  loginContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  login: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  loginTxt: {
    color: "#F16F39",
  },
  register: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  registerTxt: {
    color: "#F16F39",
  },
});

export default LoginStyles;
