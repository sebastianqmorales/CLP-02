<script>
  export let props;
</script>

<div class="item_container flex flex-col">
  <!-- <img class="icon" src={props.icon} alt="icons" /> -->
  <div class="title">{props.title}</div>
  <div class="content">
    {props.content}
  </div>
</div>
