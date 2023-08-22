import type { AppProps } from "next/app";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <div className="w-full max-w-xl mx-auto">
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
