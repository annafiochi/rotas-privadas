import React, { useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Plataform,
    ActivityIndicator,
} from 'react-native';
import {useAuth} from "..//../contexts/AuthContext";
import {Link} from 'expo-router';

export default  function  LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [loading, setLoading]= useState(false);


    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Preencha todos os campos');

        }
        setLoading(true);
        try {
            const result = await SpringAnimation(email, password);

            if (!result.sucess) {
                Alert.alert('Erro', result.message || 'Falha ao fazer login');
            
            }
        } catch (error) {
            Alert.alert('Erro', 'Falha ao fazer login');
        }finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.emoji}>😊</Text>
                <Text style={styles.title}>Bem-vindo!</Text>
                <Text style={styles.subtitle}>Faça login para continuar</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={!loading}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCapitalize="none"
                    editable={!loading}
                />
            </View>
        </KeyboardAvoidingView>
    );
}
