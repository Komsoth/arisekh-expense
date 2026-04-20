import { styles } from "@/assets/styles/style";
import { categories } from "@/constand/categories";
import { useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constand/colors";
import { getExpenses } from "@/hooks/useStorage";

interface IExpense {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}

export default function styleScreen() {
  const [filter, setFilter] = useState("ទាំងអស់");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endedDate, setEndedDate] = useState<Date | null>(null);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndedPicker, setShowEndedPicker] = useState(false);
  const [expenses, setExpenses] = useState<IExpense[]>([
    {
      id: 1,
      title: "Hotel",
      amount: 15,
      category: "ការធ្វើដំណើរ",
      date: "2026-04-01",
    },
    {
      id: 2,
      title: "Foods",
      amount: 20,
      category: "អាហារ",
      date: "2026-04-01",
    },
    {
      id: 3,
      title: "Petro",
      amount: 30,
      category: "ការធ្វើដំណើរ",
      date: "2026-04-01",
    },
    {
      id: 4,
      title: "Hotel",
      amount: 20,
      category: "ការធ្វើដំណើរ",
      date: "2026-04-19",
    },
    {
      id: 5,
      title: "Foods",
      amount: 30,
      category: "ការធ្វើដំណើរ",
      date: "2026-04-19",
    },
    {
      id: 6,
      title: "Petro",
      amount: 25,
      category: "ការធ្វើដំណើរ",
      date: "2026-04-19",
    },
  ]);

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory = filter === "ទាំងអស់" || expense.category === filter;
    const expenseDate = new Date(expense.date);
    const matchesStartDate = !startDate || expenseDate >= startDate;
    const matchesEndedDate = !endedDate || expenseDate <= endedDate;
    return matchesCategory && matchesStartDate && matchesEndedDate;
  });

  const totalAmount = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);

  const loadExpenses = async () => {
    // Load expenses from storage and set to state
    const data = await getExpenses();
    setExpenses(data);
  };

  const handleClearFilterDate = () => {
    setStartDate(null);
    setEndedDate(null);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ការគ្រប់គ្រងចំណាយ</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>ចំណាយសរុប</Text>
        <Text style={styles.cardTotal}>$5000.00</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
        <Pressable
          onPress={()=> setFilter('ទាំងអស់')}
          style={[styles.filterButton, filter == 'ទាំងអស់' && styles.activeFilter]}
        >
          <Text style={filter == 'ទាំងអស់' && styles.activeFilterText}>ទាំងអស់</Text>
        </Pressable>
        {categories.map((cat, index) => (
          <Pressable
            onPress={() => setFilter(cat)}
            style={[styles.filterButton, filter == cat && styles.activeFilter]}
            key={index}
          >
            <Text style={filter == cat && styles.activeFilterText}>{cat}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>ប្រតិបត្តការ</Text>
      <View style={styles.filterContainer}>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Pressable
            onPress={() => setShowStartPicker(true)}
            style={styles.datePickerButton}
          >
            <Ionicons name="calendar" size={16} color={Colors.secondary} />
            <Text>
              {startDate ? startDate.toLocaleDateString() : "ចាប់ពីថ្ងៃ"}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setShowEndedPicker(true)}
            style={styles.datePickerButton}
          >
            <Ionicons name="calendar" size={16} color={Colors.secondary} />
            <Text>
              {endedDate ? endedDate.toLocaleDateString() : "ដល់ថ្ងៃ"}
            </Text>
          </Pressable>
        </View>
        <Pressable onPress={handleClearFilterDate} style={styles.clearButton}>
          <Ionicons name="close-circle" size={16} color={Colors.secondary} />
          <Text>លុបថ្ងៃជ្រើស</Text>
        </Pressable>
      </View>

      <View style={{ height: 400, marginTop: 12 }}>
        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              មិនមានចំណាយទេ
            </Text>
          }
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }: { item: IExpense }) => (
            <Pressable
              style={styles.expenseItem}
            >
              <View>
                <Text style={styles.expenseTitle}>{item.title}</Text>
                <Text style={styles.expenseCategory}>{item.category}</Text>
              </View>
              <Text style={styles.expenseAmount}>${item.amount.toFixed(2)}</Text>
            </Pressable>
          )}
        />
      </View>

      {showStartPicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display="default"
          onDismiss={() => {
            setShowStartPicker(false)
          }}
          onValueChange={(_, date) => {
            setShowStartPicker(false);
            if (date) {
              setStartDate(date);
            }
          }}
        />
      )}
      {showEndedPicker && (
        <DateTimePicker
          value={endedDate || new Date()}
          mode="date"
          display="default"
          onDismiss={() => {
            setShowEndedPicker(false)
          }}
          onValueChange={(_, date) => {
            setShowEndedPicker(false);
            if (date) {
              setEndedDate(date);
            }
          }}
        />
      )
      }
    </View>
  );
}
