import Navbar from "@/components/Header";
import "./globals.scss";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Lama Dev",
    description: "This is the description",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <AuthProvider>
                        <div className="container">
                            <Header />
                            {children}
                            <Footer />
                        </div>
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
