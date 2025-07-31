import React from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.tsx'
import './index.css'

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// const PUBLISHABLE_KEY = "pk_test_YWN0aXZlLWRvZ2Zpc2gtNDIuY2xlcmsuYWNjb3VudHMuZGV2JA";

const PUBLISHABLE_KEY = "pk_live_Y2xlcmsuc2lsby50YXgk";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
