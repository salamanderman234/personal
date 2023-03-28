import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layouts/main";
import { PersonalInfos } from "@/data/personal";
import { useEffect, useState } from "react";
import { MyProjects } from "@/data/projects";
import { MyContacts } from "@/data/contacts";
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
			}, 0);
		} else {
			setTimeout(() => {
				setTyping("typing-out");
			}, 2000);
		}
	};
	// project mapping
	const projects = MyProjects.map((project) => (
		<div className="max-w-lg rounded-md w-full md:max-w-xs border border-white p-7 inline-block group hover:scale-105 hover:bg-white hover:text-black duration-300 transition-all">
			<Image
				className="w-full"
				height={1000}
				width={1000}
				src={project.thumbnail}
				alt={project.title}
			/>
			<h3 className="mt-6 mb-8 font-extrabold text-center text-xl">
				{project.title}
			</h3>
			<p className="break-all">{project.description}</p>
			{project.github != "" && project.github != "-" ? (
				<div className="text-center">
					<Link
						target="_blank"
						className="w-full group-hover:bg-black group-hover:text-white bg-white text-black inline-block mt-5 py-1 font-semibold"
						href={project.github}
					>
						<span className="">To Github Repo</span>
					</Link>
				</div>
			) : (
				""
			)}
		</div>
	));
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
				<div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4">
					{projects}
				</div>
				<div className="mt-10 text-center flex justify-center items-center">
					<Link
						target="_blank"
						href={MyContacts.github}
						className="font-semibold block hover:bg-white hover:text-black w-full md:w-fit px-0 md:px-10 py-3 bg-black text-white outline duration-300 transition-all"
					>
						Check out my other work here !
					</Link>
				</div>
			</div>
		</MainLayout>
	);
}
