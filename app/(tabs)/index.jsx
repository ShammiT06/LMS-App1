import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import Homestyles from "../../assets/Styles/tabs-style/Home";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const freeCourses = [
    {
      id: 1,
      title: "Oops",
      lessons: 9,
      progress: "2/09",
      image: require("../../assets/images/courses/img1.jpg"),
    },
    {
      id: 2,
      title: "Software",
      lessons: 9,
      progress: "6/09",
      image: require("../../assets/images/courses/img3.png"),
    },
  ];

  const comboCourses = [
    {
      id: 1,
      title: "OOPS + JAVA",
      price: "₹ 2455 /-",
      lessons: 6,
      progress: "3/06",
      image: require("../../assets/images/courses/img3.png"),
    },
    {
      id: 2,
      title: "SOFTWARE + HARDWARE",
      price: "₹ 2455 /-",
      lessons: 6,
      progress: "6/06",
      image: require("../../assets/images/courses/img3.png"),
    },
  ];

  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={Homestyles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Text style={Homestyles.hello}>Hi, ALEX</Text>
      <Text style={Homestyles.subText}>
        What Would you like to learn Today?{"\n"}Search Below.
      </Text>

      {/* Offer Card */}
      <View style={Homestyles.offerCard}>
        <Text style={Homestyles.offerOff}>25% OFF*</Text>
        <Text style={Homestyles.offerTitle}>Today's Special</Text>
        <Text style={Homestyles.offerDesc}>
          Get a Discount for Every{"\n"}Course Order only Valid for{"\n"}Today..!
        </Text>

        <View style={Homestyles.dots}>
          <View style={Homestyles.dotActive} />
          <View style={Homestyles.dot} />
          <View style={Homestyles.dot} />
        </View>
      </View>

      {/* Free Course */}
      <Text style={Homestyles.sectionTitle}>Free Course</Text>
      <View style={Homestyles.row}>
        {freeCourses.map(course => (
          <View key={course.id} style={Homestyles.courseCard}>
            <Image source={course.image} style={Homestyles.courseImg} />

            <Text style={Homestyles.courseTitle}>{course.title}</Text>

            <View style={Homestyles.lessonRow}>
              <Text style={Homestyles.lessonText}>Lesson: {course.lessons}</Text>
              <Text style={Homestyles.progressText}>{course.progress}</Text>
            </View>

            <View style={Homestyles.progressBar}>
              <View style={Homestyles.progressFill} />
            </View>
          </View>
        ))}
      </View>

      {/* Combo Course */}
      <Text style={Homestyles.sectionTitle}>Combo Course</Text>
      <View style={Homestyles.row}>
        {comboCourses.map(course => (
          <View key={course.id} style={Homestyles.courseCard}>
            <Image source={course.image} style={Homestyles.courseImg} />

            <Text style={Homestyles.comboTitle}>{course.title}</Text>
            <Text style={Homestyles.price}>{course.price}</Text>

            <View style={Homestyles.lessonRow}>
              <Text style={Homestyles.lessonText}>Lesson: {course.lessons}</Text>
              <Text style={Homestyles.progressText}>{course.progress}</Text>
            </View>

            <View style={Homestyles.progressBar}>
              <View style={Homestyles.progressFill} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
