import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, {persistor} from "../redux/store";
import { poppinsFontClassName } from "../lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={poppinsFontClassName}>
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}
