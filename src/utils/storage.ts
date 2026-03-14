import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@mood_data';

export const saveMood = async(date: string, emoji: string) => {
  try {
    const existingMood = await AsyncStorage.getItem(STORAGE_KEY);
    const moods = existingMood ? JSON.parse(existingMood) : {};

    moods[date] = emoji;

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(moods));
    console.log('Save: ', date, emoji);
  } catch (error) {
    console.error('Error: ', error);
  }
}
export const getAllMoods = async() => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}