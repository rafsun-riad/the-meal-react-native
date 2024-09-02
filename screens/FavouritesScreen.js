import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

function FavouritesScreen() {
  const { favouriteMealsId } = useSelector((state) => state.favouriteMeals);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsId.includes(meal.id)
  );

  return favouriteMeals.length === 0 ? (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favourite meals yet!</Text>
    </View>
  ) : (
    <MealsList data={favouriteMeals} />
  );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
