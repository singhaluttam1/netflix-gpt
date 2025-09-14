import Body from './components/Body';
import { Provider } from "react-redux";
import appStore from './utils/addStore';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <Provider store={appStore}>
    <div className="flex flex-col min-h-screen text-white overflow-x-hidden">
        <Header />  
        <main className="flex-grow min-h-[75vh] min-w-[310px]">
        <Body />

        </main>
        <Footer/>
    </div>
      </Provider>
  );
}

export default App;