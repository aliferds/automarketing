// import { SocialIcon } from 'react-native-elements'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InstagramButton = ({ title }) => {
  const navigation = useNavigation();

  const handleInstagramPress = () => {
    // Aqui você pode navegar para a tela desejada, por exemplo, 'InstagramScreen'
    // navigation.navigate();
  };
  return (
    <TouchableOpacity style={ibtn.buttonContainer}>
      <Text style={ibtn.buttonText}>
          {title}
      </Text>
    </TouchableOpacity>
  );
};


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AUTOMARKETING</Text>
      <Text style={styles.slogan}>“Automatizando estratégias, elevando seu sucesso!"</Text>
      <InstagramButton title={'Conecte com seu Instagram!'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7262',
  },
  slogan: {
    fontSize: 20,
    marginTop: 60,
    marginBottom: 200,
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const ibtn = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: 'white',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10, // Adicionando padding vertical
    paddingHorizontal: 20, // Adicionando padding horizontal
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
});