import Navbar from "@/components/Header";
import "./globals.scss";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Header from "@/components/Header";
import { SearchTextProvider } from "@/context/SearchText";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Cheat Sheets",
    description: "Extraits de code pour les développeurs",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <AuthProvider>
                        <SearchTextProvider>
                            <div className="container">
                                <Header />
                                {children}
                                {/* <Footer /> */}
                            </div>
                        </SearchTextProvider>
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
