/*

  Class contexto para autenticação com uma api externa(nao finalizada)

*/
import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthData {
  token: string;
  username: string;
  password: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (username: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export default function AuthProvider({ children }) {
  const [authData, setAuthData] = useState<AuthData>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadStorageData()
  })

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@authData')
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized)
        setAuthData(_authData)
      }
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  async function signIn(username: string, password: string): Promise<AuthData> {
   
    return
  }

  async function signOut() {
    setAuthData(undefined)
    AsyncStorage.removeItem('@authData');
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth error')
  }

  return context;
}