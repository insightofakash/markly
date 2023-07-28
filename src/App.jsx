import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NoPage from "./pages/NoPage";
import DashboardPage from "./pages/DashboardPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Toaster position="top-center" />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  );
}

export default App;
