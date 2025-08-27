import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Router, Route } from 'wouter'
import HomePage from './pages/HomePage'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
      </Router>
    </QueryClientProvider>
  )
}