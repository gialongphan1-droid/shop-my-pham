import "./globals.css";
import { Playfair_Display, Lobster } from "next/font/google";

// 1. Cần import ThemeProvider thì máy mới hiểu thẻ <ThemeProvider> bên dưới là gì
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
});

const lobster = Lobster({
	weight: "400",
	subsets: ["latin", "vietnamese"],
	variable: "--font-lobster",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="vi" suppressHydrationWarning>
			<body
				className={`${playfair.variable} ${lobster.variable} font-serif antialiased`}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{/* XÓA ĐOẠN FIXED DIV NÀY ĐI */}
					{/* <div className="fixed top-4 right-4 z-50">
                        <ThemeToggle />
                    </div> */}

					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
