import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CareerStyles from '../../assets/Styles/tabs-style/Career'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { useState } from 'react';

export default function Career() {
    const [topic, setTopic] = useState("aptitude");
    const [selectedCategory, setSelectedCategory] = useState(null);
    console.log('Selected:', selectedCategory);

    return (
    <SafeAreaView style={CareerStyles.safe}>
    <View style={CareerStyles.top}>
      <View>
         <Text style={CareerStyles.heading}>Career </Text>
      </View>
      <View>
      <View style={CareerStyles.blendedCard}>

    <View style={CareerStyles.container}>
  {/* Tabs */}
  <View style={CareerStyles.tabRow}>
    <TouchableOpacity
      style={[
        CareerStyles.tab,
        topic === "aptitude" && CareerStyles.activeTab,
      ]}
      onPress={() => setTopic("aptitude")}
    >
      <Text style={CareerStyles.tabTitle}>Aptitude</Text>
      <FontAwesome5 name="brain" size={18} color="#ff7a00" />
    </TouchableOpacity>

    <TouchableOpacity
      style={[
        CareerStyles.tab,
        topic === "coding" && CareerStyles.activeTab,
      ]}
      onPress={() => setTopic("coding")}
    >
      <View>
        <Text style={CareerStyles.tabTitle}>Coding</Text>
        <Text style={CareerStyles.subText}>Practice</Text>
      </View>
      <Ionicons name="code-slash" size={18} color="#ff7a00" />
    </TouchableOpacity>
  </View>

  {/* Content */}
  <View style={CareerStyles.card}>
    {topic === "aptitude" ? (
      <Text style={CareerStyles.desc}>
        Aptitude refers to an individual’s natural ability that has potential
        to learn and perform specific tasks efficiently...
      </Text>
    ) : (
      <Text style={CareerStyles.desc}>
        Coding practice improves logical thinking and problem-solving skills...
      </Text>
    )}
  </View>
    </View>
</View>
      </View>


     <Text style={{fontSize:20,fontWeight:'bold',marginTop:10,marginBottom:10}}> Select a Category to start Aptitude </Text>


      <View style={CareerStyles.category}>
  <TouchableOpacity
    style={[
      CareerStyles.categoryItem,
      selectedCategory === 'LCM' && CareerStyles.activeCategory,
    ]}
    onPress={() => setSelectedCategory('LCM')}
  >
    <Text>LCM</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      CareerStyles.categoryItem,
      selectedCategory === 'Probability' && CareerStyles.activeCategory,
    ]}
    onPress={() => setSelectedCategory('Probability')}
  >
    <Text>Probability</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      CareerStyles.categoryItem,
      selectedCategory === 'Decimal' && CareerStyles.activeCategory,
    ]}
    onPress={() => setSelectedCategory('Decimal')}
  >
    <Text>Decimal</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      CareerStyles.categoryItem,
      selectedCategory === 'Fraction' && CareerStyles.activeCategory,
    ]}
    onPress={() => setSelectedCategory('Fraction')}
  >
    <Text>Fraction</Text>
  </TouchableOpacity>
</View>

    </View>
    </SafeAreaView>
  )
}