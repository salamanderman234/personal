import { MyContacts } from "@/data/contacts";
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
						<li className="mr-6 group flex flex-col justify-center items-center">
							<Link
								className={`font-bold ${
									selected != "" && selected != "home"
										? "group-hover:text-slate-600 duration-300 transition-all"
										: ""
								}`}
								href="/"
							>
								Portfolio
							</Link>
							<hr
								className={`border-2 rounded-full  ${
									selected == "" || selected == "home"
										? "border-slate-400 w-3/4"
										: "border-slate-300 w-0 group-hover:w-full duration-500 transition-all"
								}`}
							/>
						</li>
						<li className="mr-6 group flex flex-col justify-center items-center">
							<Link
								className={`font-bold ${
									selected != "resume"
										? "group-hover:text-slate-600 duration-300 transition-all"
										: ""
								}`}
								href="/resume"
							>
								My Resume
							</Link>
							<hr
								className={`border-2 rounded-full  ${
									selected == "resume"
										? "border-slate-400 w-3/4"
										: "border-slate-300 w-0 group-hover:w-full duration-500 transition-all"
								}`}
							/>
						</li>
						<li className="mr-6 group flex flex-col justify-center items-center">
							<Link
								className={`font-bold ${
									selected != "about"
										? "group-hover:text-slate-600 duration-300 transition-all"
										: ""
								}`}
								href="/about"
							>
								About Me
							</Link>
							<hr
								className={`border-2 rounded-full  ${
									selected == "about"
										? "border-slate-400 w-3/4"
										: "border-slate-300 w-0 group-hover:w-full duration-500 transition-all"
								}`}
							/>
						</li>
						<li className="group flex flex-col justify-center items-center">
							<Link
								className={`font-bold ${
									selected != "contact"
										? "group-hover:text-slate-600 duration-300 transition-all"
										: ""
								}`}
								href="/contact"
							>
								Contact Me
							</Link>
							<hr
								className={`border-2 rounded-full  ${
									selected == "contact"
										? "border-slate-400 w-3/4"
										: "border-slate-300 w-0 group-hover:w-full duration-500 transition-all"
								}`}
							/>
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
						<Link target="_blank" href={MyContacts.github}>
							salamanderman234
						</Link>
					</div>
					<ul className="flex justify-center mt-3 text-sm">
						<li className="mr-5">
							<Link target="_blank" href={MyContacts.facebook}>
								Facebook
							</Link>
						</li>
						<li className="mr-5">
							<Link target="_blank" href={MyContacts.twitter}>
								Twitter
							</Link>
						</li>
						<li>
							<Link target="_blank" href={MyContacts.instagram}>
								Instagram
							</Link>
						</li>
					</ul>
				</footer>
			</div>
		</>
	);
}
