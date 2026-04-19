import { home } from "@/assets/styles/home";
import { categories } from "@/constand/categories";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constand/colors";

interface IExpense {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}

export default function HomeScreen() {
  const [filter, setFilter] = useState(categories[0]);
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

  const handleClearFilterDate = () => {
    setStartDate(null);
    setEndedDate(null);
  };
  return (
    <View style={home.container}>
      <Text style={home.title}>ការគ្រប់គ្រងចំណាយ</Text>
      <View style={home.card}>
        <Text style={home.cardText}>ចំណាយសរុប</Text>
        <Text style={home.cardTotal}>$5000.00</Text>
      </View>

      <ScrollView horizontal>
        {categories.map((cat, index) => (
          <Pressable
            onPress={() => setFilter(cat)}
            style={[home.filterButton, filter == cat && home.activeFilter]}
            key={index}
          >
            <Text style={filter == cat && home.activeFilterText}>{cat}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={home.sectionTitle}>ប្រតិបត្តការ</Text>
      <View style={home.filterContainer}>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Pressable
            onPress={() => setShowStartPicker(true)}
            style={home.datePickerButton}
          >
            <Ionicons name="calendar" size={16} color={Colors.secondary} />
            <Text>
              {startDate ? startDate.toLocaleDateString() : "ចាប់ពីថ្ងៃ"}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setShowEndedPicker(true)}
            style={home.datePickerButton}
          >
            <Ionicons name="calendar" size={16} color={Colors.secondary} />
            <Text>
              {endedDate ? endedDate.toLocaleDateString() : "ដល់ថ្ងៃ"}
            </Text>
          </Pressable>
        </View>
        <Pressable onPress={handleClearFilterDate} style={home.clearButton}>
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
              style={home.expenseItem}
            >
              <View>
                <Text style={home.expenseTitle}>{item.title}</Text>
                <Text style={home.expenseCategory}>{item.category}</Text>
              </View>
              <Text style={home.expenseAmount}>${item.amount.toFixed(2)}</Text>
            </Pressable>
          )}
        />
      </View>

      {showStartPicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display="default"
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
          onValueChange={(_, date) => {
            setShowEndedPicker(false);
            if (date) {
              setEndedDate(date);
            }
          }}
        />
      )}
    </View>
  );
}
