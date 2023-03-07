<script>
  export let props;
</script>

{#each props as props}
  <div class="flex flex-col gap-4 my-10">
    <img class="self-center w-10 h-10" src={props.icon} alt="icons" />
    <div class="text-2xl font-bold">{props.title}</div>
    <div class=" text-xl">
      {props.content}
    </div>
  </div>
{/each}

<style>
</style>
