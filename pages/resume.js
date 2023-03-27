import MainLayout from "@/components/layouts/main";
import { PersonalInfos } from "@/data/personal";
import Link from "next/link";

export default function Resume() {
	return (
		<MainLayout title={`${PersonalInfos.name} - Resume`} selected="resume">
			<div className="border border-black py-5 px-5">
				<div className="text-center">
					<h1 className="font-bold text-lg md:text-2xl">
						I Gede Tresna Agung Saputra
					</h1>
					<span className="mt-3 text-xs md:text-sm block">
						<span>Bali, Indonesia</span>
						<span className="mx-1">&bull;</span>
						<span>089610482330(Whatsapp)</span>
						<span className="mx-1">&bull;</span>
						<span>
							<Link
								className="underline"
								target="_blank"
								href="https://www.facebook.com/tresna.saputra.75/"
							>
								Facebook
							</Link>
						</span>
					</span>
				</div>
				<section className="mt-10 text-justify" id="description">
					<span>{PersonalInfos.desciption}</span>
				</section>
			</div>
		</MainLayout>
	);
}
