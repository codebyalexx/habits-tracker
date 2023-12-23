import store from "../utils/store";
import {Provider as StoreProvider} from "react-redux";

function App() {
  return (
    <StoreProvider store={store}>
        <div className='container mx-auto py-6'>
            <h1 className='text-4xl font-bold'>
                Hello, world!
            </h1>
        </div>
    </StoreProvider>
  );
}

export default App;
