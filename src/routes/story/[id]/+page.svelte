<script lang="ts">
	import type { Comment } from 'src/models/comment';
	import type { PageData } from './$types';



  export let data: PageData;

  const item = data.item;
  const comments: Comment[] = item.comments;
</script>

<div class="component">
  <div class="header">
    <div class="title">
      <h1>{item.title}</h1>
      <span>({item.domain})</span>
    </div>
    <div class="sub-title">
      <span>{item.points} points | by {item.user} {item.time_ago}</span>
    </div>
  </div>
  <br>
  <div class="content">
    <div>
      {item.comments_count} Comments
    </div>
    <br>
    {#each comments as comment}
      <div>
        {comment.user}&nbsp;{comment.time_ago}
      </div>
      <div>
        {@html comment.content}
      </div>
    {/each}
  </div>

  
</div>


<style>
  .component {
    margin: 1em;
  }
  .header {
    display: flex;
    flex-direction: column;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 0 2em;
  }
</style>