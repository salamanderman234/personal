import { PersonalInfos } from "@/data/personal";
import Head from "next/head";
import Link from "next/link";

export default function MainLayout({ children, title, selected }) {
	return (
		<>
			<Head>
				<title>
					{title || `${PersonalInfos.name} - ${PersonalInfos.role}`}
				</title>
				<meta name="description" content="My Personal Website" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-white text-black">
				<header
					className="flex justify-between px-5 md:px-20 py-5 bg-white opacity-90 fixed w-screen text-sm md:text-lg"
					id="navbar"
				>
					<span className="hidden md:block">logo</span>
					<ul className="flex flex-row w-full md:w-1/2 justify-center md:justify-end">
						<li className="mr-6 group">
							<Link className="font-bold" href="/">
								Portfolio
							</Link>
							{selected == "" ? (
								<hr className="border-2 rounded-full border-slate-400" />
							) : (
								""
							)}
						</li>
						<li className="mr-6">
							<Link className="font-bold" href="/resume">
								My Resume
							</Link>
							{selected == "resume" ? (
								<hr className="border-2 rounded-full border-slate-400" />
							) : (
								""
							)}
						</li>
						<li className="mr-6">
							<Link className="font-bold" href="/about">
								About Me
							</Link>
							{selected == "about" ? (
								<hr className="border-2 rounded-full border-slate-400" />
							) : (
								""
							)}
						</li>
						<li>
							<Link className="font-bold" href="/contact">
								Contact Me
							</Link>
							{selected == "contact" ? (
								<hr className="border-2 rounded-full border-slate-400" />
							) : (
								""
							)}
						</li>
					</ul>
				</header>
				<main
					id="content"
					className="bg-white px-5 md:px-20 pt-28 md:pt-36 pb-10 min-h-screen"
				>
					{children}
				</main>
				<footer className="footer bg-black text-white px-5 py-5">
					<div className="text-center text-lg font-bold">
						<span>Made with love in Bali by&nbsp;</span>
						<Link
							target="_blank"
							href="https://github.com/salamanderman234"
						>
							salamanderman234
						</Link>
					</div>
					<ul className="flex justify-center mt-3 text-sm">
						<li className="mr-5">
							<Link
								target="_blank"
								href="https://github.com/salamanderman234"
							>
								Facebook
							</Link>
						</li>
						<li className="mr-5">
							<Link
								target="_blank"
								href="https://github.com/salamanderman234"
							>
								Twitter
							</Link>
						</li>
						<li>
							<Link
								target="_blank"
								href="https://github.com/salamanderman234"
							>
								Instagram
							</Link>
						</li>
					</ul>
				</footer>
			</div>
		</>
	);
}
