<script>
	import { Categories, LatestContent } from 'statue-ssg';

	const { data } = $props();
	const siteConfig = $derived(data.siteConfig);
</script>

<svelte:head>
	<title>Akash Danda - Software Engineer</title>
	<meta
		name="description"
		content="CS student at UIUC | Software Engineer | Building cool stuff"
	/>
</svelte:head>

<div class="min-h-screen">
	<!-- Hero Section -->
	<section class="relative overflow-hidden">
		<div class="absolute inset-0 bg-linear-to-b from-(--color-hero-from) via-(--color-hero-via) to-(--color-hero-to)"></div>
		<div class="relative container mx-auto px-4 py-24 md:py-40">
			<div class="max-w-5xl mx-auto text-center">
				<div class="mb-6">
					<span class="inline-block px-4 py-2 bg-(--color-primary)/20 border border-(--color-primary)/30 rounded-full text-(--color-primary) text-sm font-medium mb-6">
						CS Student at UIUC
					</span>
				</div>
				<h1 class="text-6xl md:text-8xl font-bold text-(--color-foreground) mb-6 leading-tight">
					Akash Danda
				</h1>
				<p class="text-xl md:text-2xl text-(--color-muted) mb-12 max-w-3xl mx-auto leading-relaxed">
					Software Engineer passionate about building cool stuff and solving complex problems
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<a
						href="/about"
						class="group px-8 py-4 bg-(--color-primary) text-(--color-on-primary) rounded-lg font-semibold hover:scale-105 hover:shadow-lg hover:shadow-(--color-primary)/50 transition-all duration-300"
					>
						Learn More
					</a>
					<a
						href="/projects"
						class="group px-8 py-4 border-2 border-(--color-primary) text-(--color-primary) rounded-lg font-semibold hover:bg-(--color-primary) hover:text-(--color-on-primary) transition-all duration-300"
					>
						View Projects
					</a>
				</div>
			</div>
		</div>
		<div class="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--color-border) to-transparent"></div>
	</section>

	<!-- About Section -->
	<section class="py-20 md:py-28">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<div class="text-center mb-12">
					<h2 class="text-4xl md:text-5xl font-bold text-(--color-foreground) mb-4">About Me</h2>
					<div class="w-24 h-1 bg-(--color-primary) mx-auto rounded-full"></div>
				</div>
				<div class="bg-(--color-card) rounded-2xl p-8 md:p-12 border border-(--color-border) shadow-lg hover:shadow-xl transition-shadow duration-300">
					<div class="space-y-6">
						<p class="text-lg md:text-xl text-(--color-muted) leading-relaxed">
							I'm a Computer Science student at the University of Illinois Urbana-Champaign (UIUC), 
							passionate about software engineering and creating impactful solutions. I love building 
							projects that solve real-world problems and continuously learning new technologies.
						</p>
						<p class="text-lg md:text-xl text-(--color-muted) leading-relaxed">
							When I'm not coding, you can find me exploring new frameworks, contributing to open 
							source, or working on side projects that push the boundaries of what's possible.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Skills Section -->
	<section class="py-20 md:py-28 bg-(--color-card)/30">
		<div class="container mx-auto px-4">
			<div class="text-center mb-12">
				<h2 class="text-4xl md:text-5xl font-bold text-(--color-foreground) mb-4">Skills & Technologies</h2>
				<div class="w-24 h-1 bg-(--color-primary) mx-auto rounded-full"></div>
			</div>
			<div class="max-w-5xl mx-auto">
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
					{#each ['AWS', 'Docker', 'Kubernetes', 'React', 'Node', 'Pytorch', 'LLMs', 'Automation Pipelines'] as skill}
						<div class="group bg-(--color-card) border border-(--color-border) rounded-xl p-6 text-center hover:border-(--color-primary) hover:shadow-lg hover:shadow-(--color-primary)/20 hover:-translate-y-1 transition-all duration-300">
							<p class="text-(--color-foreground) font-semibold text-lg">{skill}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Categories Section -->
	{#if data.directories && data.directories.length > 0}
		<section class="pt-20 md:pt-28 pb-8 md:pb-12">
			<div class="container mx-auto px-4">
				<Categories directories={data.directories} />
			</div>
		</section>
	{/if}

	<!-- Latest Content Section -->
	{#if data.rootContent && data.rootContent.length > 0}
		<section class="py-20 md:py-28 bg-(--color-card)/30">
			<div class="container mx-auto px-4">
				<div class="text-center mb-12">
					<h2 class="text-4xl md:text-5xl font-bold text-(--color-foreground) mb-4">Latest Work</h2>
					<div class="w-24 h-1 bg-(--color-primary) mx-auto rounded-full"></div>
				</div>
				<LatestContent rootContent={data.rootContent} />
			</div>
		</section>
	{/if}

	<!-- Contact Section -->
	<section class="pt-8 md:pt-12 pb-20 md:pb-28">
		<div class="container mx-auto px-4">
			<div class="max-w-3xl mx-auto text-center">
				<div class="mb-12">
					<h2 class="text-4xl md:text-5xl font-bold text-(--color-foreground) mb-4">Let's Connect</h2>
					<div class="w-24 h-1 bg-(--color-primary) mx-auto rounded-full mb-6"></div>
					<p class="text-lg md:text-xl text-(--color-muted) leading-relaxed">
						I'm always open to discussing new opportunities, interesting projects, or just having a chat!
					</p>
				</div>
				<div class="flex flex-wrap justify-center gap-4">
					<a
						href={siteConfig?.social?.github}
						target="_blank"
						rel="noopener noreferrer"
						class="group px-8 py-4 bg-(--color-card) border-2 border-(--color-border) text-(--color-foreground) rounded-lg font-semibold hover:border-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-on-primary) hover:scale-105 hover:shadow-lg transition-all duration-300"
					>
						GitHub
					</a>
					<a
						href={siteConfig?.social?.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="group px-8 py-4 bg-(--color-card) border-2 border-(--color-border) text-(--color-foreground) rounded-lg font-semibold hover:border-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-on-primary) hover:scale-105 hover:shadow-lg transition-all duration-300"
					>
						LinkedIn
					</a>
					<a
						href="mailto:{siteConfig?.social?.email}"
						class="group px-8 py-4 bg-(--color-card) border-2 border-(--color-border) text-(--color-foreground) rounded-lg font-semibold hover:border-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-on-primary) hover:scale-105 hover:shadow-lg transition-all duration-300"
					>
						Email
					</a>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	/* Add smooth scroll behavior */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
