import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { getAllMoods } from '../utils/storage';
import {useIsFocused} from "@react-navigation/core";

export default function CalendarScreen() {
  const [markedDates, setmarkedDates] = useState({});
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      loadMoods();
    }
  }, [isFocused]);

  const loadMoods = async () => {
    const data = await getAllMoods();
    const formatted: any = {};

    Object.keys(data).forEach((date) => {
      formatted[date] = {
        customStyles: {
          container: {
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
        marked: true,
        mood: data[date],
      };
    });

    setmarkedDates(formatted);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Mood Journey</Text>

      <Calendar
        theme={{
          calendarBackground: '#FFFFFF',
          textSectionTitleColor: '#6485bc',
          selectedDayBackgroundColor: '#FF758F',
          todayTextColor: '#FF758F',
          dayTextColor: '#4a4a4a',
          monthTextColor: '#d86595',
          textMonthFontWeight: 'bold',
          arrowColor: '#FF758F',
        }}
        style={styles.calendar}

        renderArrow={(direction) => (
          <Text style={{ fontSize: 20, color: '#FF758F', fontWeight: 'bold' }}>
            {direction === 'left' ? '◀' : '▶'}
          </Text>
        )}

        dayComponent={({date, state, marking}: any) => {
          return(
            <View style={styles.dayBox}>
              <Text style={[
                styles.dayText,
                state === 'disabled' ? {color: '#ccc'} : {color: '#4a4a4a'}
              ]}>
                {date?.day}
              </Text>
              {marking?.mood && (
                <Text style={styles.moodEmoji}>{marking.mood}</Text>
              )}
            </View>
          );
        }}
        markedDates={markedDates}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae9fe',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#d86595',
    textAlign: 'center',
    marginVertical: 30,
  },
  calendar: {
    borderRadius: 30,
    padding: 10,
    elevation: 5,
  },
  dayBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 40,
  },
  dayText: {
    fontSize: 14,
    fontWeight: '500',
  },
  moodEmoji: {
    fontSize: 18,
    marginTop: 2,
  }
})