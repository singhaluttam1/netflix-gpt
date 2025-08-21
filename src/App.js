import Body from './components/Body';
import {Provider} from "react-redux";
import appStore from './utils/addStore';

function App() {
  return (
    <div className="min-h-screen  text-white overflow-x-hidden">
      <Provider store={appStore}>

      <Body/>
      </Provider>
    </div>
  );
}

export default App;
