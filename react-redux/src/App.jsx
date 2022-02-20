import { Provider } from "react-redux";
import ItemContainer from "./components/ItemContainer";
// import CrackerContainer from "./components/CrackerContainer";
// import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <CakeContainer /> */}
        {/* <CrackerContainer /> */}
        {/* <HooksCakeContainer /> */}
        {/* <NewCakeContainer /> */}
        <ItemContainer cake />
      </div>
    </Provider>
  );
}

export default App;
