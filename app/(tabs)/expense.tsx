import { styles } from "@/assets/styles/style";
import { categories } from "@/constand/categories";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constand/colors";
import { saveExpense } from "@/hooks/useStorage";
import { router } from "expo-router";

interface IExpense {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}

export default function ExpenseScreen() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [expenseDate, setExpenseDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleAddExpense = async () => {
    if (!title || !amount || !category) {
      Alert.alert("បញ្ចូលព័ត៌មានមិនពេញលេញ", "សូមបញ្ចូលព័ត៌មានចំណាយទាំងអស់");
      return;
    }
    const newExpense: IExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date: expenseDate
        ? expenseDate.toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
    };
    await saveExpense(newExpense);
    Alert.alert("ជោគជ័យ", "បានបន្ថែមចំណាយរួចរាល់");
    resetForm();

    router.navigate("/");
  };

  function resetForm() {
    setTitle("");
    setAmount("");
    setCategory(categories[0]);
    setExpenseDate(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>បន្ថែមចំណាយ</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.inputTitle}>ចំណាយ</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="បញ្ចូលចំណាយ"
          style={styles.inputText}
        />
        <Text style={styles.inputTitle}>ចំនួនទឹកប្រាក់ ($)</Text>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          placeholder="0.00"
          style={styles.inputText}
          keyboardType="decimal-pad"
        />
        <Text style={styles.inputTitle}>កាលបរិច្ឆេទ</Text>
        <Pressable
          onPress={() => setShowPicker(true)}
          style={styles.datePickerButton}
        >
          <Ionicons name="calendar" size={16} color={Colors.secondary} />
          <Text>
            {expenseDate
              ? expenseDate.toLocaleDateString()
              : new Date().toLocaleDateString()}
          </Text>
        </Pressable>
        <Text style={styles.categoryTitle}>ប្រភេទ</Text>
        <View
          style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 12 }}
        >
          {categories.map((cat, index) => (
            <Pressable
              onPress={() => setCategory(cat)}
              style={[
                styles.filterButton,
                category == cat && styles.activeFilter,
              ]}
              key={index}
            >
              <Text style={category == cat && styles.activeFilterText}>
                {cat}
              </Text>
            </Pressable>
          ))}
        </View>
        <Pressable onPress={handleAddExpense} style={styles.addButton}>
          <Text style={styles.addButtonText}>បន្ថែមចំណាយ</Text>
        </Pressable>
      </View>
      {showPicker && (
        <DateTimePicker
          value={expenseDate || new Date()}
          mode="date"
          display="default"
          onDismiss={() => {
            setShowPicker(false);
          }}
          onValueChange={(_, date) => {
            setShowPicker(false);
            if (date) {
              setExpenseDate(date);
            }
          }}
        />
      )}
    </View>
  );
}
