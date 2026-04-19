import { Colors } from "@/constand/colors";
import { StyleSheet } from "react-native";

export const home = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 800,
        textAlign: 'center',
        marginBottom: 16,
        color: Colors.secondary
    },
    card: {
        backgroundColor: Colors.primary,
        borderRadius: 12,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12
    },
    cardText: {
        color: Colors.white,
        fontSize: 16,
        marginBottom: 8
    },
    cardTotal: {
        color: Colors.white,
        fontSize: 24,
        fontWeight: 800
    },
    filterButton: {
        backgroundColor: Colors.gray,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 8
    },
    activeFilter:{
        backgroundColor: Colors.secondary
    },
    activeFilterText:{
        color: Colors.white,
        fontWeight: 600
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 600,
        color: Colors.secondary,
        marginVertical: 12
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    datePickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        gap: 6
    },
    clearButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: Colors.gray
    }
})