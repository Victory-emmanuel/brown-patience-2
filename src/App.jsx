import { useEffect, useState } from "react";
import {
  ColorMode,
  Faq,
  Footer,
  NavBar,
  Socials,
} from "./components/components";
import {
  Home,
  Blog,
  Services,
  About,
  Book,
  Subs,
  Contact,
  Community,
  BlogContentPg,
  GuidianceForSolopreneur,
  CoachingForAuthors,
  Editing,
  ContentWriting,
  StoryWritingCoaching,
} from "./pages/pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const element = document.documentElement;

  const options = [
    { icon: "sunny-outline", text: "light" },
    { icon: "moon-outline", text: "dark" },
  ];

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [element.classList, theme]);
  return (
    <BrowserRouter>
      <div className="app relative dark:bg-secondary  duration-100">
        <div
          id=""
          className="fixed top-5 z-20 right-10 duration-100  bg-primary rounded"
        >
          {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                theme === opt.text && "  text-accent"
              }`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>
        <ColorMode />
        <NavBar />
        <Socials />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book" element={<Book />} />
          <Route path="/subs" element={<Subs />} />
          <Route
            path="/guidianceForSolopreneur"
            element={<GuidianceForSolopreneur />}
          />
          <Route path="/coachingForAuthors" element={<CoachingForAuthors />} />
          <Route path="/editing" element={<Editing />} />
          <Route path="/contentWriting" element={<ContentWriting />} />
          <Route
            path="/storyWritingCoaching"
            element={<StoryWritingCoaching />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blogContentPg" element={<BlogContentPg />} />
        </Routes>
        <Faq />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
