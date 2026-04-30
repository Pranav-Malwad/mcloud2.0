'use client'
import React, { createContext, useContext, useState } from 'react'

// Create a context
const EditContext = createContext()

// Create a provider component
export const EditProvider = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => {
    setIsEditing(prev => !prev)
  }

  const handleSave = () => {
    // Save logic goes here
    setIsEditing(false)
  }

  return <EditContext.Provider value={{ isEditing, toggleEdit, handleSave }}>{children}</EditContext.Provider>
}

// Hook to use the context in other components
export const useEdit = () => {
  return useContext(EditContext)
}
