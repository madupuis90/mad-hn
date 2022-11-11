<script lang="ts">
	import type { Story } from 'src/routes/+page';

	export let story: Story;
</script>

<div class="story">
	<div class="side-header">
    {#if story.points != null}
		<div class="points">{story.points}</div>
		<div class="upvote-arrow"></div>
    {/if}
	</div>
	<div class="content">
		<div class="top">
			<span class="title">{story.title}</span>
			<span class="url">{story.url}</span>
		</div>
		<div class="bottom">
			<span>by {story.user} {story.time_ago}</span>
			<span>|</span>
			<span>hide</span>
			<span>|</span>
			<span>{story.comments_count} comments</span>
		</div>
	</div>
</div>

<style>
	.story {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px;
		border-bottom: 1px solid var(--main-accent-color);
	}

	.side-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
		position: relative;
		min-width: 4.5em;
	}
	.points {
		font-size: 1.2em;
		font-weight: bold;
		color: var(--main-title-color);
    min-width: 2em;
	}
	.content {
		display: flex;
		flex-direction: column;
	}
	.top {
	}
	.bottom {
	}
	.upvote-arrow {
		width: 0;
		height: 0;
		border: 0.4em solid;
		border-left-color: transparent;
		border-right-color: transparent;
		border-top-color: transparent;
		transform: translateY(-50%) scaleY(2);
		color: var(--main-btn-bg-color);
	}
</style>
