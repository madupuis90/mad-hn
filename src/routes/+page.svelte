<script lang="ts">
	import type { PageData } from './$types';
	import Story from '$lib/Story.svelte';
	export let data: PageData;
</script>

{#each data.stories as story}
	<Story {story} />
{/each}
