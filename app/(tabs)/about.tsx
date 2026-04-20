import { styles } from "@/assets/styles/style";
import { Text, View } from "react-native";

export default function AboutScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Expense Tracker</Text>
            <Text style={styles.subtitle}>ការគ្រប់គ្រងចំណាយសម្រាប់អ្នកប្រើប្រាស់</Text>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.aboutTitle}>អំពីកម្មវិធី</Text>
                <Text style={styles.aboutText}>កម្មវិធីនេះគឺជាកម្មវិធីគ្រប់គ្រងចំណាយដែលអាចជួយអ្នកតាមដានចំណាយរបស់អ្នកបានយ៉ាងងាយស្រួល។ អ្នកអាចបញ្ចូលចំណាយថ្មីៗ រកមើលចំណាយតាមប្រភេទ និងកាលបរិច្ឆេទ និងទទួលបានការវិភាគចំណាយរបស់អ្នក។</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.aboutTitle}>អ្នកអភិវឌ្ឍន៍</Text>
                <Text style={styles.aboutText}>កម្មវិធីនេះត្រូវបានអភិវឌ្ឍន៍ដោយក្រុមអ្នកអភិវឌ្ឍន៍ដែលមានជំនាញក្នុងការបង្កើតកម្មវិធីទូរស័ព្ទដៃ។ យিាងមានបំណងចង់ផ្តល់នូវកម្មវិធីដែលមានប្រសិទ្ធភាព និងងាយស្រួលប្រើប្រាស់សម្រា​ប់អ្នកប្រើប្រាស់។</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.aboutTitle}>ព័ត៌មាន​បន្ថែម</Text>
                <Text style={styles.aboutText}>សម្រាប់ព័ត៌មានបន្ថែម ឬការគាំទ្រផ្នែកបច្ចេកទេស សូមទំនាក់ទំនងមកកាន់យើងតាមរយៈ៖</Text>
                <Text style={styles.aboutText}>អ៊ីមែល: info@expensetracker.com</Text>
                <Text style={styles.aboutText}>ទូរស័ព្ទ: +1 234 567 890</Text>
                <Text style={styles.aboutText}>version: 1.0.0</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.aboutTitle}>សេចក្តីសង្ខេប</Text>
                <Text style={styles.aboutText}>Expense Tracker គឺជាកម្មវិធីគ្រប់គ្រងចំណាយដែលមានមុខងារជាច្រើនដូចជាការបញ្ចូលចំណាយថ្មីៗ ការស្វែងរកចំណាយតាមប្រភេទ និងកាលបរិច្ឆេទ និងការវិភាគចំណាយ។ កម្មវិធីនេះត្រូវបានអភិវឌ្ឍន៍ដោយក្រុមអ្នកអភិវឌ្ឍន៍ដែលមានជំនាញ ហើយយើងសង្ឃឹមថាវានឹងជួយអ្នកគ្រប់គ្រងចំណាយរបស់អ្នកបានយ៉ាងមានប្រសិទ្ធភាព។</Text>
            </View>
        </View>
    )
}