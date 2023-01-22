import React from 'react';
import { ImageBackground, Button, Image, StyleSheet, View } from "react-native";


export default function WelcomeScreen( {navigation} ) {
    const localImage = require('../assets/background2.png');
    return (
        <View style = {styles.container}>
            <ImageBackground 
            source={localImage} 
            resizeMode = {"cover"}
            style={styles.image}>
             <Image 
                source={require('../assets/nametitle.png')}
                style={{width: 500, height: 100}} />
            <Image 
                source={require('../assets/cat_astronaut.png')}
                style={{width: 300, height: 300}} />
            <Button
                title = "let's learn!"
                color="#fff"
                onPress ={() => navigation.navigate("Curriculum", { content: "curriculum"})}
            />
            <Button
                title = "library"
                color="#fff"
                onPress ={() => navigation.navigate("Library", { content: "Library"})}
            />
            </ImageBackground>
        </View>

    );
}

//React Native Style Sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C698F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

<<<<<<< HEAD

=======
    
>>>>>>> 584ae906daf8826a0561ac6982ad7bfd7ef9808b
})