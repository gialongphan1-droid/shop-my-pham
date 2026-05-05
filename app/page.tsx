"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

export default function AllurePage() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Đảm bảo component đã load xong trên trình duyệt để tránh lỗi Hydration
	useEffect(() => {
		setMounted(true);
	}, []);

	// Logic chọn ảnh Hero:
	// Nếu chưa mounted hoặc theme là light -> dùng ảnh light
	// Nếu đã mounted và theme là dark -> dùng ảnh dark
	const heroImage =
		mounted && theme === "dark"
			? "/assets/images/hero-dark.png"
			: "/assets/images/hero-light.png";

	return (
		<div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
			{/* --- NAVIGATION --- */}
			<nav className="flex justify-between items-center px-6 md:px-12 py-8">
				<div className="flex items-center gap-4">
					{/* Logo dùng font Lobster (font-accent đã cấu hình trong Tailwind) */}
					<span className="font-accent text-3xl text-pink-600 dark:text-pink-400">
						Allure
					</span>
				</div>

				{/* Menu chính dùng font Playfair Display */}
				<div className="hidden md:flex gap-10 font-serif text-sm uppercase tracking-widest">
					<a href="#" className="hover:text-pink-500 transition">
						Mỹ Phẩm
					</a>
					<Link href="/app/dong-ho" className="hover:text-pink-500 transition">
						Đồng Hồ
					</Link>
					<a href="#" className="hover:text-pink-500 transition">
						Bộ Sưu Tập
					</a>
					<a href="#" className="hover:text-pink-500 transition">
						Liên Hệ
					</a>
				</div>

				<div className="flex items-center gap-6">
					<ThemeToggle />
					<button className="relative p-2 hover:opacity-70 transition">
						<ShoppingBag size={22} strokeWidth={1.5} />
						<span className="absolute top-0 right-0 w-4 h-4 bg-pink-500 text-white text-[10px] flex items-center justify-center rounded-full">
							0
						</span>
					</button>
				</div>
			</nav>

			{/* --- HERO SECTION --- */}
			<main className="relative flex flex-col items-center justify-center text-center px-4 pt-16 md:pt-24 pb-20">
				{/* Nhãn phụ */}
				<span className="font-accent text-2xl text-pink-500 mb-4 opacity-90">
					Chạm vào sự tinh tế
				</span>

				{/* Tiêu đề chính */}
				<h1 className="font-serif text-5xl md:text-8xl mb-8 leading-[1.1] tracking-tight max-w-4xl">
					Nơi Vẻ Đẹp <span className="italic font-light opacity-80">&</span>{" "}
					<br />
					Thời Gian{" "}
					<span className="underline decoration-1 underline-offset-8">
						Giao Thoa
					</span>
				</h1>

				{/* Mô tả nội dung */}
				<p className="max-w-2xl font-serif text-lg md:text-xl leading-relaxed opacity-70 mb-12 italic">
					"Tại Allure, mỗi món đồ trang điểm hay mỗi chiếc đồng hồ không chỉ là
					sản phẩm, mà là tuyên ngôn về phong cách và sự quyến rũ vĩnh cửu của
					chính bạn."
				</p>

				{/* Nhóm nút bấm điều hướng */}
				<div className="flex flex-col md:flex-row gap-6">
					<button className="group flex items-center gap-3 px-10 py-4 bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-all duration-300 font-serif uppercase tracking-[0.2em] text-xs">
						Khám phá mỹ phẩm
						<ArrowRight
							size={18}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</button>
					<button className="group flex items-center gap-3 px-10 py-4 border border-[var(--foreground)] bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300 font-serif uppercase tracking-[0.2em] text-xs">
						Xem đồng hồ
					</button>
				</div>

				{/* --- HÌNH ẢNH HERO THAY ĐỔI THEO THEME --- */}
				<div className="mt-24 relative w-full max-w-6xl mx-auto">
					<div className="aspect-[21/9] w-full overflow-hidden rounded-sm shadow-2xl bg-zinc-100 dark:bg-zinc-800">
						<img
							src={heroImage}
							alt="Hero Allure Selection"
							className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105"
						/>
					</div>

					{/* Thành phần trang trí đổ bóng phía sau */}
					<div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-pink-100 dark:bg-pink-900/20 rounded-full blur-3xl opacity-50"></div>
					<div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-yellow-100 dark:bg-zinc-900/40 rounded-full blur-3xl opacity-50"></div>
				</div>
			</main>

			{/* --- FOOTER --- */}
			<footer className="text-center py-10 opacity-50 font-serif text-sm tracking-widest border-t border-zinc-100 dark:border-zinc-900 mx-10">
				© {new Date().getFullYear()} COPYRIGHT BY LONG PHAN
			</footer>
		</div>
	);
}
