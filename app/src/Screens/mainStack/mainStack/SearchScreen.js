import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import COLORS from '../../../../Config/Colors';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import TxtInput from '../../../Components/TxtInput';

const SearchScreen = ({ navigation }) => {
  const topSearches = [
    { id: '1', text: 'Lorem ipsum dolor sit amet, consectetur a' },
    { id: '2', text: 'Lorem ipsum dolor sit amet, consectetur a' },
    { id: '3', text: 'Lorem ipsum dolor sit amet, consectetur a' },
    { id: '4', text: 'Lorem ipsum dolor sit amet, consectetur a' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <IconButton icon="chevron-left" size={30} iconColor={COLORS.bgColor} onPress={() => navigation.goBack()} />
        <TxtInput
            icon={'magnify'}
            iconColor={COLORS.darkTextColor}
            IconSize={20}
            placeholder={'Search'}
            style={{borderRadius: widthPercentageToDP(4)}}
            // onFocus={()=> navigation.navigate('searchScreen')}
            
          />
      </View>
      <Text style={styles.topSearches}>Top searches</Text>
      <FlatList
        data={topSearches}
        keyExtractor={(item) => item.id}
        
        renderItem={({ item }) => (
          <View style={styles.searchItem}>
            <Text style={{fontWeight: '500', color: '#0A212B' }} >{item.text}</Text>
            <IconButton icon="close" size={20} iconColor={ '#0A212B'} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: COLORS.inputBgColor,
    borderRadius: 8,
    padding: 8,
  },
  topSearches: {
    marginTop: widthPercentageToDP('2%'),
    fontWeight: 'bold',
    color: COLORS.bgColor,
    marginBottom: widthPercentageToDP('3%')

  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: widthPercentageToDP('3%'),
    backgroundColor : COLORS.cardBgColor,
    marginBottom: widthPercentageToDP('3%'),
    borderRadius: widthPercentageToDP('10%'),
  },
});

export default SearchScreen;
