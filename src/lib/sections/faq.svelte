<script>
  import Dropdown from "../components/dropdown.svelte";

  let props = [
    {
      question: "How do I sell my data?",
      answer: `We offer a Data Union program that allows you to opt-in to selling your data. You can choose what data you want to sell, and of course we do not sell anything identifyable or any credenitals you upload`,
    },
    {
      question:
        "Why should I pay for content if I can get it for free elsewhere?",
      answer:
        "When you pay for content you enable us to remove all ads and not sell your data. Other platforms sell your data and use it to manipulate you. Most content on Cuatex is very cheap and the average monthly cost of watching many videos would be less than other subscription services. ",
    },
    {
      question: "How do the microtransactions work?",
      answer:
        "We allow you to sell your content as low as 1 cent per view. You can also make money from comments that you post, upvotes on all comments and content is half a cent. You get money on the platform via debit or credit cards. And no we do not use cryptocurrency.",
    },
    {
      question: "How does the algorithm work?",
      answer: `We allow you to create your algrithm with our Feed Editor, we do not force you content rather allow you to curate your custom algorithm. We do this by giving you access to all the data points that create an algorithm.`,
    },
    {
      question: "Is there a free trial?",
      answer:
        "If you sign up for our Beta release, you will recieve fake money to try the product before everyone else.",
    },
    {
      question: "Is there a creator discount?",
      answer:
        "If you are a content creator that signs up for our Beta release, you will recieve a larger revenue split, when you onboard your audience onto our platform your split will get higher. Sign up today for this early adopter offer.",
    },
  ];
</script>

<div class="hero min-h-screen bg-base-100">
  <div class="hero-content text-center">
    <div class="flex flex-col gap-6 items-center">
      <h1 class="text-5xl font-bold">Frequently asked questions</h1>
      <p class="text-[#475467] py-6 text-xl">
        Everything you need to get started today.
      </p>
      <Dropdown {props} />
    </div>
  </div>
</div>
