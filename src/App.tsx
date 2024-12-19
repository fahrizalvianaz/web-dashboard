import './App.css'
import { Sidebar } from './component/Sidebar.tsx'
import { Header } from "./component/Header.tsx";

function App() {


  return (
    <>
        <main className="grid grid-cols-[220px,_1fr]">
            <Sidebar/>
            <div>
                <Header/>
                <div className="grid grid-cols-3 gap-2 mx-6 h-24 my-4">
                    <div className="bg-blue-900 rounded">1</div>
                    <div className="bg-fuchsia-900 rounded">2</div>
                    <div className="bg-green-900 rounded">3</div>
                </div>
            </div>
        </main>
    </>
  )
}

export default App
