import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Eagerly load the shell and home page for fastest initial paint
import Home from "./pages/Home";

// Lazy-load all other pages so the initial bundle stays lean
const HowItWorks       = lazy(() => import("./pages/HowItWorks"));
const MeetingAssistant = lazy(() => import("./pages/features/MeetingAssistant"));
const AiNotes          = lazy(() => import("./pages/features/AiNotes"));
const Integrations     = lazy(() => import("./pages/features/Integrations"));
const MitraChat        = lazy(() => import("./pages/features/MitraChat"));
const Lens             = lazy(() => import("./pages/features/Lens"));
const UseCasePage      = lazy(() => import("./pages/use-cases/UseCasePage"));
const Pricing          = lazy(() => import("./pages/Pricing"));
const Enterprise       = lazy(() => import("./pages/Enterprise"));
const Security         = lazy(() => import("./pages/Security"));
const Comparison       = lazy(() => import("./pages/vs/Comparison"));
const About            = lazy(() => import("./pages/About"));
const Careers          = lazy(() => import("./pages/Careers"));
const Blog             = lazy(() => import("./pages/Blog"));
const Help             = lazy(() => import("./pages/Help"));
const Contact          = lazy(() => import("./pages/Contact"));
const Download         = lazy(() => import("./pages/Download"));
const SignIn           = lazy(() => import("./pages/SignIn"));
const Terms            = lazy(() => import("./pages/legal/Terms"));
const Privacy          = lazy(() => import("./pages/legal/Privacy"));
const NotFound         = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Minimal skeleton shown while a lazy page loads
function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-6 h-6 rounded-full border-2 border-[#88E788] border-t-transparent animate-spin" />
    </div>
  );
}

function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
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
      { path: "how-it-works",               element: <HowItWorks /> },
      { path: "features/meeting-assistant",  element: <MeetingAssistant /> },
      { path: "features/ai-notes",           element: <AiNotes /> },
      { path: "features/integrations",       element: <Integrations /> },
      { path: "features/mitra-chat",         element: <MitraChat /> },
      { path: "features/lens",               element: <Lens /> },
      { path: "use-cases/founders",          element: <UseCasePage persona="founders" /> },
      { path: "use-cases/sales",             element: <UseCasePage persona="sales" /> },
      { path: "use-cases/consultants",       element: <UseCasePage persona="consultants" /> },
      { path: "use-cases/ngo",               element: <UseCasePage persona="ngo" /> },
      { path: "pricing",                     element: <Pricing /> },
      { path: "enterprise",                  element: <Enterprise /> },
      { path: "security",                    element: <Security /> },
      { path: "vs/granola",                  element: <Comparison competitor="granola" /> },
      { path: "vs/otter",                    element: <Comparison competitor="otter" /> },
      { path: "about",                       element: <About /> },
      { path: "careers",                     element: <Careers /> },
      { path: "blog",                        element: <Blog /> },
      { path: "help",                        element: <Help /> },
      { path: "contact",                     element: <Contact /> },
      { path: "download",                    element: <Download /> },
      { path: "sign-in",                     element: <SignIn /> },
      { path: "legal/terms",                 element: <Terms /> },
      { path: "legal/privacy",               element: <Privacy /> },
      { path: "*",                           element: <NotFound /> },
    ],
  },
]);
