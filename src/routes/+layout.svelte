<script lang="ts">
  import type { LayoutData } from './$types';
	import '../app.css';

	export let data: LayoutData;
</script>

<div class="header">
  <a class="home" href="/news">
    <h1>[MAD] Hacker News</h1>
  </a>
  <nav class="navmenu">
    {#each data.urls as url}
      <a class="navitem" href="{url}">{url[0].toUpperCase() + url.slice(1)}</a>
    {/each}
  </nav>

</div>
<hr>
<slot />

<style>
  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: stretch;
    margin: 0 1em;
    gap: 0 4em;
    align-content: flex-start;
  }
	.navmenu {
		display: flex;
    flex-direction: row;
		align-items: baseline;
    gap: 2em;
    align-content: flex-start;
  } 
  .home {
    text-decoration: none;
  }
  .navitem {
    font-size: 1.4em;
    color: var(--main-title-color);
  }
</style>
