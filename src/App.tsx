/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ScrollProvider } from "./context/ScrollContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./AppRoutes";

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

