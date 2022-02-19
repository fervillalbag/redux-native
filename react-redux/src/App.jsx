import { Provider } from "react-redux";
// import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <CakeContainer /> */}
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
