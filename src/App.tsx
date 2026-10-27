import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Layout>
      {/* Navigation */}
      <Navbar />

      {/* Routes */}
      <AppRoutes />
    </Layout>
  );
}

export default App;
