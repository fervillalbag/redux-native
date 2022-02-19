import { Provider } from "react-redux";
import CrackerContainer from "./components/CrackerContainer";
// import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <CakeContainer /> */}
        <CrackerContainer />
        {/* <HooksCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
