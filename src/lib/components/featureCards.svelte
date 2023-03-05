<script>
  export let props;
</script>

{#each props as props}
  <div class="item_container flex flex-col gap-4 my-10">
    <img class="icon px-40" src={props.icon} alt="icons" />
    <div class="title text-2xl font-bold">{props.title}</div>
    <div class="content text-xl">
      {props.content}
    </div>
  </div>
{/each}

<style>
</style>
