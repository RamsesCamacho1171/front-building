import { AuthProvider } from "./context";
import { Navigation } from "./routes";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <AuthProvider>
      <Navigation/>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </AuthProvider >
  );
}

export default App;
