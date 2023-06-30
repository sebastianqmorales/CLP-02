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
      topIcon: Icon2,
      icon: MicrotransactionsMockup,
      title: "Support content with microtransactions",
      content:
        "Avoid ads altogether by supporting your favorite creators. Earn money from your comments and data.",
      iconDescription: [
        "Price your creator content as low as half of a cent or as high as you want.",
        "Earn money from upvotes on your popular comments. You can earn as much as you get upvoted, each vote is $0.005. Ten thousand upvotes would be $50.",
        "Our pay per view and microtransaction model allows you to participate in the internet economy with no restrictions.",
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
  ];
</script>

<MockupCards {props} />
