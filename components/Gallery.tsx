"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
	{
		src: "/engagement-1.jpg",
		alt: "Prasad and Chinmayi engagement 1",
		width: 1200,
		height: 900,
	},
	{
		src: "/engagement-2.jpg",
		alt: "Prasad and Chinmayi engagement 2",
		width: 1200,
		height: 900,
	},
	{
		src: "/engagement-3.jpg",
		alt: "Prasad and Chinmayi engagement 3",
		width: 1200,
		height: 900,
	},
	{
		src: "/engagement-4.jpg",
		alt: "Prasad and Chinmayi engagement 4",
		width: 1200,
		height: 900,
	},
	{
		src: "/engagement-5.jpg",
		alt: "Prasad and Chinmayi engagement 5",
		width: 1200,
		height: 900,
	},
	{
		src: "/engagement-6.jpg",
		alt: "Prasad and Chinmayi engagement 6",
		width: 1200,
		height: 900,
	},
];

export default function Gallery() {
	return (
		<section
			id="gallery"
			className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 gallery-bg relative overflow-hidden snap-start snap-always"
		>
			{/* Floating decorative elements */}
			<div
				className="absolute top-20 left-10 opacity-15 animate-float"
				style={{ animationDelay: "0.5s" }}
			>
				<div className="w-6 h-6 border border-wedding-gold-500 rounded-full"></div>
			</div>
			<div
				className="absolute bottom-32 right-16 opacity-20 animate-float"
				style={{ animationDelay: "1.5s" }}
			>
				<div className="w-8 h-8 border-2 border-wedding-pink-400 rounded-full"></div>
			</div>
			<div
				className="absolute top-1/2 right-8 opacity-10 animate-float"
				style={{ animationDelay: "2s" }}
			>
				<div className="w-4 h-4 bg-wedding-pink-500 rounded-full"></div>
			</div>

			<div className="relative z-10 max-w-6xl mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="mb-16"
				>
					<h2 className="font-tangerine text-5xl md:text-6xl lg:text-7xl text-wedding-pink-600 mb-6 leading-tight font-bold">
						Our Moments
					</h2>
					<p className="font-cormorant-garamond text-lg md:text-xl text-wedding-pink-700 font-bold max-w-2xl mx-auto">
						Miles behind us, more ahead...
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.3 }}
					className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
				>
					{photos.map((photo, index) => (
						<motion.div
							key={photo.src}
							className="group relative overflow-hidden rounded-2xl shadow-xl border border-wedding-pink-100/50 backdrop-blur-sm bg-white/50"
							initial={{ opacity: 0, y: 40, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								duration: 0.8,
								delay: index * 0.1,
								ease: "easeOut",
							}}
							whileHover={{ scale: 1.02, y: -5 }}
						>
							<div className="relative h-80 md:h-96 w-full overflow-hidden">
								<Image
									src={photo.src}
									alt={photo.alt}
									fill
									className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
