<script lang="ts">
	import { page } from '$app/stores';
  import { navigating } from '$app/stores';

	$: currentPage = +($page.url.searchParams.get('page') ?? 1);
  $: nextPage = newPageUrl(currentPage + 1);
	$: prevPage = newPageUrl(currentPage - 1);

	function toHttpParams(obj: any): string {
		if (!obj || typeof obj !== 'object') return '';
		return Object.keys(obj).reduce((prev, current, index) => {
			prev += index > 0 ? '&' : '?';
			prev += current + '=' + obj[current];
			return prev;
		}, '');
	}

	function newPageUrl(newPage: number): string {
		const newSearchParams = { ...$page.url.searchParams, page: newPage };
		return `${$page.url.pathname}${toHttpParams(newSearchParams)}`;
	}
</script>

<div class="flex">
{#if $navigating}
  Loading...
{:else}
  <a href={prevPage} class:disabled={currentPage === 1}>&lt; Prev </a>
  <div>Page {currentPage}</div>
  <a href={nextPage} class:disabled={$page.data.stories.length < 30}>More &gt;</a>
{/if}
</div>

<style>
	.flex {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 3em;
    padding: 1em 0;
    font-weight: bold;
	}
  .disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
  }
</style>
