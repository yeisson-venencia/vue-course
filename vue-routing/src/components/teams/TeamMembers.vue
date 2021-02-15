<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <button @click="goToTeamTwo" type="button">Go to team 2</button>
    <!-- <router-link to="/teams/t2">Go to team 2</router-link> -->
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: null,
      members: null,
      teamId: null
    };
  },
  methods: {
    loadMembers(teamId) {
      // this.$route.path -> /teams/{id}
      // const teamId = route.params.teamId;
      const selectedTeam = this.teams.find(team => team.id == teamId);
      this.members = this.users.filter(user =>
        selectedTeam.members.includes(user.id)
      );
      this.teamName = selectedTeam.name;
      this.teamId = teamId;
    },
    goToTeamTwo() {
      this.teamId = 't2';
    }
  },
  created() {
    const teamId = this.$route.params.teamId;
    this.loadMembers(teamId);
  },
  watch: {
    teamId(newTeamId) {
      this.loadMembers(newTeamId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
