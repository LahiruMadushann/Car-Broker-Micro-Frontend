import React from 'react'

// Define prop types if needed
export interface HeaderProps {
  // Add any props you might want to pass to the header
}

// Use a named export and define proper React component type
export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      Header
    </header>
  )
}

export default Header;