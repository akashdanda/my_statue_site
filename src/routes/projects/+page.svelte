<script>
	import { processFootnotes } from '$lib/utils/footnotes.js';
	const { data } = $props();
</script>

<svelte:head>
	<title>Projects - Akash Danda</title>
	<meta name="description" content="My projects in computer vision, AI, machine learning, and software engineering." />
</svelte:head>

<div class="min-h-screen bg-linear-to-b from-(--color-hero-from) via-(--color-hero-via) to-(--color-hero-to)">
	<!-- Hero Section -->
	<section class="container mx-auto px-4 py-20 md:py-32">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl md:text-7xl font-bold text-(--color-foreground) mb-6">Projects</h1>
			<p class="text-xl md:text-2xl text-(--color-muted) max-w-2xl mx-auto">
				Building innovative solutions with cutting-edge technology
			</p>
		</div>
	</section>

	<!-- Projects Grid -->
	<section class="container mx-auto px-4 pb-32">
		<div class="max-w-6xl mx-auto">
			{#if data.projects && data.projects.length > 0}
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					{#each data.projects as project}
						<div class="bg-(--color-card) border-2 border-(--color-border) rounded-2xl p-6 md:p-8 hover:border-(--color-primary) hover:shadow-xl hover:shadow-(--color-primary)/20 hover:-translate-y-2 transition-all duration-300">
							<div class="mb-4">
								{#if project.metadata.date}
									<span class="inline-block px-3 py-1 bg-(--color-primary)/20 border border-(--color-primary)/30 rounded-full text-(--color-primary) text-sm font-medium mb-3">
										{new Date(project.metadata.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
									</span>
								{/if}
								<h2 class="text-2xl md:text-3xl font-bold text-(--color-foreground) mb-3">
									{project.metadata.title || 'Project'}
								</h2>
							</div>
							
							{#if project.metadata.description}
								<p class="text-(--color-muted) leading-relaxed mb-4">
									{project.metadata.description}
								</p>
							{/if}
							
							{#if project.metadata.technologies}
								<div class="flex flex-wrap gap-2 mb-4">
									{#each (Array.isArray(project.metadata.technologies) ? project.metadata.technologies : project.metadata.technologies.split(',')) as tech}
										<span class="px-3 py-1 bg-(--color-card) border border-(--color-border) rounded-lg text-(--color-foreground) text-sm">
											{tech.trim()}
										</span>
									{/each}
								</div>
							{/if}
							
							<!-- Project Content -->
							<div class="prose prose-invert max-w-none">
								{@html processFootnotes(project.content)}
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<!-- Empty State -->
				<div class="text-center py-20">
					<div class="w-24 h-24 bg-(--color-card) border-2 border-(--color-border) rounded-full flex items-center justify-center mx-auto mb-6">
						<svg class="w-12 h-12 text-(--color-muted)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-(--color-foreground) mb-4">No projects yet</h3>
					<p class="text-(--color-muted) mb-6">
						Add markdown files to <code class="px-2 py-1 bg-(--color-card) border border-(--color-border) rounded">content/projects/</code> to display your projects here.
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
