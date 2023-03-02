<script>
  import ContentIcon from "$lib/assets/ContentTagsIcon.svg";
  import VotingIcon from "$lib/assets/VotingIcon.svg";

  import FeatureCards from "../components/featureCards.svelte";
</script>

<div class="hero min-h-screen bg-base-200 py-10">
  <div class="hero-content text-center flex flex-col gap-12">
    <div class="max-w-6xl">
      <p class="text-xl font-bold text-orange-500">Features</p>
      <h1 class="text-6xl font-bold">A people-first experience.</h1>
      <p class="py-6 text-2xl">
        Tools that allow you to easily own your social media experience.
      </p>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <div class="item_container flex flex-col">
        <img class="icon" src={ContentIcon} alt="icons" />
        <div class="title">Data Dignity</div>
        <div class="content">
          Own your data and opt-into our data union program to earn money from
          your usage of the platform.
        </div>
      </div>
      <div class="item_container flex flex-col">
        <img class="icon" src={ContentIcon} alt="icons" />
        <div class="title">Data Dignity</div>
        <div class="content">
          Own your data and opt-into our data union program to earn money from
          your usage of the platform.
        </div>
      </div>
      <div class="item_container flex flex-col">
        <img class="icon" src={ContentIcon} alt="icons" />
        <div class="title">Data Dignity</div>
        <div class="content">
          Own your data and opt-into our data union program to earn money from
          your usage of the platform.
        </div>
      </div>
      <div class="item_container flex flex-col">
        <img class="icon" src={ContentIcon} alt="icons" />
        <div class="title">Microtransactions</div>
        <div class="content">
          No ads ever! Earn money from sharing your perspective via comments,
          data, posts, feeds and more.
        </div>
      </div>
      <div class="item_container flex flex-col">
        <img class="icon" src={ContentIcon} alt="icons" />
        <div class="title">Algorithm Control</div>
        <div class="content">
          Use the “Feed Editor” to reveal the hidden influences, agencies and
          governments behind the news.
        </div>
      </div>
      <div class="item_container flex flex-col">
        <img class="icon" src={ContentIcon} alt="icons" />
        <div class="title">Human Verification</div>
        <div class="content">
          Your credentials incentivize productive and fun discussions.
          Verification is not for sale.
        </div>
      </div>
    </div>
  </div>
</div>
