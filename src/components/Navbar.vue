<template>
  <div class="menubar-container">
    <Menubar :model="items">
      <template #start>
        <img
          alt="logo"
          src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          height="40"
          class="mr-2"
        />
        <!-- hello -->
        <span>hello</span>
      </template>
      <!-- <template #end> -->
      <!-- <InputText placeholder="Search" type="text" /> -->
      <!-- </template> -->
    </Menubar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Home",
        //   style: "p-menubar-root-list",
          //   icon: "pi pi-fw pi-file",
        },
        {
          label: "Users",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-user-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-user-minus",
            },
            {
              label: "Search",
              icon: "pi pi-fw pi-users",
              items: [
                {
                  label: "Filter",
                  icon: "pi pi-fw pi-filter",
                  items: [
                    {
                      label: "Print",
                      icon: "pi pi-fw pi-print",
                    },
                  ],
                },
                {
                  icon: "pi pi-fw pi-bars",
                  label: "List",
                },
              ],
            },
          ],
        },
        {
          label: "Events",
          icon: "pi pi-fw pi-calendar",
          items: [
            {
              label: "Edit",
              icon: "pi pi-fw pi-pencil",
              items: [
                {
                  label: "Save",
                  icon: "pi pi-fw pi-calendar-plus",
                },
                {
                  label: "Delete",
                  icon: "pi pi-fw pi-calendar-minus",
                },
              ],
            },
            {
              label: "Archieve",
              icon: "pi pi-fw pi-calendar-times",
              items: [
                {
                  label: "Remove",
                  icon: "pi pi-fw pi-calendar-minus",
                },
              ],
            },
          ],
        },
        {
          label: "Sign Up",
          //   icon: "pi pi-fw pi-power-off",
        },
      ],
      functionItems: [
        {
          label: "hello",
        },
      ],
    };
  },
};
</script>

<style scoped>
.menubar-container {
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 0;
  /* margin: 0 0; */
}
/* try */
.p-menubar-root-list {
    color: rgb(255, 1, 1) !important;
}

.p-submenu-list {
    color: rgb(255, 1, 1) !important;
}

.p-menuitem {
    color: red !important;
}

.p-menuitem-text {
    color: red !important;
}

.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-text {
    color: brown !important;
}
/* try end */
.p-menubar {
  /* background-color: #413e83; */
  color: blue;
  border: none;
  padding: 0 0;
  padding-right: 0;
  padding-left: 0;
  height: 80px;
  border-radius: 0;
}
</style>
