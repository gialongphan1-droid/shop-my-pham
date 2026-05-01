"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Hero() {
	const { theme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	// Bắt buộc phải đợi mounted để tránh lỗi Hydration (lệch giao diện server/client)
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// Trả về một placeholder hoặc khoảng trống có cùng chiều cao để tránh bị nhảy trang
		return <div className="w-full h-[500px] bg-gray-100 animate-pulse" />;
	}

	// Xác định đường dẫn ảnh dựa trên theme hiện tại
	const imageSrc =
		theme === "dark"
			? "/assets/images/hero-dark.png"
			: "/assets/images/hero-light.png";

	return (
		<section className="relative w-full h-[500px] transition-all duration-500">
			<Image
				src={imageSrc}
				alt="Allure Selection Hero"
				fill
				priority
				className="object-cover"
			/>
			{/* Overlay nội dung nếu cần */}
			<div className="absolute inset-0 flex items-center justify-center">
				<h1 className="text-white text-5xl font-serif">Allure Selection</h1>
			</div>
		</section>
	);
}
