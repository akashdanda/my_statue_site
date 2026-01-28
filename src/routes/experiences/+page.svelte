<script>
	import { processFootnotes } from '$lib/utils/footnotes.js';
	const { data } = $props();
</script>

<svelte:head>
	<title>Experiences - Akash Danda</title>
	<meta name="description" content="My professional experiences, internships, and work in computer vision, AI, and software engineering." />
</svelte:head>

<div class="min-h-screen bg-linear-to-b from-(--color-hero-from) via-(--color-hero-via) to-(--color-hero-to)">
	<!-- Hero Section -->
	<section class="container mx-auto px-4 py-20 md:py-32">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl md:text-7xl font-bold text-(--color-foreground) mb-6">Experiences</h1>
			<p class="text-xl md:text-2xl text-(--color-muted) max-w-2xl mx-auto">
				My journey through internships, research, and professional work
			</p>
		</div>
	</section>

	<!-- Experiences Timeline -->
	<section class="container mx-auto px-4 pb-32">
		<div class="max-w-4xl mx-auto">
			{#if data.experiences && data.experiences.length > 0}
				<div class="space-y-24">
					{#each data.experiences as experience, index}
						<div class="relative">
							<!-- Timeline line -->
							{#if index < data.experiences.length - 1}
								<div class="absolute left-8 top-16 bottom-0 w-0.5 bg-(--color-border)"></div>
							{/if}
							
							<!-- Experience Card -->
							<div class="relative flex gap-6">
								<!-- Timeline dot -->
								<div class="flex-shrink-0">
									<div class="w-16 h-16 rounded-full bg-(--color-primary) border-4 border-(--color-background) flex items-center justify-center">
										<div class="w-8 h-8 rounded-full bg-(--color-on-primary)"></div>
									</div>
								</div>
								
								<!-- Content -->
								<div class="flex-1 bg-(--color-card) border-2 border-(--color-border) rounded-2xl p-6 md:p-8 hover:border-(--color-primary) hover:shadow-xl hover:shadow-(--color-primary)/20 transition-all duration-300">
									<div class="mb-4">
										{#if experience.metadata.date}
											<span class="inline-block px-3 py-1 bg-(--color-primary)/20 border border-(--color-primary)/30 rounded-full text-(--color-primary) text-sm font-medium mb-3">
												{new Date(experience.metadata.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
											</span>
										{/if}
										<h2 class="text-2xl md:text-3xl font-bold text-(--color-foreground) mb-2">
											{experience.metadata.title || 'Experience'}
										</h2>
										{#if experience.metadata.company || experience.metadata.organization}
											<p class="text-lg text-(--color-primary) font-semibold mb-2">
												{experience.metadata.company || experience.metadata.organization}
											</p>
										{/if}
										{#if experience.metadata.location}
											<p class="text-(--color-muted) text-sm mb-4">
												📍 {experience.metadata.location}
											</p>
										{/if}
									</div>
									
									{#if experience.metadata.description}
										<p class="text-(--color-muted) leading-relaxed mb-4">
											{experience.metadata.description}
										</p>
									{/if}
									
									{#if experience.metadata.technologies}
										<div class="flex flex-wrap gap-2 mb-4">
											{#each (Array.isArray(experience.metadata.technologies) ? experience.metadata.technologies : experience.metadata.technologies.split(',')) as tech}
												<span class="px-3 py-1 bg-(--color-card) border border-(--color-border) rounded-lg text-(--color-foreground) text-sm">
													{tech.trim()}
												</span>
											{/each}
										</div>
									{/if}
									
								<!-- Experience Content -->
								<div class="prose prose-invert max-w-none">
									{@html processFootnotes(experience.content)}
								</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<!-- Empty State -->
				<div class="text-center py-20">
					<div class="w-24 h-24 bg-(--color-card) border-2 border-(--color-border) rounded-full flex items-center justify-center mx-auto mb-6">
						<svg class="w-12 h-12 text-(--color-muted)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-(--color-foreground) mb-4">No experiences yet</h3>
					<p class="text-(--color-muted) mb-6">
						Add markdown files to <code class="px-2 py-1 bg-(--color-card) border border-(--color-border) rounded">content/experiences/</code> to display your experiences here.
					</p>
					<a
						href="/"
						class="inline-block px-6 py-3 bg-(--color-primary) text-(--color-on-primary) rounded-lg font-semibold hover:opacity-90 transition-opacity"
					>
						Back to Home
					</a>
				</div>
			{/if}
		</div>
	</section>
</div>

<style>
	:global(.prose) {
		color: var(--color-muted);
	}
	
	:global(.prose h1),
	:global(.prose h2),
	:global(.prose h3),
	:global(.prose h4) {
		color: var(--color-foreground);
		margin-top: 1.5em;
		margin-bottom: 0.75em;
	}
	
	:global(.prose a) {
		color: var(--color-primary);
		text-decoration: underline;
	}
	
	:global(.prose a:hover) {
		opacity: 0.8;
	}
	
	:global(.prose ul),
	:global(.prose ol) {
		margin-top: 1em;
		margin-bottom: 1em;
		padding-left: 1.5em;
	}
	
	:global(.prose li) {
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}
	
	:global(.prose code) {
		background-color: var(--color-card);
		border: 1px solid var(--color-border);
		padding: 0.125rem 0.375rem;
		border-radius: 0.25rem;
		font-size: 0.875em;
	}
</style>
