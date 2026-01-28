<script>
	import { PageHero, WhyChooseUs, CTA, PdfViewer } from 'statue-ssg';
</script>

<svelte:head>
	<title>About Your Site</title>
	<meta name="description" content="Learn about your Site, and how it was created." />
</svelte:head>

<div
	class="min-h-screen text-white bg-linear-to-b from-(--color-hero-from) via-(--color-hero-via] to-(--color-hero-to)"
>
	<PageHero
		title="About Me"
		description="love building, breaking, and trying hard things."
	/>

	<div class="container mx-auto px-4 pb-32">
		<!-- Introduction -->
		<div class="text-center mb-16">
			<img src="/IMG_2880.png" alt="Akash Danda" class="w-64 h-64 mx-auto mb-8 rounded-full object-cover border-4 border-(--color-primary)" />
			<p class="text-lg mb-4">
				I'm a Computer Science student at the University of Illinois Urbana-Champaign (UIUC), 
				passionate about software engineering and creating impactful solutions.
			</p>
		</div>

		<!-- Mission Section -->
		<section class="mb-16">
			<div class="max-w-4xl mx-auto text-center">
				<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">My Mission</h2>
				<div class="w-24 h-1 bg-(--color-primary) mx-auto rounded-full mb-8"></div>
				<p class="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
					I'm driven by the challenge of building intelligent systems that can see, reason, and act autonomously. 
					My mission is to push the boundaries of what's possible at the intersection of computer vision, 
					artificial intelligence, and scalable infrastructure.
				</p>
			</div>
		</section>

		<!-- My Focus Section -->
		<section class="mb-16">
			<div class="max-w-6xl mx-auto">
				<h2 class="text-4xl md:text-5xl font-bold text-white mb-6 text-center">My Focus</h2>
				<div class="w-24 h-1 bg-(--color-primary) mx-auto rounded-full mb-12"></div>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div class="bg-(--color-card) border-2 border-(--color-border) rounded-2xl p-8 hover:border-(--color-primary) hover:shadow-xl hover:shadow-(--color-primary)/20 transition-all duration-300">
						<div class="w-16 h-16 bg-(--color-primary)/20 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-8 h-8 text-(--color-primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
							</svg>
						</div>
						<h3 class="text-2xl font-bold text-white mb-4">Computer Vision</h3>
						<p class="text-gray-300 leading-relaxed">
							Building systems that can understand and interpret visual information from the world around us.
						</p>
					</div>
					<div class="bg-(--color-card) border-2 border-(--color-border) rounded-2xl p-8 hover:border-(--color-primary) hover:shadow-xl hover:shadow-(--color-primary)/20 transition-all duration-300">
						<div class="w-16 h-16 bg-(--color-primary)/20 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-8 h-8 text-(--color-primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
							</svg>
						</div>
						<h3 class="text-2xl font-bold text-white mb-4">Agentic AI</h3>
						<p class="text-gray-300 leading-relaxed">
							Creating autonomous agents that can reason, plan, and execute complex tasks independently.
						</p>
					</div>
					<div class="bg-(--color-card) border-2 border-(--color-border) rounded-2xl p-8 hover:border-(--color-primary) hover:shadow-xl hover:shadow-(--color-primary)/20 transition-all duration-300">
						<div class="w-16 h-16 bg-(--color-primary)/20 rounded-lg flex items-center justify-center mb-6">
							<svg class="w-8 h-8 text-(--color-primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
							</svg>
						</div>
						<h3 class="text-2xl font-bold text-white mb-4">Infrastructure</h3>
						<p class="text-gray-300 leading-relaxed">
							Designing and building scalable, reliable systems that power modern applications.
						</p>
					</div>
				</div>
			</div>
		</section>

				<!-- Video Section -->
				<section class="mb-16">
					<div class="max-w-5xl mx-auto">
						<h2 class="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Video Intro</h2>
						<div class="w-24 h-1 bg-(--color-primary) mx-auto rounded-full mb-8"></div>
						<div class="bg-(--color-card) border-2 border-(--color-border) rounded-2xl p-4 md:p-6 overflow-hidden">
							<div class="relative w-full aspect-video rounded-lg overflow-hidden">
								<video
									class="w-full h-full object-cover"
									controls
									preload="metadata"
								>
									<source src="/AboutMe.mp4" type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							</div>
						</div>
					</div>
				</section>
	</div>
</div>
