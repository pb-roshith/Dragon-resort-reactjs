import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import RootLayout from "./rootlayout/RootLayout";
import Home from './components/home';
import Services from './components/services';
import About from './components/about';
import Contact from "./components/contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path='services' element={<Services />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
