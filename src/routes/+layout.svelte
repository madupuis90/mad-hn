<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import '../app.css';

	// export let data: LayoutData;
</script>

<nav class="navmenu">
	<a class="home" href="/news">
		<h1>[MAD] Hacker News</h1>
	</a>
  <a class="link" href="newest">Newest</a>
  <a class="link" href="best">Best</a>
  <a class="link" href="show">Show</a>
  <a class="link" href="ask">Ask</a>
  <a class="link" href="jobs">Jobs</a>
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

  hr {
    color: var(--main-accent-color);
  }

  .home {
    text-decoration: none;
  }
  .link {
    font-size: 1.2em;
    color: var(--main-title-color);
  }
</style>
