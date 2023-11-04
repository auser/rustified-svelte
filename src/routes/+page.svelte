<script lang="ts">
	import { onMount } from 'svelte';

	let lib: typeof import('passgen');

	onMount(async () => {
		lib = await import('passgen');
		await lib.default();
		lib.greet();
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
