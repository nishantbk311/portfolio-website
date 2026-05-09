/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { ScrollProvider } from "./context/ScrollContext.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";
import { AppRoutes } from "./AppRoutes.tsx";

export default function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 transition-colors duration-300">
            <Navbar />
            <main>
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ScrollProvider>
    </ThemeProvider>
  );
}

