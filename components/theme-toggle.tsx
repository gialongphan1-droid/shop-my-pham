"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	// Lấy hàm setTheme từ thư viện next-themes
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	// Đợi component load xong trên trình duyệt để tránh lỗi hiển thị
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="p-5"></div>; // Khoảng trống tạm thời khi đang tải
	}

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
			aria-label="Toggle theme"
		>
			{/* Nếu là mode dark thì hiện mặt trời, mode light hiện mặt trăng */}
			{theme === "dark" ? (
				<Sun className="h-5 w-5 text-yellow-400" />
			) : (
				<Moon className="h-5 w-5 text-slate-700" />
			)}
		</button>
	);
}
