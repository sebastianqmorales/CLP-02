<script>
  import LinkedInIcon from "$lib/assets/LinkedInIcon.svg";
  import CardModal from "../../lib/components/cardModal.svelte";

  let props = [
    {
      jobTitle: "Fullstack Software Engineer",
      description:
        "We're Cuatex, a content platform that gives users complete control over algorithms, monetization, and moderation. We're currently looking for a few outstanding individuals to join our team and help us revolutionize the way we interact with the online world.",
      jobWork: [
        "Make important engineering decisions that have a long-lasting impact. ",
        "Building an entire app architecture from scratch with the co-founders.",
        "Build reusable database wrappers for interacting with data in JavaScript. ",
        "Create UI for rendering the data in Svelte.",
        "If you can, help develop microtransaction technology with Interledger Protocol",
        "Develop data marketplace and data dignity",
        "Have input on application UI",
      ],
      jobSkills: [
        "Understanding how DB communicates with frontend.",
        "Knowledge of databases, intermediate understanding of SQL, NoSQL, different use cases, databases (querying, schemas, etc.)",
        "Developing Restful APIs.",
        "In depth knowledge of JavaScript, CSS and HTML.",
        "Frontend-frameworks (Svelte.js is preferred, but React, Angular, or Vue are also good).",
        "NPM + Node (Express.js is a plus).",
        "Software architecture, Git, GitHub, follow established code standards, able to read documentation.",
      ],
      info: [
        "Job is part time remote, very flexible in both hours and what you are working on. Please apply regardless of your skill level.",
      ],
      applicationLink: "https://forms.office.com/r/8RCCZr588j",
    },
    {
      jobTitle: "Marketing Specialist",
      description:
        "We're Cuatex, a content platform that gives users complete control over algorithms, monetization, and moderation. We're currently looking for a few outstanding individuals to join our team and help us revolutionize the way we interact with the online world.",
      jobWork: [
        "Help spread awareness about the problems that Cuatex is trying to solve.",
        "Identify content creators and viewers who can most benefit from Cuatex’s value prop.",
        "Write marketing messages to post in the comments of content creators’ posts.",
        "Write posts about the problems that our platform solves.",
        "Revise and expand the landing page to properly communicate the problems we’re trying to solve and Cuatex’s value prop.",
        "Help develop the marketing strategy for MVP rollout.",
      ],
      jobSkills: [
        "General marketing and communication skills.",
        "Strong writing skills and attention to detail.",
        "Comprehension of the social media platform landscape and the problems and customer pain points with current platforms (ads, black-box algorithms, demonetization, etc.).",
        "Creative and innovative.",
        "High emotional intelligence, ability to understand and empathize with potential customers.",
      ],
      info: [
        "Job is part time remote, very flexible in both hours and what you are working on. Please apply regardless of your skill level.",
      ],
      applicationLink: "https://forms.office.com/r/t0qE7MSNpG",
    },
  ];
</script>

<CardModal {props} />

<!-- <div class="hero min-h-screen bg-base-100 py-0 lg:py-10">
  <div class="hero-content text-center flex flex-col gap-12">
    <div class="max-w-6xl">
      <h1 class="text-6xl font-bold">Careers page coming soon</h1>
      <p class="pb-6 pt-3 text-2xl flex">
        In the mean time <a
          class="linkedin-link"
          href="https://www.linkedin.com/company/cuatex"
        >
          follow us on LinkedIn
          <img src={LinkedInIcon} alt="linked in icon" />
        </a>
        or feel free to leave us some feedback.
      </p>
      <form
        class="flex flex-col gap-5"
        name="email"
        method="POST"
        netlify-honeypot="nbot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="email" />
        <input
          name="name"
          id="name"
          class="input input-bordered w-full mt-10"
          type="text"
          placeholder="Name"
        />
        <input
          name="email"
          id="email"
          class="input input-bordered w-full"
          type="text"
          placeholder="example@gmail.com"
        />
        <textarea
          name="details"
          id="details"
          rows="5"
          class="textarea textarea-bordered w-full"
          type="text"
          placeholder="Any feedback would be greatly appreciated."
        />
        <input
          for="my-modal"
          type="submit"
          class="btn btn-primary text-white w-[50%] self-center"
          value="Submit"
        />
      </form>
    </div>
  </div>
</div> -->

<style>
  .linkedin-link {
    display: flex;
    gap: 13px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .linkedin-link:hover {
    text-decoration: underline;
    text-decoration-color: #fe7b43;
  }
</style>
