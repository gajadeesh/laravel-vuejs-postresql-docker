<template>
  <div>
    <btn styleClass="btn btn-success" @clicked="$router.push({name:
    pathName})" :label="title" />
    <br />
    <div v-if="loading">
      <h2>Loading!...</h2>
    </div>
    <table v-else border="1" id="user-table">
      <thead  >
        <tr>
          <th v-for="(header, index) in headers" :key="index" :width="header.width" :class="header.class">{{header.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="list in lists" :key="list.id">
          <td id="name">
           <h2 class="p-l-4">{{ list[headers[0].key] }}</h2> 
          </td>
          <td v-if="headers.find(r => r.title === 'Actions')" >
             <btn v-if="list.hasOwnProperty('course') ? list.course.length == 0:false" styleClass="btn btn-info" @clicked="$router.push({ name:
            'AssignUser', params:{ id: list.id }})" label="Assign" />
             <btn v-else styleClass="btn btn-success" @clicked="$router.push({ name:
            'ResultUser', params:{ id: list.id }})" label="Result" />
            <btn styleClass="btn btn-warning" @clicked="$router.push({ name:
            'UpdateUser', params:{ id: list.id }})" label="Edit" />
            <btn
              styleClass="btn btn-danger"
              @clicked="ClieckedDelete(list.id)"
              label="Delete"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import btn from "../elements/btn.vue";
export default {
  components: { btn },
  props: ["lists", "headers",'title', "pathName", "loading"],
  methods: {
    ...mapActions("users", ["deleteUser"]),
    ClieckedDelete(id) {
      if (confirm("Are you sure you wanna Delete this user") == true) {
        this.deleteUser(id);
      }
    },
  },
};
</script>

<style>
#user-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#user-table td,
#user-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#user-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

#user-table tr:hover {
  background-color: #ddd;
}

#user-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: skyblue;
  color: white;
}
</style>
