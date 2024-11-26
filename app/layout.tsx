import { Metadata } from "next";
import Layout from "./about_us/layout";
import AboutUsLayout from "./about_us/layout";
import Navigation from "./components/navigation";

export const metadata: Metadata = {
    title:{
        template: "%s | Next Movies",
        default: "Next Movies"
    },
    description: "The best movies on the best framework",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
