import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import AuthProvider from './Provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient, QueryClientProvider
} from '@tanstack/react-query'
const queryClient =new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
    <RouterProvider router={router} />
    <Toaster />
    </AuthProvider>

     </QueryClientProvider>
     

     </HelmetProvider>
  
  </StrictMode>,
)
