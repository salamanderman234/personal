import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layouts/main";
import { PersonalInfos } from "@/data/personal";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [describe, setDescribe] = useState(`a ${PersonalInfos.role}`);
	const [typing, setTyping] = useState("typing-in");
	const onAnimationEnd = async (e) => {
		const describeList = [
			`a ${PersonalInfos.role}`,
			"a Manga Enjoyer",
			"Always Learning",
			"a Hard Worker",
			"a Problem Solver",
			"Adaptable",
			"Quick Learning",
			"Loyal",
			"Team Player",
		];
		const text =
			describeList[Math.floor(Math.random() * describeList.length)];
		if (typing == "typing-out") {
			setTimeout(() => {
				setTyping("typing-in");
				setDescribe(text);
				console.log("render ulang");
			}, 0);
		} else {
			setTimeout(() => {
				setTyping("typing-out");
				console.log("render-ulang-out");
			}, 2000);
		}
	};
	return (
		<MainLayout selected="">
			<section id="profile-section">
				<h1 className="text-5xl text-center md:text-7xl md:text-left font-extrabold w-full md:w-3/4">
					{PersonalInfos.name}
				</h1>
				<span className="mt-7 flex items-center justify-center text-xl md:text-3xl md:justify-start">
					<span>I am&nbsp;</span>
					<div className="typewriter inline-block px-4 py-2 bg-black">
						<span
							className={`text-white font-bold inline-flex ${typing}`}
							onAnimationEnd={onAnimationEnd}
						>
							{describe}
						</span>
					</div>
				</span>
			</section>
			<div className="mt-16 bg-black text-white p-10">
				<div className="w-fit">
					<h2 className="text-2xl font-bold ">Projects</h2>
					<hr className="mt-2 border-2 rounded-full" />
				</div>
			</div>
		</MainLayout>
	);
}
