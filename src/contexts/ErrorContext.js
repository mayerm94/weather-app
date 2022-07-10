import {createContext, useMemo, useState} from 'react'

export const ErrorContext = createContext()

export function ErrorProvider({ children }) {
  const [error, setError] = useState(null)
  const ctx = useMemo(() => ({ error, setError }), [error])

  return <ErrorContext.Provider value={ctx}>{children}</ErrorContext.Provider>
}