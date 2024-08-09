import { GlobalStyles } from "./Styles/global.js";
import { TypingBox } from "./components";

function App() {
    return (
        <div className="canvas">
            <GlobalStyles />
            <div>Header</div>
            <TypingBox />
            <div>Footer</div>
        </div>
    );
}

export default App;
