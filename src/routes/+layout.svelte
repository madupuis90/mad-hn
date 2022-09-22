<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="flex">
	<a href="/"> Mad Hacker News </a>
	<label for="showNavMenu">
		<svg viewBox="0 0 100 80" width="40" height="40">
			<rect y="0" width="100" height="10" />
			<rect y="30" width="100" height="10" />
			<rect y="60" width="100" height="10" />
		</svg>
	</label>
</div>

<input id="showNavMenu" type="checkbox" />

<nav class="navmenu">
	{#each data.navItems as navItem}
		<a class="link" class:active={navItem.path === data.routeId} href={navItem.path}
			>{navItem.name}
		</a>
	{/each}
</nav>

<slot />

<style>
	.flex {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	#showNavMenu {
		display: none;
	}
	#showNavMenu:checked ~ .navmenu {
		transform: scale(1, 1);
	}
	.navmenu {
		display: flex;
		flex-direction: column;
		transform: scale(1, 0);
		transform-origin: top;
		transition: transform 100ms ease-in;
	}
	svg {
		cursor: pointer;
	}
</style>
