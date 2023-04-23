<script>
  import ContentIcon from "$lib/assets/ContentTagsIcon.svg";
  import VotingIcon from "$lib/assets/VotingIcon.svg";
  import DataIcon from "$lib/assets/DataDignityIcon.svg";
  import TransactionsIcon from "$lib/assets/MicroTransactionsIcon.svg";
  import AlgorithmIcon from "$lib/assets/AlgorithmIcon.svg";
  import VerificationIcon from "$lib/assets/VerificationIcon.svg";

  import FeatureCards from "../components/featureCards.svelte";

  let props = [
    {
      icon: ContentIcon,
      title: "Content Tags",
      content:
        "Understand everyone's perspective quickly, escape echo chambers and understand all sides.",
    },
    {
      icon: VotingIcon,
      title: "Voting",
      content:
        "Interact and vote on content. Never be blindsided by hidden dislikes or ratioed upvotes.",
    },
    {
      icon: DataIcon,
      title: "Data Dignity",
      content:
        "Own your data and opt-into our data union program to earn money from your usage of the platform.",
    },
    {
      icon: TransactionsIcon,
      title: "Microtransactions",
      content:
        "No ads ever! Earn money from sharing your perspective via comments, data, posts, feeds and more.",
    },
    {
      icon: AlgorithmIcon,
      title: "Algorithm Control",
      content:
        "Use the “Feed Editor” to control the content you see, avoid clickbait and platform bias.",
    },
    {
      icon: VerificationIcon,
      title: "Human Verification",
      content:
        "Your credentials incentivize productive and fun discussions. Verification is not for sale.",
    },
  ];
</script>

<div class="hero min-h-screen bg-base-100 py-10">
  <div class="hero-content text-center flex flex-col gap-12">
    <div class="max-w-6xl">
      <p class="text-xl font-bold text-orange-500">Features</p>
      <h1 class="text-4xl md:text-6xl font-bold">A people-first experience.</h1>
      <p class="text-[#475467] py-6 text-2xl">
        Tools that allow you to easily own your social media experience.
      </p>
    </div>

    <div class="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-10">
      <FeatureCards {props} />
    </div>
  </div>
</div>
