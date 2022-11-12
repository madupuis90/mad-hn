<script lang="ts">
  import type { LayoutData } from './$types';
	import '../app.css';

	export let data: LayoutData;
</script>

<nav class="navmenu">
	<a class="home" href="/news">
		<h1>[MAD] Hacker News</h1>
	</a>
  {#each data.urls as url}
    <a class="link" href="{url}">{url[0].toUpperCase() + url.slice(1)}</a>
  {/each}
</nav>
<hr>
<slot />

<style>
	.navmenu {
		display: flex;
		align-items: center;
    gap: 2em;
		height: 4em;
    margin: 10px;
  } 
  .home {
    text-decoration: none;
  }
  .link {
    font-size: 1.2em;
    color: var(--main-title-color);
  }
</style>
