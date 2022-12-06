<template>
  <!-- <navbar /> -->
  <Menubar :model="items" />

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "File",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-plus",
              items: [
                {
                  label: "Bookmark",
                  icon: "pi pi-fw pi-bookmark",
                },
                {
                  label: "Video",
                  icon: "pi pi-fw pi-video",
                },
              ],
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-trash",
            },
            {
              separator: true,
            },
            {
              label: "Export",
              icon: "pi pi-fw pi-external-link",
            },
          ],
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Left",
              icon: "pi pi-fw pi-align-left",
            },
            {
              label: "Right",
              icon: "pi pi-fw pi-align-right",
            },
            {
              label: "Center",
              icon: "pi pi-fw pi-align-center",
            },
            {
              label: "Justify",
              icon: "pi pi-fw pi-align-justify",
            },
          ],
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
          label: "Quit",
          icon: "pi pi-fw pi-power-off",
        },
      ],
    };
  },
  name: "App",
  components: {},
};
</script>

<style>
body {
  background: linear-gradient(180deg, #171b28 0%, #141e39 49%, #401766 100%);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
}
.p-menubar {
  background: #413e83 !important;
  border: none !important;
}

/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
