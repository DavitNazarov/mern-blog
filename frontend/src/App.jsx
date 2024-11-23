import AppRouters from "@/router/AppRouters";
import MainNavigation from "@/shared/components/Navigation/MainNavigation";
function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <AppRouters />
      </main>
    </>
  );
}

export default App;
