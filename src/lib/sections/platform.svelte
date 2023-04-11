<script>
  import MockupCards from "../components/mockupCards.svelte";
  import MicrotransactionsMockup from "$lib/assets/MicrotransactionsMockup.svg";
  import FeedEditorMockup from "$lib/assets/FeedEditorMockup.svg";
  import CensorshipMockup from "$lib/assets/CensorshipMockup.svg";
  import CommentCardMockup from "$lib/assets/CommentCardMockup.svg";
  import Icon1 from "$lib/assets/VotingIcon.svg";
  import Icon2 from "$lib/assets/MicroTransactionsIcon.svg";
  import Icon3 from "$lib/assets/AlgorithmIcon.svg";

  let props = [
    {
      topIcon: Icon1,
      icon: CommentCardMockup,
      title: "User-powered moderation",
      content:
        "Completely control the platform with voting, censoring and content tagging. ",
      iconDescription: [
        "Always see the opposing perpsective.",
        "Censor inappropriate content and get paid for it.",
        "Vote on important platform decisions.",
      ],
    },
    {
      topIcon: Icon2,
      icon: MicrotransactionsMockup,
      title: "Support content with microtransactions",
      content:
        "Avoid ads altogether by supporting your favorite creators. Earn money from your comments and data.",
      iconDescription: [
        "Microtransactions incentivizes moderation and good content.",
        "Earn money from your regular usage data.",
        "Avoid all targeted ads and own your data.",
      ],
    },
    {
      topIcon: Icon3,
      icon: FeedEditorMockup,
      title: "Control your algorithm",
      content: `Tune your algorithm with our "Feed editor". Avoid rabbit holes and distractions. Get the content you want`,
      iconDescription: [
        "Filter and drilldown on the type of content you want to see.",
        "Avoid clickbait.",
        "Hone down on your niche and own your genre.",
      ],
    },
  ];
</script>

<MockupCards {props} />
