import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layouts/main";
import { PersonalInfos } from "@/data/personal";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<MainLayout selected="about" title={`${PersonalInfos.name} - About`}>
			<section
				id="me"
				className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-10"
			>
				<div className="bg-black text-white p-10">
					<div className="w-fit mb-5">
						<h2 className="text-2xl font-bold ">Who is Tresna</h2>
						<hr className="mt-2 border-2 rounded-full" />
					</div>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Delectus excepturi fuga sunt qui repudiandae commodi
						aspernatur veniam nisi necessitatibus quaerat eaque,
						eveniet nulla suscipit autem a quidem consectetur quae
						unde! Molestias nihil ad nesciunt assumenda iusto,
						voluptatum cum reprehenderit eaque quo sint possimus,
						quos rerum accusantium corrupti ipsam nulla hic,
						incidunt aliquid ducimus minima fugit tempora dolore!
						Voluptatum nostrum commodi reprehenderit, nulla deleniti
						et est tempora perspiciatis assumenda unde consequatur
						maxime laborum atque esse cumque animi officia molestiae
						eum perferendis, libero, voluptatibus ipsam sint beatae.
						Vero facere, distinctio quaerat, tenetur expedita modi
						corrupti fugiat quibusdam architecto nisi illo quas
						praesentium?
					</span>
				</div>
				<div className="flex justify-center items-center mt-5 md:mt-0">
					<Image
						className="w-full"
						width="1000"
						height="1000"
						src={"/hanzo.png"}
					/>
				</div>
			</section>
			<section
				id="what-i-can-do"
				className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-10"
			>
				<div className="flex justify-center items-center mt-5 md:mt-0">
					<Image
						className="w-full"
						width="1000"
						height="1000"
						src={"/hitam.png"}
					/>
				</div>
				<div className="bg-slate-500 text-white p-10">
					<div className="w-fit mb-5">
						<h2 className="text-2xl font-bold ">
							What can I do for you
						</h2>
						<hr className="mt-2 border-2 rounded-full" />
					</div>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Delectus excepturi fuga sunt qui repudiandae commodi
						aspernatur veniam nisi necessitatibus quaerat eaque,
						eveniet nulla suscipit autem a quidem consectetur quae
						unde! Molestias nihil ad nesciunt assumenda iusto,
						voluptatum cum reprehenderit eaque quo sint possimus,
						quos rerum accusantium corrupti ipsam nulla hic,
						incidunt aliquid ducimus minima fugit tempora dolore!
						Voluptatum nostrum commodi reprehenderit, nulla deleniti
						et est tempora perspiciatis assumenda unde consequatur
						maxime laborum atque esse cumque animi officia molestiae
						eum perferendis, libero, voluptatibus ipsam sint beatae.
						Vero facere, distinctio quaerat, tenetur expedita modi
						corrupti fugiat quibusdam architecto nisi illo quas
						praesentium?
					</span>
				</div>
			</section>
			<section
				id="hobbies"
				className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-10"
			>
				<div className="bg-slate-400 text-white p-10">
					<div className="w-fit mb-5">
						<h2 className="text-2xl font-bold ">
							My Other Activities
						</h2>
						<hr className="mt-2 border-2 rounded-full" />
					</div>
					<span>Makan, nonton animek dan ngocog</span>
				</div>
				<div className="flex justify-center items-center mt-5 md:mt-0">
					<Image
						className="w-full"
						width="1000"
						height="1000"
						src={"/tracer.png"}
					/>
				</div>
			</section>
		</MainLayout>
	);
}
