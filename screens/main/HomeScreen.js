import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { Feather, Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.searchContainer}>
          <Ionicons name="location-outline" size={20} color="#666" style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search for meals or area"
            placeholderTextColor="#999"
          />
          <Feather name="search" size={20} color="#666" style={styles.searchIcon} />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <TouchableOpacity style={styles.filterBtn}>
            <Feather name="filter" size={16} color="#FFA500" />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.categoryCard}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.categoryImg} />
            <Text style={styles.categoryText}>Pizza</Text>
          </View>
          <View style={styles.categoryCard}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fHww' }} style={styles.categoryImg} />
            <Text style={styles.categoryText}>Burgers</Text>
          </View>
          <View style={styles.categoryCard}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RlYWt8ZW58MHx8MHx8fDA%3D' }} style={styles.categoryImg} />
            <Text style={styles.categoryText}>Steak</Text>
          </View>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.itemCard}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D' }} style={styles.itemImg} />
            <View style={styles.itemInfo}>
              <View>
                <Text style={styles.itemName}>Food 1</Text>
                <Text style={styles.itemAuthor}>By Viet Nam</Text>
              </View>
              <Text style={styles.itemPrice}>1$</Text>
            </View>
          </View>
          <View style={styles.itemCard}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D' }} style={styles.itemImg} />
            <View style={styles.itemInfo}>
              <View>
                <Text style={styles.itemName}>Food 2</Text>
                <Text style={styles.itemAuthor}>By Viet Nam</Text>
              </View>
              <Text style={styles.itemPrice}>3$</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.itemCard}>
            <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D' }} style={styles.itemImg} />
            <View style={styles.itemInfo}>
              <View>
                <Text style={styles.itemName}>Food 1</Text>
                <Text style={styles.itemAuthor}>By Viet Nam</Text>
              </View>
              <Text style={styles.itemPrice}>3$</Text>
            </View>
          </View>
          <View style={styles.itemCard}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D' }} style={styles.itemImg} />
            <View style={styles.itemInfo}>
              <View>
                <Text style={styles.itemName}>Food 2</Text>
                <Text style={styles.itemAuthor}>By Viet Nam</Text>
              </View>
              <Text style={styles.itemPrice}>4$</Text>
            </View>
          </View>
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 20 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 25,
    elevation: 2, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  searchIcon: { marginHorizontal: 5 },
  searchInput: { flex: 1, fontSize: 16, color: '#333' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, marginTop: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  filterBtn: { flexDirection: 'row', alignItems: 'center' },
  filterText: { color: '#FFA500', marginLeft: 5, fontSize: 14 },
  viewAllText: { color: '#FFA500', fontSize: 14 },
  horizontalScroll: { marginBottom: 20 },
  categoryCard: { alignItems: 'center', marginRight: 15 },
  categoryImg: { width: 100, height: 70, borderRadius: 8, marginBottom: 8 },
  categoryText: { fontSize: 14, color: '#333', fontWeight: '500' },
  itemCard: { width: 200, backgroundColor: '#fff', borderRadius: 10, marginRight: 15, padding: 10, borderWidth: 1, borderColor: '#F0F0F0' },
  itemImg: { width: '100%', height: 120, borderRadius: 8, marginBottom: 10 },
  itemInfo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  itemAuthor: { fontSize: 12, color: '#888', marginTop: 2 },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#000' }
});