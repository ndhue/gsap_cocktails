import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-screen">
      <h2 className="text-3xl text-orange-600">App</h2>
    </div>
  )
}

export default App