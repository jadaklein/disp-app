import { ScrollView, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigation } from "@react-navigation/native";
import styles from "../cssStyles/commonStyles";
import Loader from "../services/loadingIndicator";

const RegisterScreen = () => {
    const [email, setEmail] = useState("Email")
    const navigation = useNavigation();

    const handleSignup = async () => {
        setLoading(true);
        try {
            const user  = await signup(email, password);
            if (user) {
                const id = user.uid;
                await saveUserData(id, firstname, lastname)
            }
        } catch (error) {
            setLoading(false);
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use. Please choose a different email or log in.");
            } else if (error.code === "auth/weak-password") {
                alert("Weak password. Please choose a stronger password.");
            } else {
                alert("Signup error: " + error.message);
            }
        }
    };

    const handleLogin = async () => {
        navigation.navigate("Login");
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Register</Text>
                    <TextInput style={styles.input} placeholder="Firstname" autoCapitalize="none" value={firstname} onChangeText={setFirstName}/>
                    <TextInput style={styles.input} placeholder="Lastname" autoCapitalize="none" value={lastname} onChangeText={setLastname}/>
                    <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" value={email} onChangeText={setEmail}/>
                    <TextInput style={styles.input} placeholder="Password" autoCapitalize="none" value={password} onChangeText={setPassword}/>

                    {/* {loading ? ( <Loader /> ) : ( <TouchableOpacity style=(styl))} */}
                </View>
            </View>
        </ScrollView>
    )
}