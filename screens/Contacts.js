import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const ContactStack = createStackNavigator();

let device_width = Dimensions.get("window").width;
let device_height = Dimensions.get("window").height;




function SectionListItem({ item }) {
    return (
        <View style={{ ...styles.item, flexDirection: 'row', justifyContent: 'start' }}>
            <Text style={{ alignSelf: 'center' }}>{item}</Text>
        </View>
    )
}

function SectionHeader({ section }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'start', ...styles.sectionHeader }}>
            <Text style={{ alignSelf: 'center', fontWeight: '800' }}>{section.title}</Text>
        </View>
    )
}

function AddContacts() {
    return (
        <SafeAreaView >
            <ScrollView>
                <View style={{ backgroundColor: "#ededed" }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10, width: device_width, marginBottom: 10 }}>
                        <TouchableOpacity style={{ fontSize: 20, alignSelf: 'center', flex: 1 }}>
                            <Text style={{ fontSize: 21, fontWeight: "500", color: "#" }}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 25, fontWeight: '700', alignSelf: 'center', flex: 3, textAlign: 'center' }}>New Contact</Text>
                        <TouchableOpacity style={{ flex: 1, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 21, textAlign: 'right', fontWeight: "500", color: "#007aff" }}>Done</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ ...styles.inputGroup }}>
                        <Input placeholder={"First name"} />
                        <Input placeholder={"Last name"} />
                        <Input placeholder={"Company"} />
                    </View>

                    <View style={{ ...styles.inputGroup }}>
                        <AddToInput placeholder={"add phone"} />
                    </View>

                    <View style={{ ...styles.inputGroup }}>
                        <AddToInput placeholder={"add email"} />
                    </View>

                    <View style={{ ...styles.inputGroup }}>
                        <AddToInput placeholder={"add website"} />
                    </View>

                    <View style={{ ...styles.inputGroup }}>
                        <AddToInput placeholder={"add address"} />
                    </View>

                    <View style={{ ...styles.inputGroup }}>
                        <AddToInput placeholder={"add birthday"} />
                    </View>

                    <View style={{ ...styles.inputGroup }}>
                        <AddToInput placeholder={"add social profile"} />
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

function AddToInput({ placeholder }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ alignSelf: 'center' }}>
                <Ionicons name="ios-add-circle-sharp" size={24} color="#0bd92e" />
            </TouchableOpacity>
            <TextInput placeholderTextColor="#a6a6a6" placeholder={placeholder} style={styles.inputBox} />
        </View>
    )
}

function Input({ placeholder }) {
    return (
        <TextInput placeholderTextColor="#a6a6a6" placeholder={placeholder} style={styles.inputBox} />
    )
}

function ContactView(props) {

    return (
        <SafeAreaView style={{ ...styles.container, width: device_width, height: device_height, flexDirection: 'column' }}>
            <StatusBar style="auto" />

            <View style={{ backgroundColor: '#ebebeb', paddingBottom: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 10, width: device_width, marginBottom: 10 }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center', color: "#3385ff", flex: 1 }}>Groups</Text>
                    <Text style={{ fontSize: 25, fontWeight: '500', alignSelf: 'center', flex: 1, textAlign: 'center' }}>Contacts</Text>
                    <View style={{ alignSelf: 'center', flex: 1, alignItems: 'flex-end' }}>

                        <TouchableOpacity onPress={() => props.navigation.navigate("Add")}>
                            <Ionicons name="add" size="30" color="#3385ff" />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', width: device_width }}>
                    <View style={{ backgroundColor: '#e0e0e0', height: 35, width: device_width * 0.95, paddingHorizontal: 10, borderRadius: 10, flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center', marginRight: 7 }}>
                            <Ionicons name='search' color="#9c9c9c" size="20" />
                        </View>
                        <TextInput placeholder="Search" />
                    </View>
                </View>
            </View>

            <SectionList
                sections={[
                    { title: "B", data: ["Belvis", "Belinda", "Brenda"] },
                    { title: "C", data: ["Calvin", "Cerry", "Cindy"] },
                    { title: "D", data: ["Delvis", "Declan", "Dennis"] },
                    { title: "J", data: ["Jermiah", "Jerry", "Jennifer"] },
                ]}
                renderItem={({ item }) => <SectionListItem key={`item${item}`} item={item} />}
                renderSectionHeader={({ section }) => <SectionHeader key={`section${section}`} section={section} />}
            />

        </SafeAreaView>
    )
}


function Contacts() {


    return (

        <ContactStack.Navigator
            headerMode="none"
            mode="modal"
            screenOptions={{
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.ModalSlideFromBottomIOS
            }}
            initialRouteName="Contacts"
        >
            <ContactStack.Screen name="Contacts" component={ContactView} />
            <ContactStack.Screen name="Add" component={AddContacts} />
        </ContactStack.Navigator>

    )
}

// this is a disabled color #8E8E8F
// this is a active color #007aff


const styles = StyleSheet.create({
    container: {
        height: device_height,
        paddingTop: 60,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
        fontWeight: 'bold',
        padding: 5,
        margin: 10,
        width: 75,
        height: 75,
        borderRadius: 1200,
    },
    inputBox: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 10,
        paddingVertical: 15,
        fontSize: 16,
        borderBottomWidth: 0.75,
        borderBottomColor: "#e0e0e0",
    },
    inputGroup: {
        backgroundColor: "#ffffff",
        paddingLeft: 15,
        marginBottom: 40,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        height: 25,
        fontWeight: 'bold',
        color: "black",
        backgroundColor: '#d4d4d4',
    },
    item: {
        backgroundColor: "rgba(247,247,247,1.0)",
        fontSize: 18,
        height: 40,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderColor: "#e3e3e3",
        borderBottomWidth: 1.5
    },
});


export default Contacts;