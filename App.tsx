import { StatusBar } from 'expo-status-bar';
import { HomeStackNavigation } from './src/navigation/homeStackNavigation';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <HomeStackNavigation />
    </>
  );
}
