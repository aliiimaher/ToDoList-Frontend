<template>
  <Menubar :model="items" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-home",
          url: "/",
        },
        {
          label: "Events",
          icon: "pi pi-calendar",
        },
        {
          label: "About Us",
          icon: "pi pi-users",
        },
      ],
    };
  },
  beforeMount() {
    if (this.$store.state.access) {
      console.log(this.items);
      this.items.push({
        label: "Quit",
        icon: "pi pi-fw pi-power-off",
      });
    }
  },
};
</script>

<style>
.p-menubar {
  background: #413e83 !important;
  border: none !important;
}

.p-menuitem-text {
  color: #000 !important;
}

.p-menubar-root-list {
  color: red;
}
</style>
