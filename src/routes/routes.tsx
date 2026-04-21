
import  { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";


const Header = lazy(() => import("../components/Header"));
const Home = lazy(() => import("../Pages/Home"));
const Career = lazy(() => import("../Pages/Career"));
const Contact = lazy(() => import("../Pages/Contact"));
const Terms = lazy(() => import("../Pages/Terms"));
const PrivacyPolicy = lazy(() => import("../Pages/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("../Pages/RefundPolicy"));
const Team = lazy(() => import("../Pages/Team"));
import Loading from "../components/Loading";
import Invitation from "../Pages/Invitation";

const RouteFallback = () => (
  <div style={{ padding: "3rem", textAlign: "center" }}><Loading /></div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<RouteFallback />}>
        <Header />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<RouteFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/career",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <Career />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/terms-of-service",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <Terms />
          </Suspense>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: "/refund-policy",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <RefundPolicy />
          </Suspense>
        ),
      },
      {
        path: "/team",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <Team />
          </Suspense>
        ),
      },
      {
        path : "/invite",
        element : <Invitation />
      }
    ],
  },
]);
