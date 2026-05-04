import { createBrowserRouter } from "react-router";
import { SplashScreen } from "./screens/SplashScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { MapScreen } from "./screens/MapScreen";
import { ScheduleScreen } from "./screens/ScheduleScreen";
import { SOSScreen } from "./screens/SOSScreen";
import { AIChatScreen } from "./screens/AIChatScreen";
import { CulturalGuideScreen } from "./screens/CulturalGuideScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    element: <Layout />,
    children: [
      { path: "/home", element: <HomeScreen /> },
      { path: "/map", element: <MapScreen /> },
      { path: "/schedule", element: <ScheduleScreen /> },
      { path: "/sos", element: <SOSScreen /> },
      { path: "/chat", element: <AIChatScreen /> },
      { path: "/culture", element: <CulturalGuideScreen /> },
      { path: "/settings", element: <SettingsScreen /> },
    ],
  },
]);
