import { useLayoutEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import {
  addFavouriteMeal,
  removeFavouriteMeal,
} from '../features/favouriteMealsSlice';

function MealDetailsScreen({ route, navigation }) {
  const { favouriteMealsId } = useSelector((state) => state.favouriteMeals);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealsFavourite = favouriteMealsId.includes(mealId);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealsFavourite ? 'star' : 'star-outline'}
            color="white"
            onPress={handleFavouriteMeals}
          />
        );
      },
    });
  }, [navigation, handleFavouriteMeals, mealsFavourite]);

  const handleFavouriteMeals = useCallback(
    function () {
      if (mealsFavourite) {
        dispatch(removeFavouriteMeal({ id: mealId }));
      } else {
        dispatch(addFavouriteMeal({ id: mealId }));
      }
    },
    [dispatch, mealId, mealsFavourite]
  );

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails item={selectedMeal} textStyle={styles.detailText} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
