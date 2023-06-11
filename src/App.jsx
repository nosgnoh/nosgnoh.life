import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ThemeSwitcher from './components/ThemeSwitcher';
import ThemeColorSwitcher from './components/ThemeColorSwitcher';
import Gallery from "./pages/gallery";
import ErrorPage from "./components/Error";
import GalleryDetail from "./pages/gallery/components/GalleryDetail";
import Album from "./pages/album";
// import Album from "./pages/gallery/components/Album";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
    // children: [
    //   {
    //     path: ":tagId",
    //     element: <Album />,
    //   },
    // ],
  },
  {
    path: "/albums",
    element: <Album />,
  },

  // {
  //   path: "/gallery/:galleryId",
  //   element: <GalleryDetail />,
  // }

]);

function App() {
  return (
    <main className="bg-white dark:bg-black relative">
      <div className="">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <ThemeSwitcher />
          <RouterProvider router={router} />
        </div>
      </div>

      {/* <FAQ /> */}
    </main>
  );
}

export default App;
