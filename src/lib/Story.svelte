<script lang="ts">
	import type { Story } from 'src/models/story';

	export let story: Story;
</script>

<div class="story">
	<div class="side-header">
		{#if story.points}
			<div class="points">{story.points}</div>
		{/if}
	</div>
	<div class="content">
		<div class="top">
			<a href={story.url}>{story.title}</a>
			{#if story.domain}
				<span>({story.domain})</span>
			{/if}
		</div>
		<div class="bottom">
			<span>by</span>
			<a class="sub-link" href="/user/{story.user}">{story.user}</a>
			<span> {story.time_ago}</span>
			<span>|</span>
			<span>hide</span>
			<span>|</span>
			<a class="sub-link" href="https://news.ycombinator.com/item?id={story.id}"
				>{story.comments_count} comments</a
			>
		</div>
	</div>
</div>

<style>
	.story {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px 10px 10px 0;
		border-bottom: 1px solid var(--main-accent-color);
	}

	.side-header {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: relative;
		min-width: 4em;
	}
	.points {
		font-size: 1.2em;
		font-weight: bold;
		color: var(--main-title-color);
	}
	.content {
		display: flex;
		flex-direction: column;
	}

	.sub-link,
	.sub-link:visited {
		color: var(----main-secondary-bg-color);
		text-decoration: underline;
	}
</style>
