import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

function MealItem({ item }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={(pressed) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: '#ccc' }}
      >
        <View>
          <Image src={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{item.duration}m</Text>
          <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>
            {item.affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
