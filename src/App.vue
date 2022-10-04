<template>
  <div class="border rounded shadow bg-gray-100 my-8 mx-16 py-6">
    <nav class="flex justify-center">
      <div class="bg-indigo-300 border py-2 px-6 rounded mb-8">
        <router-link to="/users">User List</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

