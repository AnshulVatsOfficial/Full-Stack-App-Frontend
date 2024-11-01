import { Button } from "./components/ui/button";
import { useUserData } from "./store/slices/userSlice";

const App = () => {
  const { userData, setUserData } = useUserData();
  console.log("userData", userData);

  return (
    <Button
      variant="ghost"
      onClick={() =>
        setUserData({
          name: "Anshul Vats",
          email: "anshul.vats@fiftyfivetech.io",
        })
      }
    >
      Shadcn Button
    </Button>
  );
};

export default App;
