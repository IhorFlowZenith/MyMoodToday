import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert
} from 'react-native';
import { MOODS } from '../constants/moods';
import { saveMood } from '../utils/storage';

export default function HomeScreen() {
  const handleMoodSelect = async(emoji: string) => {
    const today = new Date().toISOString().split('T')[0];

    try {
      await saveMood(today, emoji);
      Alert.alert("Success", `Today you are ${emoji}! Mood saved.`);
    } catch (error) {
      Alert.alert("Error: ", `${error}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello!</Text>
        <Text style={styles.title}>How are you feeling today?</Text>
      </View>

      <View style={styles.grid}>
        {MOODS.map((item) => (
          <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => handleMoodSelect(item.emoji)}
          activeOpacity={0.7}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.footerText}>
        Select an emoji to log your daily mood
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae9fe',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    color: '#6485bc',
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a4a4a',
    textAlign: 'center',
    marginTop: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  },
  card: {
    width: '28%',
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  emoji: {
    fontSize: 35,
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
  },
  footerText: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    color: '#a0a0a0',
    fontSize: 14,
  }
})