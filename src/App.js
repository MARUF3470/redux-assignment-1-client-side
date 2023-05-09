import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes/routes";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
