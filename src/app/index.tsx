import { View, Text, TextInput, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";

import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const BRAND = "#84cc16";
const MUTED = "#8a8f99";
const FIELD_BORDER = "#ececec";

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0f1722",
    marginTop: 18,
    marginBottom: 8,
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: FIELD_BORDER,
    height: 54,
    backgroundColor: "white",
    paddingHorizontal: 14,
    gap: 10,
  },
  inputWrapFocused: {
    borderColor: BRAND,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#0f1722",
    padding: 0,
  },
  socialBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Index = () => {
  const [focusedField, setFocusedField] = useState<"email" | "password" | null>(
    "email",
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <Image
          source={require("@/assets/images/image.png")}
          style={{
            width: 172,
            height: 92,
            alignSelf: "center",
            marginTop: 50,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          Sign In
        </Text>
        <Text
          style={{
            marginTop: 8,
            alignSelf: "center",
            color: MUTED,
            fontSize: 14,
          }}
        >
          Let's experience the joy of telecare AI.
        </Text>

        <Text style={styles.label}>Email Address</Text>
        <View
          style={[
            styles.inputWrap,
            focusedField === "email" && styles.inputWrapFocused,
          ]}
        >
          <Ionicons
            name="mail-outline"
            size={20}
            color={focusedField === "email" ? BRAND : MUTED}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email address..."
            placeholderTextColor={MUTED}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View
          style={[
            styles.inputWrap,
            focusedField === "password" && styles.inputWrapFocused,
          ]}
        >
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color={focusedField === "password" ? BRAND : MUTED}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password..."
            placeholderTextColor={MUTED}
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField(null)}
          />
          <Ionicons name="eye-off-outline" size={20} color={MUTED} />
        </View>

        <Pressable
          style={{
            backgroundColor: BRAND,
            paddingVertical: 16,
            borderRadius: 14,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 24,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Sign In
          </Text>
          <Ionicons name="arrow-forward" size={18} color="white" />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 16,
            marginTop: 20,
          }}
        >
          <View style={styles.socialBox}>
            <FontAwesome name="facebook" size={24} color="black" />
          </View>
          <View style={styles.socialBox}>
            <FontAwesome name="google" size={24} color="black" />
          </View>
          <View style={styles.socialBox}>
            <FontAwesome name="instagram" size={24} color="black" />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            gap: 10,
            marginTop: 24,
          }}
        >
          <Text style={{ color: "#0f1722", fontSize: 14 }}>
            Don't have an account?{" "}
            <Text
              style={{
                color: BRAND,
                textDecorationLine: "underline",
                fontWeight: "600",
              }}
            >
              Sign Up.
            </Text>
          </Text>
          <Text
            style={{
              color: BRAND,
              textDecorationLine: "underline",
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Forgot your password?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
