import { Outlet } from "react-router-dom";
import Navbar2 from "../../components/Navbar2";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Imagen from "../../components/Imagen";

export const Layout = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <Navbar2 />


      <main>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools />
        </QueryClientProvider>
        
      </main>

      <footer>UNA 2023</footer>
    </>
  );
};

export default Layout;
