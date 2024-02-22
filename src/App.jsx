import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react" /*importing SignIn and SignOut btns*/

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <SignedOut>
          <SignInButton />
              <h3>This content is PUBLIC. Only signed out users can see this.</h3>
        </SignedOut>

        <SignedIn>
          <SignOutButton signOutCallback={() => redirect('/')} />
              <h3>This content is PRIVATE. Only signed in users can see this.</h3>
        </SignedIn>
      </div>
  )
}

export default App
