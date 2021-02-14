<template>
  <ul>
    <li><button type="button">Poor</button></li>
    <li><button type="button">Average</button></li>
    <li><button type="button">Great</button></li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
