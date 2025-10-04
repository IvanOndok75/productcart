<template>
<div>
<nav>
<router-link to="/admin/products">Home</router-link>
<router-link to="/admin/reviews">Rewiews</router-link>
</nav>

<main>
<router-view/>
</main>
</div>
</template>

<script>
export default{
    name:'AdminDashboard',
};
</script>
