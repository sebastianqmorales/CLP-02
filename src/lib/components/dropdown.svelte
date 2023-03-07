<script>
  export let props;
</script>

{#each props as props}
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <!-- <div
    tabindex="0"
    class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
  >
    <div class="collapse-title text-xl font-medium">{props.question}</div>
    <div class="collapse-content">
      <p>{props.answer}</p>
    </div>
  </div> -->
  <div
    class="collapse collapse-plus border-b-2 border-solid border-grey max-w-[850px]"
  >
    <input type="checkbox" />
    <div class="collapse-title text-xl text-left font-medium">
      {props.question}
    </div>
    <div class="text-[#475467] collapse-content text-lg text-left">
      <p>{props.answer}</p>
    </div>
  </div>
{/each}
