import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View>
          <Link style={{color: 'blue'}} href="/home">Go to Home</Link>
          <Link style={{color: 'blue'}} href="/settings">Go to Settings</Link>
        </View>
      );
}
