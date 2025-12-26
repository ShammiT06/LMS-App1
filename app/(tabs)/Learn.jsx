import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import LearnStyles from '../../assets/Styles/tabs-style/Learn'

export default function Learn() {
  const [topic, setTopic] = useState("ongoing")

  const courses = [
    {
      id: 1,
      name: "Course Name",
      lessons: 12,
      amount: "Amount",
      image: require('../../assets/images/courses/img1.jpg'),
      status: "ongoing",
    },
    {
      id: 2,
      name: "Course Name",
      lessons: 10,
      amount: "Amount",
      image: require('../../assets/images/courses/img3.png'),
      status: "ongoing",
    },
    {
      id: 3,
      name: "Course Name",
      lessons: 8,
      amount: "Amount",
      image: require('../../assets/images/courses/img2.jpg'),
      status: "completed",
    },
    {
      id: 4,
      name: "Course Name",
      lessons: 15,
      amount: "Amount",
      image: require('../../assets/images/courses/img1.jpg'),
      status: "completed",
    },
  ]

  return (
    <SafeAreaView style={LearnStyles.safe}>
      {/* Header */}
      <View style={LearnStyles.top}>
        <View>
          <Ionicons name="arrow-back" size={28} />
          <Text style={LearnStyles.topic}>Courses</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={LearnStyles.categories}>
        <TouchableOpacity
          style={[
            LearnStyles.tab,
            topic === "ongoing" && LearnStyles.activeTab,
          ]}
          onPress={() => setTopic("ongoing")}
        >
          <Text>Ongoing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            LearnStyles.tab,
            topic === "completed" && LearnStyles.activeTab,
          ]}
          onPress={() => setTopic("completed")}
        >
          <Text>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Course List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {courses
          .filter(course => course.status === topic)
          .map(course => (
            <View key={course.id} style={LearnStyles.box}>
              <Image source={course.image} style={LearnStyles.img} />
              <View style={LearnStyles.boxcontent}>
                <Text>{course.name}</Text>
                <View style={LearnStyles.amt}>
                  <Text>Lessons: {course.lessons}</Text>
                  <Text> {course.amount}</Text>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  )
}
