import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "expenses";

export async function getExpenses() {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export async function saveExpense(data: any) {
  try {
    const current = await getExpenses();
    current.unshift(data);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch (error) {
    console.error("Error saving expense:", error);
  }
}

export async function clearExpenses() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}
