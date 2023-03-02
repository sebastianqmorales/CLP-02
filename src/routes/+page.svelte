<script>
  import HeaderSection from "../lib/components/headerSection.svelte";
  import Features from "../lib/components/features.svelte";
</script>

<HeaderSection />
<Features />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
