<template>
    <div class="pure-menu-horizontal">
        <div class="container">
            <router-link :to="{ path: '/' }" class="pure-menu-heading pure-menu-link">Home</router-link>
            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <router-link :to="{ path: '/new' }" class="pure-menu-link">new</router-link>
                </li>
                <li class="pure-menu-item">
                    <router-link to="/sports" class="pure-menu-link">sports</router-link>
                </li>
                <li class="pure-menu-item">
                    <router-link to="/finance" class="pure-menu-link">finance</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    .pure-menu-horizontal {
        display: flex;
        background-color: #000000;
        color: #ffffff;
        padding: 1rem;
    }
    .pure-menu-heading .pure-menu-link {
        text-transform: uppercase;
    }
    .pure-menu-list {
        margin-right: auto;
    }
    .pure-menu-item {
        text-transform: capitalize;
    }
</style>