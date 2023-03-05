<script>
  import MockupCards from "../components/mockupCards.svelte";
  import MicrotransactionsMockup from "$lib/assets/MicrotransactionsMockup.svg";
  import FeedEditorMockup from "$lib/assets/FeedEditorMockup.svg";
  import CensorshipMockup from "$lib/assets/CensorshipMockup.svg";

  let props = [
    {
      icon: CensorshipMockup,
      title: "User-powered moderation",
      content:
        "Completely control the platform with voting, censoring and content tagging. ",
    },
    {
      icon: MicrotransactionsMockup,
      title: "Support content with microtransactions",
      content:
        "Avoid ads altogether by supporting your favorite creators. Earn money from your comments and data.",
    },
    {
      icon: FeedEditorMockup,
      title: "Control your algorithm",
      content: `Tune your algorithm with our "Feed editor". Avoid rabbit holes and distractions. Get the content you want`,
    },
  ];
</script>

<MockupCards {props} />
