<script lang="ts">
	import type { PageData } from './$types';
	import Story from '$lib/Story.svelte';
	import Pagination from '$lib/Pagination.svelte';
	export let data: PageData;
</script>

<Pagination />
{#each data.stories as story}
	<Story {story} />
{/each}
