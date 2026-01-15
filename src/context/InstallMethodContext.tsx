import { createContext, useContext, useState, type ReactNode } from 'react'

type InstallMethod = 'npm' | 'manual'

interface InstallMethodContextType {
  installMethod: InstallMethod
  setInstallMethod: (method: InstallMethod) => void
}

const InstallMethodContext = createContext<InstallMethodContextType | undefined>(undefined)

export function InstallMethodProvider({ children }: { children: ReactNode }) {
  const [installMethod, setInstallMethod] = useState<InstallMethod>('npm')

  return (
    <InstallMethodContext.Provider value={{ installMethod, setInstallMethod }}>
      {children}
    </InstallMethodContext.Provider>
  )
}

export function useInstallMethod() {
  const context = useContext(InstallMethodContext)
  if (!context) {
    throw new Error('useInstallMethod must be used within InstallMethodProvider')
  }
  return context
}
