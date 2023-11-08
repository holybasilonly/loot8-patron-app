import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View>
            <Text>Settings Page</Text>
            <Link style={{color: 'blue'}} href="/">Go Back</Link>
        </View>
      );
}
