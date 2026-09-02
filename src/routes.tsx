import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import MeetingAssistant from "./pages/features/MeetingAssistant";
import AiNotes from "./pages/features/AiNotes";
import Integrations from "./pages/features/Integrations";
import MitraChat from "./pages/features/MitraChat";
import Lens from "./pages/features/Lens";
import UseCasePage from "./pages/use-cases/UseCasePage";
import Pricing from "./pages/Pricing";
import Enterprise from "./pages/Enterprise";
import Security from "./pages/Security";
import Comparison from "./pages/vs/Comparison";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Download from "./pages/Download";
import SignIn from "./pages/SignIn";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "how-it-works", Component: HowItWorks },
      { path: "features/meeting-assistant", Component: MeetingAssistant },
      { path: "features/ai-notes", Component: AiNotes },
      { path: "features/integrations", Component: Integrations },
      { path: "features/mitra-chat", Component: MitraChat },
      { path: "features/lens", Component: Lens },
      { path: "use-cases/founders", element: <UseCasePage persona="founders" /> },
      { path: "use-cases/sales", element: <UseCasePage persona="sales" /> },
      { path: "use-cases/consultants", element: <UseCasePage persona="consultants" /> },
      { path: "use-cases/ngo", element: <UseCasePage persona="ngo" /> },
      { path: "pricing", Component: Pricing },
      { path: "enterprise", Component: Enterprise },
      { path: "security", Component: Security },
      { path: "vs/granola", element: <Comparison competitor="granola" /> },
      { path: "vs/otter", element: <Comparison competitor="otter" /> },
      { path: "about", Component: About },
      { path: "careers", Component: Careers },
      { path: "blog", Component: Blog },
      { path: "help", Component: Help },
      { path: "contact", Component: Contact },
      { path: "download", Component: Download },
      { path: "sign-in", Component: SignIn },
      { path: "legal/terms", Component: Terms },
      { path: "legal/privacy", Component: Privacy },
      { path: "*", Component: NotFound },
    ],
  },
]);
