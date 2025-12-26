import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Browsestyles from '../../assets/Styles/tabs-style/browse';
import { SafeAreaView } from "react-native-safe-area-context";

export default function BrowseCourses() {
  const courses = [
    {
      id: 1,
      category: "Object Oriented",
      title: "Graphic Design Advanced",
      price: "89/-",
      oldPrice: "499",
      image: require("../../assets/images/courses/img1.jpg"),
      bookmarked: true,
    },
    {
      id: 2,
      category: "Algebra Number",
      title: "Advance Diploma in Graphics",
      price: "800/-",
      image: require("../../assets/images/courses/img2.jpg"),
    },
    {
      id: 3,
      category: "C and C++",
      title: "Graphic Design Advanced",
      price: "799/-",
      image: require("../../assets/images/courses/img3.png"),
    },
    {
      id: 4,
      category: "Web Development",
      title: "Web Developer concept",
      price: "999/-",
      image: require("../../assets/images/courses/img1.jpg"),
    },
  ];

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={Browsestyles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={Browsestyles.heading}>Browse Courses</Text>

        {/* Search */}
        <View style={Browsestyles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" />
          <TextInput
            placeholder="Information Technology"
            style={Browsestyles.searchInput}
          />
          <TouchableOpacity style={Browsestyles.filterBtn}>
            <Feather name="sliders" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={Browsestyles.resultText}>Result for <Text style={Browsestyles.bold}>"IT"</Text></Text>

        {/* Courses */}
        {courses.map(course => (
          <View key={course.id} style={Browsestyles.card}>
            <Image source={course.image} style={Browsestyles.image} />

            <View style={Browsestyles.cardContent}>
              <Text style={Browsestyles.category}>{course.category}</Text>
              <Text style={Browsestyles.title}>{course.title}</Text>

              <View style={Browsestyles.priceRow}>
                <Text style={Browsestyles.price}>{course.price}</Text>
                {course.oldPrice && (
                  <Text style={Browsestyles.oldPrice}>{course.oldPrice}</Text>
                )}
              </View>
            </View>

            <Ionicons
              name={course.bookmarked ? "bookmark" : "bookmark-outline"}
              size={20}
              color="#ff6b00"
              style={Browsestyles.bookmark}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>

  );
}
